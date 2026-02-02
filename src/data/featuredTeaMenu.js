import featuredTeaMenu from './featuredTeaMenu.json';

function validateFeaturedTeaMenu(data) {
  if (!Array.isArray(data)) throw new Error('featuredTeaMenu 必須是陣列');

  const ids = new Set();
  data.forEach((item, index) => {
    if (item == null || typeof item !== 'object') throw new Error(`featuredTeaMenu[${index}] 必須是物件`);

    ['id', 'label', 'subtitle', 'activeClass', 'swatch'].forEach((field) => {
      if (typeof item[field] !== 'string' || item[field].trim().length === 0) {
        throw new Error(`featuredTeaMenu[${index}].${field} 必須是非空字串`);
      }
    });

    if (!/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(item.swatch)) {
      throw new Error(`featuredTeaMenu[${index}].swatch 必須是 hex color（例如 #34d399）`);
    }

    if (ids.has(item.id)) throw new Error(`featuredTeaMenu 出現重複 id: ${item.id}`);
    ids.add(item.id);
  });
}

validateFeaturedTeaMenu(featuredTeaMenu);

export default featuredTeaMenu;
