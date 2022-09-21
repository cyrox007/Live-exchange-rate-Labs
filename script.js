document.addEventListener('DOMContentLoaded', ()=>{
    let spans = document.querySelectorAll('span');
    let socket = new WebSocket('wss://stream.binance.com:9443/stream?streams=ethusdt@aggTrade/btcusdt@aggTrade/btcrub@aggTrade/usdtrub@aggTrade/etcrub@aggTrade/ltcrub@aggTrade');
    socket.onmessage = (e)=>{
        let msg = JSON.parse(e.data);
        console.log(msg.data);
        if (msg.data.s == 'ETHUSDT') {
            spans[0].innerText = Math.floor(msg.data.p * 100) / 100;
        } else if (msg.data.s == 'BTCUSDT') {
            spans[1].innerText = Math.floor(msg.data.p * 100) / 100;
        } else if (msg.data.s == 'BTCRUB') {
            spans[2].innerText = Math.floor(msg.data.p * 100) / 100;
        } else if (msg.data.s == 'USDTRUB') {
            spans[3].innerText = Math.floor(msg.data.p * 100) / 100;
        } else if (msg.data.s == 'ETCRUB') {
            spans[4].innerText = Math.floor(msg.data.p * 100) / 100;
        } else if (msg.data.s == 'LTCRUB') {
            spans[5].innerText = Math.floor(msg.data.p * 100) / 100;
        }         
    }
});