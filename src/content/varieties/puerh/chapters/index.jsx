import { createPuerhChapter01 } from './PuerhChapter01.jsx';
import { createPuerhChapter02 } from './PuerhChapter02.jsx';
import { createPuerhChapter03 } from './PuerhChapter03.jsx';
import { createPuerhChapter04 } from './PuerhChapter04.jsx';
import { createPuerhChapter05 } from './PuerhChapter05.jsx';
import { createPuerhChapter06 } from './PuerhChapter06.jsx';
import { createPuerhChapter07 } from './PuerhChapter07.jsx';
import { createPuerhChapter08 } from './PuerhChapter08.jsx';
import { createPuerhChapter09 } from './PuerhChapter09.jsx';
import { createPuerhChapter10 } from './PuerhChapter10.jsx';
import { createPuerhChapter11 } from './PuerhChapter11.jsx';
import { createPuerhChapter12 } from './PuerhChapter12.jsx';

export function createPuerhChapters(setLightboxData) {
  return {
    '#puerh-1': createPuerhChapter01(setLightboxData),
    '#puerh-2': createPuerhChapter02(setLightboxData),
    '#puerh-3': createPuerhChapter03(setLightboxData),
    '#puerh-4': createPuerhChapter04(setLightboxData),
    '#puerh-5': createPuerhChapter05(setLightboxData),
    '#puerh-6': createPuerhChapter06(setLightboxData),
    '#puerh-7': createPuerhChapter07(setLightboxData),
    '#puerh-8': createPuerhChapter08(setLightboxData),
    '#puerh-9': createPuerhChapter09(setLightboxData),
    '#puerh-10': createPuerhChapter10(setLightboxData),
    '#puerh-11': createPuerhChapter11(setLightboxData),
    '#puerh-12': createPuerhChapter12(setLightboxData),
  };
}
