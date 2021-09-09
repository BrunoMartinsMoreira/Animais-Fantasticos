import AnimaNumeros from './animaNumeros.js';

export default function buscaAnimais(url, target) {



   function criaAnimal(animal) {
      const div = document.createElement('div');
      div.classList.add('numero-animal');
      div.innerHTML = `<h3>${animal.especie}</> 
      <span data-numero>${animal.total}</span>`;
      return div;
   };

   const numerosAnimais = document.querySelector(target);
   function preencherAnimal(animal) {
      const divAnimal = criaAnimal(animal);
      numerosAnimais.appendChild(divAnimal);
   }

   function animaNum() {
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'active');
      animaNumeros.init();
   }

   async function fetchAnimais() {
      try {
         const animaisResponse = await fetch(url);
         const animaisJson = await animaisResponse.json();
         animaisJson.forEach(animal => preencherAnimal(animal));
         animaNum();
      } catch (err) {
         console.log(err)
      }

   }
   return fetchAnimais();
   fetchAnimais('../animais.json')
}