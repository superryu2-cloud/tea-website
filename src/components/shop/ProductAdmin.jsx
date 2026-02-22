import React, { useState, useEffect } from 'react';
import {
    getAllProducts, addProduct, updateProduct, deleteProduct,
    DEFAULT_ORDER_URL, PAGE_OPTIONS, getDisplayConfig, saveDisplayConfig,
} from '../../data/productData';
import { Plus, Trash2, Edit3, Save, X, Package, ShoppingBag, Tag, DollarSign, Image, Link, FileText, Settings, Eye, EyeOff, Monitor, Copy, Code } from 'lucide-react';

const CATEGORIES = [
    { value: 'teaware', label: '茶具' },
    { value: 'tea', label: '茶葉' },
    { value: 'accessory', label: '配件' },
];

const COMMON_TAGS = ['茶具', '茶葉', '茶席', '壺承', '勻杯', '席方', '茶理', '茶撥', '茶掏', '茶荷', '茶則', '烏龍', '岩茶', '東方美人', '凍頂', '冬片', '高山茶', '台灣烏龍', '紅茶', '綠茶', '蜜香'];

const EMPTY_FORM = {
    name: '', subtitle: '', price: '', image: '', tags: [],
    category: 'teaware', orderUrl: '', description: '', specs: '',
};

function Field({ label, icon: Icon, children }) {
    return (
        <label className="block">
            <span className="flex items-center gap-2 text-[14px] font-bold text-stone-500 mb-2" style={{ fontFamily: 'sans-serif' }}>
                {Icon && <Icon size={14} />} {label}
            </span>
            {children}
        </label>
    );
}

const inputCls = 'w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-[17px] text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition';
const ff = { fontFamily: 'sans-serif' };

const catBadge = { teaware: 'bg-amber-100 text-amber-700', tea: 'bg-emerald-100 text-emerald-700', accessory: 'bg-blue-100 text-blue-700' };
const catLabel = { teaware: '茶具', tea: '茶葉', accessory: '配件' };

export default function ProductAdmin() {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState(EMPTY_FORM);
    const [editingId, setEditingId] = useState(null);
    const [isNew, setIsNew] = useState(false);
    const [enabledPages, setEnabledPages] = useState(() => getDisplayConfig());

    const reload = () => setProducts(getAllProducts());
    useEffect(() => { reload(); }, []);

    function togglePage(pageId) {
        setEnabledPages((prev) => {
            const next = prev.includes(pageId) ? prev.filter((p) => p !== pageId) : [...prev, pageId];
            saveDisplayConfig(next);
            return next;
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.price) return;
        const data = {
            ...form,
            price: Number(form.price) || 0,
            tags: form.tags || [],
            specs: typeof form.specs === 'string'
                ? form.specs.split(/[,，、]/).map((s) => s.trim()).filter(Boolean)
                : form.specs,
            orderUrl: form.orderUrl || DEFAULT_ORDER_URL,
            image: form.image || '/images/shop/placeholder_teaware.png',
        };
        if (isNew) { addProduct(data); }
        else if (editingId) { updateProduct(editingId, data); }
        setForm(EMPTY_FORM);
        setEditingId(null);
        setIsNew(false);
        reload();
    }

    function handleEdit(p) {
        setForm({
            ...p,
            specs: Array.isArray(p.specs) ? p.specs.join('、') : p.specs || '',
        });
        setEditingId(p.id);
        setIsNew(false);
    }

    function handleNew() {
        setForm(EMPTY_FORM);
        setEditingId(null);
        setIsNew(true);
    }

    function handleCancel() {
        setForm(EMPTY_FORM);
        setEditingId(null);
        setIsNew(false);
    }

    function handleDelete(id) {
        if (!confirm('確定刪除此商品？')) return;
        deleteProduct(id);
        if (editingId === id) handleCancel();
        reload();
    }

    function toggleTag(tag) {
        setForm((f) => ({
            ...f,
            tags: f.tags.includes(tag) ? f.tags.filter((t) => t !== tag) : [...f.tags, tag],
        }));
    }

    const showEditor = isNew || editingId;

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6" style={ff}>
            {/* 標題 */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <Package size={26} className="text-emerald-600" />
                    <h1 className="text-[24px] font-extrabold text-stone-900" style={ff}>商品管理</h1>
                    <span className="text-[17px] text-stone-400 ml-2" style={ff}>共 {products.length} 項</span>
                </div>
                <button
                    onClick={handleNew}
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[17px] px-6 py-3 rounded-full transition-colors shadow-md"
                    style={ff}
                >
                    <Plus size={18} />
                    新增商品
                </button>
            </div>

            {/* 左右分欄：左列表窄一點，右編輯寬一些 */}
            <div className="grid lg:grid-cols-[480px_1fr] gap-6 items-start">

                {/* ── 左側：商品列表 ── */}
                <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                    <div className="px-5 py-3 bg-stone-50 border-b border-stone-200">
                        <p className="text-[14px] font-bold text-stone-500" style={ff}>商品列表 — 點擊編輯</p>
                    </div>
                    <div className="divide-y divide-stone-100 max-h-[75vh] overflow-y-auto">
                        {products.length === 0 && (
                            <div className="text-center py-16 text-stone-400">
                                <ShoppingBag size={40} className="mx-auto opacity-30 mb-3" />
                                <p className="text-[17px]" style={ff}>還沒有商品</p>
                            </div>
                        )}
                        {products.map((p) => {
                            const isActive = editingId === p.id;
                            return (
                                <div
                                    key={p.id}
                                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${isActive ? 'bg-emerald-50 border-l-4 border-emerald-500' : 'hover:bg-stone-50 border-l-4 border-transparent'}`}
                                    onClick={() => handleEdit(p)}
                                >
                                    <img
                                        src={p.image} alt={p.name}
                                        className="w-12 h-12 rounded-lg object-cover bg-stone-100 shrink-0"
                                        onError={(e) => { e.target.src = '/images/shop/placeholder_teaware.png'; }}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[17px] font-extrabold text-stone-900 truncate" style={ff}>{p.name}</span>
                                            <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${catBadge[p.category]}`} style={ff}>
                                                {catLabel[p.category]}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="text-[14px] font-bold text-emerald-700" style={ff}>NT${p.price}</span>
                                            <span className="text-[13px] text-stone-400 truncate" style={ff}>{p.subtitle}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 shrink-0">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleEdit(p); }}
                                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isActive ? 'bg-emerald-200 text-emerald-700' : 'bg-stone-100 hover:bg-blue-100 text-stone-400 hover:text-blue-600'}`}
                                            title="編輯"
                                        >
                                            <Edit3 size={14} />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleDelete(p.id); }}
                                            className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-red-100 flex items-center justify-center text-stone-400 hover:text-red-500 transition-colors"
                                            title="刪除"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── 右側：編輯面板（寬） ── */}
                <div className="lg:sticky lg:top-24">
                    {showEditor ? (
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
                            {/* 頂部色條 */}
                            <div className={`h-2 ${isNew ? 'bg-gradient-to-r from-blue-400 to-indigo-500' : 'bg-gradient-to-r from-teal-400 to-emerald-500'}`} />

                            <div className="p-8 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-[22px] font-extrabold text-stone-900" style={ff}>
                                        {isNew ? '➕ 新增商品' : '✏️ 編輯商品'}
                                    </h2>
                                    <button type="button" onClick={handleCancel} className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-600 transition-colors">
                                        <X size={18} />
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <Field label="商品名稱" icon={ShoppingBag}>
                                        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className={inputCls} style={ff} placeholder="手工圓形壺承" required />
                                    </Field>
                                    <Field label="價格（NT$）" icon={DollarSign}>
                                        <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
                                            className={inputCls} style={ff} placeholder="780" required min="0" />
                                    </Field>
                                </div>

                                <Field label="簡介" icon={FileText}>
                                    <input value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                                        className={inputCls} style={ff} placeholder="柴燒質感，穩固四平" />
                                </Field>

                                <div className="grid grid-cols-2 gap-5">
                                    <Field label="分類">
                                        <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={inputCls} style={ff}>
                                            {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                                        </select>
                                    </Field>
                                    <Field label="圖片路徑" icon={Image}>
                                        <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
                                            className={inputCls} style={ff} placeholder="/images/shop/xxx.png" />
                                    </Field>
                                </div>

                                <Field label="購買連結（Google 表單）" icon={Link}>
                                    <input value={form.orderUrl} onChange={(e) => setForm({ ...form, orderUrl: e.target.value })}
                                        className={inputCls} style={ff} placeholder="留空使用預設 Google 表單" />
                                </Field>

                                <Field label="詳細說明" icon={FileText}>
                                    <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                                        className={inputCls + ' h-44 resize-y'} style={ff} placeholder="商品說明..." />
                                </Field>

                                <Field label="規格（頓號分隔）" icon={Settings}>
                                    <input value={form.specs} onChange={(e) => setForm({ ...form, specs: e.target.value })}
                                        className={inputCls} style={ff} placeholder="直徑 15cm、高 2.5cm、陶製" />
                                </Field>

                                {/* 標籤 */}
                                <Field label="關聯標籤（點選即可，用於課程匹配）" icon={Tag}>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {COMMON_TAGS.map((tag) => (
                                            <button
                                                key={tag} type="button"
                                                onClick={() => toggleTag(tag)}
                                                className={`text-[15px] font-semibold px-3 py-1 rounded-full border transition-colors ${form.tags.includes(tag)
                                                    ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                                                    : 'bg-white text-stone-400 border-stone-200 hover:border-emerald-300'
                                                    }`}
                                                style={ff}
                                            >
                                                {form.tags.includes(tag) ? '✓ ' : '# '}{tag}
                                            </button>
                                        ))}
                                    </div>
                                </Field>

                                {/* 預覽 */}
                                {form.name && (
                                    <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5 mt-2">
                                        <p className="text-[13px] font-bold text-stone-400 uppercase tracking-widest mb-3" style={ff}>即時預覽</p>
                                        <div className="flex items-center gap-4">
                                            <img src={form.image || '/images/shop/placeholder_teaware.png'} alt="" className="w-20 h-20 rounded-xl object-cover bg-stone-200"
                                                onError={(e) => { e.target.src = '/images/shop/placeholder_teaware.png'; }} />
                                            <div>
                                                <div className="text-[19px] font-extrabold text-stone-900" style={ff}>{form.name}</div>
                                                {form.subtitle && <div className="text-[17px] text-stone-500 mt-0.5" style={ff}>{form.subtitle}</div>}
                                                {form.price && <div className="text-[19px] font-bold text-emerald-700 mt-1" style={ff}>NT${form.price}</div>}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* 按鈕 */}
                                <div className="flex gap-3 pt-3">
                                    <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full transition-colors text-[17px]" style={ff}>
                                        <Save size={17} />
                                        {isNew ? '新增儲存' : '儲存修改'}
                                    </button>
                                    <button type="button" onClick={handleCancel}
                                        className="px-6 py-3 text-stone-400 hover:text-stone-600 font-semibold transition-colors text-[17px]" style={ff}>
                                        取消
                                    </button>
                                </div>
                            </div>
                        </form>
                    ) : (
                        /* 未選擇狀態 */
                        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-12 text-center">
                            <Edit3 size={48} className="mx-auto text-stone-300 mb-4" />
                            <p className="text-[19px] font-bold text-stone-400" style={ff}>選擇左側商品進行編輯</p>
                            <p className="text-[17px] text-stone-400 mt-2" style={ff}>或點擊上方「新增商品」建立新品項</p>
                        </div>
                    )}
                </div>
            </div>

            {/* ── 展示設定 ── */}
            <div className="mt-8 bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-5">
                    <Monitor size={22} className="text-indigo-600" />
                    <div>
                        <h2 className="text-[20px] font-extrabold text-stone-900" style={ff}>展示設定</h2>
                        <p className="text-[14px] text-stone-400" style={ff}>勾選要顯示「推薦商品」的頁面，即時生效</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {PAGE_OPTIONS.map((page) => {
                        const on = enabledPages.includes(page.id);
                        return (
                            <button
                                key={page.id}
                                type="button"
                                onClick={() => togglePage(page.id)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-[17px] font-semibold transition-all ${on
                                    ? 'bg-indigo-50 text-indigo-700 border-indigo-300 shadow-sm'
                                    : 'bg-white text-stone-400 border-stone-200 hover:border-indigo-200'
                                    }`}
                                style={ff}
                            >
                                {on ? <Eye size={17} className="text-indigo-500 shrink-0" /> : <EyeOff size={17} className="text-stone-300 shrink-0" />}
                                {page.label}
                            </button>
                        );
                    })}
                </div>
                <p className="mt-4 text-[14px] text-stone-400" style={ff}>
                    開啟的頁面：{enabledPages.length === 0 ? '無' : enabledPages.length + ' 個頁面'}
                </p>
            </div>

            <p className="mt-6 text-center text-[14px] text-stone-400" style={ff}>
                儲存於瀏覽器 · 清除快取會回到預設商品
            </p>

            {/* ── 匯出程式碼 ── */}
            <div className="mt-6 bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Code size={22} className="text-orange-500" />
                        <div>
                            <h2 className="text-[20px] font-extrabold text-stone-900" style={ff}>匯出程式碼</h2>
                            <p className="text-[14px] text-stone-400" style={ff}>複製後貼到 productData.js 的 DEFAULT_PRODUCTS，部署即生效</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            const all = getAllProducts().map(({ _source, ...p }) => p);
                            const code = `const DEFAULT_PRODUCTS = ${JSON.stringify(all, null, 4)};`;
                            navigator.clipboard.writeText(code).then(() => {
                                alert('✅ 已複製到剪貼簿！\n\n請打開 src/data/productData.js，\n找到 const DEFAULT_PRODUCTS = [...];\n全選替換貼上即可。');
                            }).catch(() => {
                                prompt('請手動複製以下內容：', code);
                            });
                        }}
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-[17px] px-6 py-3 rounded-full transition-colors shadow-md"
                        style={ff}
                    >
                        <Copy size={17} />
                        複製程式碼
                    </button>
                </div>
            </div>
        </div>
    );
}
