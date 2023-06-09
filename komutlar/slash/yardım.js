const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('yardım')
    .setDescription('Komutları listeler.'),
    run: async (execute, interaction) => {
    const helpMessage = `**Yardım Komutları:**
- </giriş:1116823172998778984> ArX doğrulama sistemi ile giriş yapar.
- </çıkış:1116844041389211698> ArX doğrulama sistemi ile çıkış yapar.
- </şifre-değiştir:1116846148066476142> ArX doğrulama sistemi şifresini değiştirir.
- Bu altyapıyı kullandığın için teşekkürler. By ArX Developers...`;

    interaction.reply(helpMessage);
  },
};

//By ArX Developers