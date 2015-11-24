# foundation
foundation to jump start the new projects

## What is used
- npm
- gulp
- browserify module
- bower

## Dev computer preparation
- Chocolatey: `iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))`
- npm: `choco install nodejs`
- Visual Studio community edition: https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx

## Steps
- Create main directory for project - `mkdir project_name && cd project_name`
- Init new project - `npm init` 
 - change starting point to gulpfile.js
- install global packages
 - gulp: `npm install gulp -g`
 - browserify: `npm install browserify -g`
 - bower: `npm install bower -g`
- init bower project 
 - `bower init` - accept all defaults, change ignore to app/bower_components
 - create/edit `.bowerrc`
- instal local dependencies
 - `npm install bower gulp gulp-uglify gulp-minify-css gulp-connect --save`
 - `$bower install jquery bootstrap --save`
- clone a file structure
- install local dependencies for browserify
 - `npm install gulp-browserify gulp-concat --save`
- install local angular modules
 - `npm install angular angular-route angular-animate --save`

## Sources
- http://www.johnpapa.net/get-up-and-running-with-node-and-visual-studio/
- http://mherman.org/blog/2014/08/14/kickstarting-angular-with-gulp/#.VlSbe3arQUF
- http://mherman.org/blog/2014/08/15/kickstarting-angular-with-gulp-and-browserify-part-2/#.VlSREnarQUE
- https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
