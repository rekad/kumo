#!/bin/bash

function dev {
    npx live-server 
}

function deploy {
    git push dokku main
}

"${@}"
