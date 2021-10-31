#!/bin/bash
export PROJECT_SPACE=$(pwd);
export METEOR_PACKAGE_DIRS=$PROJECT_SPACE/packages/imports;
export METEOR_IP=$(ipconfig getifaddr en0);
export METEOR_PORT=3210;
export METEOR_SERVER=${METEOR_IP}:$METEOR_PORT
echo $PROJECT_SPACE
echo $METEOR_PACKAGE_DIRS

meteor npm install
meteor run -p $METEOR_PORT --settings settings.json
echo ${METEOR_SERVER};

