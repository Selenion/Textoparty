let zombie = document.querySelector(".zombieImg")

//document.addEventListener('keydown', enter);

function enter (e){
    if (e === "run") {
        if (!zombie.classList.contains('run')) {
            move();
        } else {
            stop()
        }
    }
}
function move (){
    zombie.classList.add("run");
}
function stop () {
    zombie.classList.remove("run");
}


let stompClient = null;
let uuid;
function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/messages', function (greeting) {
            let innerMsg = JSON.parse(JSON.parse(greeting.body).content).content;
            enter(innerMsg);
        });
    });
}

connect();


