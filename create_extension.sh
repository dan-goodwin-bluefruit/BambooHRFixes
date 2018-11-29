#!/bin/bash

SCRIPT_PATH=$(realpath $(dirname $0))/
cd $SCRIPT_PATH

rm bamboo.zip
cd src
zip ../bamboo.zip manifest.json *.js images/* web_accessible/*
