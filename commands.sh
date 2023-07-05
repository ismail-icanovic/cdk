#!/bin/bash
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
#source ~/.zshrc
#source ~/.zprofile
nvm --version
nvm install 18.0.0
nvm use 18.0.0
node --version
cdk init app --language typescript