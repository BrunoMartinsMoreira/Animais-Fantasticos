export default class Accordion {
   constructor(list) {
      this.accordionList = document.querySelectorAll(list);
      this.activeClass = 'active';
   }

   activeAccordion(item) {
      item.classList.toggle(this.activeClass);
      item.nextElementSibling.classList.toggle(this.activeClass);
   }

   //add eventos no accordion
   addEvent() {
      this.accordionList.forEach((item) => {
         item.addEventListener('click', () => this.activeAccordion(item));
      })
   }

   //iniciar função
   init() {
      if (this.accordionList.length) {
         // seleciona o 1º item do accordion
         this.activeAccordion(this.accordionList[0]);
         this.addEvent();
      }
      return this;
   }
}




