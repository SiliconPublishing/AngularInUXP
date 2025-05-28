const { writeFileSync, existsSync, mkdirSync } = require('fs');

// Setup debugging environment

const contents = `debugger;`;

const paths = ['./debugging/indesign.jsx', './debugging/illustrator.jsx', './debugging/photoshop.jsx'];

mkdirSync('./debugging');
for (const path of paths) {
    if (!existsSync(path)) {
        writeFileSync(path, contents, { encoding: 'utf-8' });
    }
}
