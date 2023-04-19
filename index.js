var telegram_bot_id = "6114819557:AAG698ZETiHL3uIBFM4uLEI0t_XmeUDpNig";
var chat_id = 6114819557; // please! Read the README.md
var u_name, email, message, telegram;
var ready = function(){
    u_name = document.getElementById("name").value
    email = document.getElementById("email").value
    message = document.getElementById("message").value
    telegram = document.getElementById("telegram").value
    message = "name: " + u_name + "\nemail: " + email + "\ntelegram username :https://t.me/" + telegram + "\nmessage: " + message;
};
var sendtelegram = function(){
    ready();
    var settings = {
        "async":true,
        "crossDomain":true,
        "url":"https://api.telegram.org/bot6114819557:AAG698ZETiHL3uIBFM4uLEI0t_XmeUDpNig/sendMessage?parse_mode=markdown&chat_id=5858638923&text=hallo",
        "method":"POST",
        "headers":{
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    u_name = document.getElementById("name").value = "";
    email = document.getElementById("email").value = "";
    message = document.getElementById("message").value = "";
    telegram = document.getElementById("telegram").value = "";
    return false;
};
