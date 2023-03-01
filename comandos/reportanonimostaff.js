const Discord = require('discord.js');

module.exports = {
  name: "reporte",
  aliases: ["report"],
  execute: async(client, message, args) => {

const mencionado = message.mentions.users.first();
if(!mencionado) return message.reply('``❌ Error`` No ha mencionando a ningún usuario.');
let id = mencionado.id;
          
let texto = args.slice(1).join(' ');
if(!texto) return message.channel.send('`❌ Error`` Escriba el contenido a enviar.');

const embedDatos = new Discord.MessageEmbed() 
        
   .setTitle("Reporte Anonimo Staff")
   .setColor(0xff0000)
   .setDescription(`**Staff que Reporta** | <@!${message.member.id}>\n**Staff Reportado** | ${mencionado}\n**Hechos Sucedidos** | ${texto}`)

client.channels.cache.get("1041815253698224231").send({ embeds: [embedDatos] }) 
message.channel.send("Su reporte fue enviado anónimamente a los superiores del servidor, le informaremos si tomamos medidas drásticas.")
      
      
message.delete(5000)
  }
}
