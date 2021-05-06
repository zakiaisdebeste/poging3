const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        var text = "Hoogelanden Roleplay bot  \n\n__staff-commands__\n - !kick - De bot kickt de getagde persoon. \n - !ban De bot bant de getagde persoon. \n  - !warn - de bot warnt de getagde persoon.";

        message.author.send(text)

        message.reply("Alle commands zijn in je DM gestuurd!")

    } catch(error){
        message.reply("Er is helaas iets fout gegaan tag een Bot dev");
    }

}

module.exports.help = {
    name: "staffhelp"
}
