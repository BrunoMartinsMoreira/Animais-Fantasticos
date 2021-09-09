import AnimaNumeros from './animaNumeros.js';

export default function initFetchAnimais() {
   async function fetchAnimais(url) {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosAnimais = document.querySelector('.numeros-grid');
      animaisJson.forEach(animal => {
         const divAnimal = criaAnimal(animal)
         numerosAnimais.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'active');
      animaNumeros.init();
   };

   function criaAnimal(animal) {
      const div = document.createElement('div');
      div.classList.add('numero-animal');
      div.innerHTML = `<h3>${animal.especie}</> 
      <span data-numero>${animal.total}</span>`;
      return div;
   };

   fetchAnimais('../animais.json')
}