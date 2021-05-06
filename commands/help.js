const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        var text = "Hoogelanden Roleplay bot  \n\n__Commands__\n - !hallo - De bot stelt zichzelf voor. \n - !info - Geeft info.";

        message.author.send(text)

        message.reply("Alle commands zijn in je DM gestuurd!")

    } catch(error){
        message.reply("Er is helaas iets fout gegaan tag een Bot dev");
    }

}

module.exports.help = {
    name: "help"
}
