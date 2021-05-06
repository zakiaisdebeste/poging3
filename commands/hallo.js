const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Hallo ik ben de bot van HRP " + message.author.username);
}

module.exports.help = {
    name: "hallo"
}