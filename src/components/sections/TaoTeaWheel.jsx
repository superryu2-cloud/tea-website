import { useEffect, useRef, useState } from 'react';
import { Copy, Leaf, RotateCcw } from 'lucide-react';
import chapters from '../../data/taoChapters.json';
import { chapterFromSearch, chapterShareUrl, chooseChapter, landingRotation } from '../../utils/taoWheel';
import TaoBookReader from './TaoBookReader';
import './TaoTeaWheel.css';
import './TaoBookReader.css';

function ringSectorPath(index, count, innerRadius, outerRadius) {
  const step = 360 / count;
  const point = (radius, degrees) => [250 + radius * Math.sin(degrees * Math.PI / 180), 250 - radius * Math.cos(degrees * Math.PI / 180)];
  const start = index * step - step / 2;
  const end = index * step + step / 2;
  const [outerStartX, outerStartY] = point(outerRadius, start);
  const [outerEndX, outerEndY] = point(outerRadius, end);
  const [innerEndX, innerEndY] = point(innerRadius, end);
  const [innerStartX, innerStartY] = point(innerRadius, start);
  return `M${outerStartX} ${outerStartY}A${outerRadius} ${outerRadius} 0 0 1 ${outerEndX} ${outerEndY}L${innerEndX} ${innerEndY}A${innerRadius} ${innerRadius} 0 0 0 ${innerStartX} ${innerStartY}Z`;
}

const INNER_DIGITS = Array.from({ length: 9 }, (_, digit) => digit);
const OUTER_DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function TeaCompanion() {
  return <svg viewBox="0 0 100 100" className="tao-companion" aria-hidden="true">
    <ellipse cx="50" cy="88" rx="37" ry="5" fill="#cbd8a7" />
    <path d="M76 43c25-8 25 27 2 27" fill="none" stroke="#63865a" strokeWidth="6" strokeLinecap="round" />
    <path d="M18 40h63v25c0 30-63 30-63 0Z" fill="#fff8e8" stroke="#63865a" strokeWidth="3.5" />
    <ellipse cx="49.5" cy="41" rx="30" ry="5" fill="#c4a263" />
    <circle cx="37" cy="64" r="2.7" fill="#405e4d" /><circle cx="62" cy="64" r="2.7" fill="#405e4d" />
    <path d="M43 71q6 7 12 0" fill="none" stroke="#405e4d" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="28" cy="70" rx="4.5" ry="3" fill="#eab8a6" /><ellipse cx="71" cy="70" rx="4.5" ry="3" fill="#eab8a6" />
    <path d="M45 29c-17 1-24-7-22-12 13-4 22 2 22 12Z" fill="#88a96d" />
    <path d="M51 28c-3-13 2-22 10-24 5 10-1 20-10 24Z" fill="#a8c682" />
    <circle cx="24" cy="37" r="3" fill="#f1d99f" />
  </svg>;
}

export default function TaoTeaWheel() {
  const [phase, setPhase] = useState('draw');
  const [chapterId, setChapterId] = useState(() => chapterFromSearch(typeof window === 'undefined' ? '' : window.location.search));
  const [manual, setManual] = useState(() => Boolean(chapterFromSearch(typeof window === 'undefined' ? '' : window.location.search)));
  const [spinning, setSpinning] = useState(false);
  const [fireworks, setFireworks] = useState(false);
  const [innerRotation, setInnerRotation] = useState(0);
  const [outerRotation, setOuterRotation] = useState(0);
  const [duration, setDuration] = useState(3200);
  const [noRepeat, setNoRepeat] = useState(false);
  const [history, setHistory] = useState([]);
  const [showReadings, setShowReadings] = useState(false);
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
    const tens = Math.floor(picked / 10);
    const units = picked % 10;
    const unitIndex = units === 0 ? 9 : units - 1;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ms = reduced ? 80 : 3200;
    setDuration(ms);
    setFireworks(false);
    window.clearTimeout(fireworkTimer.current);
    setSpinning(true);
    setInnerRotation(current => landingRotation(current, tens, INNER_DIGITS.length));
    setOuterRotation(current => landingRotation(current, unitIndex, OUTER_DIGITS.length));
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
      fireworkTimer.current = window.setTimeout(() => setFireworks(false), reduced ? 0 : 3600);
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
    setInnerRotation(0);
    setOuterRotation(0);
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
    const tens = Math.floor(id / 10);
    const units = id % 10;
    setInnerRotation(landingRotation(0, tens, INNER_DIGITS.length));
    setOuterRotation(landingRotation(0, units === 0 ? 9 : units - 1, OUTER_DIGITS.length));
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
        <div className="tao-today">今日茶席・1—81</div>
        <div className="tao-guide"><TeaCompanion /><p><small>小茶老師</small>先靜心，再抽一章。</p></div>
        <div className="tao-wheel-wrap">
          <span className="tao-pointer" aria-hidden="true" />
          {fireworks && <div className="tao-fireworks" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>}
          <svg viewBox="0 0 500 500" className="tao-wheel" role="img" aria-label="內輪十位 0 至 8、外輪個位 1 至 9 與 0，抽出第 1 至 81 章">
            <g className="tao-wheel-outer" style={{ transform: `rotate(${outerRotation}deg)`, transformOrigin: '250px 250px', transition: spinning ? `transform ${duration}ms cubic-bezier(.16,.7,.1,1)` : 'none' }}>
              {OUTER_DIGITS.map((digit, index) => {
                const angle = index * 36;
                const radians = angle * Math.PI / 180;
                const x = 250 + 202 * Math.sin(radians);
                const y = 250 - 202 * Math.cos(radians);
                return <g key={digit}>
                  <path d={ringSectorPath(index, OUTER_DIGITS.length, 164, 240)} fill={index % 2 ? 'var(--tao-honey)' : 'var(--tao-jade)'} stroke="#fffdf6" strokeWidth="2" />
                  <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="tao-wheel-number tao-wheel-number--outer" style={{ transform: `rotate(${-outerRotation}deg)`, transformBox: 'view-box', transformOrigin: `${x / 5}% ${y / 5}%`, transition: spinning ? `transform ${duration}ms cubic-bezier(.16,.7,.1,1)` : 'none' }}>{digit}</text>
                </g>;
              })}
            </g>
            <g className="tao-wheel-inner" style={{ transform: `rotate(${innerRotation}deg)`, transformOrigin: '250px 250px', transition: spinning ? `transform ${duration}ms cubic-bezier(.16,.7,.1,1)` : 'none' }}>
              {INNER_DIGITS.map((digit, index) => {
                const angle = index * 40;
                const radians = angle * Math.PI / 180;
                const x = 250 + 117 * Math.sin(radians);
                const y = 250 - 117 * Math.cos(radians);
                return <g key={digit}>
                  <path d={ringSectorPath(index, INNER_DIGITS.length, 76, 158)} fill={index % 2 ? 'var(--tao-honey)' : 'var(--tao-jade)'} stroke="#fffdf6" strokeWidth="2" />
                  <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="tao-wheel-number tao-wheel-number--inner" style={{ transform: `rotate(${-innerRotation}deg)`, transformBox: 'view-box', transformOrigin: `${x / 5}% ${y / 5}%`, transition: spinning ? `transform ${duration}ms cubic-bezier(.16,.7,.1,1)` : 'none' }}>{digit}</text>
                </g>;
              })}
            </g>
            <circle cx="250" cy="250" r="241" fill="none" stroke="#b8cde1" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="76" fill="#fffdf6" stroke="#d6e3ef" />
            <text x="250" y="258" textAnchor="middle" className="tao-wheel-center">{centerLabel}</text>
          </svg>
        </div>
        <button className="tao-primary" type="button" onClick={spin} disabled={spinning || finished}>
          {spinning ? '轉動中…' : finished ? '本輪已完成' : phase === 'result' ? '再轉一輪' : '開始轉動'}
        </button>
        <p className="tao-status" role="status" aria-live="polite">{status}</p>
        {chapter && !spinning && <button type="button" className="tao-reading-link" onClick={() => readingPanel.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>閱讀本章 ↓</button>}
        <div className="tao-round-tools"><label><input type="checkbox" checked={noRepeat} disabled={spinning} onChange={event => { setNoRepeat(event.target.checked); nextDraw(); }} />本輪不重複</label><button type="button" disabled={spinning} onClick={resetRound}><RotateCcw size={13} />重新一輪</button></div>
        <small className="tao-fairness">第 1–81 章機會相同；勾選「本輪不重複」可讓每章只出現一次。</small>
        <details className="tao-history"><summary>本輪紀錄・{history.length} 次</summary><div>{history.length ? history.map((id, index) => <span key={index}>第 {id} 章</span>) : <p>轉動輪盤，留下今天的相遇。</p>}</div></details>
      </aside>

      <article className="tao-reading tao-paper" ref={readingPanel} tabIndex={-1} aria-label="章節內容">
        <TaoBookReader chapter={chapter} showReadings={showReadings} onReadingsChange={setShowReadings} manual={manual} />
        <footer className="tao-sources"><p>經文採王弼本；不同傳本的字句及章句可能有差異。白話解釋與茶席延伸為教學參考，並非經文原句或唯一解釋。</p><details><summary>經文來源與注音說明</summary><p>繁體經文依<a href="https://zh.wikisource.org/zh-hant/道德經_(王弼本)" target="_blank" rel="noreferrer">維基文庫《道德經》（王弼本）</a>整理，不含王弼注文；章題為教學提示。</p><p>注音採現代國語本調，不標連讀變調。依文義區分多音字，參照<a href="https://dict.revised.moe.edu.tw/" target="_blank" rel="noreferrer">教育部《重編國語辭典修訂本》</a>及<a href="https://dict.variants.moe.edu.tw/" target="_blank" rel="noreferrer">《異體字字典》</a>。如「歙」讀ㄒㄧˋ、「牝」讀ㄆㄧㄣˋ、「畜之」讀ㄒㄩˋ、「被褐」讀ㄆㄧ ㄏㄜˊ；第七十二章首個「厭」依本頁採現代國語音讀作ㄧㄢˋ；若採「厭通壓」解，亦有註家作ㄧㄚ讀法。其他古文異讀與不同訓解可另作課堂討論。</p></details></footer>
      </article>
    </div>
  </section>;
}
