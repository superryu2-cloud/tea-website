import { useCallback, useState } from 'react';

const DAGUAN_UNLOCK_KEY = 'academy.daguanUnlocked';
const CHONGHUA_UNLOCK_KEY = 'academy.chonghuaUnlocked';
const ACADEMY_MENU_HIDDEN_KEY = 'academy.menuHidden';
const getLocalStorage = () => {
  if (typeof window === 'undefined') return null;
  return window.localStorage;
};
const getSessionStorage = () => {
  if (typeof window === 'undefined') return null;
  return window.sessionStorage;
};

export default function useAcademyUnlock() {
  const [daguanUnlocked, setDaguanUnlocked] = useState(() => {
    const storage = getSessionStorage();
    if (!storage) return false;
    return storage.getItem(DAGUAN_UNLOCK_KEY) === 'true';
  });

  const [chonghuaUnlocked, setChonghuaUnlocked] = useState(() => {
    const storage = getLocalStorage();
    if (!storage) return false;
    return storage.getItem(CHONGHUA_UNLOCK_KEY) === 'true';
  });

  const [passwordModalTarget, setPasswordModalTarget] = useState(null);

  const [academyMenuHidden, setAcademyMenuHidden] = useState(() => {
    const storage = getLocalStorage();
    if (!storage) return true;
    const stored = storage.getItem(ACADEMY_MENU_HIDDEN_KEY);
    if (stored === null) return true;
    return stored === 'true';
  });

  const lockAcademyMenu = useCallback(() => {
    setDaguanUnlocked(false);
    setChonghuaUnlocked(false);
    setAcademyMenuHidden(true);

    try {
      const storage = getLocalStorage();
      getSessionStorage()?.removeItem(DAGUAN_UNLOCK_KEY);
      storage?.removeItem(DAGUAN_UNLOCK_KEY);
      storage?.removeItem(CHONGHUA_UNLOCK_KEY);
      storage?.setItem(ACADEMY_MENU_HIDDEN_KEY, 'true');
    } catch {
      // ignore
    }
  }, []);

  const requestUnlock = useCallback((targetKey) => {
    if (targetKey === false) {
      lockAcademyMenu();
      return;
    }

    setPasswordModalTarget(targetKey ?? 'any');
  }, [lockAcademyMenu]);

  const handleUnlockSuccess = useCallback((targetKey) => {
    try {
      const storage = getLocalStorage();

      if (targetKey === 'daguan') {
        setDaguanUnlocked(true);
        getSessionStorage()?.setItem(DAGUAN_UNLOCK_KEY, 'true');
        storage?.removeItem(DAGUAN_UNLOCK_KEY);
        setAcademyMenuHidden(false);
        storage?.setItem(ACADEMY_MENU_HIDDEN_KEY, 'false');
      }

      if (targetKey === 'chonghua') {
        setChonghuaUnlocked(true);
        storage?.setItem(CHONGHUA_UNLOCK_KEY, 'true');
        setAcademyMenuHidden(false);
        storage?.setItem(ACADEMY_MENU_HIDDEN_KEY, 'false');
      }

    } catch {
      // ignore
    }

    setPasswordModalTarget(null);
  }, []);

  const closePasswordModal = useCallback(() => {
    setPasswordModalTarget(null);
  }, []);

  return {
    daguanUnlocked,
    chonghuaUnlocked,
    academyMenuHidden,
    passwordModalTarget,
    closePasswordModal,
    handleUnlockRequest: requestUnlock,
    handleUnlockSuccess,
  };
}
