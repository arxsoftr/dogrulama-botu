const { SlashCommandBuilder } = require('@discordjs/builders');
const ayarlar = require('../../ayarlar');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('çıkış')
    .setDescription('ArX doğrulama sistemi ile çıkış yapar.'),
  run: async (execute, interaction) => {
    const role = interaction.guild.roles.cache.get(ayarlar.rolID);
    if (!role) {
      return interaction.reply('Rol bulunamadı. İlgili rolü ayarlayın veya botun yetkilerini kontrol edin.');
    }

    interaction.member.roles.remove(role)
      .then(() => {
        const content = `## Çıkış!\n**Çıkış yapan kullanıcı**: <@${interaction.user.id}>\n**Giriş yapılan tarih**: ${new Date().toLocaleString()}\n**Verilen roller**: ${role.name}\n**Sunucuya kayıt tarihi**: ${interaction.member.joinedAt.toLocaleString()}`;

        const channel = interaction.guild.channels.cache.get(ayarlar.logKanal);
        if (channel) {
          channel.send(content);
        }

        interaction.reply('Çıkış başarılı!');
      })
      .catch((error) => {
        console.error(error);
        interaction.reply('Çıkış sırasında bir hata oluştu.');
      });
  },
};

//By ArX Developers