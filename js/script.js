import softScroll from "./module/softScroll.js";
import Accordion from "./module/accordionNav.js";
import TabNav from "./module/tabNav.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/toolTip.js";
import buscaAnimais from './module/fetchAnimais.js';
import FetchBtc from './module/fetchBtc.js'


const scrollSuave = new softScroll('.navmenu a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('.accordion dt');
accordion.init();

const tabNav = new TabNav('.tabmenu li', '.tabcontent section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init()

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

buscaAnimais('../animais.json', '.numeros-grid');
FetchBtc('https://blockchain.info/ticker', '.btc-preco');




import initDropDownMenu from './module/dropDownMenu.js';
import initMenuMobile from './module/menuMobile.js';
import initFuncionamento from './module/horarioDeFuncionamento.js';

import initAnimatedScroll from "./module/scrollAnimation.js";






initDropDownMenu();
initMenuMobile();
initFuncionamento();
initAnimatedScroll();














