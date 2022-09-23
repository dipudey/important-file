#!/bin/bash

alias permission-api="apiPermission"
alias permission-client="clientPermission"

function apiPermission() {
      sudo chown -R www-data:www-data $1;
      sudo find $i -type f -exec chmod 664 {} \;
      sudo find $i -type d -exec chmod 775 {} \;
}

function clientPermission() {
      sudo chown -R www-data:www-data $1;
      sudo find $1 -type f -exec chmod 770 {} \;
      sudo find $1 -type d -exec chmod 770 {} \;
}
