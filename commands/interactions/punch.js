const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'punch',
            this.alias = ['punch'],
            this.usage = '-punch'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-highfive @user`")
        }


        async function interaction() {
          

          var interactionEmbed = {
            title: "Punch" ,
            description: `You punched ` + `<@${taggedUser.id}>` ,
            image: {
              url:await anime.punch(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: interactionEmbed });
        
        }

        interaction();
    }
    
}