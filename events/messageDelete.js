const { Utils } = require('../index.js');

module.exports = async (client, message) => {
    if (message.author.bot) return;
    
    if (message.channel.type == 'text')
    Utils.logCheck(message.guild, 'messageDeletes').then(logChannel => {
        if (!logChannel) return;  
        logChannel.send(Utils.embed("", message.content).setAuthor("Message Deleted", message.author.displayAvatarURL).setTimestamp().setFooter(`Sent by ${message.author.tag} (${message.author.id}) in #${message.channel.name}`));
    });
}