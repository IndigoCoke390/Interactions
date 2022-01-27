const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'sad',
            this.alias = ['sad'],
            this.usage = '-sad'
    }
 
    async run(bot, message, args) {
       



        async function interaction() {
          

          var interactionEmbed = {
            title: "Sad" ,
            description: `You sad` ,
            image: {
              url:await anime.sad(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}