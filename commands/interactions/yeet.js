const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'yeet',
            this.alias = ['yeet'],
            this.usage = '-yeet'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-yeet @user`")
        }


        async function interaction() {
          

          var interactionEmbed = {
            title: "yeet" ,
            description: `You yeeted ` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.yeet(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}