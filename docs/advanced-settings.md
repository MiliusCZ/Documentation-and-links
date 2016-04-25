# Git

## Proxy in Git
    git config --global https.proxy https://{proxy-URL}
    git config --global http.proxy http://{proxy-URL}

## Cloning repository to own 
### Clone the boilerplate to custom folder:
```
git clone <boilerplate-url> <new-folder-name>
```
###Changing origin to own repository:
```
git remote set-url --push origin <new-repository-url>
git push
```
###Tracking the original repository:
```
git remote add upstream <boilerplate-url>
```
###Getting changes from original repository (i.e. rebasing):
```
git fetch upstream
git rebase upstream/master
```
