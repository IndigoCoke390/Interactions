const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'smile',
            this.alias = ['smile'],
            this.usage = '-smile'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-smile @user`")
        }


        async function interaction() {
          

          var interactionEmbed = {
            title: "Smile" ,
            description: `You smiled at ` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.smile(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}