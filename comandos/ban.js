const Discord = require('discord.js');

module.exports = {
  name: "ban",//le debes dar un nombre a tu comando
  alias: [""],// puedes darle un alias si no quieres darle un alias simplemente dejalo vacio sin las comillas

 execute(client, message, args){
if(!message.member.permissions.has("BAN_MEMBERS")) { return message.channel.send("``Error ❌`` ¡Usted no tiene los permisos suficientes!"); }
    if (!args[0]) { return message.channel.send("``Error ❌`` ¡Debe especificar una cantidad de mensajes!"); }
   //definimos la persona a banear
        let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
        if (!usuario) return message.reply(`❌ **No se ha encontrado al usuario que has especificado!**`);

        //definimos razón, y si no hay, la razón será "No se ha especificado ninguna razón!"
        let razon = args.slice(1).join(" ");
        if(!razon) razon = "No se ha especificado ninguna razón!"

        //comprobamos que el usuario a banear no es el dueño del servidor
        if(usuario.id == message.guild.ownerId) return message.reply(`❌ **No puedes banear al DUEÑO del Servidor!**`);

        //comprobar que el BOT está por encima del usuario a banear
        if (message.guild.me.roles.highest.position > usuario.roles.highest.position) {
            //comprobar que la posición del rol del usuario que ejecuta el comando sea mayor a la persona que vaya a banear
            if (message.member.roles.highest.position > usuario.roles.highest.position) {
                //enviamos al usuario por privado que ha sido baneado!
                usuario.send({embeds: [
                    new Discord.MessageEmbed()
                    .setTitle(`Has sido baneado de __${message.guild.name}__`)
                    .setDescription(`**Razón:** \n\`\`\`yml\n${razon}\`\`\``)
                .setColor(0xff0000)
                    .setTimestamp()
                ]}).catch(() => {message.reply(`No se le ha podido enviar el DM al usuario!`)});
                //enviamos en el canal que el usuario ha sido baneado exitosamenete

                message.reply({embeds: [new Discord.MessageEmbed()
                .setTitle(`✅ Usuario baneado`)
                .setDescription(`**Se baneo exitosamente a \`${usuario.user.tag}\` *(\`${usuario.id}\`)* del servidor!**`)
                .addField(`Razón`, `${razon}`)
                .setColor(0xff0000)
                .setFooter(`© WonderRP baneado por `+ message.author.username , client.user.avatarURL())
                .setTimestamp()
                ]})

                usuario.ban({reason: razon}).catch(() => {
                    return message.reply({embeds: 
                    [new Discord.MessageEmbed()
                    .setTitle(`❌ No he podido banear al usuario!`)
                .setColor(0xff0000)
                    ]})
                });
            } else {
                return message.reply(`❌ **Tu Rol está por __debajo__ del usuario que quieres banear!**`)
            }
        } else {
            return message.reply(`❌ **Mi Rol está por __debajo__ del usuario que quieres banear!**`)
        }


    }
}