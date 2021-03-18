const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 900,
    minHeight: 900,
    minWidth: 1200,
    backgroundColor: '#09121d',
    icon: `file://${__dirname}/dist/assets/airplane.jpg`,
  });

  win.loadURL(`file://${__dirname}/dist/index.html`);
  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
