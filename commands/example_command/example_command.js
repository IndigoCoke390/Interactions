const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = class test {
    constructor(){
            this.name = 'example',
            this.alias = ['example'],
            this.usage = '-example'
    }
 
    async run(bot, message, args) {

				message.channel.send("this is an example command")
        
    }
    
}