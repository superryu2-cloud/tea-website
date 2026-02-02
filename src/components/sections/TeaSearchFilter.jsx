import React from 'react';
import { Filter, Search, X } from 'lucide-react';

const TeaSearchFilter = ({
    filterFermentation,
    setFilterFermentation,
    searchKeyword,
    setSearchKeyword,
    filteredCount
}) => {
    return (
        <div className="mb-12 museum-frame museum-paper p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="flex items-center text-stone-600 font-bold whitespace-nowrap">
                        <Filter size={20} className="mr-2" /> 篩選：
                    </div>
                    <select
                        value={filterFermentation}
                        onChange={(e) => setFilterFermentation(e.target.value)}
                        className="bg-white border border-stone-300 text-stone-900 text-sm rounded-xl focus:ring-green-600 focus:border-green-600 block w-full p-2.5 shadow-sm"
                    >
                        <option value="all">所有發酵程度</option>
                        <option value="不發酵">不發酵 (綠茶)</option>
                        <option value="微發酵">微發酵 (白茶)</option>
                        <option value="輕發酵">輕發酵 (黃茶)</option>
                        <option value="半發酵">半發酵 (青茶)</option>
                        <option value="全發酵">全發酵 (紅茶)</option>
                        <option value="後發酵">後發酵 (黑茶)</option>
                    </select>
                    <div className="hidden md:block text-xs text-stone-600">
                        共 <span className="font-bold text-stone-900">{filteredCount}</span> 筆
                    </div>
                </div>
                <div className="relative w-full md:w-1/3">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search size={18} className="text-stone-400" />
                    </div>
                    <input
                        type="text"
                        className="bg-white border border-stone-300 text-stone-900 text-sm rounded-xl focus:ring-green-600 focus:border-green-600 block w-full pl-10 pr-10 p-2.5 shadow-sm"
                        placeholder="搜尋代表茶品或關鍵字..."
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    {searchKeyword && (
                        <button
                            type="button"
                            onClick={() => setSearchKeyword('')}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-700"
                            aria-label="清除搜尋"
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeaSearchFilter;
