export default class Funcionamento {
   constructor(funcionamento) {
      this.funcionamento = document.querySelector(funcionamento);
   }

   //pega o valores dentro de data-semana
   //converte para um array com split, o dados sao retornados como string
   //itera sobre cada item do array e os converte para number ao passar o construtor
   // Number como argumento do map
   dadosFuncionamento() {
      this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
      this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);//[8, 18]
   }

   dadosAgora() {
      this.dataAtual = new Date();
      this.diaAtual = this.dataAtual.getDay();
      this.horarioAtual = this.dataAtual.getUTCHours() - 3;
   }

   estaAberto() {
      const diaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
      const horarioAberto = (
         this.horarioAtual >= this.horarioSemana[0] &&
         this.horarioAtual < this.horarioSemana[1]
      )
      return diaAberto && horarioAberto
   }

   ativaAberto() {
      this.estaAberto()
         ? this.funcionamento.classList.add('aberto')
         : this.funcionamento.classList.add('fechado')
   }


   init() {
      if (this.funcionamento) {
         this.dadosFuncionamento();
         this.dadosAgora();
         this.ativaAberto();
      }
      return this;
   }
}