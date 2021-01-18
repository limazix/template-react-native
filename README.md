# Template React Native [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### Requirements

- [NodeJS](https://nodejs.org) **(v12+)**
- [React Native](https://reactnative.dev/) **(v0.63+)**

### Documentation

The API documentation will be automatically generated on deploy stage at master merge operation by the CI tool. It uses the module [Docnator](https://www.npmjs.com/package/docnator) to convert all JSDocs from the files at src folder to Markdown and store the output into docs folder.

* [API Documantation](docs/summary.md)

## Usage

### Tests

Run tests only one time
```sh
npm run test
```

Run tests with watch function enabled
```sh
npm run tdd
```

### <a id="commits"/> Commits

This project uses the [Semantic Version](http://semver.org) pattern to generate the package release and it changelogs. To make it work properly, it implement a different flow of actions for commits.


```sh
npm run commit # start the commit pipeline
```

The commit pipeline is supported by the [Commitizen](https://github.com/commitizen/cz-cli) and [CommitLint](https://github.com/marionebl/commitlint) packages. The first one is a cli tool that guide the devloper through the commit pipeline by inquiring for what need to be done. And the second one check if the generated commit follows the [Semantic Version](http://semver.org) pattern.
