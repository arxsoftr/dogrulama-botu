const { SlashCommandBuilder } = require('@discordjs/builders');
const ayarlar = require('../../ayarlar');
const sifre = ayarlar.sifre;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('giriş')
    .setDescription('ArX doğrulama sistemi ile giriş yapar.')
    .addStringOption(option => option.setName('şifre').setDescription('Doğrulama şifresini girin.').setRequired(true)),
    run: async (execute, interaction) => {
        const şifre = interaction.options.getString('şifre');
      

    if (şifre !== sifre) {
      return interaction.reply('Yanlış şifre! Lütfen doğru şifreyi girin.');
    }

    const role = interaction.guild.roles.cache.get(ayarlar.rolID);
    if (!role) {
      return interaction.reply('Rol bulunamadı. İlgili rolü ayarlayın veya botun yetkilerini kontrol edin.');
    }

    interaction.member.roles.add(role)
      .then(() => {
        const content = `## Yeni Giriş!\n**Giriş yapan kullanıcı**: <@${interaction.user.id}>\n**Giriş yapılan tarih**: ${new Date().toLocaleString()}\n**Verilen roller**: ${role.name}\n**Sunucuya kayıt tarihi**: ${interaction.member.joinedAt.toLocaleString()}`;

        const channel = interaction.guild.channels.cache.get(ayarlar.logKanal);
        if (channel) {
          channel.send(content);
        }

        interaction.reply('Doğrulama başarılı! Rol verildi.');
      })
      .catch((error) => {
        console.error(error);
        interaction.reply('Doğrulama sırasında bir hata oluştu.');
      });
  },
};

//By ArX Developers