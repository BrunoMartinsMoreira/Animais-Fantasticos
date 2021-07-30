export default function tabNav() {
   const tabMenu = document.querySelectorAll('.tabmenu li');
   const tabContent = document.querySelectorAll('.tabcontent section');

   if (tabMenu.length && tabContent.length) {
      tabContent[0].classList.add('active')
      //Recebe index como parâmetro para ativar a tab. 
      //Sempre que ativar, remove a classe active
      // de todos os outros elementos.
      function activeTab(index) {
         tabContent.forEach((content) => {
            content.classList.remove('active');
         });
         const direction = tabContent[index].dataset.anime;
         tabContent[index].classList.add('active', direction);
      }

      //adicionar evento -click- em cada imagem
      tabMenu.forEach((itemMenu, index) => {
         itemMenu.addEventListener('click', () => {
            activeTab(index);
         });
      });
   }
}
