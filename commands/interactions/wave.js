const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'wave',
            this.alias = ['wave'],
            this.usage = '-wave'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-wave @user`")
        }


        async function interaction() {
          

          var interactionEmbed = {
            title: "wave" ,
            description: `You waved` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.wave(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}