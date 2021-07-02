function tabNav() {
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
         tabContent[index].classList.add('active');
      }

      //adicionar evento -click- em cada imagem
      tabMenu.forEach((itemMenu, index) => {
         itemMenu.addEventListener('click', () => {
            activeTab(index);
         });
      });
   }
}
tabNav();

function accordionNavigation() {
   const accordionList = document.querySelectorAll('.accordion dt');
   const activeClass = 'active';

   if (accordionList.length) {
      accordionList[0].classList.add(activeClass);
      accordionList[0].nextElementSibling.classList.add(activeClass);

      function activeAccordion() {
         this.classList.toggle(activeClass);
         this.nextElementSibling.classList.toggle(activeClass);
      }

      accordionList.forEach((item) => {
         item.addEventListener('click', activeAccordion);
      })
   }
}
accordionNavigation();