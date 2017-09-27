import { app, BrowserWindow } from 'electron';
import * as electronReload from 'electron-reload';


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: { webSecurity: false },
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

electronReload(__dirname, {
  electron: 'npm start',
});

