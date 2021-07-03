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

function softScroll() {
   const internalLinks = document.querySelectorAll('.navmenu a[href^="#"]')

   function scrollToSection(event) {
      event.preventDefault();
      const hrefLink = event.currentTarget.getAttribute('href');
      const section = document.querySelector(hrefLink)

      section.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      });



      /* uma das formas de fazer scroll suave
            const topScroll = section.offsetTop; ====> seleciona o topo da section para onde vai o scroll
            window.scrollTo({
               top: topScroll, ====> para onde vai / ate onde vai o scroll
               behavior: 'smooth', ====> propriedade que faz o scroll ser suave
            });*/
   }

   internalLinks.forEach((link) => {
      link.addEventListener('click', scrollToSection);
   })
}
softScroll();

function initAnimatedScroll() {
   const sections = document.querySelectorAll('.js-scroll');
   if (sections.length) {
      const sectionView = window.innerHeight * 0.55;

      function animateScroll() {
         sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top; // ====> pega a posicao do elemento no topo
            const isSectionVisible = (sectionTop - sectionView) < 0;
            if (isSectionVisible) {
               section.classList.add('active');
            } else {
               section.classList.remove('active');
            }
         });
      }
      animateScroll();
      window.addEventListener('scroll', animateScroll);
   }
}
initAnimatedScroll();