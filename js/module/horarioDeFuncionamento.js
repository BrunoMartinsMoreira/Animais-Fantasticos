export default function initFuncionamento() {
   const funcionamento = document.querySelector("[data-semana]");
   //pega o valores dentro de data-semana
   //converte para um array com split, o dados sao retornados como string
   //itera sobre cada item do array e os converte para number ao passar o construtor
   // Number como argumento do map
   const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
   const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);//[8, 18]
   const dataAtual = new Date();
   const diaAtual = dataAtual.getDay();
   const horarioAtual = dataAtual.getHours();
   const diaAberto = diasSemana.indexOf(diaAtual) !== -1;
   const horarioAberto = (horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1])

   if (diaAberto && horarioAberto) {
      funcionamento.classList.add('aberto')
   } else {
      funcionamento.classList.add('fechado');
   }
}