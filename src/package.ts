import * as fs from 'fs-extra';
import * as path from "path";

let _package;

export function setPackage(packagePath: string) {
  const fullPath = path.resolve(process.cwd(), packagePath);
  _package = fs.readJsonSync(fullPath);
  console.log(fullPath, _package);
}

export function getPackage() {
  return _package;
}
