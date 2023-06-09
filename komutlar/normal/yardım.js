const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "yardım",
    aliases: ["yardım"],
    cooldown: 5000,
    run: async (client, message, args) => {
      message.reply(`**Yardım Komutları:**
      - </giriş:1116823172998778984> ArX doğrulama sistemi ile giriş yapar.
      - </çıkış:1116844041389211698> ArX doğrulama sistemi ile çıkış yapar.
      - </şifre-değiştir:1116846148066476142> ArX doğrulama sistemi şifresini değiştirir.
      - Bu altyapıyı kullandığın için teşekkürler. By ArX Developers...`)
    }
 };

 //By ArX Developers