import { BrowserWindow, app } from "electron";
import path from "path";
import { isDev } from "./utils.js";

function createWindow() {
  const mainWindow = new BrowserWindow({});
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
}

app.on("ready", createWindow);
