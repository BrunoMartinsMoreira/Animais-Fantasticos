export default function softScroll() {
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
