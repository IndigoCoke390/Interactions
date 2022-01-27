const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'nervous',
            this.alias = ['nervous'],
            this.usage = '-nervous'
    }
 
    async run(bot, message, args) {
       

        


        async function interaction() {
        const emotes = require("discord-emotes");

          var interactionEmbed = {
            title: "nervous" ,
            description: `You are nevous `,
            image: {
              url:await anime.nervous(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}