const Discord = require('discord.js');



module.exports = {
  name: "on",
  aliases: ["on"],
  execute: async(client, message, args) => {

  
  if(!message.member.roles.cache.has('1011678850301841520')) { return message.channel.send("``Error ❌`` ¡Usted no tiene los permisos suficientes!"); }
let member = message.mentions.members.first();

const embedDatos = new Discord.MessageEmbed() 
        
   .setTitle(`<:Horizon:1043193624780865546> RelaxRP | Fivem <:Horizon:1043193624780865546>`)
   .setColor(`#00FF83`)
   .setDescription('**<a:pin:1043194471321436271> Server ON <a:pin:1043194471321436271>** ```Servidor ON, entra y disfruta del servidor!!```')
   .setFooter(`© RelaxRP status enviada por `+ message.author.username , client.user.avatarURL())

client.channels.cache.get("1041815253698224231").send({ embeds: [embedDatos] })
      
message.delete(5000)
  }
}