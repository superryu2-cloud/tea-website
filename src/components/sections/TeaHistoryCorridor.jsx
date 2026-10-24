import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Leaf, ScanSearch, X, ZoomIn, ZoomOut } from 'lucide-react';
import { industryHistory } from '../../content/history/industryHistory';
import { stationHistory } from '../../content/history/stationHistory';
import './TeaHistoryCorridor.css';

export default function TeaHistoryCorridor({ kind, siteNavHeightPx = 80 }) {
    const data = kind === 'station' ? stationHistory : industryHistory;
    const [source, setSource] = useState(null);
    const [zoomed, setZoomed] = useState(false);
    const dialog = useRef(null);
    const sourcePath = (number) => `/images/history/corridor/${data.id}-${number}.jpg`;
    const sectionId = (index) => `${data.id}-era-${index}`;
    const openSource = (number) => {
        setSource(number);
        setZoomed(false);
        dialog.current.showModal();
    };
    useEffect(() => {
        if (!source) return undefined;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = previous; };
    }, [source]);

    return (
        <article className="tea-corridor" style={{ '--corridor-nav-top': `${siteNavHeightPx}px` }}>
            <header className="corridor-hero">
                <div className="corridor-eyebrow"><Leaf size={16} aria-hidden="true" /> 台灣茶 / 歷史典藏</div>
                <div className="corridor-hero-grid">
                    <div>
                        <p className="corridor-overline">THE PASSAGE OF TEA</p>
                        <h1>{data.title}</h1>
                        <p className="corridor-subtitle">{data.subtitle}</p>
                        <a className="corridor-start" href={`#${data.introduction ? 'station-introduction' : sectionId(0)}`}>走入時光迴廊 <ArrowDown size={18} /></a>
                    </div>
                    <div className="corridor-hero-mark" aria-hidden="true"><Leaf strokeWidth={0.7} /><span>一葉・百年</span></div>
                </div>
                <div className="corridor-hero-foot"><span>{data.range}</span><span>年代紀事 / 展板原文 / 影像典藏</span></div>
            </header>

            <nav className="corridor-era-nav" aria-label={`${data.title}年代導覽`}>
                <span className="corridor-nav-label">年代索引</span>
                <div>
                    {data.introduction && <a href="#station-introduction">改良場介紹</a>}
                    {data.groups.map((group, index) => <a key={sectionId(index)} href={`#${sectionId(index)}`}>{group.era}</a>)}
                    <a href={`#${data.id}-sources`}>原圖典藏</a>
                </div>
            </nav>

            <div className="corridor-content">
                <details className="corridor-editor-note"><summary>關於這份展板紀錄</summary><p>{data.note}</p></details>
                {data.introduction && (
                    <section id="station-introduction" className="corridor-introduction">
                        <div className="corridor-section-kicker">INTRODUCTION / 展板01</div>
                        <h2>{data.introduction.title}</h2>
                        <div className="corridor-intro-grid">
                            <div>{data.introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                            <figure>
                                <button type="button" onClick={() => openSource('01')} aria-label="放大改良場介紹與分場地圖原圖"><img src={sourcePath('01')} alt="茶及飲料作物改良場介紹及總場、北部、中部、南部、東部分場地圖" /></button>
                                <figcaption>{data.introduction.branches.join('・')}<button type="button" onClick={() => openSource('01')}>放大原圖 <ScanSearch size={15} /></button></figcaption>
                            </figure>
                        </div>
                        <h3>任務</h3>
                        <ul className="corridor-missions">{data.introduction.missions.map((mission) => <li key={mission}>{mission}</li>)}</ul>
                    </section>
                )}
                {data.groups.map((group, index) => (
                    <section className="corridor-era" id={sectionId(index)} key={sectionId(index)} aria-labelledby={`${sectionId(index)}-title`}>
                        <div className="corridor-ribbon">
                            <span className="corridor-index">{String(index + 1).padStart(2, '0')} /</span>
                            <h2 id={`${sectionId(index)}-title`}>{group.era}</h2>
                            <button type="button" onClick={() => openSource(group.source)}><ScanSearch size={16} /> 展板{group.source}<span className="corridor-source-action">原圖</span></button>
                        </div>
                        {group.note && <p className="corridor-transcription-note"><span>轉錄註</span>{group.note}</p>}
                        <div className="corridor-events">
                            {group.events.map(([year, ...paragraphs], eventIndex) => (
                                <section className="corridor-event" key={`${year}-${eventIndex}`} data-history-year={year}>
                                    <div className="corridor-year-line" aria-hidden="true" />
                                    <h3>{year}</h3>
                                    <ul>{paragraphs.map((paragraph, paragraphIndex) => <li key={paragraphIndex}><Leaf size={18} aria-hidden="true" /><p>{paragraph}</p></li>)}</ul>
                                </section>
                            ))}
                        </div>
                        {group.photos && <div className="corridor-photo-strip">
                            {group.photos.map(({ label, area: [x, y, width, height] }) => <figure key={label}>
                                <button type="button" onClick={() => openSource(group.source)} aria-label={`查看${label}原圖`} className="corridor-photo-window" style={{ aspectRatio: `${width * data.sourceRatios[group.source]} / ${height}` }}>
                                    <img src={sourcePath(group.source)} alt={label} loading="lazy" style={{ width: `${10000 / width}%`, left: `${-x * 100 / width}%`, top: `${-y * 100 / height}%` }} />
                                </button>
                                <figcaption>{label}</figcaption>
                            </figure>)}
                        </div>}
                    </section>
                ))}
                <section id={`${data.id}-sources`} className="corridor-sources">
                    <div className="corridor-section-kicker">THE ORIGINAL EXHIBITION</div>
                    <h2>原圖典藏</h2>
                    <p>保留展板全貌、歷史照片與文字細節。點選圖片放大對照。</p>
                    <div className="corridor-source-grid">
                        {data.sources.map((number) => <figure key={number}>
                            <button type="button" onClick={() => openSource(number)} aria-label={`放大${data.sourcePrefix}${number}`}><img src={sourcePath(number)} alt={`${data.sourcePrefix}${number}完整展板`} loading="lazy" /></button>
                            <figcaption>{data.sourcePrefix}{number}<ArrowUpRight size={16} aria-hidden="true" /></figcaption>
                        </figure>)}
                    </div>
                </section>
            </div>
            <dialog className="corridor-dialog" ref={dialog} onClose={() => setSource(null)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close(); }} aria-labelledby="corridor-dialog-title">
                <div className="corridor-dialog-toolbar">
                    <h2 id="corridor-dialog-title">{data.sourcePrefix}{source}</h2>
                    <button type="button" onClick={() => setZoomed(!zoomed)}>{zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}{zoomed ? '適合視窗' : '原尺寸'}</button>
                    <button type="button" onClick={() => dialog.current.close()} aria-label="關閉原圖"><X size={22} /></button>
                </div>
                <div className={`corridor-image-scroll ${zoomed ? 'is-zoomed' : ''}`}>{source && <img src={sourcePath(source)} alt={`${data.sourcePrefix}${source}原始照片`} />}</div>
            </dialog>
        </article>
    );
}
