// USAGE: npx zx scripts/npm/publish-packages.mjs -p "[\"config-eslint\"]"
const fs = require('fs');

/** @type {{ d: string; }} */
const argv = global.argv;

let pkgs = argv.p;

try {
  pkgs = JSON.parse(pkgs);
} catch {
  pkgs = pkgs.split(',');
}

const rootDir = process.cwd();

await $`git config --global user.email "gh-action-bump-version@users.noreply.github.com"`;
await $`git config --global user.name "Automated Version Bump"`;

const npmrc = `always-auth=true
@bx-org:registry=https://registry.npmjs.org
@testx-org:registry=https://npm.pkg.github.com
//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}
//npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}
`;

fs.writeFileSync('.npmrc', npmrc, 'utf8');

for (const pkgKey of pkgs) {
  const pkg = pkgKey.trim();
  const pkgDir = `packages/${pkg}`;

  cd(pkgDir);

  // git reset HEAD~1 --soft
  await $`yarn version --patch --no-git-tag-version --no-commit-hooks`;

  const pkgJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

  await $`git add .`;
  await $`git commit -m "${pkg} version ${pkgJson.version} [skip ci]" --no-verify`;
  console.info('>>npm/publish-package::', `bump ${pkg} version`); //TRACE

  await $`npm publish --access public`;

  cd(rootDir);
}
