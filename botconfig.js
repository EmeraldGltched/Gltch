module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "/", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODA3NjgzMTg0Mzc1NzU4ODQ4.YB7jlQ.JVsfzWBINMh6hw4NnuD0JHwfiaQ", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "807683184375758848", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "a6hwoORwigP68kP-xdG1iVgbjrpnHk-u", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"],//Discord OAuth2 Scopes
  ServerDeafen : true,//If you want bot to stay deafened
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "LivnKay", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "server",
    host: "8.tcp.ngrok.io",
    port: 15070,
    pass: "GLTCH", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "9b7b42d42ac443078e1b659f3ed60c85", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "9db65d7cf42a4d2a8ac53218eb049644", //Spotify Client Secret
  },
};
