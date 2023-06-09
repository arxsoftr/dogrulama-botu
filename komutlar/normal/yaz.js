const { Permissions } = require('discord.js');
const ayarlar = require('../../ayarlar');
const sahip = ayarlar.sahip

exports.run = (client, message, args) => {
  const allowedUserIDs = [sahip]; 

  if (!allowedUserIDs.includes(message.author.id)) {
    return message.reply('Bu komutu kullanma izniniz yok.');
  }

  if (message.content.startsWith('!yaz ')) {
    let mesaj = message.content.slice(5);
    if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');

    message.delete().catch(console.error);
    message.channel.send(mesaj).catch(console.error);
  }
};

exports.conf = {
  aliases: ['say', 'söyle'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};

//By ArX Developers