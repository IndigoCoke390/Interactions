const Discord = require('discord.js');
const client = new Discord.Client();
const emotes = require("discord-emotes");


module.exports = class test {
    constructor(){
            this.name = 'cuddle',
            this.alias = ['cuddle'],
            this.usage = '-cuddle'
    }
 
    async run(bot, message, args) {

			const taggedUser = message.mentions.users.first();

      if (!taggedUser) {
        message.reply("\nYou have not tagged a user, try again. \nExample: `-cuddle @user`")
      }

		emotes.cuddle().then(gif => {
   			const emotes = require("discord-emotes");

         var cuddleEmbed = {
          title: "Cuddle" ,
          description: `You Cuddled ` + `<@${taggedUser.id}>` ,
          image: {
            url:gif,
          },
          timestamp: new Date(),
        };

            emotes.cuddle().then(gif => message.channel.send({ embed: cuddleEmbed }));    


		}); 
        
        
    }
    
}