const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'bite',
            this.alias = ['bite'],
            this.usage = '-bite'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-bite @user`")
        }


        async function interaction() {
          

          var biteEmbed = {
            title: "Bite" ,
            description: `You Bit ` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.bite(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: biteEmbed });
        
        }

        interaction();
    }
    
}