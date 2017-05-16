#!/bin/sh
git fetch;
boot gh-pages;
git add .;
git commit -am "Deploy to github pages";
git subtree push --prefix gh-pages origin gh-pages;
# https://stackoverflow.com/questions/13756055/git-subtree-subtree-up-to-date-but-cant-push/30715198#30715198
# git push origin `git subtree split --prefix gh-pages master`:gh-pages --force;

# Keep origin/master up to date as well
git push;
