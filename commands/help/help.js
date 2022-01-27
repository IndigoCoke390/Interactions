const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = class test {
    constructor(){
            this.name = 'help',
            this.alias = ['help'],
            this.usage = '-help'
    }
 
    async run(bot, message, args) {
       
    var helpEmbed = {
	title: 'Help',
	
	description: 'A simple bot to spice up conversations',
	fields: [
		{
			name: 'Do something to someone',
			value: '-someone',
		},
		{
			name: "Show your emotions",
			value: '-emotions'
		}

	],
	image: {
		url:"",
	},
	timestamp: new Date(),
};

message.channel.send({ embed: helpEmbed });
        
           
				
    }
    
}