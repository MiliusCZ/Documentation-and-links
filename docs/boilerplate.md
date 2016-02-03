# Preparing new repo from boiler plate

    git init
    git checkout -b master
    git remote add upstream {boilerplate-url}
    git fetch upstream
    git merge upstream/master
    
    git remote add origin https://github.com/MiliusCZ/{new-repo-name}.git
    git push -u origin master
