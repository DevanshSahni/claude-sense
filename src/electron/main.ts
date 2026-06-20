import { BrowserWindow, app, ipcMain } from "electron";
import path from "path";
import { isDev } from "./utils.js";
import { getPreloadPath } from "./pathResolver.js";
import { getSystemData } from "./resourceManager.js";

function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  ipcMain.handle("getSystemData", () => {
    return getSystemData();
  });
}

app.on("ready", createWindow);
