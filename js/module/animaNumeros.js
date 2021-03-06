export default class AnimaNumeros {
   constructor(numeros, observerTarget, observerClass) {
      this.numeros = document.querySelectorAll(numeros);
      this.observerTarget = document.querySelector(observerTarget);
      this.observerClass = observerClass;
      this.handleMutation = this.handleMutation.bind(this);
   }

   static incrementarNumero(numero) {
      const total = Number(numero.innerText)
      const incremento = Math.floor(total / 100)

      let start = 0;
      const timer = setInterval(() => {
         start += incremento
         numero.innerText = start
         if (start > total) {
            numero.innerText = total
            clearInterval(timer)
         }
      }, 80 * Math.random())
   }

   animaNumero() {
      this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
   }

   handleMutation(mutation) {
      if (mutation[0].target.classList.contains(this.observerClass)) {
         this.observer.disconnect()
         this.animaNumero()
      }
   }

   addMutatioObserver() {
      this.observer = new MutationObserver(this.handleMutation);
      this.observer.observe(this.observerTarget, { attributes: true });
   }

   init() {
      if (this.numeros.length && this.observerClass) {
         this.addMutatioObserver();
      }
      return this;
   }

}