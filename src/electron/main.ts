import { BrowserWindow, app } from "electron";
import { ipcHandle, isDev } from "./utils.js";
import { getPreloadPath, getUIPath } from "./pathResolver.js";
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
    mainWindow.loadFile(getUIPath());
  }

  ipcHandle("getSystemData", () => {
    return getSystemData();
  });
}

app.on("ready", createWindow);
