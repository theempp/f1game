#!/bin/zsh
cd "$(dirname "$0")"
if ! curl -fsS http://localhost:4186 >/dev/null; then
  /opt/homebrew/bin/node server.cjs > /tmp/pocket-grand-prix-server.log 2>&1 &
  sleep 1
fi
open -a 'Google Chrome' http://localhost:4186
