const Discord = require('discord.js');

module.exports = {
  name: "help",//le debes dar un nombre a tu comando
  alias: [],// puedes darle un alias si no quieres darle un alias simplemente dejalo vacio sin las comillas

async execute(client, message, args){
const embedDatos = new Discord.MessageEmbed() 
    .setTitle("Comandos nombreRP")
    .setColor(`#00FF83`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/950135061351633047/1050919172932112515/wonderrpp.png`)
    .addField(".", "Para cuando el servidor este cerrado.")
    .addField("Comandos Moderación", "ㅤㅤㅤ")
    .addField(".clear", "Borrar una cantidad de mensajes.")
    .addField(".ban", "Banear a un usuario del discord.")
    .addField(".encuesta", "Crear una encuestra.")
    .addField(".say", "Enviar un mensaje a un canal")
    .addField(".susupendido", "Suspendido de la whitelist")
    .addField(".aprobado", "Aprobado de la whitelist")
    .addField(".staff", "Enviar Postulacion de staff")
    .addField(".reporte", "Reportar staff anonimamente")


message.channel.send({ embeds: [embedDatos] })  

}
}