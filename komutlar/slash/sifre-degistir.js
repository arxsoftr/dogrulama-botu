const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const ayarlar = require('../../ayarlar');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('şifre-değiştir')
    .setDescription('ArX doğrulama sistemi şifresini değiştirir.')
    .addStringOption(option => option.setName('yenişifre').setDescription('Yeni şifreyi belirtin.').setRequired(true)),
    run: async (execute, interaction) => {
    const yeniSifre = interaction.options.getString('yenişifre');
    ayarlar.sifre = yeniSifre; 

    fs.writeFile('./ayarlar.js', `module.exports = ${JSON.stringify(ayarlar, null, 2)};`, (err) => {
      if (err) {
        console.error(err);
        return interaction.reply('Şifre güncellenirken bir hata oluştu.');
      }
      interaction.reply(`Şifre başarıyla değiştirildi. Yeni şifre: ${yeniSifre}`);
    });
  },
};

//By ArX Developers