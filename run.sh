#!/bin/bash

function dev {
    npx live-server --watch="index.html,src/main.js,css/main.css" --verbose
}

function deploy {
    git push dokku main
}

"${@}"
