export default class AnimadScroll {
   constructor(sections, className) {
      this.sections = document.querySelectorAll(sections);
      this.windowView = window.innerHeight * 0.60;
      this.className = className;
      this.checkDistance = this.checkDistance.bind(this);
   }

   getDistance() {
      this.distance = [...this.sections].map((section) => {
         const offset = section.offsetTop;
         return {
            element: section,
            offset: Math.floor(offset - this.windowView)
         };
      });
   }

   //window.pageYOffset verifica a posição exado scroll
   //em relação ao topo
   checkDistance() {
      this.distance.forEach((section) => {
         if (window.pageYOffset > section.offset) {
            section.element.classList.add(this.className);
         } else if (section.element.classList.contains(this.className)) {
            section.element.classList.remove(this.className);
         }
      });
   }

   init() {
      if (this.sections.length) {
         this.getDistance();
         this.checkDistance();
         window.addEventListener('scroll', this.checkDistance);
      }
      return this;
   }

   stop() {
      window.removeEventListener('scroll', this.checkDistance)
   }
}
