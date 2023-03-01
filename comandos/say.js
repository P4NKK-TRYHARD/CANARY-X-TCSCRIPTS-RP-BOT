const Discord = require('discord.js');

module.exports = {
  name: "say",
  alias: [],
  descripcion: "",

execute(client, message, args){
        if(!message.member.permissions.has("MANAGE_MESSAGES")) { return message.channel.send("``Error ❌`` ¡Usted no tiene los permisos suficientes!"); }
    if (!args[0]) { return message.channel.send("``Error ❌`` ¡Debe especificar una cantidad de mensajes!"); }
 let texto = args.join(' ')
 if(!texto){
   return message.channel.send("``❌ Mensaje Inválido`` **|** Proporcione un mensaje válido.")
 }
 
message.channel.send(texto)  

message.delete()

}
}