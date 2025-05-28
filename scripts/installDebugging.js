const { writeFileSync, existsSync, mkdirSync } = require('fs');

// Setup debugging environment

const contents = `// @includepath "../projects/spi-library/shared/public/lib"
// @include "_json.jsx"
// @include "_string.jsx"
// @include "_array.jsx"

debugger;`;

const paths = ['./debugging/indesign.jsx', './debugging/illustrator.jsx', './debugging/photoshop.jsx'];

mkdirSync('./debugging');
for (const path of paths) {
    if (!existsSync(path)) {
        writeFileSync(path, contents, { encoding: 'utf-8' });
    }
}
