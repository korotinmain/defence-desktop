import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AddedAirplanesService} from '../../../../core/services/added-airplanes.service';
import {Observable} from 'rxjs';
import {AddedAirplaneType} from '../../../../core/types/added-airplane.type';
import {ModuleType, ResourceType} from '../../../../core/types/resource.type';
import {ResourceNameEnum} from '../../../../core/enums/resource-name.enum';
import {LOADING_RATES} from './results.constants';
import {LoadingRatesType} from '../../../../core/types/loading-rates.type';
import * as Highcharts from 'highcharts';

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
export class ResultsComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  addedAirplanes$: Observable<Array<AddedAirplaneType>>;
  selectedAirplane: any = null;
  parsedModulesData: Array<ResourceType> = [];
  chartsData: Array<any> = [];

  constructor(private addedAirplanesService: AddedAirplanesService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.addedAirplanesService.addedAirplanes$
      .subscribe(response => {
        console.log(response);
        if (response.length) {
          this.selectedAirplane = response[0];
          this.parseModules(response[0]);
          this.cdr.detectChanges();
        }
      });
    const data = {
      airplaneName: 'Су-27',
      result: {
        airAir: {
          control_0: {type: 'P-27T', value: 5421, count: 3},
          control_1: {type: 'P-27P', value: 274, count: 4},
          control_2: {type: 'P-27EP', value: 343, count: 5},
        },
        airGround: {
          control_0: {type: 'P-27T', value: 5421, count: 3},
          control_1: {type: 'P-27P', value: 274, count: 4},
          control_2: {type: 'P-27EP', value: 343, count: 5},
        },
        adjustedAviationBombs: {
          control_0: {type: 'P-27T', value: 5421, count: 3},
          control_1: {type: 'P-27P', value: 274, count: 4},
          control_2: {type: 'P-27EP', value: 343, count: 5},
        },
        uncorrectedAviationRockets: {
          control_0: {type: 'P-27T', value: 5421, count: 3},
          control_1: {type: 'P-27P', value: 274, count: 4},
          control_2: {type: 'P-27EP', value: 343, count: 5},
        },
        firstFlying: 12,
        flyingResource: 24,
      },
    };
    this.selectedAirplane = data;
    this.parseModules(data);
  }

  getResourceName(resource: string): string {
    return ResourceNameEnum[resource];
  }

  getWeight(type: string): number {
    const foundType = LOADING_RATES.find(rate => rate.type === type);
    return foundType ? foundType.weight / 1000 : 0;
  }

  getCapacity(type: string): number {
    const foundType = this.loadingRate.find(rate => rate.type === type);
    return foundType ? foundType.capacity : 0;
  }

  get loadingRate(): Array<LoadingRatesType> {
    return LOADING_RATES;
  }

  getRate(type: string): LoadingRatesType {
    return this.loadingRate.find(rate => rate.type === type);
  }

  getAmmunitionRequirement(type: string, LAcount: number): number {
    const foundType = this.loadingRate.find(rate => rate.type === type);
    return LAcount * foundType.count * foundType.ammunitionRequirement;
  }

  getEstimatedNeed(module: ModuleType, resource: number): string {
    const foundType = this.loadingRate.find(rate => rate.type === module.type);
    return (module.value / (this.getAmmunitionRequirement(module.type, resource) / foundType.ammunitionRequirement)).toFixed(1) || '0';
  }

  getNeedToGiveRide(module: ModuleType, resource: number): string {
    const ammunitionRequirement = this.getAmmunitionRequirement(module.type, resource);
    const calculation = (module.value - ammunitionRequirement) + (ammunitionRequirement * 0.7);
    return calculation < 0 ? '0' : calculation.toFixed(1);
  }

  getTypeRequirementsWeight(module: ModuleType, resource: number, divide: number): string {
    const foundType = this.loadingRate.find(rate => rate.type === module.type);
    return (((foundType.weight / 1000) * Number(this.getNeedToGiveRide(module, resource))) / divide).toFixed(1);
  }

  getTypeRequirementsCapacity(module: ModuleType, resource: number, divide: number): string {
    const foundType = this.loadingRate.find(rate => rate.type === module.type);
    return ((foundType.capacity * Number(this.getNeedToGiveRide(module, resource))) / divide).toFixed(1);
  }

  parseModules(data: any): void {
    const result = [];
    Object.keys(data.result).forEach((resourceKey) => {
      const modules = [];
      if (resourceKey !== 'firstFlying' && resourceKey !== 'flyingResource') {
        Object.keys(data.result[resourceKey]).forEach((moduleKey) => {
          if (moduleKey !== 'firstFlying' && moduleKey !== 'flyingResource') {
            modules.push(data.result[resourceKey][moduleKey]);
          }
        });
        const resource = {
          resourceType: this.getResourceName(resourceKey),
          flyingResource: data.result['flyingResource'],
          firstFlying: data.result['firstFlying'],
          modules,
        };
        result.push(resource);
      }
    });
    this.parsedModulesData = result;
    this.parseCharts(result);
    this.cdr.detectChanges();
  }

  private parseCharts(result: Array<ResourceType>): void {
    const data = result.map((resource: ResourceType) => {
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
    this.chartsData = data.map((resource, index) => {
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
        credits: {
          enabled: false,
        },
        series: [
          {
            name: 'маса',
            type: 'column',
            data: resource.data.map(res => Number(res.weight)),
          },
          {
            name: 'обьем',
            type: 'column',
            data: resource.data.map(res => Number(res.capacity)),
          },
        ],
      };
    });
    this.cdr.detectChanges();
  }

  getTotalRequirementsWeight(resource: ResourceType, divide: number): string {
    return resource.modules
      .reduce((acc, curr) => acc + Number(this.getTypeRequirementsWeight(curr, resource.flyingResource, divide)), 0).toFixed(1);
  }

  getTotalRequirementsCapacity(resource: ResourceType, divide: number): string {
    return resource.modules
      .reduce((acc, curr) => acc + Number(this.getTypeRequirementsCapacity(curr, resource.flyingResource, divide)), 0).toFixed(1);
  }
}
