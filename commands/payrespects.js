exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
    message.channel.send('**F**');
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "payrespects",
    category: "Fun",
    description: "Yoshi will pay his respects.",
    usage: "payrespects"
  };