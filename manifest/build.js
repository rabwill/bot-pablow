const AdmZip = require('adm-zip');
const zip = new AdmZip();   

const fs = require('fs');
fs.readFile('./manifest.template.json', 'utf-8', (err, data) => {
    if (err) throw err;

    // Object.keys(process.env).forEach((key) => {
    //     if (key.indexOf('REACT_APP_MANIFEST_') === 0) {
    //         let shortKey = key.replace('REACT_APP_MANIFEST_','');
    //         data = data.split(`<${shortKey}>`).join(process.env[key]);
    //         console.log (`Inserted ${shortKey} value of ${process.env[key]}`);
    //     }
    // });

    data = data.split("<BOT_ID>").join("7e495b1f-e56a-46e5-b02c-1342a795fe10");
    
    fs.writeFile('./manifest.json', data, 'utf-8', (err, data) => {
        if (err) throw err;
        zip.addLocalFile('./manifest.json');
        zip.addLocalFile('./outline.png');
        zip.addLocalFile('./color.png');

        zip.writeZip(`./pablow.zip`);
        console.log(`Created app package pablow.zip`);
    });
});
