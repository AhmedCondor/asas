
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
    var BotServersChannel = "563097987459579904";// ايدي الروم المطلوب يرسل فيه السيرفرات
    var BotOwnerID = "512625982751113216";// ايدي تبعك هون
    if(message.author.bot) return;
    if(message.content === prefix + 'botservers') {
    if (message.author.id !==  BotOwnerID) return;
      client.guilds.forEach(g => {
          var botserverembed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor('RANDOM')
        .setThumbnail(g.iconURL)
        .addField("**ServerName**", `**${g.name}**`, true)
        .addField("**ServerID**", `**${g.id}**`, true)
        .addField("**Members**", `**${g.memberCount}**`, true)
        .addField("**Roles**", `**${g.roles.size}** Role `, true)
        .addField('**Channels**', `**${g.channels.size}**`, true);
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400,
        }).then(i => client.channels.get(BotServersChannel).send(`Invite Link: <https://discord.gg/${i.code}>\nServer Owner: <@${g.owner.id}>`,{embed: botserverembed}));
      })
    }
});//By MK ... Alpha Codes
///////
client.login(process.env.BOT_TOKEN);
