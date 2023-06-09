const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('yaz')
    .setDescription('Belirtilen mesajı botun yazmasını sağlar.')
    .addStringOption(option =>
      option.setName('mesaj')
        .setDescription('Yazılmasını istediğiniz mesajı belirtin.')
        .setRequired(true)
    ),
    run: async (client, interaction) => {
      interaction.reply('mesaj')
    }
};

//By ArX Developers