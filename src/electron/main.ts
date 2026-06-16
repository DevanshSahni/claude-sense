import { BrowserWindow, app } from "electron";
import path from "path";

function createWindow() {
  const mainWindow = new BrowserWindow({});

  mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
}

app.on("ready", createWindow);
