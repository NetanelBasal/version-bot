import * as fs from 'fs-extra';
import * as path from "path";

let _package;

export function setPackage(packagePath: string) {
  const fullPath = path.resolve(process.cwd(), packagePath || '', 'package.json');
  _package = fs.readJsonSync(fullPath);
}

export function getPackage() {
  return _package;
}
