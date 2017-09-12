#!/bin/bash
yarn build
cd master
rm -rf *
cp -r ../dist/* .
git add .
git commit -m Sync
git push
