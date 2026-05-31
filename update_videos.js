/* global require */
const fs = require('fs');

try {
    const content = fs.readFileSync('src/data/videoData.js', 'utf8');
    const playlist = JSON.parse(fs.readFileSync('playlist.json', 'utf8'));

    const newVideosStr = playlist.map(v => {
        const epMatch = v.title.match(/ep\s*(\d+)/i);
        let epsStr = '文藝茶館第一季';
        if (epMatch) epsStr += ' EP' + epMatch[1];

        return `  {
    id: '${v.id}',
    title: '${v.title.replace(/'/g, "\\'")}',
    series: 'wenyi_s1',
    category: 'all',
    duration: '${v.duration}',
    description: '${epsStr}'
  },`;
    }).join('\n');

    let newContent = content.replace(
        "export const videos = [",
        "export const videos = [\n" + newVideosStr
    );

    if (!newContent.includes('wenyi_s1')) {
        // Add SERIES
        newContent = newContent.replace(
            "{ id: 'wenyi', label: '文藝茶館 第二季' },",
            "{ id: 'wenyi_s1', label: '文藝茶館 第一季' },\n  { id: 'wenyi', label: '文藝茶館 第二季' },"
        );

        // Add SUBCATEGORIES
        newContent = newContent.replace(
            "export const WENYI_SUBCATEGORIES = [",
            "export const WENYI_S1_SUBCATEGORIES = [\n  { id: 'all', label: '全部單元' }\n];\n\nexport const WENYI_SUBCATEGORIES = ["
        );
    }

    fs.writeFileSync('src/data/videoData.js', newContent);
    console.log('Successfully updated videoData.js');
} catch (e) {
    console.error(e);
}
