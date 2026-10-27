import taoChapterDetails from '../../data/taoChapterDetails.js';

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
    const tone = reading.match(/[ˊˇˋ˙]/)?.[0];
    let punctuation = '';
    while (/[，。！？；：、）」』】]/u.test(chapter.text[index + punctuation.length + 1] ?? '')) {
      punctuation += chapter.text[index + punctuation.length + 1];
    }
    words.push(<span className="tao-annotated-word" key={index}>
      <span className="tao-syllable"><span>{char}</span><span className="tao-phonetic" aria-hidden="true">
        <span>{reading.replace(/[ˊˇˋ˙]/g, '')}</span><span className="tao-tone">{tone ?? ''}</span>
      </span></span>{punctuation}
    </span>);
    index += punctuation.length;
  }
  return <div className="tao-classic tao-classic--annotated"><p>{words}</p></div>;
}

export default function TaoBookReader({ chapter, showReadings, onReadingsChange, manual }) {
  if (!chapter) return <div className="tao-book-cover">
    <div className="tao-book-running"><span className="tao-book-seal">道</span><span>一盞茶，一章智慧</span></div>
    <div className="tao-book-cover-titles"><h2>道德經</h2><span>茶席共讀</span></div>
    <div className="tao-book-cover-rule" />
    <p>轉輪抽章，或自選一章。<br />一起讀經文，慢慢談茶與人生。</p>
    <span className="tao-book-cover-edition">全八十一章・經文、解讀與茶席實踐</span>
  </div>;

  const detailedExplanation = taoChapterDetails[chapter.id] || chapter.detailedExplanation;

  return <div className="tao-book" role="region" aria-label="章節讀本">
    <div className="tao-book-running"><span className="tao-book-seal">道</span><span>道德經・第 {chapter.id} 章</span><span className="tao-book-origin">{manual ? '自選共讀' : '抽籤共讀'}</span></div>
    <section className="tao-book-sections">
      <section className="tao-book-leaf" id={`tao-section-${chapter.id}-0`} aria-labelledby={`tao-book-section-${chapter.id}-0`}>
        <header className="tao-book-leaf-heading"><span className="tao-book-section-seal" aria-hidden="true">{PAGE_MARKS[0]}</span><h2 id={`tao-book-section-${chapter.id}-0`}>{PAGE_TITLES[0]}</h2></header>
        <label className="tao-book-readings"><input type="checkbox" checked={showReadings} onChange={event => onReadingsChange(event.target.checked)} />顯示右側注音</label>
        <ClassicText chapter={chapter} showReadings={showReadings} />
      </section>
      <section className="tao-book-leaf" id={`tao-section-${chapter.id}-1`} aria-labelledby={`tao-book-section-${chapter.id}-1`}>
        <header className="tao-book-leaf-heading"><span className="tao-book-section-seal" aria-hidden="true">{PAGE_MARKS[1]}</span><h2 id={`tao-book-section-${chapter.id}-1`}>{PAGE_TITLES[1]}</h2></header>
        <div className="tao-book-prose">
          <p>{chapter.explanation}</p>
          {detailedExplanation && <section className="tao-book-detailed-explanation" aria-labelledby={`tao-book-detail-${chapter.id}`}>
            <h3 id={`tao-book-detail-${chapter.id}`}>經文的詳細解釋</h3>
            {detailedExplanation.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <details className="tao-book-source-note">
              <summary>底本與版本說明</summary>
              <p>經文依本頁採用的王弼通行本；詳細解釋以王弼注及通行本章句為主要脈絡，作教學性白話說明。古本與注家對部分字句、章旨有異文和不同解讀，故不宣稱只有唯一解釋。</p>
              <a href="https://zh.wikisource.org/zh-hant/道德經_(王弼本)" target="_blank" rel="noreferrer">參考：王弼本《道德經》</a>
            </details>
          </section>}
          <p className="tao-book-margin-note">先讀懂經文，再看看它如何照見日常。</p>
        </div>
      </section>
      <section className="tao-book-leaf" id={`tao-section-${chapter.id}-2`} aria-labelledby={`tao-book-section-${chapter.id}-2`}>
        <header className="tao-book-leaf-heading"><span className="tao-book-section-seal" aria-hidden="true">{PAGE_MARKS[2]}</span><h2 id={`tao-book-section-${chapter.id}-2`}>{PAGE_TITLES[2]}</h2></header>
        <div className="tao-book-prose"><p className="tao-book-question">{chapter.question}</p><p className="tao-book-margin-note">留一點安靜，先聽聽每個人的想法。</p></div>
      </section>
      <section className="tao-book-leaf" id={`tao-section-${chapter.id}-3`} aria-labelledby={`tao-book-section-${chapter.id}-3`}>
        <header className="tao-book-leaf-heading"><span className="tao-book-section-seal" aria-hidden="true">{PAGE_MARKS[3]}</span><h2 id={`tao-book-section-${chapter.id}-3`}>{PAGE_TITLES[3]}</h2></header>
        <div className="tao-book-prose"><p>{chapter.wisdom}</p><section className="tao-book-practice"><h3>茶席小練習</h3><p>{chapter.practice}</p></section></div>
      </section>
    </section>
  </div>;
}
