import { BrowserWindow, app } from "electron";
import { ipcHandle, isDev } from "./utils.js";
import { getPreloadPath, getUIPath } from "./pathResolver.js";
import { getSystemData } from "./resourceManager.js";
import { createTray } from "./tray.js";

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

  createTray();

  handleCloseEvents(mainWindow);
}

function handleCloseEvents(mainWindow: BrowserWindow) {
  let willClose = false;

  mainWindow.on("close", (e) => {
    if (willClose) {
      return;
    }

    e.preventDefault();
    mainWindow.hide();
    if (app.dock) {
      app.dock.hide();
    }
  });

  app.on("before-quit", () => {
    willClose = true;
  });

  mainWindow.on("show", () => {
    willClose = false;
  });
}

app.on("ready", createWindow);
