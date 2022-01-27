const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = class test {
    constructor(){
            this.name = 'test',
            this.alias = ['test'],
            this.usage = '-test'
    }
 
    async run(bot, message, args) {
       
    var exampleEmbed = {
	title: 'Test',
	
	description: 'Test Done, Bot Working Successfully',
	timestamp: new Date(),
};

message.channel.send({ embed: exampleEmbed });
        
           
				
    }
    
}