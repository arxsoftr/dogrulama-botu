const Discord = require('discord.js');
const ayarlar = require('../../ayarlar');
const prefix = ayarlar.prefix;
const sifre = ayarlar.sifre;

exports.run = async (client, message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'giriş') {
    if (!args[0]) {
      return message.reply('Lütfen bir şifre belirtin.');
    }

    if (args[0] !== sifre) {
      return message.reply('Yanlış şifre! Şifrenizi girin.');
    }

    const role = message.guild.roles.cache.find((role) => role.id === ayarlar.rolID);
    if (!role) return message.reply('Rol bulunamadı.');

    message.member.roles.add(role)
      .then(() => {
        const content = `## Yeni Giriş!\n**Giriş yapan kullanıcı**: <@${message.author.id}>\n**Giriş yapılan tarih**: ${new Date().toLocaleString()}\n**Verilen roller**: ${role.name}\n**Sunucuya kayıt tarihi**: ${message.member.joinedAt.toLocaleString()}`;

        const channel = message.guild.channels.cache.get(ayarlar.logKanal);
        if (channel) {
          channel.send(content);
        }

        message.reply('Doğrulama başarılı! Rol verildi.');

        message.channel.messages.fetch()
          .then((fetchedMessages) => {
            const channelMessages = fetchedMessages.filter((msg) => !msg.pinned);
            message.channel.bulkDelete(channelMessages)
              .catch((error) => {
                console.error(error);
                message.reply('Mesajları silerken bir hata oluştu.');
              });
          })
          .catch((error) => {
            console.error(error);
            message.reply('Mesajları alırken bir hata oluştu.');
          });
      })
      .catch((error) => {
        console.error(error);
        message.reply('Doğrulama sırasında bir hata oluştu.');
      });
  } else if (command === 'çıkış') {
    const role = message.guild.roles.cache.find((role) => role.id === ayarlar.rolID);
    if (!role) return message.reply('Rol bulunamadı.');

    message.member.roles.remove(role)
      .then(() => {
        const content = `## Çıkış!\n**Çıkış yapan kullanıcı**: <@${message.author.id}>\n**Giriş yapılan tarih**: ${new Date().toLocaleString()}\n**Verilen roller**: ${role.name}\n**Sunucuya kayıt tarihi**: ${message.member.joinedAt.toLocaleString()}`;

        const channel = message.guild.channels.cache.get(ayarlar.logKanal);
        if (channel) {
          channel.send(content);
        }

        message.reply('Başarıyla çıkış yaptınız.');
      })
      .catch((error) => {
        console.error(error);
        message.reply('Çıkış sırasında bir hata oluştu.');
      });
  }
};


//By ArX Developers