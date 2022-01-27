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
          

          var blushEmbed = {
            title: "Blush" ,
            description: `You Blushed`  ,
            image: {
              url:await anime.blush(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: blushEmbed });
        
        }

        interaction();
    }
    
}