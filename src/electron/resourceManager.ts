import fs from "node:fs";
import os from "os";
import osUtils from "os-utils";

export function getSystemData() {
  const totalStorage = getStorageData().total;
  const cpuModel = os.cpus()[0].model;
  const totalMemoryGB = Math.floor(osUtils.totalmem() / 1024);

  return {
    totalStorage,
    cpuModel,
    totalMemoryGB,
  };
}

function getStorageData() {
  const stats = fs.statfsSync(process.platform == "win32" ? "C://" : "/");
  const total = stats.blocks * stats.bsize;
  const free = stats.bfree * stats.bsize;

  return {
    total: Math.floor(total / 1_000_000_000),
    usage: 1 - free / total,
  };
}
