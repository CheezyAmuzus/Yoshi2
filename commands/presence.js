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
    usage: "presence [status - PLAYING,STREAMING,LISTENING,WATCHING] [url (if streaming otherwise put n)] [game]"
  };