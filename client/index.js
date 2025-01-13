const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 1200,
        webPreferences: {
            nodeIntegration: false, // Ensure security when using React
            preload: path.join(__dirname, 'preload.js') 
        }
    });

    // Load the built React app
    mainWindow.loadURL(`file://${path.join(__dirname, 'my-app/build/index.html')}`);

    // Prevent developer tools in production
    mainWindow.webContents.on('context-menu', (e, props) => {
        e.preventDefault(); 
    });
};

app.on('ready', createWindow);
