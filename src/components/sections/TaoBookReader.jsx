import { ChevronLeft, ChevronRight } from 'lucide-react';

const PAGES = ['經文', '解讀', '提問', '茶席'];
const PAGE_TITLES = ['經文', '經文的簡單解釋', '一起想一想', '茶與人生智慧'];
const PAGE_MARKS = ['壹', '貳', '參', '肆'];

function ClassicText({ chapter, showReadings }) {
  if (!showReadings) return <div className="tao-classic"><p>{chapter.text.replace(/\n/g, '')}</p></div>;
  const words = [];
  for (let index = 0; index < chapter.text.length; index++) {
    const char = chapter.text[index];
    if (char === '\n') continue;
    const reading = chapter.readings[index];
    if (!reading) {
      words.push(<span key={index}>{char}</span>);
      continue;
    }
    let punctuation = '';
    while (/[，。！？；：、）」』】]/u.test(chapter.text[index + punctuation.length + 1] ?? '')) {
      punctuation += chapter.text[index + punctuation.length + 1];
    }
    words.push(<span className="tao-annotated-word" key={index}>
      <span className="tao-syllable"><span>{char}</span><span className="tao-phonetic" aria-hidden="true">
        <span>{reading.replace(/[ˊˇˋ˙]/g, '')}</span><span className="tao-tone">{reading.match(/[ˊˇˋ˙]/)?.[0] ?? ''}</span>
      </span></span>{punctuation}
    </span>);
    index += punctuation.length;
  }
  return <div className="tao-classic tao-classic--annotated"><p>{words}</p></div>;
}

export default function TaoBookReader({ chapter, page, onPageChange, showReadings, onReadingsChange, manual }) {
  if (!chapter) return <div className="tao-book-cover">
    <div className="tao-book-running"><span className="tao-book-seal">道</span><span>一盞茶，一章智慧</span></div>
    <div className="tao-book-cover-titles"><h2>道德經</h2><span>茶席共讀</span></div>
    <div className="tao-book-cover-rule" />
    <p>轉輪抽章，或自選一章。<br />一起讀經文，慢慢談茶與人生。</p>
    <span className="tao-book-cover-edition">全八十一章・經文、解讀與茶席實踐</span>
  </div>;

  function onKeyDown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (['INPUT', 'SELECT', 'BUTTON', 'A', 'SUMMARY'].includes(event.target.tagName)) return;
    if (event.key === 'ArrowRight' && page < 3) { event.preventDefault(); onPageChange(page + 1); }
    if (event.key === 'ArrowLeft' && page > 0) { event.preventDefault(); onPageChange(page - 1); }
  }

  return <div className="tao-book" tabIndex={0} role="region" aria-label="章節讀本，可使用左右方向鍵翻頁" onKeyDown={onKeyDown}>
    <div className="tao-book-running"><span className="tao-book-seal">道</span><span>道德經・第 {chapter.id} 章</span><span className="tao-book-origin">{manual ? '自選共讀' : '抽籤共讀'}</span></div>
    <nav className="tao-book-tabs" aria-label="閱讀頁面">
      {PAGES.map((label, index) => <button key={label} type="button" aria-label={`第 ${index + 1} 頁：${label}`} aria-current={page === index ? 'page' : undefined} onClick={() => onPageChange(index)}>
        <span className="tao-book-dot" aria-hidden="true" /><span>{label}</span>
      </button>)}
    </nav>
    <section className="tao-book-leaf" key={`${chapter.id}-${page}`} aria-labelledby="tao-book-page-title">
      <header className="tao-book-leaf-heading"><span className="tao-book-section-seal" aria-hidden="true">{PAGE_MARKS[page]}</span><div><p>{PAGE_TITLES[page]}</p><h2 id="tao-book-page-title">{chapter.title}</h2></div></header>
      {page === 0 && <>
        <label className="tao-book-readings"><input type="checkbox" checked={showReadings} onChange={event => onReadingsChange(event.target.checked)} />顯示右側注音</label>
        <ClassicText chapter={chapter} showReadings={showReadings} />
      </>}
      {page === 1 && <div className="tao-book-prose"><p>{chapter.explanation}</p><p className="tao-book-margin-note">先讀懂經文，再看看它如何照見日常。</p></div>}
      {page === 2 && <div className="tao-book-prose"><p className="tao-book-question">{chapter.question}</p><p className="tao-book-margin-note">留一點安靜，先聽聽每個人的想法。</p><button type="button" className="tao-book-turn-invitation" onClick={() => onPageChange(3)}>翻到下一頁，看看茶席啟發 <ChevronRight size={20} /></button></div>}
      {page === 3 && <div className="tao-book-prose"><p>{chapter.wisdom}</p><section className="tao-book-practice"><h3>茶席小練習</h3><p>{chapter.practice}</p></section></div>}
    </section>
    <footer className="tao-book-pagination"><button type="button" disabled={page === 0} onClick={() => onPageChange(page - 1)}><ChevronLeft size={20} />上一頁</button><span aria-live="polite">第 {page + 1} 頁／共 4 頁</span><button type="button" disabled={page === 3} onClick={() => onPageChange(page + 1)}>下一頁<ChevronRight size={20} /></button></footer>
  </div>;
}
