export default class Modal {
   constructor(openBtn, closeBtn, modalContainer) {
      this.openBtn = document.querySelector(openBtn);
      this.closeBtn = document.querySelector(closeBtn);
      this.modalContainer = document.querySelector(modalContainer);
      this.activeClass = 'active';

      this.eventToggleModal = this.eventToggleModal.bind(this);
      this.clickAwayModal = this.clickAwayModal.bind(this);
   }

   toggleModal() {
      this.modalContainer.classList.toggle(this.activeClass)
   }

   eventToggleModal(event) {
      event.preventDefault();
      this.toggleModal();
   }
   // fecha o modal ao clicar fora dele
   clickAwayModal(event) {
      if (event.target === this.modalContainer) {
         this.toggleModal()
      }
   }

   addEvent() {
      this.openBtn.addEventListener('click', this.eventToggleModal);
      this.closeBtn.addEventListener('click', this.eventToggleModal);
      this.modalContainer.addEventListener('click', this.clickAwayModal);
   }

   init() {
      if (this.openBtn && this.closeBtn && this.modalContainer) {
         this.addEvent()
      }
      return this;
   }

   /* {
   
   }*/
}