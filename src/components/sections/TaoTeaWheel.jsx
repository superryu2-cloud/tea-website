import { useEffect, useRef, useState } from 'react';
import { Copy, ChevronRight, Leaf, RotateCcw } from 'lucide-react';
import chapters from '../../data/taoChapters.json';
import { availableGroups, chapterFromSearch, chapterShareUrl, chooseChapter, chooseGroup, landingRotation } from '../../utils/taoWheel';
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
  const [phase, setPhase] = useState('group');
  const [group, setGroup] = useState(null);
  const [chapterId, setChapterId] = useState(() => chapterFromSearch(typeof window === 'undefined' ? '' : window.location.search));
  const [manual, setManual] = useState(() => Boolean(chapterFromSearch(typeof window === 'undefined' ? '' : window.location.search)));
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [duration, setDuration] = useState(3200);
  const [noRepeat, setNoRepeat] = useState(false);
  const [history, setHistory] = useState([]);
  const [showReadings, setShowReadings] = useState(false);
  const [bookPage, setBookPage] = useState(0);
  const [shareFeedback, setShareFeedback] = useState('');
  const [shareFallback, setShareFallback] = useState('');
  const timer = useRef(null);
  const drawLock = useRef(false);
  const readingPanel = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => {
    if (!chapterFromSearch(window.location.search)) return;
    const frame = window.requestAnimationFrame(() => readingPanel.current?.scrollIntoView({ behavior: 'instant', block: 'start' }));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const groups = availableGroups(noRepeat ? history : []);
  const chapter = chapterId ? chapters[chapterId - 1] : null;
  const choosingChapter = phase === 'chapter';
  const entries = phase === 'group' ? groups : group.chapters.map(id => ({ id, label: `${id}` }));
  const finished = groups.length === 0;
  const status = spinning ? (choosingChapter ? '第二輪轉動中，章號即將揭曉…' : '第一輪轉動中，先看看落在哪個區間…') :
    phase === 'result' ? `本次相遇：第 ${chapter.id} 章・${chapter.title}${finished ? '。81 章都已相遇，可以重新一輪。' : ''}` :
      finished ? '81 章都已相遇，重新一輪再出發。' : choosingChapter ? `抽中第 ${group.label} 章，接著抽出這次的經文。` : manual && chapter ? `已自選第 ${chapter.id} 章，可直接共讀，也可轉輪抽章。` : '先抽區間，再抽章號，與一章智慧相遇。';

  function spin() {
    if (drawLock.current || finished) return;
    drawLock.current = true;
    const nextGroup = choosingChapter ? group : chooseGroup(groups);
    const picked = choosingChapter ? chooseChapter(group) : nextGroup.id;
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
      if (!choosingChapter) {
        setGroup(nextGroup);
        setPhase('chapter');
        setRotation(0);
      } else {
        setChapterId(picked);
        setManual(false);
        setShareFeedback('');
        setShareFallback('');
        window.history.replaceState(null, '', chapterShareUrl(window.location.href, picked));
        setHistory(previous => [...previous, picked]);
        setPhase('result');
        window.requestAnimationFrame(() => {
          readingPanel.current?.focus({ preventScroll: true });
          if (window.matchMedia('(max-width: 850px)').matches) {
            readingPanel.current?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
          }
        });
      }
    }, ms);
  }

  function nextDraw() {
    setPhase('group');
    setGroup(null);
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
    nextDraw();
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

  const centerLabel = spinning ? '靜候佳章' : phase === 'result' ? `第 ${chapterId} 章` : choosingChapter ? group.label : '1—81';

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
        <div className="tao-step"><span className={phase === 'group' ? 'is-current' : ''}>① 抽區間</span><ChevronRight size={14} /><span className={phase !== 'group' ? 'is-current' : ''}>② 抽章號</span></div>
        <div className="tao-guide"><TeaCompanion /><p><small>小茶老師</small>{spinning ? '茶香轉轉，智慧快來了！' : choosingChapter ? `第 ${group.label} 章等著你，再轉一次吧！` : chapter ? '先聽大家分享，再看看茶席的啟發。' : '先轉出區間，再揭曉今日相遇的章節。'}</p></div>
        <div className="tao-wheel-wrap">
          <span className="tao-pointer" aria-hidden="true" />
          <svg viewBox="0 0 360 360" className="tao-wheel" role="img" aria-label={phase !== 'group' ? `第二輪：第 ${group.label} 章` : '第一輪：8 組章節區間'}>
            <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '180px 180px', transition: spinning ? `transform ${duration}ms cubic-bezier(.16,.7,.1,1)` : 'none' }}>
              {entries.map((entry, index) => {
                const angle = 360 / entries.length;
                const point = degrees => [180 + 173 * Math.sin(degrees * Math.PI / 180), 180 - 173 * Math.cos(degrees * Math.PI / 180)];
                const a = point(index * angle - angle / 2);
                const b = point(index * angle + angle / 2);
                return <g key={entry.id}>
                  {entries.length === 1 ? <circle cx="180" cy="180" r="173" fill="var(--tao-jade)" /> : <path d={`M180 180L${a[0]} ${a[1]}A173 173 0 ${angle > 180 ? 1 : 0} 1 ${b[0]} ${b[1]}Z`} fill={index % 2 ? 'var(--tao-honey)' : 'var(--tao-jade)'} stroke="#fffdf6" strokeWidth="2" />}
                  <g transform={`rotate(${index * angle} 180 180)`}><text x="180" y="61" textAnchor="middle" className="tao-wheel-number">{entry.label}</text><text x="180" y="80" textAnchor="middle" className="tao-wheel-unit">章</text></g>
                </g>;
              })}
            </g>
            <circle cx="180" cy="180" r="174" fill="none" stroke="#b38b56" strokeWidth="1.5" />
            <circle cx="180" cy="180" r="63" fill="#fffdf6" stroke="#e7e6d7" />
            <text x="180" y="186" textAnchor="middle" className="tao-wheel-center">{centerLabel}</text>
          </svg>
        </div>
        <button className="tao-primary" type="button" onClick={phase === 'result' ? nextDraw : spin} disabled={spinning || finished}>
          {spinning ? '轉動中…' : finished ? '本輪已完成' : phase === 'result' ? '再抽一章' : choosingChapter ? '第二輪・抽章號' : '第一輪・抽區間'}
        </button>
        <p className="tao-status" role="status" aria-live="polite">{status}</p>
        {chapter && !spinning && <button type="button" className="tao-reading-link" onClick={() => readingPanel.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>閱讀本章 ↓</button>}
        <div className="tao-round-tools"><label><input type="checkbox" checked={noRepeat} disabled={spinning || phase === 'chapter'} onChange={event => { setNoRepeat(event.target.checked); nextDraw(); }} />本輪不重複</label><button type="button" disabled={spinning} onClick={resetRound}><RotateCcw size={13} />重新一輪</button></div>
        <small className="tao-fairness">最後一組為 71–81，共 11 章。各章抽中機率相同。</small>
        <details className="tao-history"><summary>本輪紀錄・{history.length} 次</summary><div>{history.length ? history.map((id, index) => <span key={index}>第 {id} 章</span>) : <p>轉動輪盤，留下今天的相遇。</p>}</div></details>
      </aside>

      <article className="tao-reading tao-paper" ref={readingPanel} tabIndex={-1} aria-label="章節內容">
        <TaoBookReader chapter={chapter} page={bookPage} onPageChange={turnBookPage} showReadings={showReadings} onReadingsChange={setShowReadings} manual={manual} />
        <footer className="tao-sources"><p>經文採王弼本；不同傳本的字句及章句可能有差異。白話解釋與茶席延伸為教學參考，並非經文原句或唯一解釋。</p><details><summary>經文來源與注音說明</summary><p>繁體經文依<a href="https://zh.wikisource.org/zh-hant/道德經_(王弼本)" target="_blank" rel="noreferrer">維基文庫《道德經》（王弼本）</a>整理，不含王弼注文；章題為教學提示。</p><p>注音採現代國語本調，不標連讀變調。依文義區分多音字，參照<a href="https://dict.revised.moe.edu.tw/" target="_blank" rel="noreferrer">教育部《重編國語辭典修訂本》</a>及<a href="https://dict.variants.moe.edu.tw/" target="_blank" rel="noreferrer">《異體字字典》</a>。如「歙」讀ㄒㄧˋ、「牝」讀ㄆㄧㄣˋ、「畜之」讀ㄒㄩˋ、「被褐」讀ㄆㄧ ㄏㄜˊ；第七十二章首個「厭」依本頁採現代國語音讀作ㄧㄢˋ；若採「厭通壓」解，亦有註家作ㄧㄚ讀法。其他古文異讀與不同訓解可另作課堂討論。</p></details></footer>
      </article>
    </div>
  </section>;
}
