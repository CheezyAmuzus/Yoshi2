exports.run = (client, message) => {

  var name = "";
  var type = "";
  var url = "";

  message.reply("What do you want me to do?");
  var collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000 });
  collector.on('collect', message => {
    if (message.content = 'playing') {
      var type = "Playing";
      message.reply("What should I play?");
      collector.on('collect', message => {
        if (message.content !== "") {
          var name = message.content;
          client.user.setPresence({
            'game': { 
              'name': name,
              'type': type
            },
          })
          return message.reply(`My activity has been set to \`${type} ${name}\`.`);
        } else {
          return message.reply("Please give me a game to play.");
        }
      })
    } else if (message.content = 'streaming') {
      var type = "Streaming";
      message.reply("Give me a twitch.tv url.");
      collector.on('collect', message => {
        if (message.content.startsWith("https://twitch.tv/")) {
          var url = message.content;
          message.reply("Now give me a game to stream.");
          collector.on('collect', message => {
            if (message.content != "") {
              var name = message.content;
              client.user.setPresence({
                'game': { 
                  'name': name,
                  'type': type,
                  'url': url
                },
              })
              return message.reply(`My activity has been set to \`${type} ${name}\`.`);
            } else {
              return message.reply("Please give me a game to stream.");
            }
          })
        } else {
          return message.channel.reply("That's not a valid twitch.tv url.\n e.g. `https://twitch.tv/cheezy_amuzus`");
        }
      })
    } else if (message.content = 'listening') {
      var type = "Listening";
      message.reply("What should I listen to?");
      collector.on('collect', message => {
        if (message.content != "") {
          var name = message.content;
          client.user.setPresence({
            'game': { 
              'name': name,
              'type': type
            },
          })
          return message.reply(`My activity has been set to \`${type} to ${name}\`.`);
        } else {
          return message.reply("Please give me something to listen to.");
        }
      })
    } else if (message.content = 'watching') {
      var type = "Watching";
      message.reply("What should I watch?");
      collector.on('collect', message => {
        if (message.content != "") {
          var name = message.content;
          client.user.setPresence({
            'game': { 
              'name': name,
              'type': type
            },
          })
          return message.reply(`My activity has been set to \`${type} ${name}\`.`);
        } else {
          return message.reply("Please give me something to watch.");
        }
      })
    } else {
      return message.channel.send("`Status - PLAYING,STREAMING,LISTENING,WATCHING`");
    }
  })

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
}