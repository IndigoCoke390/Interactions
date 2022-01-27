const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'kill',
            this.alias = ['kill'],
            this.usage = '-kill'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-kill @user`")
        }


        async function interaction() {
          

          var interactionEmbed = {
            title: "Kill" ,
            description: `You killed ` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.kill(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}