const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'yes',
            this.alias = ['yes'],
            this.usage = '-yes'
    }
 
    async run(bot, message, args) {
       



        async function interaction() {
          

          var interactionEmbed = {
            title: "Yes" ,
            description: `Yes` ,
            image: {
              url:await anime.yes(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}