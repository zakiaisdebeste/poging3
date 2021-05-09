const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !announcement title | bericht | kleur | kanaal

    if(message.member.hasPermisson("BAN_MEMBERS")) return message.reply("Jij kan dit niet!");
    
}

module.exports.help = {
    name: "announcement"
}