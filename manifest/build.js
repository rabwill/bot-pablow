const AdmZip = require('adm-zip');
const zip = new AdmZip();   

const fs = require('fs');

let settingsRaw = fs.readFileSync('../settings/appSettings.json');
let settings = JSON.parse(settingsRaw);
const botId = settings.MicrosoftAppId;

data = fs.readFileSync('./manifest.template.json', 'utf-8');

data = data.split("<BOT_ID>").join(botId);

fs.writeFile('./manifest.json', data, 'utf-8', (err, data) => {
    zip.addLocalFile('./manifest.json');
    zip.addLocalFile('./outline.png');
    zip.addLocalFile('./color.png');

    zip.writeZip(`./pablow.zip`);
    console.log(`Created app package pablow.zip`);
});
