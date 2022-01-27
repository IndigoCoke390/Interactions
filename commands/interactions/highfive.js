const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'highfive',
            this.alias = ['highfive'],
            this.usage = '-highfive'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-highfive @user`")
        }


        async function interaction() {
          

          var interactionEmbed = {
            title: "Highfive" ,
            description: `You Highfived ` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.highfive(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}