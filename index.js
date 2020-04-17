const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json")


bot.on("ready", async () =>{
    console.log("Le bot est allumé");
    bot.user.setStatus("online");
    bot.user.setActivity("développer mon bot", {type: 'WATCHING'} );
})



bot.login(token.token);