const Discord = require('discord.js');
const client = new Discord.Client();
const anime = require('anime-actions');

module.exports = class test {
    constructor(){
            this.name = 'someone',
            this.alias = ['someone'],
            this.usage = '-someone'
    }
 
    async run(bot, message, args) {
       
                const someoneEmbed = {
                    title: 'Help',
                    fields: [
                        {
                            name: 'Bite',
                            value: '`-Bite`',
                        },
                        {
                            name: "Bonk",
                            value: '`-bonk`'
                        },
                        {
                            name: "Cuddle",
                            value: '`-Cuddle`'
                        },
                        {
                            name: "Highfive",
                            value: '`-Highfive`'
                        },
                        {
                            name: "hug",
                            value: '`-hug`'
                        },
                        {
                            name: "kick",
                            value: '`-kick`'
                        },
                        {
                            name: "kill",
                            value: '`-kill`'
                        },
                        {
                            name: "kiss",
                            value: '`-kiss`'
                        },
                        {
                            name: "pat",
                            value: '`-pat`'
                        },
                        {
                            name: "poke",
                            value: '`-poke`'
                        },
                        {
                            name: "punch",
                            value: '`-punch`'
                        },
                        {
                            name: "slap",
                            value: '`-slap`'
                        },
                        {
                            name: "stare",
                            value: '`-stare`'
                        },
                        {
                            name: "tickle",
                            value: '`-tickle`'
                        },
                        {
                            name: "wave",
                            value: '`-wave`'
                        },
                        {
                            name: "yeet",
                            value: '`-yeet`'
                        },
                    ],

                    timestamp: new Date(),
                };
                
                message.channel.send({ embed: someoneEmbed });

           

    }
    
}