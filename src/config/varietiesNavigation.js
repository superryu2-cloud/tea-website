import {
  CHEN_CHUAN_TOC,
  OOLONG_TOC,
  RED_TOC,
  WHITE_TOC_EXTENDED as CONFIG_WHITE_TOC_EXTENDED,
} from './navigation';

export const VARIETIES_SUBITEMS_BY_KEY = {
  ref_chenchuan: [{ href: '#cc-all', label: '全部章節' }, ...CHEN_CHUAN_TOC],
  oolong: OOLONG_TOC,
  red: RED_TOC,
  white: CONFIG_WHITE_TOC_EXTENDED,
};
