const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'bonk',
            this.alias = ['bonk'],
            this.usage = '-bonk'
    }
 
    async run(bot, message, args) {
       
        const taggedUser = message.mentions.users.first();

        if (!taggedUser) {
          message.reply("\nYou have not tagged a user, try again. \nExample: `-bonk @user`")
        }


        async function interaction() {
          

          var bonkEmbed = {
            title: "Bonk" ,
            description: `You Bonked ` + `<@${taggedUser.id}>` ,
            image: {
              url: await anime.bonk(),
            },
            timestamp: new Date(),
          };

          message.channel.send({ embed: bonkEmbed });
        
        }

        interaction();
    }
    
}