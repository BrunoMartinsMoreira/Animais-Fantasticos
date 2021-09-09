import softScroll from "./module/softScroll.js";
import Accordion from "./module/accordionNav.js";

const scrollSuave = new softScroll('.navmenu a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('.accordion dt');
accordion.init();






import tabNav from "./module/tabNav.js";
import initModal from "./module/modal.js";
import initTooltip from "./module/toolTip.js";
import initDropDownMenu from './module/dropDownMenu.js';
import initMenuMobile from './module/menuMobile.js';
import initFuncionamento from './module/horarioDeFuncionamento.js';
import initFetchAnimais from './module/fetchAnimais.js';
import initFetchBtc from './module/fetchBtc.js'
import initAnimatedScroll from "./module/scrollAnimation.js";



tabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBtc();
initAnimatedScroll();














