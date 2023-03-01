const Discord = require('discord.js');

module.exports = {
    name: "rules",
    aliases: ["rules"],
    execute: async(client, message, args) => {

  if(!message.member.roles.cache.has('1011678850301841520')) { return message.channel.send("``Error ❌`` ¡Usted no tiene los permisos suficientes!"); }
  const mencionado = message.mentions.users.first();

  const embedDatos = new Discord.MessageEmbed()
  .setDescription(`<:scstaff:1077893760249241601> TC Reglas <:scstaff:1077893760249241601>

  --> No insultar
  --> Respetar a los demás
  --> No hacer Spam / Flood
  --> No promocionar otros servers / canales / etc...
  --> No enviar contenido +18 / Gore....`)
  .setThumbnail('https://cdn.discordapp.com/attachments/1077253001489690674/1077583280498548837/banner-tc-scripts.png')
  .setColor('#000000')
  client.channels.cache.get("1041815253698224231").send({ embeds: [embedDatos] })
  message.channel.send(`@everyone`)

}}