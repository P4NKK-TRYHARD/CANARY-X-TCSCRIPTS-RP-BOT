const Discord = require('discord.js');



module.exports = {
  name: "enviarip",
  aliases: ["enviarip"],
  execute: async(client, message, args) => {

  
  if(!message.member.roles.cache.has('1011678850301841520')) { return message.channel.send("``Error ❌`` ¡Usted no tiene los permisos suficientes!"); }
let member = message.mentions.members.first();



const embedDatos = new Discord.MessageEmbed() 
        
   .setTitle("<:relaxrp:1055765702767816766>  IP | RelaxRP <:relaxrp:1055765702767816766>")
   .setColor("#12F708")
   .setDescription(`📌 **IP:**
   connect SOON

   💥 **Entra por FiveM:**
   Presiona F8 en FiveM y pega la IP: ☝

   🖇️ **Entra por link:**
   🤜 **CLICK** para entrar directamente --> SOON
   `)
   .setFooter(`© RelaxRP Ip enviada por `+ message.author.username , client.user.avatarURL())

client.channels.cache.get("1041815253698224231").send({ embeds: [embedDatos] })



message.delete(5000)
  }
}