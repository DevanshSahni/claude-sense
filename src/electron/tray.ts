import { BrowserWindow, app, Menu, nativeImage, Tray } from "electron";
import { getIconPath } from "./pathResolver.js";
import path from "path";

export function createTray(mainWindow: BrowserWindow) {
  const tray = new Tray(
    nativeImage.createFromPath(
      path.join(
        getIconPath(),
        process.platform === "darwin" ? "iconTemplate.png" : "icon.png",
      ),
    ),
  );

  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: "Open Claude Bar",
        click: () => {
          mainWindow.show();
          if (app.dock) app.dock.show();
        },
      },
      {
        label: "Quit",
        click: () => app.quit(),
      },
    ]),
  );
}
