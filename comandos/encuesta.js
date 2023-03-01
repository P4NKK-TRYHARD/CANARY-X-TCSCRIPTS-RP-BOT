const Discord = require('discord.js');

module.exports = {
  name: "encuesta",
  alias: [""],
 execute(client, message, args){
  if(!message.member.roles.cache.has('1011678850301841520')) { return message.channel.send("``Error ❌`` ¡Usted no tiene los permisos suficientes!"); }
    if (!args[0]) { return message.channel.send("``Error ❌`` ¡Debe especificar una cantidad de mensajes!"); }
 let pregunta = args.join(' ')
 if(!pregunta){
   return message.channel.send("``❌ Mensaje Inválido`` **|** Proporcione un mensaje válido.")
 } 
         
const embedDatos = new Discord.MessageEmbed() 
       .setAuthor('Nueva Encuesta')
       .setDescription(`**${pregunta}**\n\n✅ - Si\n❌ - No`)
       .setColor(0xff4d4d)
       .setTimestamp()
       .setThumbnail("https://cdn.discordapp.com/attachments/936498873621422142/1055830196260970598/IMG_4778.png") 
message.channel.send({ embeds: [embedDatos] })
message.channel.send(`@here`)  
  .then(m => {
         m.react("✅");
         m.react("❌");
 
   });
    }

}