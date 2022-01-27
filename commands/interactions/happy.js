const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'blush',
            this.alias = ['blush'],
            this.usage = '-blush'
    }
 
    async run(bot, message, args) {
       




        async function interaction() {
          

          var interactionEmbed = {
            title: "happy" ,
            description: `You are happy` ,
            image: {
              url:await anime.happy(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}