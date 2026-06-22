export const getLeadingNumber = (value) => {
  if (typeof value !== 'string') return Number.NaN;
  const match = value.trim().match(/^(\d+)/);
  if (!match) return Number.NaN;
  return Number.parseInt(match[1], 10);
};

export const buildBankTree = (questions, bankPresets) => {
  const allKey = 'all';
  const list = questions ?? [];
  const nodes = new Map();
  const presetOrder = new Map(bankPresets.map((preset, index) => [preset.key, index]));

  const ensureNode = (key, label) => {
    const stateKey = key ?? allKey;
    if (!nodes.has(stateKey)) {
      nodes.set(stateKey, { stateKey, key, label, count: 0, topics: new Map() });
    }
    return nodes.get(stateKey);
  };

  const addTopic = (node, question, bankKey) => {
    const topicKey = question.topic;
    const topicLabel = question.topicLabel;
    if (typeof topicKey !== 'string' || typeof topicLabel !== 'string') return;
    if (!node.topics.has(topicKey)) {
      node.topics.set(topicKey, { topic: topicKey, label: topicLabel, bankKey: bankKey ?? null, count: 0 });
    }
    node.topics.get(topicKey).count += 1;
  };

  const allNode = ensureNode(null, '全部題庫');

  bankPresets.forEach((preset) => {
    if (!preset || typeof preset !== 'object') return;
    if (typeof preset.key !== 'string' || preset.key.trim().length === 0) return;
    const label = typeof preset.label === 'string' && preset.label.trim().length > 0 ? preset.label.trim() : preset.key.trim();
    ensureNode(preset.key.trim(), label);
  });

  list.forEach((q) => {
    if (!q || typeof q !== 'object') return;
    allNode.count += 1;
    addTopic(allNode, q, q.bank);

    const bankKey = typeof q.bank === 'string' && q.bank.trim().length > 0 ? q.bank.trim() : null;
    if (!bankKey) return;
    const bankLabel = typeof q.bankLabel === 'string' && q.bankLabel.trim().length > 0 ? q.bankLabel.trim() : bankKey;
    const bankNode = ensureNode(bankKey, bankLabel);
    bankNode.count += 1;
    addTopic(bankNode, q, bankKey);
  });

  const nodeList = Array.from(nodes.values());
  nodeList.sort((a, b) => {
    if (a.stateKey === allKey) return -1;
    if (b.stateKey === allKey) return 1;

    const aPreset = presetOrder.get(a.stateKey);
    const bPreset = presetOrder.get(b.stateKey);
    if (aPreset != null || bPreset != null) {
      if (aPreset == null) return 1;
      if (bPreset == null) return -1;
      return aPreset - bPreset;
    }
    return a.label.localeCompare(b.label, 'zh-Hant');
  });

  nodeList.forEach((node) => {
    const topicsArray = Array.from(node.topics.values());
    topicsArray.sort((a, b) => {
      const an = getLeadingNumber(a.label);
      const bn = getLeadingNumber(b.label);
      if (Number.isFinite(an) && Number.isFinite(bn) && an !== bn) return an - bn;
      return a.label.localeCompare(b.label, 'zh-Hant');
    });
    node.topics = topicsArray;
  });

  return nodeList;
};

export const safeJsonParse = (value) => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const seededRandom = (seed, step) => {
  const value = Math.sin((seed + 1) * 1009 + step * 9176) * 10000;
  return value - Math.floor(value);
};

export const shuffleCards = (list, seed) => {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(seededRandom(seed, i) * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
};
