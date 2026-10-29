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

function landingRotation(current, index, count) {
  const target = (360 - index * 360 / count) % 360;
  const normalized = ((current % 360) + 360) % 360;
  return current + 360 * 5 + (target - normalized + 360) % 360;
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
    setRotations(current => current.map((rotation, index) => landingRotation(rotation, rings[index].indexOf(digits[index]), rings[index].length)));
    timer.current = window.setTimeout(() => {
      setSelected(quote);
      setSpinning(false);
      if (!reduced && window.matchMedia('(max-width: 850px)').matches) {
        document.querySelector('.sage-quote-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, ms);
  }

  return <section className="sage-wheel-page">
    <header className="sage-wheel-heading">
      <span className="sage-wheel-eyebrow">一則語錄・一席茶</span>
      <h1>聖賢語錄與茶道智慧</h1>
      <p>轉一轉，讀一則。從一段語錄裡，照見茶與日常。</p>
    </header>

    <div className="sage-wheel-layout">
      <aside className="sage-wheel-controls" aria-label="聖賢語錄轉盤">
        <div className="sage-wheel-counter">原稿收錄 {quotes.length} 則語錄</div>
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
        <p className="sage-wheel-status" aria-live="polite">{spinning ? '語錄正在轉動，準備與你相遇。' : selected ? `本次抽到第 ${selected.id} 則` : '抽出一則語錄，慢慢讀、慢慢想。'}</p>
        <small className="sage-wheel-source-note">依《古文美文賞讀》整理；原稿未附第 241、277 則。</small>
      </aside>

      <article className="sage-quote-card" aria-live="polite">
        {selected ? <>
          <div className="sage-quote-meta"><span>聖賢語錄</span><strong>第 {selected.id} 則</strong></div>
          <blockquote>{selected.text}</blockquote>
          <section className="sage-quote-reflection">
            <h2>茶道與日常</h2>
            <p>讀完這段話，想想它和泡茶、待客，或自己最近的一段生活經驗有什麼連結。</p>
          </section>
        </> : <div className="sage-quote-empty"><span className="sage-quote-seal">茶</span><h2>留一段話，陪自己喝杯茶</h2><p>轉動語錄輪，抽一則共讀。</p></div>}
      </article>
    </div>
  </section>;
}
