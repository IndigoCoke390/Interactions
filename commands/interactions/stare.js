const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'stare',
            this.alias = ['stare'],
            this.usage = '-stare'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-stare @user`")
        }


        async function interaction() {
          

          var interactionEmbed = {
            title: "Stare" ,
            description: `You stare at ` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.stare(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}