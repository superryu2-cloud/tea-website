  const BrewingGuide = () => {
    const notesMode = UI_FLAGS.notesMode;
    const activeTea = teaData[selectedTeaForBrewing];
    const [showBrewingAtlas, setShowBrewingAtlas] = useState(!notesMode);

    const TeaTimer = ({ defaultSeconds }) => {
      const [timeLeft, setTimeLeft] = useState(defaultSeconds);
      const [isActive, setIsActive] = useState(false);

      useEffect(() => {
        setTimeLeft(defaultSeconds);
        setIsActive(false);
      }, [defaultSeconds]);

      useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
          interval = setInterval(() => {
            setTimeLeft(seconds => seconds - 1);
          }, 1000);
        } else if (timeLeft === 0) {
          setIsActive(false);
          // Optional: Play sound or alert here
        }
        return () => clearInterval(interval);
      }, [isActive, timeLeft]);

      const toggleTimer = () => setIsActive(!isActive);
      const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(defaultSeconds);
      };

      const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      };

      return (
        <div className="bg-stone-800 text-white p-6 rounded-xl shadow-lg border border-stone-700 flex flex-col items-center justify-center">
          <h4 className="text-stone-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center"><Clock size={16} className="mr-2" /> 泡茶計時器</h4>
          <div className={`text-6xl font-mono font-bold mb-6 ${timeLeft === 0 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
            {formatTime(timeLeft)}
          </div>
          <div className="flex gap-4">
            <button onClick={toggleTimer} className={`p-3 rounded-full transition-colors ${isActive ? 'bg-amber-600 hover:bg-amber-700' : 'bg-green-600 hover:bg-green-700'}`}>
              {isActive ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
            </button>
            <button onClick={resetTimer} className="p-3 rounded-full bg-stone-600 hover:bg-stone-500 transition-colors">
              <RotateCcw size={24} />
            </button>
          </div>
          {timeLeft === 0 && <p className="mt-4 text-red-400 font-bold animate-bounce">時間到！請出湯</p>}
        </div>
      );
    };

    return (
      <div className="museum-page">
        <div className="museum-stage">
          {notesMode && (
            <div className="mb-10 museum-panel p-7 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="min-w-0">
                  <div className="museum-label mx-auto lg:mx-0">TEA HOUSE · NOTES</div>
                  <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">製程與沖泡｜筆記卡</h2>
                  <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                    先用一張筆記卡把「工藝 → 茶性 → 沖泡」串成一條線；需要詳細步驟、表格與選茶沖泡時，再展開完整百科。
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                  <button
                    type="button"
                    onClick={() => setShowBrewingAtlas(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                  >
                    展開百科
                    <ChevronRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowBrewingAtlas(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                  >
                    直接開始沖泡
                    <ChevronRight size={16} className="text-emerald-700" />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 1</div>
                  <div className="mt-1 font-bold text-stone-900">看懂製程</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">萎凋、做青、殺青、揉捻、乾燥與焙火，決定茶性與香氣。</div>
                </div>
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 2</div>
                  <div className="mt-1 font-bold text-stone-900">選對水與器</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">水溫、溶氧、礦物質與器具保溫性，會放大或掩蓋風味。</div>
                </div>
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 3</div>
                  <div className="mt-1 font-bold text-stone-900">時間與出湯</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">投茶量與出湯節奏是「把茶泡好」的最後一哩路。</div>
                </div>
              </div>
            </div>
          )}

          {!notesMode || showBrewingAtlas ? (
            <>
              <div className="mb-12 museum-panel p-8 md:p-12 text-center">
                <div className="museum-label mx-auto">EXHIBIT · BREWING</div>
                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-stone-900">工藝與沖泡指南</h2>
                <p className="mt-4 text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">從製作工藝理解茶性，用正確的方式喚醒茶魂。</p>
              </div>
              <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl p-8 md:p-12 mb-16 shadow-lg border border-stone-300 relative overflow-hidden"><div className="relative z-10"><h3 className="text-3xl font-bold text-stone-900 mb-2">製茶工藝：大師的智慧</h3><p className="text-stone-600 text-lg font-medium mb-8">科學與藝術的完美結合</p><div className="grid md:grid-cols-3 gap-6"><div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-amber-500"><h4 className="font-bold text-stone-800 mb-3 flex items-center"><Sun size={20} className="mr-2 text-amber-500" /> 天時地利</h4><p className="text-sm text-stone-600">陽光強弱、氣溫高低、吹南風還是北風、茶園向陽或背陽，這些細微的自然因素都決定了當天的製茶策略。</p></div><div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500"><h4 className="font-bold text-stone-800 mb-3 flex items-center"><Wind size={20} className="mr-2 text-blue-500" /> 精準拿捏</h4><p className="text-sm text-stone-600">萎凋的時間、揉捻的力道、殺菁的關鍵點。製茶師依賴經驗與手感。</p></div><div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500"><h4 className="font-bold text-stone-800 mb-3 flex items-center"><Mountain size={20} className="mr-2 text-green-500" /> 多重因素</h4><p className="text-sm text-stone-600">茶葉的好壞是日照、氣溫、濕度、土質、海拔等多重因素共同造就的結果。</p></div></div></div></div>

              {/* Water Quality Section: Why not over-boil? */}
              <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 border-t-8 border-sky-500 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="bg-sky-100 p-3 rounded-full mr-4">
                    <Droplets className="text-sky-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900">為什麼不能用久煮的水泡茶？</h3>
                    <p className="text-stone-500">科學與文化的雙重解析：從「水」看茶湯的靈魂</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column: Science */}
                  <div className="space-y-6">
                    <h4 className="font-bold text-xl text-stone-800 flex items-center border-b border-stone-200 pb-2">
                      <FlaskConical className="mr-2 text-sky-500" size={20} /> 一、科學層面
                    </h4>

                    <div className="space-y-4">
                      <div className="bg-stone-50 p-4 rounded-lg">
                        <h5 className="font-bold text-sky-800 mb-1 flex items-center">1. 溶解氧減少 <span className="ml-2 text-xs bg-sky-200 text-sky-800 px-2 py-0.5 rounded-full">關鍵</span></h5>
                        <p className="text-sm text-stone-600">
                          水中的溶解氧在煮沸時逸散。含氧量低的水泡茶，茶湯會失去活性，口感平淡沉悶，缺乏鮮爽感。
                        </p>
                      </div>

                      <div className="bg-stone-50 p-4 rounded-lg">
                        <h5 className="font-bold text-stone-800 mb-1">2. 礦物質濃縮</h5>
                        <p className="text-sm text-stone-600">
                          長時間煮沸使鈣、鎂濃縮析出形成水垢（碳酸鈣等）。這會影響茶湯澄清度，導致混濁或澀感，也降低熱傳導效率。
                        </p>
                      </div>

                      <div className="bg-stone-50 p-4 rounded-lg">
                        <h5 className="font-bold text-stone-800 mb-1">3. 安全疑慮 (亞硝酸鹽/其他)</h5>
                        <p className="text-sm text-stone-600">
                          雖反覆煮沸會微量增加亞硝酸鹽，通常仍在安全範圍。另需注意氯揮發時可能產生的三鹵甲烷，以及微量懸浮顆粒(PM2.5)。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Culture & Advice */}
                  <div className="flex flex-col justify-between">
                    <div className="mb-8">
                      <h4 className="font-bold text-xl text-stone-800 flex items-center border-b border-stone-200 pb-2 mb-4">
                        <Feather className="mr-2 text-amber-500" size={20} /> 二、品茶文化層面
                      </h4>
                      <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                        <ul className="space-y-3 text-stone-700">
                          <li className="flex items-start">
                            <span className="font-bold text-amber-800 mr-2 whitespace-nowrap">講究「活水」：</span>
                            <span className="text-sm">「活水先養茶，靜水不出香」。死水（久煮水）讓茶湯呆滯無生氣。</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold text-amber-800 mr-2 whitespace-nowrap">專業避忌：</span>
                            <span className="text-sm">茶藝競賽中，使用久煮水被視為失誤，影響香氣層次。</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-xl text-stone-800 flex items-center border-b border-stone-200 pb-2 mb-4">
                        <CheckCircle className="mr-2 text-green-600" size={20} /> 三、實務建議 & 小結
                      </h4>

                      <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                        <ul className="space-y-2 text-stone-700 mb-4 text-sm">
                          <li className="flex items-start"><ArrowRight size={16} className="mt-1 mr-2 text-green-600 flex-shrink-0" /> 煮水一次沸騰即可，勿反覆燒開。</li>
                          <li className="flex items-start"><ArrowRight size={16} className="mt-1 mr-2 text-green-600 flex-shrink-0" /> 沒用完的水建議倒掉換新，或加新水再煮。</li>
                          <li className="flex items-start"><ArrowRight size={16} className="mt-1 mr-2 text-green-600 flex-shrink-0" /> 推薦使用新鮮山泉水或礦泉水。</li>
                        </ul>
                        <div className="border-t border-green-200 pt-3 mt-3">
                          <span className="font-bold text-green-800 block mb-2 text-sm">總結影響：</span>
                          <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 font-medium">
                            <span className="flex items-center"><span className="text-red-500 mr-1">✕</span> 味道：不鮮活</span>
                            <span className="flex items-center"><span className="text-red-500 mr-1">✕</span> 外觀：易混濁</span>
                            <span className="flex items-center"><span className="text-amber-500 mr-1">!</span> 健康：理論疑慮</span>
                            <span className="flex items-center"><span className="text-red-500 mr-1">✕</span> 茶藝：不專業</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-3 mb-8 lg:mb-0"><div className="bg-white shadow rounded-lg overflow-hidden"><div className="px-4 py-5 bg-stone-200"><h3 className="font-medium">選擇茶種</h3></div><div className="divide-y divide-stone-100">{teaData.map((tea) => (<button key={tea.id} onClick={() => setSelectedTeaForBrewing(tea.id)} className={`w-full text-left px-4 py-4 ${selectedTeaForBrewing === tea.id ? 'bg-stone-50 border-l-4 border-green-600' : ''}`}>{tea.name}</button>))}</div></div></div>
                <div className="lg:col-span-9">
                  <div className="bg-white shadow-lg rounded-lg p-8 border border-stone-100 mb-8">
                    <h2 className="text-3xl font-bold mb-6" style={{ color: activeTea.textColor }}>{activeTea.name}</h2>
                    <div className="grid grid-cols-3 gap-4 text-center mb-8"><div className="bg-stone-50 p-4 rounded"><p className="text-xs text-stone-500">水溫</p><p className="font-bold">{activeTea.temp}</p></div><div className="bg-stone-50 p-4 rounded"><p className="text-xs text-stone-500">時間</p><p className="font-bold">{activeTea.time}</p></div><div className="bg-stone-50 p-4 rounded"><p className="text-xs text-stone-500">湯色</p><p className="font-bold">{activeTea.liquorColor}</p></div></div>
                    <p className="text-stone-700 leading-relaxed mb-8">{activeTea.brewingTips}</p>
                    <TeaTimer defaultSeconds={activeTea.seconds || 60} />
                  </div>
                </div>
              </div>
            </>
          ) : notesMode ? (
            <div className="museum-panel p-7 md:p-10 text-center">
              <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
              <div className="mt-4 text-lg font-extrabold text-stone-900">需要時再展開完整製程與沖泡百科</div>
              <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                百科包含：製茶工藝導讀、水質科學解析、選茶沖泡建議與計時器。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => setShowBrewingAtlas(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                >
                  展開百科內容
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };
