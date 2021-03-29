# @transform-data/transform-react

React components and hooks for querying Transform's MQL Server

## Table of Contents

- [Documentation](#documentation)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Support + Feedback](#support--feedback)
- [Vulnerability Reporting](#vulnerability-reporting)
- [License](#license)

## Documentation

More details coming soon. Please bear with us!

## Installation

Using [npm](https://npmjs.org/)

```bash
npm install @transform/transform-react
```

Using [yarn](https://yarnpkg.com/)

```bash
yarn add @transform/transform-react
```

## Getting Started

More details coming soon. Please bear with us!

## Contributing

Warning! `yarn link` is tricky with React Hooks. Here is how you can achieve greatness!

It involves links in two different directions, so please read the following carefully:

```bash
cd YOUR_PROJECT
cd node_modules/react
yarn link
cd ../react-dom
yarn link

cd transform-react/
yarn install
yarn link react
yarn link react-dom
yarn link

cd YOUR_PROJECT
yarn link @transform-data/transform-react
```

It is generally safe to leave `transform-react` linked to your project indefinitely. Therefore, to undo this linking, you need only unlink `transform-react` in your project:

```bash
cd YOUR_PROJECT
yarn unlink @transform-data/transform-react
```

Next, it critical to remember that your project is importing compiled code in the `dist` folder, so as you make updates to the library, be sure to have a process running:

```bash
yarn run tsc --watch
```

## Support + Feedback

For support or to provide feedback, please [raise an issue on our issue tracker](https://github.com/transform-data/transform-react/issues).

## Vulnerability Reporting

Please do not report security vulnerabilities on the public GitHub issue tracker. For the time being, please reach out to folks from Transform directly.

## License

This project is licensed under the MIT license.
