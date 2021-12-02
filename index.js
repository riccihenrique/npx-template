#!/usr/bin/env node
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const FILE_NAME = "";

const mainPath = path.dirname(fs.realpathSync(__filename));
const soundPath = path.join(mainPath, FILE_NAME);

const func = () => {
    const linuxcmd = 'paplay ' + soundPath + '.ogg';
    const windowscmd = path.join(mainPath, './forWindows.vbs') + ' ' + soundPath + '.mp3';
    const maccmd = 'afplay ' + soundPath + '.mp3';

    const platform = process.platform;

    console.log('Executando o NPX');
    switch(platform) {
        case 'win32':
            exec(windowscmd)
            break;
        case 'linux':
            exec(linuxcmd);
            break;
        default:
            exec(maccmd);
            break;
    }
}

module.exports = func;

if (!module.parent) {
    func();
}