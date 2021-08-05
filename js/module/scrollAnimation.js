export default function initAnimatedScroll() {
   const sections = document.querySelectorAll('.js-scroll');
   if (sections.length) {
      const sectionView = window.innerHeight * 0.55;

      function animateScroll() {
         sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top; // ====> pega a posicao do elemento no topo
            const isSectionVisible = (sectionTop - sectionView) < 0;
            if (isSectionVisible) {
               section.classList.add('active');
            } else if (section.classList.contains('active')) {
               section.classList.remove('active');
            }
         });
      }
      animateScroll();
      window.addEventListener('scroll', animateScroll);
   }
}
