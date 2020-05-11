const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win;

function createwindow(){
  win = new BrowserWindow({webPreferences: {nodeIntegration: true}, width:800, height:600, icon:__dirname+'/img/smteg_icon.png'});

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
//  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createwindow);
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
})
