const { readFileSync } = require('fs');
const { execSync } = require('child_process');

const packageInfo = require("../package.json");

// const packageInfo = JSON.parse(content);

if (packageInfo) {
    const version = packageInfo.version;
    console.log('version', version);
    execSync(`npm i ../mahal-bulma-${version}.tgz --no-save`);
}
else {
    throw "no package found";
}
