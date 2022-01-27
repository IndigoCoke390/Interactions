const Discord = require('discord.js');
const client = new Discord.Client();
const emotes = require("discord-emotes");


module.exports = class test {
    constructor(){
            this.name = 'hug',
            this.alias = ['hug'],
            this.usage = '-hug'
    }
 
    async run(bot, message, args) {

			const taggedUser = message.mentions.users.first();

      if (!taggedUser) {
        message.reply("\nYou have not tagged a user, try again. \nExample: `-hug @user`")
      }

		emotes.hug().then(gif => {
   			const emotes = require("discord-emotes");

         var HugEmbed = {
          title: "Hug" ,
          description: `You hugged ` + `<@${taggedUser.id}>` ,
          image: {
            url:gif,
          },
          timestamp: new Date(),
        };

            emotes.hug().then(gif => message.channel.send({ embed: HugEmbed }));    


		}); 
        
        
    }
    
}