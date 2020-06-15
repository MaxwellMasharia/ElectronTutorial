const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;
let mainWindow;

// Listen for the app to be ready
app.on("ready", () => {
  // Create new window
  mainWindow = new BrowserWindow({});
  // Load the html file into the window
  mainWindow.loadURL(
      // file://path
    url.format({
      pathname: path.join(__dirname, "windows", "MainWindow.html"),
      protocol: "file:",
      slashes: true,
    })
  );
});
