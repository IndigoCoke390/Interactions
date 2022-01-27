const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'kick',
            this.alias = ['kick'],
            this.usage = '-kick'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-kick @user`")
        }


        async function interaction() {
          

          var kickEmbed = {
            title: "Blush" ,
            description: `You kicked ` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.kick(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: kickEmbed });
        
        }

        interaction();
    }
    
}