const fs = require('fs');
const path = 'd:/tea-website/src/content/academy/ChonghuaChapter03.jsx';

try {
    let content = fs.readFileSync(path, 'utf8');

    // 1. Update Body Text: text-stone-600/700 -> text-[17px]
    // Use word boundary or check for existing definition to avoid double replacement if run multiple times
    // However, since we know the current state (no text-[17px]), simple replacement is acceptable.
    // We target specifically the paragraph classes we saw.

    // Replace "text-stone-600" -> "text-[17px] text-stone-600"
    content = content.replace(/className="([^"]*?)text-stone-600/g, 'className="$1text-[17px] text-stone-600');

    // Replace "text-stone-700" -> "text-[17px] text-stone-700"
    content = content.replace(/className="([^"]*?)text-stone-700/g, 'className="$1text-[17px] text-stone-700');

    // 2. Update Headers
    // h4 titles often use text-lg or text-xl
    // text-lg (18px) -> text-[20px]
    content = content.replace(/className="([^"]*?)text-lg font-bold/g, 'className="$1text-[20px] font-bold');

    // text-xl (20px) -> text-[22px]
    content = content.replace(/className="([^"]*?)text-xl font-bold/g, 'className="$1text-[22px] font-bold');

    // text-2xl (24px) -> text-[24px] (Explicitly setting it, though it effectively stays 24px, just to be precise with the "range" request)
    content = content.replace(/className="([^"]*?)text-2xl/g, 'className="$1text-[24px]');

    fs.writeFileSync(path, content, 'utf8');
    console.log('Successfully updated font sizes in ChonghuaChapter03.jsx');
} catch (err) {
    console.error('Error updating file:', err);
    process.exit(1);
}
