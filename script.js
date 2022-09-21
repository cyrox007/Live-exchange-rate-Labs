document.addEventListener('DOMContentLoaded', ()=>{
    let spans = document.querySelectorAll('span');
    let socket = new WebSocket('wss://stream.binance.com:9443/stream?streams=ethusdt@aggTrade/btcusdt@aggTrade/btcrub@aggTrade/usdtrub@aggTrade/etcrub@aggTrade/ltcrub@aggTrade');

    socket.onmessage = (e)=>{
        let msg = JSON.parse(e.data);
        setCurrencies(msg.data);      
    }

    setCurrencies = (data)=>{
        spans.forEach(element => {
            if (element.id == data.s) {
                element.innerText = Math.floor(data.p * 100) / 100;
            }
        });
    }
});