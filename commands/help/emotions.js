const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'emotions',
            this.alias = ['emotions'],
            this.usage = '-emotions'
    }
 
    async run(bot, message, args) {
       

          



                const someoneEmbed = {
                    title: 'Help',
                    fields: [
                        {
                            name: 'Blush',
                            value: '`-blush`',
                        },
                        {
                            name: "Bored",
                            value: '`-bored`'
                        },
                        {
                            name: "Confusion",
                            value: '`-confusion`'
                        },
                        {
                            name: "Dance",
                            value: '`-dance`'
                        },
                        {
                            name: "Happy",
                            value: '`-happy`'
                        },
                        {
                            name: "Nervous",
                            value: '`-nervous`'
                        },
                        {
                            name: "Sad",
                            value: '`-sad`'
                        },
                        {
                            name: "Thinking",
                            value: '`-thinking`'
                        },
                        {
                            name: "Yes",
                            value: '`-yes`'
                        },
                
                    ],

                    timestamp: new Date(),
                };
                
                message.channel.send({ embed: someoneEmbed });

           

    }
    
}