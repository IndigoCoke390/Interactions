const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'slap',
            this.alias = ['slap'],
            this.usage = '-slap'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-slap @user`")
        }


        async function interaction() {
          

          var interactionEmbed = {
            title: "Slap" ,
            description: `You Slapped ` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.slap(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}