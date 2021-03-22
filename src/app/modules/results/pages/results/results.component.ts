import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AddedAirplanesService} from '../../../../core/services/added-airplanes.service';
import {Observable, Subject} from 'rxjs';
import {AddedAirplaneType} from '../../../../core/types/added-airplane.type';
import {ModuleType, ResourceType} from '../../../../core/types/resource.type';
import {ResourceNameEnum} from '../../../../core/enums/resource-name.enum';
import {LOADING_RATES} from '../../../../core/constants/results.constants';
import {LoadingRatesType} from '../../../../core/types/loading-rates.type';
import * as Highcharts from 'highcharts';
import {MilitarySuppliesType} from '../../../../core/types/military-supplies.type';
import {MILITARY_SUPPLIES} from '../../../../core/constants/military-supplies.constant';
import {takeUntil} from 'rxjs/operators';

export type ChartType = {
  resourceName: string;
  data: Array<{
    type: string,
    weight: string;
    capacity: string;
  }>;
};

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit, OnDestroy {

  Highcharts: typeof Highcharts = Highcharts;
  addedAirplanes: Array<AddedAirplaneType> = [];
  selectedAirplane: AddedAirplaneType = null;
  parsedModulesData: Array<ResourceType> = [];
  chartsData: Array<any> = [];
  private _ngUnsubscribe = new Subject();

  constructor(private addedAirplanesService: AddedAirplanesService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.addedAirplanesService.addedAirplanes$
      .pipe(
        takeUntil(this._ngUnsubscribe),
      )
      .subscribe(response => {
        this.addedAirplanes = response;
        this.parseSubscribedData(response);
        this.cdr.detectChanges();
      });
  }

  private parseSubscribedData(response: Array<AddedAirplaneType>): void {
    if (response.length) {
      this.selectedAirplane = response[0];
      this.parsedModulesData = this.parseModules(response[0]);
      this.parseCharts(this.parseModules(response[0]));
      this.cdr.detectChanges();
    }
  }

  selectGroupingType(): void {
    this.selectedAirplane = {
      airplaneName: 'Угруповання', result: {
        flyingResource: this.addedAirplanes.reduce((acc, curr) => (acc + Number(curr.result.flyingResource)), 0),
      },
    };
    this.parsedModulesData = this.parseGroupingData(this.addedAirplanes);
    this.parseCharts(this.parseGroupingData(this.addedAirplanes));
    this.cdr.detectChanges();
  }

  changeAirplane(airplane: AddedAirplaneType): void {
    if (this.selectedAirplane.airplaneName !== airplane.airplaneName) {
      this.selectedAirplane = airplane;
      this.parsedModulesData = this.parseModules(airplane);
      this.parseCharts(this.parseModules(airplane));
      this.cdr.detectChanges();
    }
  }

  getResourceName(resource: string): string {
    return ResourceNameEnum[resource];
  }

  getWeight(type: string): number {
    const foundType = LOADING_RATES.find(rate => rate.type === type);
    return !!foundType ? foundType.weight / 1000 : 0;
  }

  getCapacity(type: string): number {
    const foundType = this.loadingRate.find(rate => rate.type === type);
    return !!foundType ? foundType.capacity : 0;
  }

  get loadingRate(): Array<LoadingRatesType> {
    return LOADING_RATES;
  }

  getAmmunitionRequirement(type: string, LAcount: number, coefficient: number): number {
    const foundType = this.loadingRate.find(rate => rate.type === type);
    const count = !!foundType ? foundType.count : 1;
    return LAcount * count * coefficient;
  }

  getEstimatedNeed(module: ModuleType, resource: number, coefficient: number): string {
    return (module.value / (this.getAmmunitionRequirement(module.type, resource, coefficient) / coefficient)).toFixed(1) || '0';
  }

  getNeedToGiveRide(module: ModuleType, resource: number, coefficient: number): string {
    const ammunitionRequirement = this.getAmmunitionRequirement(module.type, resource, coefficient);
    const calculation = (module.value - ammunitionRequirement) + (ammunitionRequirement * 0.7);
    return calculation < 0 ? '0' : calculation.toFixed(1);
  }

  getTypeRequirementsWeight(module: ModuleType, resource: number, divide: number, coefficient: number): string {
    const foundType = this.loadingRate.find(rate => rate.type === module.type);
    return !!foundType ? (((foundType.weight / 1000) * Number(this.getNeedToGiveRide(module, resource, coefficient))) / divide).toFixed(1) : '0';
  }

  getTypeRequirementsCapacity(module: ModuleType, resource: number, divide: number, coefficient: number): string {
    const foundType = this.loadingRate.find(rate => rate.type === module.type);
    return !!foundType ? ((foundType.capacity * Number(this.getNeedToGiveRide(module, resource, coefficient))) / divide).toFixed(1) : '0';
  }

  parseModules(data: any): Array<ResourceType> {
    const result = [];
    Object.keys(data.result).forEach((resourceKey) => {
      const modules = [];
      if (resourceKey !== 'firstFlying' && resourceKey !== 'flyingResource') {
        Object.keys(data.result[resourceKey]).forEach((moduleKey) => {
          if (moduleKey !== 'firstFlying' && moduleKey !== 'flyingResource') {
            data.result[resourceKey][moduleKey].coefficient = this.getAmmunitionRequirementCoefficient(data.result[resourceKey][moduleKey].type, data.airplaneName);
            modules.push(data.result[resourceKey][moduleKey]);
          }
        });
        const resource = {
          airplaneName: data.airplaneName,
          resourceType: this.getResourceName(resourceKey),
          flyingResource: data.result['flyingResource'],
          firstFlying: data.result['firstFlying'],
          modules,
        };
        result.push(resource);
      }
    });
    return result;
  }

  private parseCharts(result: Array<ResourceType>): void {
    const data: Array<ChartType> = result.map((resource: ResourceType) => {
      return {
        resourceName: resource.resourceType,
        data: [{
          type: 'КАМАЗ',
          weight: this.getTotalRequirementsWeight(resource, 8),
          capacity: this.getTotalRequirementsCapacity(resource, 10),
        },
          {
            type: 'Умовний вагон',
            weight: this.getTotalRequirementsWeight(resource, 29),
            capacity: this.getTotalRequirementsCapacity(resource, 98),
          },
          {
            type: 'Іл-76',
            weight: this.getTotalRequirementsWeight(resource, 40),
            capacity: this.getTotalRequirementsCapacity(resource, 234.6),
          },
          {
            type: 'Ан-26',
            weight: this.getTotalRequirementsWeight(resource, 5.5),
            capacity: this.getTotalRequirementsCapacity(resource, 45.7),
          },
        ],
      };
    });
    this.chartsData = data.map((resource) => {
      return {
        chart: {
          type: 'column',
          height: 300,
          width: 500,
        },
        title: {
          text: resource.resourceName,
        },
        xAxis: {
          categories: ['КАМАЗ', 'Умовний вагон', 'Іл-76', 'Ан-26'],
        },
        plotOptions: {
          column: {
            colorByPoint: false,
          },
        },
        colors: [
          '#e7c65e',
          '#53c5e3',
        ],
        yAxis: {
          allowDecimals: false,
          title: {
            text: 'Кількість транспортних засобів',
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: 'по масі, т.',
            type: 'column',
            data: resource.data.map(res => Number(res.weight)),
          },
          {
            name: 'по об’єму, м.куб',
            type: 'column',
            data: resource.data.map(res => Number(res.capacity)),
          },
        ],
      };
    });
    if (!this.cdr['destroyed']) {
      this.cdr.detectChanges();
    }
  }

  get militarySupplies(): Array<MilitarySuppliesType> {
    return MILITARY_SUPPLIES;
  }

  getAmmunitionRequirementCoefficient(type: string, airplaneName: string): number {
    const foundAirplane = this.militarySupplies.find(res => res.airplaneName === airplaneName);
    const foundModule = foundAirplane.modules.find(module => module.moduleName === type);
    return !!foundModule ? foundModule.coefficient : 0;
  }

  private parseGroupingData(data: Array<AddedAirplaneType>): Array<ResourceType> {
    const groups = [];
    const parsedAirplanesModules = data.map(airplane => this.parseModules(airplane));
    const concatArrays = [].concat.apply([], parsedAirplanesModules);
    concatArrays.forEach(resource => {
      const foundResource = groups.find(source => source.resourceType === resource.resourceType);
      if (!!foundResource) {
        const resourceIndex = groups.indexOf(foundResource);
        const modules = [].concat.apply(groups[resourceIndex].modules, resource.modules);
        const groupedModules = [];
        modules.forEach(module => {
          const foundModule = groupedModules.find(moduleItem => moduleItem.type === module.type);
          if (!!foundModule) {
            const moduleIndex = groupedModules.indexOf(foundModule);
            groupedModules[moduleIndex] = {
              type: groupedModules[moduleIndex].type,
              value: groupedModules[moduleIndex].value + module.value,
              count: groupedModules[moduleIndex].count + module.count,
              coefficient: groupedModules[moduleIndex].coefficient + module.coefficient,
            };
          } else {
            groupedModules.push({
              type: module.type,
              value: module.value,
              count: module.count,
              coefficient: module.coefficient,
            });
          }
        });
        groups[resourceIndex] = {
          airplaneName: 'Угруповання',
          resourceType: groups[resourceIndex].resourceType,
          flyingResource: groups[resourceIndex].flyingResource + resource.flyingResource,
          firstFlying: groups[resourceIndex].firstFlying + resource.firstFlying,
          modules: groupedModules,
        };
      } else {
        groups.push({
          airplaneName: 'Угруповання',
          resourceType: resource.resourceType,
          flyingResource: resource.flyingResource,
          firstFlying: resource.firstFlying,
          modules: resource.modules,
        });
      }
    });
    return groups;
  }

  getTotalRequirementsWeight(resource: ResourceType, divide: number): string {
    return resource.modules
      .reduce((acc, curr) => acc + Number(this.getTypeRequirementsWeight(curr, resource.flyingResource, divide, curr.coefficient)), 0).toFixed(1);
  }

  getTotalRequirementsCapacity(resource: ResourceType, divide: number): string {
    return resource.modules
      .reduce((acc, curr) => acc + Number(this.getTypeRequirementsCapacity(curr, resource.flyingResource, divide, curr.coefficient)), 0).toFixed(1);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
