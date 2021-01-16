const Discord = require('discord.js');
const bdd = require("../bdd.json");
module.exports.run = async (bot, message, args, Savebdd) => {
    index = Math.floor(Math.random() * Math.floor(bdd["participants-event-1k"].length))
    gagnant = bot.users.cache.get(bdd["participants-event-1k"][index]);
    bot.channels.cache.get(bdd["channel-events"]).send(`Le gagnant est : ${gagnant}`).then(message => {
        message.react("🎉");
    })
    bdd["participants-event-1k"].splice(index, 1);
    Savebdd();
}
module.exports.config = {
    name: "tirage"
}