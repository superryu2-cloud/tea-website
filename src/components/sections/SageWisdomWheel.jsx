import { useEffect, useRef, useState } from 'react';
import quotes from '../../data/sageQuotes.json';
import './SageWisdomWheel.css';

const DIGITS = Array.from({ length: 10 }, (_, digit) => digit);
const HUNDREDS = [0, 1, 2];

function ringSectorPath(index, count, innerRadius, outerRadius) {
  const step = 360 / count;
  const point = (radius, degrees) => [250 + radius * Math.sin(degrees * Math.PI / 180), 250 - radius * Math.cos(degrees * Math.PI / 180)];
  const start = index * step - step / 2;
  const end = index * step + step / 2;
  const [outerStartX, outerStartY] = point(outerRadius, start);
  const [outerEndX, outerEndY] = point(outerRadius, end);
  const [innerEndX, innerEndY] = point(innerRadius, end);
  const [innerStartX, innerStartY] = point(innerRadius, start);
  const largeArc = step > 180 ? 1 : 0;
  return `M${outerStartX} ${outerStartY}A${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${outerEndX} ${outerEndY}L${innerEndX} ${innerEndY}A${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerStartX} ${innerStartY}Z`;
}

function landingRotation(current, index, count, direction = 1) {
  const target = (360 - index * 360 / count) % 360;
  const normalized = ((current % 360) + 360) % 360;
  const delta = direction > 0
    ? (target - normalized + 360) % 360
    : -((normalized - target + 360) % 360);
  return current + direction * 360 * 5 + delta;
}

const quoteConnections = [
  {
    keywords: ['希望', '黑暗', '困境', '困難', '挫折', '阻礙', '奮發', '重振', '新航'],
    tea: '泡茶遇到水溫不合、茶湯偏淡時，先別急著否定整壺茶；調整水溫、時間或手勢，再試一次。茶席上的修正，也是在困難裡重新找到方向。',
    life: '低潮時不必一下子解決所有事。先找一件能做的小事，像一點星光那樣，讓自己慢慢恢復行動。',
  },
  {
    keywords: ['敬', '恭', '禮', '待客', '尊重'],
    tea: '奉茶時留意茶杯的方向、溫度與遞茶的手勢；這些細節不是形式，而是讓對方感受到被尊重。',
    life: '與人相處時，先把注意力放在對方身上：聽完再回應、答應的事記得做到，敬意會落在日常行動裡。',
  },
  {
    keywords: ['謙', '傲', '自滿', '低下'],
    tea: '品茶時先讓茶湯入口，不急著下結論；願意再聞一次、再比較一泡，常會發現原先忽略的層次。',
    life: '有把握時仍保留聆聽的空間。承認自己還能學，反而讓經驗成為與人交流的起點。',
  },
  {
    keywords: ['柔', '剛', '退', '進', '變', '應變', '順勢'],
    tea: '同一款茶會因季節、茶量與水溫而變化；泡茶不是硬套固定秒數，而是看茶性與茶湯狀態，適時調整。',
    life: '方向可以堅定，做法不必僵硬。遇到變化時，試著調整步伐，保留真正重要的目標。',
  },
  {
    keywords: ['習慣', '日積月累', '實踐', '終始', '恒堅', '持續'],
    tea: '泡茶的穩定來自一次次練習：固定觀察水溫、出湯與茶湯變化，再從每一泡修正一個細節。',
    life: '不必等到有空或有動力才開始。把想養成的事縮小到每天做得到的一步，累積久了就會看見改變。',
  },
  {
    keywords: ['靜', '平靜', '安定', '心定', '忙碌'],
    tea: '水沸、溫壺、置茶、注水，每個動作都給自己一個停頓。把心收回手上的茶，茶席就成了安頓身心的片刻。',
    life: '事情很多時，先停一下，分清楚眼前最需要處理的是什麼。安定不是逃開，而是讓自己看清再行動。',
  },
  {
    keywords: ['寬', '容', '包容', '怨', '計較'],
    tea: '茶席上每個人的口味不同；有人喜歡濃，有人偏好清淡。先理解差異，再調整分享方式，茶才真正成為交流。',
    life: '遇到不合意時，試著把「一定要照我的方式」放鬆一點；理解彼此在意的事，往往比爭輸贏更能解開僵局。',
  },
  {
    keywords: ['善', '付出', '無私', '仁', '愛', '助人', '分享'],
    tea: '分茶時留意每一位客人的杯量，讓茶湯均勻、人人都能品到；照顧人的心意，常藏在這些不張揚的小事裡。',
    life: '善意不一定要做大事。主動分擔一件小事、給人一點支持，就可能成為別人重新出發的力量。',
  },
  {
    keywords: ['言', '說', '聽', '知者不言', '不言'],
    tea: '茶席不必急著填滿沉默。先一起喝茶、聽對方說完，再分享自己的觀察，對話會更有餘地。',
    life: '開口前想一想這句話是否有幫助；聆聽時也先不急著評斷。少一點搶答，多一點理解。',
  },
  {
    keywords: ['時間', '明日', '今日', '歲月', '當下'],
    tea: '一泡茶有適合出湯的時刻，早一點或晚一點，滋味都不同。練習等待與把握，正是泡茶帶給人的時間感。',
    life: '把重要的事放回今天能做的範圍，先完成一小步；別讓「以後再說」取代真正想珍惜的事。',
  },
  {
    keywords: ['知足', '足', '欲', '名利', '財富'],
    tea: '茶不必名貴才值得細品。回到香氣、滋味與此刻的感受，便能看見簡單之中已有的豐足。',
    life: '想要更多之前，也停下來看看已經擁有什麼。知足不是不求進步，而是不讓比較遮住當下的收穫。',
  },
  {
    keywords: ['學', '師友', '讀書', '知識', '啟發'],
    tea: '和同伴共品同一款茶，各自記下香氣與口感，再交換觀察；不同的感受能補足自己的盲點。',
    life: '學習不只是記住答案，也包括願意請教、實際嘗試，再回頭檢視自己的理解。',
  },
  {
    keywords: ['朋友', '師友', '同伴', '眾'],
    tea: '一席茶由主人備茶，也由賓客的回應成全。讓每個人都有分享與聆聽的空間，茶會才有往來的溫度。',
    life: '好的關係不只在順利時相伴，也需要平常的關心與真誠回應；今天可以主動問候一位重要的人。',
  },
  {
    keywords: ['脾氣', '生氣', '怨氣', '情緒'],
    tea: '情緒上來時，先放下手中的壺，等呼吸平穩再繼續。泡茶的節奏提醒我們：先安頓自己，才有餘裕照顧別人。',
    life: '先辨認自己真正生氣或在意的是什麼，再選擇怎麼表達。情緒可以被看見，也可以不必立刻變成傷人的話。',
  },
  {
    keywords: ['立志', '志', '方向', '目標', '行道'],
    tea: '練一項泡茶技巧時，先選定想改善的地方，再透過每次沖泡觀察結果；清楚方向，練習才不會只是重複。',
    life: '把遠大的目標拆成眼前可做的一步，走得慢也沒關係，持續往想去的方向前進就好。',
  },
];

function getQuoteConnection(text) {
  const normalized = text.replace(/\s/g, '');
  return quoteConnections.find(({ keywords }) => keywords.some(keyword => normalized.includes(keyword))) ?? {
    tea: '回到茶席的一個具體細節：水溫、茶量、出湯時間或待客手勢，選一項細看，想想這段語錄如何提醒自己調整。',
    life: '把這段話放進最近的一件小事裡：它讓你看見了什麼？下一次遇到相似情況，你想做哪一個不同的選擇？',
  };
}

function NumberRing({ digits, innerRadius, outerRadius, labelRadius, rotation, duration, className }) {
  return <g className={className} style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '250px 250px', transition: duration ? `transform ${duration}ms cubic-bezier(.16,.7,.1,1)` : 'none' }}>
    {digits.map((digit, index) => {
      const angle = index * 360 / digits.length;
      const radians = angle * Math.PI / 180;
      const x = 250 + labelRadius * Math.sin(radians);
      const y = 250 - labelRadius * Math.cos(radians);
      return <g key={`${digit}-${index}`}>
        <path d={ringSectorPath(index, digits.length, innerRadius, outerRadius)} className={`sage-wheel-sector${index % 2 ? ' is-alternate' : ''}`} />
        <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="sage-wheel-digit" style={{ transform: `rotate(${-rotation}deg)`, transformBox: 'view-box', transformOrigin: `${x / 5}% ${y / 5}%`, transition: duration ? `transform ${duration}ms cubic-bezier(.16,.7,.1,1)` : 'none' }}>{digit}</text>
      </g>;
    })}
  </g>;
}

export default function SageWisdomWheel() {
  const [selected, setSelected] = useState(null);
  const [rotations, setRotations] = useState([0, 0, 0]);
  const [spinning, setSpinning] = useState(false);
  const [duration, setDuration] = useState(0);
  const timer = useRef(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function drawQuote() {
    if (spinning) return;
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const digits = String(quote.id).padStart(3, '0').split('').map(Number);
    const rings = [HUNDREDS, DIGITS, DIGITS];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ms = reduced ? 80 : 4200;
    setSelected(null);
    setDuration(ms);
    setSpinning(true);
    const directions = [1, -1, 1];
    setRotations(current => current.map((rotation, index) => landingRotation(rotation, rings[index].indexOf(digits[index]), rings[index].length, directions[index])));
    timer.current = window.setTimeout(() => {
      setSelected(quote);
      setSpinning(false);
      if (!reduced && window.matchMedia('(max-width: 850px)').matches) {
        document.querySelector('.sage-quote-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, ms);
  }

  function selectQuote(event) {
    if (spinning || !event.target.value) return;
    const quote = quotes.find(item => item.id === Number(event.target.value));
    if (!quote) return;

    const digits = String(quote.id).padStart(3, '0').split('').map(Number);
    const rings = [HUNDREDS, DIGITS, DIGITS];
    setDuration(0);
    setRotations(rings.map((ring, index) => (360 - ring.indexOf(digits[index]) * 360 / ring.length) % 360));
    setSelected(quote);
    if (window.matchMedia('(max-width: 850px)').matches) {
      window.setTimeout(() => document.querySelector('.sage-quote-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
    }
  }

  const connection = selected ? getQuoteConnection(selected.text) : null;

  return <section className="sage-wheel-page">
    <header className="sage-wheel-heading">
      <span className="sage-wheel-eyebrow">一則語錄・一席茶</span>
      <h1>聖賢語錄與茶道智慧</h1>
      <p>轉一轉，讀一則。從一段語錄裡，照見茶與日常。</p>
    </header>

    <div className="sage-wheel-layout">
      <aside className="sage-wheel-controls" aria-label="聖賢語錄轉盤">
        <div className="sage-wheel-counter">原稿收錄 {quotes.length} 則語錄</div>
        <label className="sage-quote-picker">
          <span>直接選擇語錄</span>
          <select value={selected?.id ?? ''} onChange={selectQuote} disabled={spinning}>
            <option value="">選擇語錄編號</option>
            {quotes.map(quote => {
              const excerpt = quote.text.replace(/\s+/g, ' ');
              return <option key={quote.id} value={quote.id}>第 {quote.id} 則 · {excerpt.slice(0, 24)}{excerpt.length > 24 ? '…' : ''}</option>;
            })}
          </select>
        </label>
        <div className="sage-wheel-wrap">
          <span className="sage-wheel-pointer" aria-hidden="true" />
          <svg viewBox="0 0 500 500" className={`sage-wheel${spinning ? ' is-spinning' : ''}`} role="img" aria-label="百位、十位、個位三圈數字轉盤">
            <NumberRing digits={DIGITS} innerRadius={176} outerRadius={239} labelRadius={207} rotation={rotations[2]} duration={duration} className="sage-wheel-ones" />
            <NumberRing digits={DIGITS} innerRadius={108} outerRadius={171} labelRadius={140} rotation={rotations[1]} duration={duration} className="sage-wheel-tens" />
            <NumberRing digits={HUNDREDS} innerRadius={51} outerRadius={103} labelRadius={78} rotation={rotations[0]} duration={duration} className="sage-wheel-hundreds" />
            <circle cx="250" cy="250" r="240" className="sage-wheel-outline" />
            <circle cx="250" cy="250" r="50" className="sage-wheel-hub" />
          </svg>
          <button className="sage-wheel-spin" type="button" onClick={drawQuote} disabled={spinning}>
            {spinning ? '轉動中' : selected ? '再抽一則' : '開始抽籤'}
          </button>
        </div>
        <p className={`sage-wheel-status${selected && !spinning ? ' has-result' : ''}`} aria-live="polite">{spinning ? '語錄正在轉動，準備與你相遇。' : selected ? <>本次抽到<span>第 {selected.id} 則</span></> : '抽出一則語錄，慢慢讀、慢慢想。'}</p>
        <small className="sage-wheel-source-note">依《古文美文賞讀》整理；原稿未附第 241、277 則。</small>
      </aside>

      <article className="sage-quote-card" aria-live="polite">
        {selected ? <>
          <div className="sage-quote-meta"><span>聖賢語錄</span><strong className="sage-quote-number">第 {selected.id} 則</strong></div>
          <blockquote>{selected.text}</blockquote>
          <section className="sage-quote-reflection">
            <h2>茶席連結</h2>
            <p>{connection.tea}</p>
            <h2>生活連結</h2>
            <p>{connection.life}</p>
          </section>
        </> : <div className="sage-quote-empty"><span className="sage-quote-seal">茶</span><h2>留一段話，陪自己喝杯茶</h2><p>轉動語錄輪，抽一則共讀。</p></div>}
      </article>
    </div>
  </section>;
}
