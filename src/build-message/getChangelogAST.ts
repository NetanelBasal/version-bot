import * as conventionalChangelog from 'conventional-changelog';
import { getPackage } from '../package';
import { getStandardVersionConfig } from '../helpers/getStandardVersionConfig';
import * as presetLoader from 'standard-version/lib/preset-loader';
import { parse as mdToAST } from '@textlint/markdown-to-ast';
import { ASTNode } from '../types';

export function getChangelogAST(): Promise<ASTNode> {
  return new Promise((resolve, reject) => {
    let markdown = '';
    const verionrc = getStandardVersionConfig();
    conventionalChangelog(
      { preset: presetLoader(verionrc), tagPrefix: 'v' },
      { version: getPackage().version },
      { merges: null }
    )
      .on('error', reject)
      .on('data', buffer => (markdown += buffer.toString()))
      .on('end', () => resolve(mdToAST(markdown)));
  });
}
