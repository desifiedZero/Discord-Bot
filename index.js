const Discord = require('discord.js');
const bot = new Discord.Client();

const token = '';               // API TOKEN HERE

const PREFIX = 'Listen Alfred,';

bot.on('ready', () => {
    console.log('This bot is online.')
})

bot.on('message', (message) => {
    let arg = message.content.substring(PREFIX.length).toLowerCase().split(" ");
    if(arg[0] === '')
        arg.shift();

    if(message.content.substring(0, PREFIX.length).toLowerCase() === PREFIX.toLowerCase()){

        let reply = 'This is Alfred, your Butler. What can I do for you, Sir?';
        reply += '\rYour requests are: ';
        arg.forEach((s) => {
            reply += '\r' + s;
        })

        message.channel.send(reply);
    }
})

bot.login(token);