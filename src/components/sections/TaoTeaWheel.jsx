import { useEffect, useRef, useState } from 'react';
import { Copy, ChevronRight, Leaf, RotateCcw } from 'lucide-react';
import chapters from '../../data/taoChapters.json';
import { chapterFromSearch, chapterShareUrl, chooseChapter, landingRotation } from '../../utils/taoWheel';
import TaoBookReader from './TaoBookReader';
import './TaoTeaWheel.css';
import './TaoBookReader.css';

function TeaCompanion() {
  return <svg viewBox="0 0 100 100" className="tao-companion" aria-hidden="true">
    <ellipse cx="47" cy="88" rx="36" ry="4" fill="#cad4a2" />
    <path d="M78 48c24-8 25 26 3 26" fill="none" stroke="#5b7e4d" strokeWidth="5" />
    <path d="M18 43h64v21c0 32-64 32-64 0Z" fill="#f3eed8" stroke="#5b7e4d" strokeWidth="3" />
    <ellipse cx="50" cy="44" rx="30" ry="5" fill="#b59c5a" />
    <circle cx="37" cy="64" r="2.5" fill="#466347" /><circle cx="62" cy="64" r="2.5" fill="#466347" />
    <path d="M45 70q5 6 10 0" fill="none" stroke="#466347" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="29" cy="71" rx="4" ry="2.5" fill="#e3b4a2" /><ellipse cx="70" cy="71" rx="4" ry="2.5" fill="#e3b4a2" />
    <path d="M49 32c-18 3-25-7-24-9 14-4 23 1 24 9Z" fill="#8ca96a" />
    <path d="M52 31c-3-13 1-22 9-24 5 10 0 20-9 24Z" fill="#afc984" />
  </svg>;
}

export default function TaoTeaWheel() {
  const [phase, setPhase] = useState('draw');
  const [chapterId, setChapterId] = useState(() => chapterFromSearch(typeof window === 'undefined' ? '' : window.location.search));
  const [manual, setManual] = useState(() => Boolean(chapterFromSearch(typeof window === 'undefined' ? '' : window.location.search)));
  const [spinning, setSpinning] = useState(false);
  const [fireworks, setFireworks] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [duration, setDuration] = useState(3200);
  const [noRepeat, setNoRepeat] = useState(false);
  const [history, setHistory] = useState([]);
  const [showReadings, setShowReadings] = useState(false);
  const [bookPage, setBookPage] = useState(0);
  const [shareFeedback, setShareFeedback] = useState('');
  const [shareFallback, setShareFallback] = useState('');
  const timer = useRef(null);
  const fireworkTimer = useRef(null);
  const drawLock = useRef(false);
  const readingPanel = useRef(null);
  useEffect(() => () => { window.clearTimeout(timer.current); window.clearTimeout(fireworkTimer.current); }, []);
  useEffect(() => {
    if (!chapterFromSearch(window.location.search)) return;
    const frame = window.requestAnimationFrame(() => readingPanel.current?.scrollIntoView({ behavior: 'instant', block: 'start' }));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const chapter = chapterId ? chapters[chapterId - 1] : null;
  const entries = chapters.filter(item => !noRepeat || !history.includes(item.id)).map(item => ({ id: item.id, label: `${item.id}` }));
  const finished = noRepeat && entries.length === 0;
  const status = spinning ? '轉輪旋轉中，佳章即將揭曉…' :
    phase === 'result' ? `本次相遇：第 ${chapter.id} 章・${chapter.title}${finished ? '。81 章都已相遇，可以重新一輪。' : ''}` :
      finished ? '81 章都已相遇，重新一輪再出發。' : manual && chapter ? `已自選第 ${chapter.id} 章，可直接共讀，也可轉輪抽章。` : '轉動輪盤，直接抽出第 1–81 章中的一章。';

  function spin() {
    if (drawLock.current || finished) return;
    drawLock.current = true;
    const picked = chooseChapter({ chapters: entries.map(entry => entry.id) });
    const index = entries.findIndex(entry => entry.id === picked);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ms = reduced ? 80 : 3200;
    setDuration(ms);
    setSpinning(true);
    setBookPage(0);
    setRotation(current => landingRotation(current, index, entries.length));
    timer.current = window.setTimeout(() => {
      setSpinning(false);
      drawLock.current = false;
      setChapterId(picked);
      setManual(false);
      setShareFeedback('');
      setShareFallback('');
      window.history.replaceState(null, '', chapterShareUrl(window.location.href, picked));
      setHistory(previous => [...previous, picked]);
      setPhase('result');
      setFireworks(!reduced);
      window.clearTimeout(fireworkTimer.current);
      fireworkTimer.current = window.setTimeout(() => setFireworks(false), reduced ? 0 : 1800);
      window.requestAnimationFrame(() => {
        readingPanel.current?.focus({ preventScroll: true });
        if (window.matchMedia('(max-width: 850px)').matches) {
          readingPanel.current?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
        }
      });
    }, ms);
  }

  function nextDraw() {
    setPhase('draw');
    setManual(false);
    setFireworks(false);
    setRotation(0);
    setBookPage(0);
  }

  function resetRound() {
    setHistory([]);
    setChapterId(null);
    setManual(false);
    setShareFeedback('');
    setShareFallback('');
    const url = new URL(window.location.href);
    url.searchParams.delete('chapter');
    window.history.replaceState(null, '', url);
    nextDraw();
  }

  function selectChapter(id) {
    setChapterId(id);
    setManual(true);
    setShareFeedback('');
    setShareFallback('');
    setPhase('result');
    setRotation(0);
    setBookPage(0);
    window.history.replaceState(null, '', chapterShareUrl(window.location.href, id));
    window.requestAnimationFrame(() => {
      if (window.matchMedia('(max-width: 850px)').matches) {
        readingPanel.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
      }
    });
  }

  async function copyChapterLink() {
    const link = chapterShareUrl(window.location.href, chapterId);
    try {
      await navigator.clipboard.writeText(link);
      setShareFeedback('已複製本章連結，可分享給同學。');
      setShareFallback('');
    } catch {
      setShareFeedback('請選取下方連結複製。');
      setShareFallback(link);
    }
  }

  function turnBookPage(page) {
    setBookPage(page);
    window.requestAnimationFrame(() => {
      readingPanel.current?.querySelector('.tao-book')?.focus({ preventScroll: true });
      readingPanel.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    });
  }

  const centerLabel = spinning ? '靜候佳章' : phase === 'result' ? `第 ${chapterId} 章` : '1—81';

  return <section className="tao-page tao-book-theme">
    <header className="tao-heading">
      <span className="tao-eyebrow"><Leaf size={15} /> 一盞茶，一章智慧</span>
      <h1>道德經・茶席智慧轉輪</h1>
      <p>轉一轉，讀一章。先聽彼此的想法，再讓經文走進茶與日常。</p>
    </header>
    <div className="tao-chapter-picker">
      <label htmlFor="tao-chapter-choice">自選章節・一起共讀</label>
      <select id="tao-chapter-choice" value={chapterId ?? ''} disabled={spinning} onChange={event => selectChapter(Number(event.target.value))}>
        <option value="" disabled>選擇第 1–81 章</option>
        {chapters.map(item => <option key={item.id} value={item.id}>第 {item.id} 章・{item.title}</option>)}
      </select>
      <button type="button" disabled={!chapter || spinning} onClick={copyChapterLink}><Copy size={19} />複製本章連結</button>
      {shareFeedback && <p className="tao-share-feedback" role="status">{shareFeedback}</p>}
      {shareFallback && <input aria-label="本章分享連結" className="tao-share-fallback" readOnly value={shareFallback} onFocus={event => event.target.select()} />}
    </div>
    <div className="tao-layout">
      <aside className="tao-controls tao-paper" aria-label="章節抽籤">
        <div className="tao-step"><span className="is-current">① 抽出章節</span><ChevronRight size={14} /><span>第 1–81 章</span></div>
        <div className="tao-guide"><TeaCompanion /><p><small>小茶老師</small>{spinning ? '茶香轉轉，智慧快來了！' : chapter ? '先聽大家分享，再看看茶席的啟發。' : '轉一轉，直接與一章智慧相遇。'}</p></div>
        <div className="tao-wheel-wrap">
          <span className="tao-pointer" aria-hidden="true" />
          {fireworks && <div className="tao-fireworks" aria-hidden="true"><i /><i /><i /><i /><i /></div>}
          <svg viewBox="0 0 500 500" className="tao-wheel" role="img" aria-label="第 1 至 81 章轉盤">
            <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '250px 250px', transition: spinning ? `transform ${duration}ms cubic-bezier(.16,.7,.1,1)` : 'none' }}>
              {entries.map((entry, index) => {
                const angle = 360 / entries.length;
                const point = degrees => [250 + 240 * Math.sin(degrees * Math.PI / 180), 250 - 240 * Math.cos(degrees * Math.PI / 180)];
                const a = point(index * angle - angle / 2);
                const b = point(index * angle + angle / 2);
                return <g key={entry.id}>
                  <path d={`M250 250L${a[0]} ${a[1]}A240 240 0 ${angle > 180 ? 1 : 0} 1 ${b[0]} ${b[1]}Z`} fill={index % 2 ? 'var(--tao-honey)' : 'var(--tao-jade)'} stroke="#fffdf6" strokeWidth="1" />
                  <g transform={`rotate(${index * angle} 250 250)`}><text x="250" y="55" textAnchor="middle" className="tao-wheel-number">{entry.label}</text></g>
                </g>;
              })}
            </g>
            <circle cx="250" cy="250" r="241" fill="none" stroke="#b8cde1" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="88" fill="#fffdf6" stroke="#d6e3ef" />
            <text x="250" y="258" textAnchor="middle" className="tao-wheel-center">{centerLabel}</text>
          </svg>
        </div>
        <button className="tao-primary" type="button" onClick={phase === 'result' ? nextDraw : spin} disabled={spinning || finished}>
          {spinning ? '轉動中…' : finished ? '本輪已完成' : phase === 'result' ? '再抽一章' : '抽出一章'}
        </button>
        <p className="tao-status" role="status" aria-live="polite">{status}</p>
        {chapter && !spinning && <button type="button" className="tao-reading-link" onClick={() => readingPanel.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>閱讀本章 ↓</button>}
        <div className="tao-round-tools"><label><input type="checkbox" checked={noRepeat} disabled={spinning} onChange={event => { setNoRepeat(event.target.checked); nextDraw(); }} />本輪不重複</label><button type="button" disabled={spinning} onClick={resetRound}><RotateCcw size={13} />重新一輪</button></div>
        <small className="tao-fairness">第 1–81 章機會相同；勾選「本輪不重複」可讓每章只出現一次。</small>
        <details className="tao-history"><summary>本輪紀錄・{history.length} 次</summary><div>{history.length ? history.map((id, index) => <span key={index}>第 {id} 章</span>) : <p>轉動輪盤，留下今天的相遇。</p>}</div></details>
      </aside>

      <article className="tao-reading tao-paper" ref={readingPanel} tabIndex={-1} aria-label="章節內容">
        <TaoBookReader chapter={chapter} page={bookPage} onPageChange={turnBookPage} showReadings={showReadings} onReadingsChange={setShowReadings} manual={manual} />
        <footer className="tao-sources"><p>經文採王弼本；不同傳本的字句及章句可能有差異。白話解釋與茶席延伸為教學參考，並非經文原句或唯一解釋。</p><details><summary>經文來源與注音說明</summary><p>繁體經文依<a href="https://zh.wikisource.org/zh-hant/道德經_(王弼本)" target="_blank" rel="noreferrer">維基文庫《道德經》（王弼本）</a>整理，不含王弼注文；章題為教學提示。</p><p>注音採現代國語本調，不標連讀變調。依文義區分多音字，參照<a href="https://dict.revised.moe.edu.tw/" target="_blank" rel="noreferrer">教育部《重編國語辭典修訂本》</a>及<a href="https://dict.variants.moe.edu.tw/" target="_blank" rel="noreferrer">《異體字字典》</a>。如「歙」讀ㄒㄧˋ、「牝」讀ㄆㄧㄣˋ、「畜之」讀ㄒㄩˋ、「被褐」讀ㄆㄧ ㄏㄜˊ；第七十二章首個「厭」依本頁採現代國語音讀作ㄧㄢˋ；若採「厭通壓」解，亦有註家作ㄧㄚ讀法。其他古文異讀與不同訓解可另作課堂討論。</p></details></footer>
      </article>
    </div>
  </section>;
}
