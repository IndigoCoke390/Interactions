const Discord = require('discord.js');
const client = new Discord.Client();
const emotes = require("discord-emotes");

module.exports = class test {
    constructor(){
            this.name = 'pat',
            this.alias = ['pat'],
            this.usage = '-pat'
    }
 
    async run(bot, message, args) {

			const taggedUser = message.mentions.users.first();

      if (!taggedUser) {
        message.reply("\nYou have not tagged a user, try again. \nExample: `-pat @user`")
      }

		emotes.pat().then(gif => {
   			const emotes = require("discord-emotes");

         var patEmbed = {
          title: "Pat" ,
          description: `You patted  ` + `<@${taggedUser.id}>` ,
          image: {
            url:gif,
          },
          timestamp: new Date(),
        };

            emotes.hug().then(gif => message.channel.send({ embed: patEmbed }));    


		}); 
        
        
    }
    
}