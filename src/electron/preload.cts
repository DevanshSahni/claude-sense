import electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  getTestData: () => electron.ipcRenderer.invoke("getSystemData"),
});
