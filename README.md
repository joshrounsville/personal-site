# JoshRounsville.com v 3.0
Based on Nathan Searles [Day One Gulp Starter Kit](https://github.com/nathansearles/Day-One-Gulp-Starter-Kit)

## Installing
1. Install NodeJS by downloading it [here](http://nodejs.org/download/)

2. Install Gulp `sudo npm install -g gulp`

3. Install all the npm dependencies you need for Gulp from within your project folder. `npm install`

4. All done! You can now `gulp`.

## Usage
Use `gulp` for local development or `gulp build` for deployment to a staging or production environment.

## Bower
We're using Bower to manage vendor dependencies.

1. Find package name: http://bower.io/search/

2. Install package: bower install --save PACKAGENAME

Bower and Gulp take care of the rest. If in the rare case you need a plugin that isn't on Bower you can add it where appropriate, '/js/plugins.js' and/or within the project CSS.

## Folder structure
The development will be done in `/source/js/` and `/source/scss/` which then will be compiled/concatinated/minified into `/build/js` and `/build/css`.