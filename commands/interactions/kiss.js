const Discord = require('discord.js');
const client = new Discord.Client();
const emotes = require("discord-emotes");

module.exports = class test {
    constructor(){
            this.name = 'kiss',
            this.alias = ['kiss'],
            this.usage = '-kiss'
    }
 
    async run(bot, message, args) {

			const taggedUser = message.mentions.users.first();

      if (!taggedUser) {
        message.reply("\nYou have not tagged a user, try again. \nExample: `-kiss @user`")
      }

		emotes.kiss().then(gif => {
   			const emotes = require("discord-emotes");

         var kissEmbed = {
          title: "Kiss" ,
          description: `You kissed ` + `<@${taggedUser.id}>` ,
          image: {
            url:gif,
          },
          timestamp: new Date(),
        };

            emotes.kiss().then(gif => message.channel.send({ embed: kissEmbed }));    


		}); 
        
        
    }
    
}