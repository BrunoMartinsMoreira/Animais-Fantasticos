import softScroll from "./module/softScroll.js";

const scrollSuave = new softScroll('.navmenu a[href^="#"]');
scrollSuave.init();




import initAnimatedScroll from "./module/scrollAnimation.js";
import accordionNavigation from "./module/accordionNav.js";
import tabNav from "./module/tabNav.js";
import initModal from "./module/modal.js";
import initTooltip from "./module/toolTip.js";
import initDropDownMenu from './module/dropDownMenu.js';
import initMenuMobile from './module/menuMobile.js';
import initFuncionamento from './module/horarioDeFuncionamento.js';
import initFetchAnimais from './module/fetchAnimais.js';
import initFetchBtc from './module/fetchBtc.js'


initAnimatedScroll();
accordionNavigation();
tabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBtc();














