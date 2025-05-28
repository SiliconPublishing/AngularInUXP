# Angular In UXP

This repo contains a working example of running Angular in UXP.

## Important Information

This branch contains everything needed to demonstrate separation of component libraries from source application

The most important files to take a look at are 
- [example-application](projects/example-application/) to see new organization of application
- [example-library](projects/example-library/) to see new organization of component library

Also, you can note that `index-html-transformer.cjs` and `load.js` got moved into our "library", as this is code that would be required
in any Angular project. Also, we now have an included `global.css` that is used to store variables that should be shared across applications.

In this example, you would want to maintain the folder `projects/example-library` as its own git repository, potentially adding an install
script that automatically pulls this repository on `npm install` instead of including it in the project by default.

## Getting started

### Pre-requisites

- node v20.18.0; if you don't already, use nvm ( [MAC](https://github.com/nvm-sh/nvm) | [Windows](https://github.com/coreybutler/nvm-windows) )
- [UXP Developer Tool (UDT)](https://developer.adobe.com/photoshop/uxp/2022/guides/devtool/installation/)
- [Visual Studio Code](https://code.visualstudio.com/Download)

### Install dependencies

To install the node modules and pull the git children repositories, run the following:

```sh
npm install
```

### Building

To build for production, run the following:

```sh
npm run build
```

### Watching

To build for development and rebuild on changes, run the following:

```sh
npm run watch
```

### Running Plugin

1. Open the Adobe UXP Developer Tools app
2. Click 'Add Plugin'
3. Navigate to your project folder, then select `dist/manifest.json`. It is import you select the one under the dist folder.
4. Select 'Load' or 'Load & Watch' (you'll want to select 'Load & Watch' if you are running `npm run watch`)

## Authors

- **Jeremiah Lynn** ( [github](https://github.com/jeremiahlynn) )
