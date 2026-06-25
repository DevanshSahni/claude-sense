import { app, BrowserWindow, Menu } from "electron";

export function createMenu(mainWindow: BrowserWindow) {
  Menu.setApplicationMenu(
    Menu.buildFromTemplate([
      {
        label: "App",
        type: "submenu",
        submenu: [
          {
            label: "Open Dev Tools",
            click: () => {
              if (mainWindow.webContents.isDevToolsOpened()) {
                mainWindow.webContents.closeDevTools();
              } else {
                mainWindow.webContents.openDevTools();
              }
            },
            accelerator: "Command+Option+I",
          },
          {
            type: "separator",
          },
          {
            label: "Quit Claude Bar",
            click: app.quit,
            accelerator: "Command+Q",
          },
        ],
      },
    ]),
  );
}
