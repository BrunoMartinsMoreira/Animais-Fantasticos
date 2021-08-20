export default function initFetchBtc() {
   const btcContainer = document.querySelector('.btc-preco');
   if (btcContainer) {
      function getBtcInfo() {
         try {
            fetch('https://blockchain.info/ticker')
               .then(response => response.json())
               .then(btcInfosJson => {
                  console.log(btcInfosJson.BRL.buy)
                  btcContainer.innerText = (1000 / btcInfosJson.BRL.buy).toFixed(5)
               })
         } catch (err) {
            console.log(err)
         };
      }
      getBtcInfo()
   }

}