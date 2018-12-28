const Discord = require('discord.js');

var fs = require('fs');

const client = new Discord.Client();

var prefix = "!";

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("NovaSupport est allumé !\n");
  client.user.setActivity("Bonne année 2019!");
}); 
