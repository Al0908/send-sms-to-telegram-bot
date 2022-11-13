var telegram_bot_id = "telegram bot token";
var chat_id = 1111; // please! Read the README.md
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
        "url":"https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
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
