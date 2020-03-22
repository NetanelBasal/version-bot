import * as fs from 'fs-extra';
import * as path from 'path';
import { getPackage } from './getPackage';
import { ConfigOrigin } from '../types';

let config;
let origin: ConfigOrigin;

export function getStandardVersionConfig(): any;
export function getStandardVersionConfig(withOrigin: true): { config: any; origin: ConfigOrigin };
export function getStandardVersionConfig(withOrigin = false): any | { config: any; origin: ConfigOrigin } {
  if (!config) {
    const possiblePaths = ['.versionrc.json', '.versionrc.js'];
    const configFilePath = possiblePaths.find(p => fs.pathExistsSync(p));
    if (!configFilePath) {
      const packageConfig = getPackage()['standard-version'];
      if (!packageConfig) {
        config = null;
      } else {
        config = packageConfig;
        origin = 'package.json';
      }
    } else {
      const isJson = configFilePath.endsWith('json');
      origin = `.versionrc.${isJson ? 'json' : 'js'}` as ConfigOrigin;
      if (isJson) {
        config = fs.readJsonSync(configFilePath);
      } else {
        const fullPath = path.resolve(process.cwd(), configFilePath);
        config = require(fullPath);
      }
    }
  }

  return withOrigin ? { config, origin } : config;
}
