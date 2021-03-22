const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 600,
    minHeight: 600,
    minWidth: 1200,
    maxWidth: 1200,
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
