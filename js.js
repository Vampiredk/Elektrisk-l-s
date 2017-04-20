var macAddress = "00:06:66:07:AE:84";
function onload(){
	document.addEventListener("deviceready", OnDeviceReady, False);
}

function onDeviceReady(){
	bluetoothSeriel.connect(macAddress, onConnect, onDisconnect);
}

function onConnect(){
	bluetoothSeriel.subscribe("\n",OnMessage, SubscribeFailed);
	document.getElementById("statusDiv").innerHTML="Connected to " + macAddress + ".";
}

function onMessage(data){
	document.getElementById("fraArduino").innerHTML = "" + data;
}

function sendToArduino(data){
	bluetoothSeriel.write(data);
}

function onDisconnect(){
	alert("Disconnect");
	statusDiv.innerHTML="Disconnected.";
}

function subscribefailed(){
	alert("subscribe failed");
}