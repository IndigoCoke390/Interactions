const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'confusion',
            this.alias = ['confusion'],
            this.usage = '-confusion'
    }
 
    async run(bot, message, args) {
       




        async function interaction() {
          

          var confusionEmbed = {
            title: "Confusion" ,
            description: `You are confused` ,
            image: {
              url:await anime.confused(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: confusionEmbed });
        
        }

        interaction();
    }
    
}