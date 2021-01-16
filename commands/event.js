const Discord = require('discord.js');
const bdd = require("../bdd.json");
module.exports.run = async (bot, message, args, Savebdd) => {
    	if(!message.member.hasPermission('ADMINISTRATOR')) return;
        bot.channels.cache.get(bdd["channel-events"]).send("Message du concours").then(message => {
            message.react("📨");
            bdd["message-event-1k"] = message.id;
            Savebdd();
        });
    }
module.exports.config = {
    name: "event"
}
