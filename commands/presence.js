exports.run = (client, message, [type, url, ...game]) => {

  client.user.setPresence({
    game: { 
        name: `${game}`,
        type: `${type}`,
        url: `${url}`
    }
  })
  
    message.reply(`The activity has been set to \`${type} ${game}\`.`);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Admin"
  };
  
  exports.help = {
    name: "presence",
    category: "Technical",
    description: "Set's Yoshi's presence.",
    usage: "presence [status - 0:Playing 1:Streaming 2:Listening 3:Watching] [url (if streaming otherwise put n)] [game]"
  };