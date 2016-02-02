# Useful docs and links

## Dev computer preparation
- Chocolatey: `iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))`
- npm: `choco install nodejs`
- Visual Studio community edition: https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx
- Visual Studio Code: https://code.visualstudio.com/

## Preparing new repo from boiler plate
    git init
    git checkout -b master
    git remote add upstream https://github.com/werein/react.git
    git fetch upstream
    git merge upstream/master
    
    git remote add origin https://github.com/MiliusCZ/{new-repo-name}.git
    git push -u origin master

## Sources
- http://www.johnpapa.net/get-up-and-running-with-node-and-visual-studio/
- http://mherman.org/blog/2014/08/14/kickstarting-angular-with-gulp/#.VlSbe3arQUF
- http://mherman.org/blog/2014/08/15/kickstarting-angular-with-gulp-and-browserify-part-2/#.VlSREnarQUE
- https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md

## Other links
- http://jsforallof.us/2015/02/12/utilising-node-and-npm-for-front-end-development-workflow/
- http://ilikekillnerds.com/2014/07/what-a-front-end-developer-workflow-looks-like-in-20142015/
- http://rbrtsmith.com/2015/08/a-modern-frontend-workflow/
- http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html
- http://www.getmdl.io/
- http://scottaddie.com/2015/10/07/harnessing-webpack-with-visual-studio-code/
