const core = require('@actions/core');
const github = require('@actions/github');

try {
    const email = core.getInput('email', {trimWhitespace: true, required: true});
    const password = core.getInput('password', {required: true});
    core.setOutput('logintime', {email, password, time: new Date().toLocaleDateString()});
} catch (error) {
    core.debug(error.message);
    core.setFailed(error.message);
}