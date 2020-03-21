import * as fs from 'fs-extra';

let _package;

export function getPackage() {
    if (!_package) {
        _package = fs.readJsonSync('package.json');
    }
    return _package;
}