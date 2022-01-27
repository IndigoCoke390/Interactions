const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'bored',
            this.alias = ['bored'],
            this.usage = '-bored'
    }
 
    async run(bot, message, args) {
       


        async function interaction() {
          

          var interactionEmbed = {
            title: "Bored" ,
            description: `You are bored`,
            image: {
              url:await anime.bored(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}