const messages = document.getElementById('messages');
var user = "not working";

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);


// document.getElementById("userBox").addEventListener("change", 
//     function () {
//         user = document.getElementById("userBox").value;
//         document.getElementById("debug1").innerHTML = "Current Username: "+user;
// }); //hopefully only updates user only when the value is changed

function setUsername(user) {
    user = document.getElementById(userBox).value;
    document.getElementById("debug1").innerHTML = 'Current Username is "'+user+'"';
}

document.getElementById("messageBox").addEventListener("keypress", function (event) {
    if (event.key === "Enter") { event.preventDefault();
        document.getElementById("sendButton").click();
    }
}); //clicks the send button for us if we press enter while in the input

// function appendMessage() { //displays a new message in the chatbox
// 	const message = document.getElementsByClassName('message')[0];
//   const newMessage = message.cloneNode(true);
//   messages.appendChild(newMessage);
// }

function sendMessage(user) { //function that runs when you press the send button or enter to send to the bot
    let message = document.getElementById("messageBox").value;
    if (document.getElementById("userBox").value != "") { //prepends username to message if it isn't empty
        message = user+": "+message };
    document.getElementById("debug").innerHTML = message;
    document.getElementById("messageBox").value = "";
    const channel = Client.channels.cache.get('<id>');
    channel.send('<content>');
}

// function getMessages(letter) {
//   var div = $('#messages');
//   $.get('msg_show.php', function (data) {
//     div.html(data);
//   });
// }

// setInterval(getMessages, 100);

// if (firstTime) {
//   container.scrollTop = container.scrollHeight;
//   firstTime = false;
// } else if (container.scrollTop + container.clientHeight === container.scrollHeight) {
//   container.scrollTop = container.scrollHeight;
// }
