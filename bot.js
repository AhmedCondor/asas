
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
 
 var ms = require('ms')
 
 var moment = require('moment');
 
 if (message.author.bot) return;
 
 if (!message.content.startsWith(prefix)) return;
 
 let command = message.content.split(" ")[0];
 
 command = command.slice(prefix.length);
 
 let args = message.content.split(" ").slice(1);
 
 let messageArray = message.content.split(" ");
 
 let embed = new Discord.RichEmbed()
 
.setImage("https://d.top4top.net/p_10880lo1r1.png")
 
 if (command == "ban") {
 
 if(!message.channel.guild) return message.reply('** This command only for servers**');
         
 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: You Don't Have ` BAN_MEMBERS ` Permission**");
 
 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**:x: I Don't Have ` BAN_MEMBERS ` Permission**");
 
 let user = message.mentions.users.first();
 
 let Reason = message.content.split(" ").slice(3).join(" ");
 
 let time = messageArray[2];
 
 if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
 
 if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Ban This User**");
 
 if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')
 
 if(!Reason)  {
 
 message.guild.member(user).ban({reason: Reason})
 
 }
 
  if(!Reason && time) {
 
  message.guild.member(user).ban(7, user);
 
  }  
 
  if(!time) {
 
  message.guild.member(user).ban(7, user);
 
  }
  if(time) {
 
  setTimeout(() => {
 
  message.guild.unban(user);
 
  }, ms(time));
 
  }
 
  if(time && Reason && user) {
 
  message.guild.member(user).ban({reason: Reason})
     
     
  setTimeout(() => {
 
  message.guild.unban(user);
 
  }, ms(time));
 
  }
 
  message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:`)
 
  }
 
  });
 
 
client.on('message', message => {
 
  var ms = require('ms')
 
  var moment = require('moment');
 
   
  if (message.author.bot) return;
 
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
 
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  let messageArray = message.content.split(" ");
 
  let muteRole = message.guild.roles.find("name", "Muted");
   
  let embed = new Discord.RichEmbed()
 
 .setImage("https://c.top4top.net/p_108825enp1.png")
 
  if (command == "mute") {
   
  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
 
  if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: You Don't Have ` MUTE_MEMBERS ` Permission**");
 
  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: I Don't Have ` MUTE_MEMBERS ` Permission**");
 
  let user = message.mentions.users.first();
 
  let Reason = message.content.split(" ").slice(4).join(" ");
 
  let time = messageArray[2];
 
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
   
  if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Mute This User**");
 
  if(!Reason)  {
 
    message.guild.member(user).addRole(muteRole);
 
  }
 
   if(!Reason && time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }  
 
   if(!time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }
   if(time) {
    if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')
 
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
 
   }, ms(time));
 
   }
 
   if(time && Reason && user) {
 
    message.guild.member(user).addRole(muteRole);
 
       
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
   
   }, ms(time));
 
   }
 
   message.channel.send(`:white_check_mark: ${user} has been muted ! :zipper_mouth:`)
 
   }
 
});



client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "help")) {
      message.author.send(`\`\`\`fix

❯ Informetion Commands | الأوامر التعريفية :


» $settings : رؤية ما يمكن إعدادة في البوت
» $ping : رؤية سرعة البوت
» $invite : لدعوة البوت

\`\`\`
`)


  }
});




let developers = ["512625982751113216","441584713799303183"];

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setgame')) {
    client.user.setGame(argresult);
      message.channel.send(`**Game Set : ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Watching : ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setlisten')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Listening : ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/middleeast");
      message.channel.send(`Streaming is available now`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client.on('message', message => {
    if(message.content.startsWith(prefix + "vip")) {
message.channel.send(`**- Start in \`15/02/2019\` \n- End in : \`15/03/2019\`\n- Owners: ${message.guild.owner}**`);
    }
})



();
let GiftKeys = JSON.parse(fs.readFileSync("./giftkeys1.json", "utf8"));


var prefix = "!"
client.on('message', message => {
    let id = "441584713799303183";
    let role = "VIP";
    let cmd = message.content.split(' ')[0];
    if(cmd === `${prefix}buy`){
        if(message.author.bot) return ;
        if(!message.channel.guild) return;
        let vipembed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setThumbnail(message.author.avatarURL)
        .setTitle(`**اختر الطريقه المناسبه بالنسبه لك**`)
        .addField(`**لشراء الرتبه لنفسك**`, `1⃣`,true)
        .addField(`**لشراء الرتبه ك هديه**`, `2⃣`,true)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL)
        message.channel.send(vipembed).then(message2 => {
            message2.react("1⃣").then(() => {
                message2.react("2⃣").then(() => {
                    const forme = (reaction, user) => reaction.emoji.name === "1⃣" && user.id === message.author.id;
                    const gift = (reaction, user) => reaction.emoji.name === "2⃣" && user.id === message.author.id;
                    const formere = message2.createReactionCollector(forme, {time: 120000});
                    const giftre = message2.createReactionCollector(gift, {time: 120000});
                    formere.on("collect", r => {
                        message2.delete()
                        if(message.member.roles.find("name", role)) return message.reply(`**انت تمتلك الرتبه بالفعل!**`);
                        let rolefind = message.guild.roles.find("name", role);
                        if(!rolefind) return message.reply(`**لا استطيع القيام بعملي لعدم توفر الرتبه \`${role}\``)
                        var purchasemeembed = new Discord.RichEmbed()
                        .setDescription(`**لديك 4 دقائق لشراء الرتبه\n \nقم بتحويل مبلغ 10 الاف كريديت برو بوت\n \n الى : ${message.guild.members.get(id)}**`)
                        .setColor("RED")
                        message.channel.send(purchasemeembed).then(um => {
                            const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${message.author.username}, has transferred \`$9900\` to ${message.guild.members.get(id)}`);
                            message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time']})
                            .then(collected => {
                                um.delete()
                                var giveembed = new Discord.RichEmbed()
                                .setDescription(`**تم اعطائك الرتبه **\`${role}\``)
                                .setColor("PURPLE")
                                message.channel.send(giveembed);
                                message.member.addRole(rolefind);
                            }).catch(e => {})
                        })
                    })
                    giftre.on("collect", r => {
                        message2.delete()
                        let rolefind = message.guild.roles.find("name", role);
                        if(!rolefind) return message.reply(`**لا استطيع القيام بعملي لعدم توفر الرتبه \`${role}\``)
                        var purchasegiftembed = new Discord.RichEmbed()
                        .setDescription(`**لديك 4 دقائق لشراء كود قفت للرتبة\n قم بتحويل مبلغ 10 الاف كريديت برو بوت \n \n \n الى : ${message.guild.members.get(id)}**`)
                        .setColor("RED")
                        message.channel.send(purchasegiftembed).then(um => {
                            const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${message.author.username}, has transferred \`$9900\` to ${message.guild.members.get(id)}`);
                            message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time']})
                            .then(collected => {
                                um.delete()
                                generateKey(message,rolefind);
                            }).catch(e => {});
                        })
                    })
                })
            })
        })
    }
    if(cmd === `${prefix}use`){
        let args = message.content.split(" ").slice(1)[0];
        if(!args){
            let insertcode = new Discord.RichEmbed()
            .setTitle(`:x: - **��الرجاء ادخال كود الهديه** \`${prefix}use <code>\``)
            .setColor("RED")
            message.reply(insertcode).then(m => m.delete(3000));
            return
        }
        let checkembed = new Discord.RichEmbed()
        .setTitle(`:writing_hand: - **جاري التحقق من الكود**`)
        .setColor("PURPLE")
        message.reply(checkembed).then( um => {
            if(GiftKeys[args]){
                let have = message.member.roles.find("name", GiftKeys[args].name);
                if(have){
                    let haveembed = new Discord.RichEmbed()
                    .setTitle(`:x: - **انت تمتلك الرتبه بالفعل**`)
                    .setColor("RED")
                    um.edit(haveembed)
                    return
                }
                let doneemed = new Discord.RichEmbed()
                .setTitle(`:tada: **مبروك تم إعطائك الرتبه**`)
                .setColor("PURPLE")
                um.edit(doneemed)
                message.member.addRole(GiftKeys[args])
                delete GiftKeys[args]
                save()
            }else{
                let wrongembed = new Discord.RichEmbed()
                .setTitle(`:x: **الكود غير صحيح او تم استعماله**`)
                .setColor("BLACK")
                um.edit(wrongembed)
            }
        });
    }
});


function generateKey(message,role){
    var randomKeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var gift = "";
    for (var y = 0; y < 16; y++){
        gift += `${randomKeys.charAt(Math.floor(Math.random() * randomKeys.length))}`;
    }
    GiftKeys[gift] = role;
    let sendembed = new Discord.RichEmbed()
    .setTitle(`:white_check_mark: **تم ارسال الكود على الخاص!**`)
    .setColor("GREEN")
    message.reply(sendembed);
        message.author.send(`**كود الهدية : \`${gift}\`
لإستعمال الكود : ${prefix}use \`${gift}\`**`);
    save()
}

function save(){
    fs.writeFile("./giftkeys1.json", JSON.stringify(GiftKeys ,null ,2), (err) => {
        if (err) console.log(err)
    });
}

client.on('message', message => {
    if(message.content.startsWith(prefix + "info")){
        var emdeed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField("VIP | في اي بي",`**مميزات الرتبة :
        - رتبة راينبو !rainbow
        - قيف اوايات خاصه
        - شات خاص باعضاء الفي اي بي
        - للشراء !buy**`)
        message.channel.send(emdeed);
}
    


})


client.on('ready', () => {//new ready event
    setInterval(function(){
        client.guilds.forEach(g => {
                    var role = g.roles.find('name', 'VIP Rainbow');//rainbow role name
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };
        });
    }, 13000);//the rainbow time
  })
client.on('message', message => {//new msg event
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + 'rainbow')) {//to create the rainbow role
       let rrole = message.guild.roles.find('name', 'VIP Rainbow')
       if(!message.member.roles.find('name','Legend .')) return message.channel.send(`\`\`\`diff\n-Just For VIP\`\`\``);
       if(message.member.roles.find('name','VIP Rainbow')) return message.channel.send(`عندك الرتبة !`);
       message.member.addRole(rrole);
       var emdo = new Discord.RichEmbed()
       .setTitle(`:white_check_mark: **تم أعطائك الرتبة بنجاح!**`)
     message.channel.send(emdo);
      }
    })
    client.on('message', msg => {
        if(msg.content.startsWith(prefix + "help")) {
            var embodd = new Discord.RichEmbed()
           .setAuthor(`AYX VIP Help`, msg.guild.iconURL)
           .addField("!info",`\`حول رتبة ال VIP\`\n`)
           .addField("!buy",`\`شراء رتبة ال VIP\`\n`)
           .addField("!ping",`\`سرعه اتصال البوت\`\n`)
           .addField("By", `<@516618898850709504> , <@541654647589306389>`)
msg.channel.send(embodd)

        }
    })
          
    client.on('message', message => {
        if(message.content.startsWith(prefix + "ping")) {
      message.channel.send(`MessageTaken: \`${Date.now() - message.createdTimestamp}\`ms\n DiscordAPi: \`${Math.round(client.ping)}\`ms\nAverage: \`${Math.round(client.pings[0])}\`ms. `)
      }
      });

client.login(process.env.BOT_TOKEN);
