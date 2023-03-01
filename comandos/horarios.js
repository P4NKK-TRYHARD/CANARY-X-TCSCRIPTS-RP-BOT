const Discord = require('discord.js');

module.exports = {
    name: "horarios",
    aliases: ["horarios"],
    execute: async(client, message, args) => {

  if(!message.member.roles.cache.has('1011678850301841520')) { return message.channel.send("``Error ❌`` ¡Usted no tiene los permisos suficientes!"); }
  const mencionado = message.mentions.users.first();

  const embedDatos = new Discord.MessageEmbed()
  .setDescription(`:file_folder:  TC Horarios :file_folder:

  --> De Lunes a Viernes de 16:30 a 23:00
  --> Los Sabados de 10:00 a 1:00
  --> Los Domingos a las 10:00 hasta las 23:00
  --> Horarios hora española
  --> No se atendera despues de esas horas`)
  .setThumbnail('https://cdn.discordapp.com/attachments/1077253001489690674/1077583280498548837/banner-tc-scripts.png')
  .setColor('#000000')
  client.channels.cache.get("1041815253698224231").send({ embeds: [embedDatos] })
  message.channel.send(`@everyone`)
  message.delete(5000)

}}