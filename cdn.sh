#/usr/bin/env bash

# Sets up the ""CDN"" for the site (actually just a GitHub Pages branch).
# Steps:
# 1. Delete the old CDN branch
# 2. Create a new CDN branch
# 3. Remove all files except public/*
# 4. Copy public/* to the CDN branch
# 5. Commit and push the CDN branch
#
# Print progress along the way

set -e

echo "[1/5] Deleting old CDN branch"
git branch -D cdn || true

echo "[2/5] Creating new CDN branch"
git checkout --orphan cdn
git reset --hard

echo "[3/5] Removing all files except public/*"
dirs=$(find . -maxdepth 1 -type d -not -name public -not -name .git -not -name . -not -name ..)
for dir in $dirs; do
  echo "Removing $dir"
  rm -rf $dir
done

echo "[4/5] Copying public/* to CDN branch"
cp -r public/* .

echo "[5/5] Committing and pushing CDN branch"
git add -A
git commit -m "Update CDN"
git push -f origin cdn

git checkout main

echo "Done!"
