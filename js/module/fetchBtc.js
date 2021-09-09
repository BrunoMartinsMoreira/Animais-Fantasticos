export default function FetchBtc(url, target) {

   function getBtcInfo() {
      try {
         fetch(url)
            .then(response => response.json())
            .then(btcInfosJson => {
               const btcContainer = document.querySelector(target);
               btcContainer.innerText = (1000 / btcInfosJson.BRL.sell).toFixed(5)
            })
      } catch (err) {
         console.log(err)
      };
   }
   getBtcInfo()
}

