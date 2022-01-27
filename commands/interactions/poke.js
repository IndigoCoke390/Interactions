const Discord = require('discord.js');
const client = new Discord.Client();
const emotes = require("discord-emotes");

module.exports = class test {
    constructor(){
            this.name = 'poke',
            this.alias = ['poke'],
            this.usage = '-poke'
    }
 
    async run(bot, message, args) {

			const taggedUser = message.mentions.users.first();

      if (!taggedUser) {
        message.reply("\nYou have not tagged a user, try again. \nExample: `-poke @user`")
      }

		emotes.poke().then(gif => {
   			const emotes = require("discord-emotes");

         var pokeEmbed = {
          title: "Poke" ,
          description: `You poked ` + `<@${taggedUser.id}>` ,
          image: {
            url:gif,
          },
          timestamp: new Date(),
        };

            emotes.hug().then(gif => message.channel.send({ embed: pokeEmbed }));    


		}); 
        
        
    }
    
}