const Discord = require('discord.js');
const bot = new Discord.Client;
const prefix = '-';
const chalk = require('chalk');




//getting installed node mudules
const winston = require("winston")

const logger = winston.createLogger({
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'log' }),
	],
	format: winston.format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
});

bot.on('ready', () => logger.log('info', chalk.blue('The bot is ready!')));
bot.on('debug', m => logger.log('debug', m));
bot.on('warn', m => logger.log('warn', m));
bot.on('error', m => logger.log('error', m));
bot.on('ready', () => bot.user.setActivity('-help for help'));


process.on('uncaughtException', error => logger.log('error', error));


const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: ['-']
  });

bot.on("message", (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.trim().split(/ +/g);
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;
 
    try{
        cmd.run(bot,message,args)
    }catch(e){
        console.log(e)
    }
 
});

bot.login("TOKEN GOES HERE");