const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'scream',
            this.alias = ['scream'],
            this.usage = '-scream'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-scream @user`")
        }


        async function interaction() {
          

          var interactionEmbed = {
            title: "Scream" ,
            description: `You Scream at ` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.scream(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}