#!/bin/bash

SCRIPT_PATH=$(realpath $(dirname $0))/
cd $SCRIPT_PATH

rm bamboo.zip
cd src
zip ../bamboo.zip background.js fixes.js images/* manifest.json web_accessible/*
