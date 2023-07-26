const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const path = require('path');

async function run(){
    try {
    
        const email = core.getInput('email', {trimWhitespace: true, required: true});
        const password = core.getInput('password', {required: true});
        core.setOutput('logintime', 'yeeee');
        fs.writeFileSync('./test.txt', 'Name=tolu')
    } catch (error) {
        core.debug(error.message);
        core.setFailed(error.message);
    }
}
run();
