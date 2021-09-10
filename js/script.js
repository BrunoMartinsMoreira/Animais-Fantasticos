import softScroll from "./module/softScroll.js";
import Accordion from "./module/accordionNav.js";
import TabNav from "./module/tabNav.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/toolTip.js";
import buscaAnimais from './module/fetchAnimais.js';
import FetchBtc from './module/fetchBtc.js';
import AnimaScroll from "./module/scrollAnimation.js";
import DropDownMenu from './module/dropDownMenu.js';
import MenuMobile from './module/menuMobile.js';
import Funcionamento from './module/horarioDeFuncionamento.js';

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

const animaScroll = new AnimaScroll('.js-scroll', 'active');
animaScroll.init();

const dropDown = new DropDownMenu('[data-dropdown]');
dropDown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();

buscaAnimais('../animais.json', '.numeros-grid');
FetchBtc('https://blockchain.info/ticker', '.btc-preco');

































