const Discord = require("discord.js");
const token = require("./token.json");

const bot = new Discord.Client();

bot.on("ready", async () => {
    console.log("Le bot est allumé")
    bot.user.setStatus("dnd");
    setTimeout(() => {
        bot.user.setActivity("développer mon bot");
    }, 100)
});

bot.on("guildMemberAdd", member => {
    // member.send(`Bienvenue sur le serveur ${member.user.username}!`)
    // bot.channels.cache.get('701156310309273671').send(`Bienvenue sur le serveur ${member.user.username}!`);
    guild.channels.get('701156310309273671').send('Bienvenue sur le serveur ' + member.user.username + ' !');
    member.roles.add('701156465515167755');

})

bot.on("message", message => {

    if(message.content.startsWith("!clear")){
    // message.delete();
        if(message.member.hasPermission('MANAGE_MESSAGES')){

            let args = message.content.trim().split(/ +/g);

            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){

                    message.channel.bulkDelete(args[1])
                    message.channel.send(`Vous avez supprimé ${args[1]} message(s)`)
                    message.channel.bulkDelete(1)

                }
                else{
                    message.channel.send(`Vous devez indiquer une valeur entre 1 et 99 !`)
                }
            }
            else{
                message.channel.send(`Vous devez indiquer un nombre de messages a supprimer !`)
            }
        }
        else{
            message.channel.send(`Vous devez avoir la permission de gérer les messages pour éxécuter cette commande !`)
        }
    }
})





bot.login(token.token);
