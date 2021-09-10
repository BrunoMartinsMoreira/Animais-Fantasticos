import outsideClick from "./outsideClick.js";

export default class DropDownMenu {
   constructor(dropDownMenus) {
      this.dropDownMenus = document.querySelectorAll(dropDownMenus);
      this.activeDropDown = this.activeDropDown.bind(this);
      this.activeClass = 'active';
   }

   activeDropDown(event) {
      event.preventDefault()
      const targetEl = event.currentTarget;
      targetEl.classList.add(this.activeClass)
      outsideClick(targetEl, ['touchstart', 'click'], () => {
         targetEl.classList.remove(this.activeClass)
      })
   }

   addEvent() {
      this.dropDownMenus.forEach(menu => {
         ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, this.activeDropDown)
         })
      });
   }

   init() {
      if (this.dropDownMenus.length) {
         this.addEvent();
      }
      return this
   }
}