const Discord = require('discord.js');
const client = new Discord.Client();
const emotes = require("discord-emotes");

module.exports = class test {
    constructor(){
            this.name = 'tickle',
            this.alias = ['tickle'],
            this.usage = '-tickle'
    }
 
    async run(bot, message, args) {

			const taggedUser = message.mentions.users.first();

      if (!taggedUser) {
        message.reply("\nYou have not tagged a user, try again. \nExample: `-tickle @user`")
      }

		emotes.tickle().then(gif => {
   			const emotes = require("discord-emotes");

         var tickleEmbed = {
          title: "tickle" ,
          description: `You tickled ` + `<@${taggedUser.id}>` ,
          image: {
            url:gif,
          },
          timestamp: new Date(),
        };

            emotes.hug().then(gif => message.channel.send({ embed: tickleEmbed }));    


		}); 
        
        
    }
    
}