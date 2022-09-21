document.addEventListener('DOMContentLoaded', ()=>{
    let spans = document.querySelectorAll('span');
    let socket = new WebSocket('wss://stream.binance.com:9443/stream?streams=ethusdt@aggTrade/btcusdt@aggTrade/btcrub@aggTrade/usdtrub@aggTrade');
    socket.onmessage = (e)=>{
        let msg = JSON.parse(e.data);
        console.log(msg.data);
        if (msg.data.s == 'ETHUSDT') {
            spans[0].innerText = msg.data.p;
        } else if (msg.data.s == 'BTCUSDT') {
            spans[1].innerText = msg.data.p;
        } else if (msg.data.s == 'BTCRUB') {
            spans[2].innerText = msg.data.p;
        } else if (msg.data.s == 'USDTRUB') {
            spans[3].innerText = msg.data.p;
        }          
    }
});