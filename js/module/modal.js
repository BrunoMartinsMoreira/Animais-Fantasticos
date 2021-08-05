export default function initModal() {
   const openBtn = document.querySelector('[data-modal="abrir"]');
   const closeBtn = document.querySelector('[data-modal="fechar"]');
   const modalContainer = document.querySelector('[data-modal="container"]');

   if (openBtn && closeBtn && modalContainer) {
      function openModal(event) {
         event.preventDefault()
         modalContainer.classList.add('active')
      }

      function closeModal(event) {
         event.preventDefault()
         modalContainer.classList.remove('active')
      }

      function clickContainerToCloseModal(event) {
         if (event.target === this) {
            closeModal(event)
         }

      }

      openBtn.addEventListener('click', openModal);
      closeBtn.addEventListener('click', closeModal);
      modalContainer.addEventListener('click', clickContainerToCloseModal);
   }
}