import outsideClick from './outsideClick.js';

export default class MenuMobile {
   constructor(menuBtn, menuList, events) {
      this.menuButton = document.querySelector(menuBtn);
      this.menuList = document.querySelector(menuList);
      this.active = 'active';
      this.openMenu = this.openMenu.bind(this);

      (events === undefined)
         ? this.events = ['click', 'touchstart']
         : this.events = events
   }

   openMenu() {
      this.menuList.classList.add(this.active);
      this.menuButton.classList.add(this.active);
      outsideClick(this.menuList, this.events, () => {
         this.menuList.classList.remove(this.active);
         this.menuButton.classList.remove(this.active);
      })
   }

   addEvent() {
      this.events.forEach((event) => {
         this.menuButton.addEventListener(event, this.openMenu);
      })
   }

   init() {
      if (this.menuButton && this.menuList) {
         this.addEvent();
      }
      return this;
   }
}