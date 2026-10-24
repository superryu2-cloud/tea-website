import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const chapters = JSON.parse(readFileSync(new URL('../src/data/taoChapters.json', import.meta.url), 'utf8'));
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
const plain = html => html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
try {
  const { default: Reader } = await server.ssrLoadModule('/src/components/sections/TaoBookReader.jsx');
  for (const chapter of chapters) {
    for (let page = 0; page < 4; page++) {
      const props = { chapter, page, onPageChange() {}, showReadings: false, onReadingsChange() {}, manual: true };
      const html = renderToStaticMarkup(React.createElement(Reader, props));
      const text = plain(html);
      const expected = [chapter.text.replace(/\n/g, ''), chapter.explanation, chapter.question, chapter.wisdom][page];
      assert.ok(text.includes(expected), `第 ${chapter.id} 章第 ${page + 1} 頁內容完整`);
      assert.ok(text.includes(`第 ${page + 1} 頁／共 4 頁`));
      assert.equal((html.match(/aria-current="page"/g) ?? []).length, 1);
      if (page === 3) assert.ok(text.includes(chapter.practice));
      if (page === 2) assert.ok(!text.includes(chapter.wisdom), '提問頁不提前揭露啟發');
      if (page === 0) {
        assert.ok(!html.includes('class="tao-phonetic"'), '注音預設關閉');
        const annotated = renderToStaticMarkup(React.createElement(Reader, { ...props, showReadings: true }));
        const withoutReadings = plain(annotated).replace(/[ㄅ-ㄩˊˇˋ˙]/g, '');
        assert.ok(withoutReadings.includes(expected), `第 ${chapter.id} 章注音不遺失經文與標點`);
        assert.equal((annotated.match(/class="tao-phonetic"/g) ?? []).length, (chapter.text.match(/\p{Script=Han}/gu) ?? []).length);
      }
    }
  }
  assert.ok(plain(renderToStaticMarkup(React.createElement(Reader, { chapter: null }))).includes('道德經'));
  console.log('通過：81 章 × 4 書頁內容、茶席練習、頁碼、單一當前頁、提問延後揭示及完整注音排版。');
} finally {
  await server.close();
}
