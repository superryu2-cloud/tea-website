import { useCallback, useState } from 'react';

const DAGUAN_UNLOCK_KEY = 'academy.daguanUnlocked';
const CHONGHUA_UNLOCK_KEY = 'academy.chonghuaUnlocked';
const ACADEMY_MENU_HIDDEN_KEY = 'academy.menuHidden';
const LEGACY_UNLOCK_KEY = 'museumUnlocked';

const getLocalStorage = () => {
  if (typeof window === 'undefined') return null;
  return window.localStorage;
};

export default function useAcademyUnlock() {
  const [daguanUnlocked, setDaguanUnlocked] = useState(() => {
    const storage = getLocalStorage();
    if (!storage) return false;

    const stored = storage.getItem(DAGUAN_UNLOCK_KEY) === 'true';
    if (stored) return true;

    const legacy = storage.getItem(LEGACY_UNLOCK_KEY) === 'true';
    if (legacy) {
      try {
        storage.setItem(DAGUAN_UNLOCK_KEY, 'true');
      } catch {
        // ignore
      }
      return true;
    }

    return false;
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
      storage?.removeItem(DAGUAN_UNLOCK_KEY);
      storage?.removeItem(CHONGHUA_UNLOCK_KEY);
      storage?.removeItem(LEGACY_UNLOCK_KEY);
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
        storage?.setItem(DAGUAN_UNLOCK_KEY, 'true');
        setAcademyMenuHidden(false);
        storage?.setItem(ACADEMY_MENU_HIDDEN_KEY, 'false');
      }

      if (targetKey === 'chonghua') {
        setChonghuaUnlocked(true);
        storage?.setItem(CHONGHUA_UNLOCK_KEY, 'true');
        setAcademyMenuHidden(false);
        storage?.setItem(ACADEMY_MENU_HIDDEN_KEY, 'false');
      }

      storage?.removeItem(LEGACY_UNLOCK_KEY);
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
