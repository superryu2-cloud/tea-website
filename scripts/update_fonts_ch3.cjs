const fs = require('fs');
const path = 'd:/tea-website/src/content/academy/ChonghuaChapter03.jsx';

try {
    let content = fs.readFileSync(path, 'utf8');

    // 1. Update Body Text: text-stone-600/700 -> text-[17px]
    content = content.replace(/className="([^"]*?)text-stone-600/g, 'className="$1text-[17px] text-stone-600');
    content = content.replace(/className="([^"]*?)text-stone-700/g, 'className="$1text-[17px] text-stone-700');

    // 2. Update Headers
    content = content.replace(/className="([^"]*?)text-lg font-bold/g, 'className="$1text-[20px] font-bold');
    content = content.replace(/className="([^"]*?)text-xl font-bold/g, 'className="$1text-[22px] font-bold');
    content = content.replace(/className="([^"]*?)text-2xl/g, 'className="$1text-[24px]');

    fs.writeFileSync(path, content, 'utf8');
    console.log('Successfully updated font sizes to 17px/19-24px in ChonghuaChapter03.jsx');
} catch (err) {
    console.error('Error updating file:', err);
    process.exit(1);
}
