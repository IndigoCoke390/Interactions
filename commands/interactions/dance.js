const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'dane',
            this.alias = ['dance'],
            this.usage = '-dance'
    }
 
    async run(bot, message, args) {
       



        async function interaction() {
          

          var danceEmbed = {
            title: "Dance" ,
            description: `You Dance` ,
            image: {
              url:await anime.dance(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: danceEmbed });
        
        }

        interaction();
    }
    
}