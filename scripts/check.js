const pkg = require('../package.json')
const packageJson = require('package-json')
const semver = require('semver')
const version = pkg.devDependencies.tailwindcss

;(async () => {
  const res = await packageJson('tailwindcss')
  const latestVersion = res.version
  const isNeedUpgrade = semver.gt(latestVersion, version)
  console.log(isNeedUpgrade)
  //= > {name: 'ava', ...}

  // Also works with scoped packages
  // console.log(await packageJson('@sindresorhus/df'))
})()
