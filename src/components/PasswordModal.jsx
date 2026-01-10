import React, { useState } from 'react';

export default function PasswordModal({ isOpen, onClose, onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const MUSEUM_PASSWORD = '大觀';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === MUSEUM_PASSWORD) {
      // 密碼正確
      localStorage.setItem('museumUnlocked', 'true');
      setError('');
      onSuccess();
      setPassword('');
    } else {
      // 密碼錯誤
      setError('密碼錯誤，請重試');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setPassword('');
    }
  };

  const handleClose = () => {
    setPassword('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 ${isShaking ? 'animate-shake' : 'animate-slideUp'
          }`}
      >
        {/* 標題 */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-amber-100 mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">大觀書院</h2>
          <p className="text-sm text-stone-600">請輸入通行密碼</p>
        </div>

        {/* 表單 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入密碼"
              autoFocus
              className="w-full px-4 py-3 text-base border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
            />
            {error && (
              <p className="mt-2 text-sm text-red-600 animate-fadeIn">{error}</p>
            )}
          </div>

          {/* 按鈕 */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-3 text-base font-semibold text-stone-700 bg-stone-100 rounded-xl hover:bg-stone-200 transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl hover:from-emerald-700 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all"
            >
              確認
            </button>
          </div>
        </form>

        {/* 提示 */}
        <p className="mt-4 text-xs text-center text-stone-500">
          提示：密碼為兩個中文字
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
