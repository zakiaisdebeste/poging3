const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("HRP informatie")
        .setDescription("Wij zijn een roblox Surveliance community --- dit command is gemaakt door verifiedaapje")
        .setColor("#0a1cf3")
        .addField("Bot Naam", bot.user.username)
        .setThumbnail("https://cdn.discordapp.com/attachments/837409607163838484/839239362864218172/image0.png")
        .setImage("")
        .setFooter("Copyright 2021", "https://cdn.discordapp.com/attachments/837409607163838484/839239362864218172/image0.png")
        .setTimestamp();
        
             return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}

