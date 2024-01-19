// USAGE: npx zx scripts/npm/publish-package.mjs -p core-ui,config-eslint

/** @type {{ d: string; }} */
const argv = global.argv;

let pkgs = argv.p;

try {
  pkgs = JSON.parse(pkgs);
} catch {
  pkgs = pkgs.split(',');
}

const rootDir = process.cwd();

await $`git config --global user.email "gh-action-bump-version@users.noreply.github.com"`
await $`git config --global user.name "Automated Version Bump"`

for (const pkgKey of pkgs) {
  const pkg = pkgKey.trim();
  const pkgDir = `packages/${pkg}`
  
  cd(pkgDir)
  
  // git reset HEAD~1 --soft
  await $`yarn version --patch --message "${pkg} version %s [skip ci]"`
  console.info('>>npm/publish-package::', `bump ${pkg} version`); //TRACE
  
  // $`npm publish`
  
  // NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
  cd(rootDir)
}
