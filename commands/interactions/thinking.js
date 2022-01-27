const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'thinking',
            this.alias = ['thinking'],
            this.usage = '-thinking'
    }
 
    async run(bot, message, args) {
       


        async function interaction() {
          

          var interactionEmbed = {
            title: "thinking" ,
            description: `You are thinking` ,
            image: {
              url:await anime.thinking(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}