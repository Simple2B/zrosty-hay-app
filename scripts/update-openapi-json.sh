#!/bin/bash

if [ -z "$1" ]
then
  BASE_URL="https://api.zrosty-hay.simple2b.net"
else
  BASE_URL=$1
fi

echo "Generating API for ${BASE_URL}"

# get path to this script
SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# check if curl command exists
if ! command -v curl &> /dev/null
then
    echo "curl could not be found. Please install curl."
    exit 2
fi

# download openapi.json with curl

curl ${BASE_URL}/openapi.json > ${SCRIPT_PATH}/../openapi.json

echo "API generated successfully"

