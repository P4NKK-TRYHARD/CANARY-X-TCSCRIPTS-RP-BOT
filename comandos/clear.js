const Discord = require('discord.js');

module.exports = {
  name: "clear",//le debes dar un nombre a tu comando
  alias: [""],// puedes darle un alias si no quieres darle un alias simplemente dejalo vacio sin las comillas

 execute(client, message, args){
    if(!message.member.permissions.has("MANAGE_MESSAGES")) { return message.channel.send("``Error ❌`` ¡Usted no tiene los permisos suficientes!"); }
    if (!args[0]) { return message.channel.send("``Error ❌`` ¡Debe especificar una cantidad de mensajes!"); }
    else if (isNaN(args[0])) { return message.channel.send("``Error ❌`` ¡Por favor, especifique un número!"); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`¡Se han suprimido **${messages.size}** mensajes!`);              
                });

  }
}