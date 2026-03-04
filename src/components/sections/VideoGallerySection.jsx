import React, { useState, useMemo } from 'react';
import { Play, X, Compass, Filter, ChevronRight } from 'lucide-react';
import { videos, VIDEO_SERIES, WENYI_SUBCATEGORIES, COURSE1_SUBCATEGORIES, ZISHA_SUBCATEGORIES } from '../../data/videoData';
import heroBg from '../../assets/video_gallery_hero.png';

// YouTube 縮圖備用策略
const THUMB_SIZES = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault', '1', '2', '3', 'default'];

function YoutubeThumbnail({ videoId, title }) {
    const [sizeIdx, setSizeIdx] = useState(0);
    const src = `https://img.youtube.com/vi/${videoId}/${THUMB_SIZES[sizeIdx]}.jpg`;
    return (
        <img
            src={src}
            onError={() => sizeIdx < THUMB_SIZES.length - 1 && setSizeIdx(i => i + 1)}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
        />
    );
}

export default function VideoGallerySection({ siteNavHeightPx }) {
    const [activeSeries, setActiveSeries] = useState('all');
    const [activeSubCat, setActiveSubCat] = useState('all');
    const [playingVideoId, setPlayingVideoId] = useState(null);

    // 當切換大分類時，重設子分類
    const handleSeriesChange = (seriesId) => {
        setActiveSeries(seriesId);
        setActiveSubCat('all');
    };

    // 篩選結果
    const filteredVideos = useMemo(() => {
        let result = videos;
        if (activeSeries !== 'all') {
            result = result.filter(v => v.series === activeSeries);
        }
        if (activeSeries !== 'all' && activeSubCat !== 'all') {
            result = result.filter(v => v.category === activeSubCat);
        }
        return result;
    }, [activeSeries, activeSubCat]);

    // 取得當前大分類所擁有的子分類清單
    const currentSubcategories = useMemo(() => {
        if (activeSeries === 'wenyi') return WENYI_SUBCATEGORIES;
        if (activeSeries === 'course1') return COURSE1_SUBCATEGORIES;
        if (activeSeries === 'zisha') return ZISHA_SUBCATEGORIES;
        return [];
    }, [activeSeries]);

    // 各子分類的影片數量
    const subCatCounts = useMemo(() => {
        if (!currentSubcategories.length) return {};

        const seriesVideos = videos.filter(v => v.series === activeSeries);
        const counts = { all: seriesVideos.length };

        currentSubcategories.forEach(sc => {
            if (sc.id !== 'all') {
                counts[sc.id] = seriesVideos.filter(v => v.category === sc.id).length;
            }
        });
        return counts;
    }, [activeSeries, currentSubcategories]);

    // 各大分類影片數量
    const seriesCounts = useMemo(() => {
        const counts = { all: videos.length };
        VIDEO_SERIES.forEach(s => {
            if (s.id !== 'all') counts[s.id] = videos.filter(v => v.series === s.id).length;
        });
        return counts;
    }, []);

    // 取得當前子分類名稱
    const getSubCatLabel = (catId) => {
        return currentSubcategories.find(c => c.id === catId)?.label || '';
    };

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setPlayingVideoId(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 pb-20">
            {/* Hero 標題 */}
            <div
                className="border-b border-stone-800 relative overflow-hidden"
                style={{
                    paddingTop: `${(siteNavHeightPx || 88)}px`,
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 40%',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/70 to-stone-900/85" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-stone-900/40 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-widest mb-6 drop-shadow-lg">
                            茶學放映室
                        </h1>
                        <p className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-2xl font-medium drop-shadow">
                            精選優質茶學影音紀錄。點擊卡片即可於站內直接觀看，不受演算法打擾，沉浸在純粹的茶葉世界中。
                        </p>
                    </div>
                </div>
            </div>

            {/* 內容區塊 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* 第一層：大分類 */}
                <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-stone-500 font-bold mr-1 inline-flex items-center gap-1.5 text-base">
                            <Filter size={18} /> 系列
                        </span>
                        {VIDEO_SERIES.map((series) => (
                            <button
                                key={series.id}
                                onClick={() => handleSeriesChange(series.id)}
                                className={`px-6 py-3 rounded-full font-bold transition-all ${activeSeries === series.id
                                    ? 'bg-stone-800 text-white shadow-md'
                                    : 'bg-white border border-stone-200 text-stone-600 hover:border-amber-500 hover:text-amber-700 hover:bg-amber-50 shadow-sm'
                                    }`}
                                style={{ fontSize: '17px' }}
                            >
                                {series.label}
                                <span className={`ml-1.5 ${activeSeries === series.id ? 'text-stone-400' : 'text-stone-500'}`}
                                    style={{ fontSize: '15px' }}>
                                    {seriesCounts[series.id]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 第二層：子分類（若該大分類有定義子分類，且不只有 all） */}
                {currentSubcategories.length > 1 && (
                    <div className="mb-10 pl-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                            <ChevronRight size={18} className="text-amber-500 mr-1" />
                            {currentSubcategories.map((sub) => (
                                <button
                                    key={sub.id}
                                    onClick={() => setActiveSubCat(sub.id)}
                                    className={`px-5 py-2.5 rounded-full font-bold transition-all ${activeSubCat === sub.id
                                        ? 'bg-amber-700 text-white shadow-md'
                                        : 'bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 shadow-sm'
                                        }`}
                                    style={{ fontSize: '16px' }}
                                >
                                    {sub.label}
                                    <span className={`ml-1.5 ${activeSubCat === sub.id ? 'text-amber-300' : 'text-amber-500'}`}
                                        style={{ fontSize: '15px' }}>
                                        {subCatCounts[sub.id] || 0}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* 無子分類時的間距 */}
                {currentSubcategories.length <= 1 && <div className="mb-4" />}

                {/* 結果計數 */}
                <div className="mb-6 text-sm text-stone-500 font-medium">
                    共 {filteredVideos.length} 部影片
                    {currentSubcategories.length > 1 && activeSubCat !== 'all' && (
                        <span className="text-amber-700 ml-1">
                            ・{getSubCatLabel(activeSubCat)}
                        </span>
                    )}
                </div>

                {/* 影片網格 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredVideos.map((video) => (
                        <div
                            key={video.id}
                            onClick={() => setPlayingVideoId(video.id)}
                            className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
                        >
                            <div className="relative aspect-video bg-stone-200 overflow-hidden">
                                <YoutubeThumbnail videoId={video.id} title={video.title} />
                                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <Play size={28} className="text-emerald-700 ml-1.5" fill="currentColor" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                                    {video.duration}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
                                    {VIDEO_SERIES.find(s => s.id === video.series)?.label || '其他影片'}
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 leading-tight mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                                    {video.title}
                                </h3>
                                <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mt-auto">
                                    {video.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredVideos.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-stone-100">
                        <Compass className="mx-auto h-12 w-12 text-stone-300 mb-4" />
                        <p className="text-stone-500 font-medium">此分類目前沒有影片</p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {playingVideoId && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-stone-900/95 backdrop-blur-xl"
                        onClick={() => setPlayingVideoId(null)}
                    />
                    <button
                        onClick={() => setPlayingVideoId(null)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10 backdrop-blur"
                    >
                        <X size={28} />
                    </button>
                    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 z-10">
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10">
                            <iframe
                                src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&rel=0&modestbranding=1`}
                                title="YouTube Video Player"
                                className="absolute inset-0 w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <h2 className="text-2xl font-bold text-white mb-2">
                                {videos.find(v => v?.id === playingVideoId)?.title}
                            </h2>
                            <p className="text-stone-400 max-w-2xl mx-auto">
                                {videos.find(v => v?.id === playingVideoId)?.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
