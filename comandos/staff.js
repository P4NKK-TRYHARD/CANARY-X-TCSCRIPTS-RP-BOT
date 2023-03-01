const Discord = require('discord.js');

module.exports = {
  name: "staff",//le debes dar un nombre a tu comando
  alias: [],// puedes darle un alias si no quieres darle un alias simplemente dejalo vacio sin las comillas

async execute(client, message, args){
const embedDatos = new Discord.MessageEmbed() 
   .setTitle("<:relaxrp:1055765702767816766> Postulaciones Staff RelaxRP <:relaxrp:1055765702767816766>")
    .setColor(`#3377FF`)
    .setDescription("Buenas, este es el formulario para ser staff en el servidor de **RelaxRP**, antes de rellenarlo debes de cumplir con unos ciertos requisitos, los cuales son los siguientes:\n\n**✅ 16 años mínimos**\n**✅ Tener experiencia previa como Staff.**\n**✅ No tener sanciones administrativas.**\n**✅ Ser activo en el servidor**\n**✅ Tener micro y Cascos funcionales**\n\nFormulario: [Link](https://docs.google.com/forms/d/1ZpioaCRxA-4h4EkjdbYqA8h3QGNBEn1cSzPhkKGLmGA/edit)")
    .setImage(`https://cdn.discordapp.com/attachments/936498873621422142/1055830196260970598/IMG_4778.png`)
message.channel.send({ embeds: [embedDatos] })
message.channel.send(`@here`)

message.delete()
        
}
}