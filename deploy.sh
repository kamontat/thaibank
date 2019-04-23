#!/usr/bin/env bash
# shellcheck disable=SC1000

# generate by create-script-file v4.0.0
# link (https://github.com/Template-generator/create-script-file/tree/v4.0.0)

# set -x #DEBUG - Display commands and their arguments as they are executed.
# set -v #VERBOSE - Display shell input lines as they are read.
# set -n #EVALUATE - Check syntax of the script but don't execute.

#/ -----------------------------------
#/ Description:  ...
#/ How to:       ...
#/               ...
#/ Option:       --help | -h | -? | help | h | ?
#/                   > show this message
#/               --version | -v | version | v
#/                   > show command version
#/ -----------------------------------
#/ Create by:    Kamontat Chantrachirathunrong <kamontat.c@hotmail.com>
#/ Since:        22/04/2019
#/ -----------------------------------
#/ Error code    1      -- error
#/ -----------------------------------
#/ Known bug:    ...
#/ -----------------------------------
#// Version:      0.0.1   -- description
#//               0.0.2b1 -- beta-format
#//               0.0.2a1 -- alpha-format

# abort on errors
set -e

RELEASE_NAME="$1"
if test -z "$RELEASE_NAME"; then
  echo "release name is required; e.g. patch, minor, major"
fi

# Update package.json
VERSION="$(npm version "$RELEASE_NAME" --no-git-tag-version)"

# Create CHANGELOG
gitgo cl --tag "$VERSION"

# Commit release change
git add -A
git commit -m "chore(release): update ${VERSION} version"
# Tag new release
git tag "$VERSION"

# Update to github
git push origin master && git push origin master --tags
