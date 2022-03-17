const pkg = require('../package.json')
const packageJson = require('package-json')
const semver = require('semver')
const version = pkg.devDependencies.tailwindcss

function getPackageVersion (args) {
  const packageNames = typeof args === 'string'
    ? args.split(' ')
    : Array.isArray(args)
      ? args
      : false

  if (!packageNames) {
    throw new Error('No valid package names provided. Only string or array!')
  }

  const result = {}

  packageNames.forEach(name => {
    try {
      result[name] = require(`${name}/package.json`).version
    } catch (e) {
      result[name] = null
    }
  })

  return result
}

module.exports = getPackageVersion

;(async () => {
  const res = await packageJson('tailwindcss')
  const latestVersion = res.version
  const isNeedUpgrade = semver.gt(latestVersion, version)
  console.log(isNeedUpgrade)
  //= > {name: 'ava', ...}

  // Also works with scoped packages
  // console.log(await packageJson('@sindresorhus/df'))
})()
