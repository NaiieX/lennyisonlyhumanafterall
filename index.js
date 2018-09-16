const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "!";
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.login(process.env.TOKEN);

///fonctions random

var randroast;
function randomroast(min, max) {
    min = Math.ceil(13);
    max = Math.floor(14);
    randroast = Math.floor(Math.random() * (max - min +1) + min)
}
var randiq;
function randomiq(min, max) { 
    min = Math.ceil(13);
    max = Math.floor(143);
    randiq = Math.floor(Math.random() * (max - min +1) + min)
}
var randdice6
function randomdice6(min, max) {
    min = Math.ceil(1);
    max = Math.floor(6);
    randdice6 = Math.floor(Math.random() * (max - min +1) + min)
}


///prêt

client.on("ready", () => {
   console.log("Prêt...");
   client.user.setActivity("!help");
});

///ping pong

client.on ("message", message => {
    if(message.content === "ping"){
        message.reply("**pong**");

///!help
      
    }
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#336699")
        .setTitle("***Perdu? Regarde les commandes ( ͡~ ͜ʖ ͡°):***")
        .addField("**Commandes utilisables par les simples membres**:", "-")
        .addField("*!help* - Affiche les commandes. :tools:", "-")
        .addField("*!myinfo* - Affiche des informations sur ton compte. :robot:", "-")
        .addField("*!rolld6* - Lance un dé à 6 faces. :four_leaf_clover:", "-")
        .addField("*!roastme* - Permet de te prendre mes plus nulles punchlines dans ta gueule... :anger: [BETA]", "-")
        .addField("**Commandes utilisables par les modérateurs:**", "-")
        .addField("*!kick* [@pseudo] - Permet d'expulser une personne du seveur. :zap:", "-")
        .addField("*!ban* [@pseudo] - Permet de bannir une personne du seveur. :boom:", "-")
        .addField("*!clear* [Nombres de messages] - Permet de supprimer un certain nombre de messages. :eyes:", "-")
        .addField("*!mute* [@pseudo] - Permet de rendre muet un certain joueur, uniquement dans le salon dans lequel la commande a été écrite. :mute:", "-")
        .addField("*!unmute* [@pseudo] - Permet d'annuler le mute d'un certain joueur, uniquement dans le salon dans lequel la commande a été écrite. :loud_sound:", "-")
        .setFooter("Menu d'aide")
        message.channel.send(help_embed);
    }
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "myinfo":
        randomiq();

///!myinfo        
        
        var userCreationDate = message.author.createdAt.toString().split(" ");
        var msgauthorid = message.author.id;
        var stats_embed = new Discord.RichEmbed()
        .setColor("#336699")
        .setTitle(`***Voici quelques information sur toi et ton compte, ${message.author.username} ( ͡ᵔ ͜ʖ ͡ᵔ ):***`)
        .addField('**Ton ID:**', msgauthorid,true)
        .addField("**Date de création de ton compte:**", userCreationDate[1]+ ` ` +userCreationDate[2]+ ` ` +userCreationDate[3])
        .addField("**Ton QI approximatif:**", randiq)
        .setThumbnail(message.author.avatarURL)
        .setFooter("Menu d'informations")
        message.channel.send(stats_embed);
        break;
    }
  
///!clear
  
    if (message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Tu n'as pas la permission de supprimer les messages. (☭ ͜ʖ ☭)**");
        let args = message.content.split(" ").slice(1);
        if(!args[0]) return message.channel.send("**Précise le nombre de messages a supprimer! ( ͡o ͜ʖ ͡o)**")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`**${args[0]} messages ont été supprimés! ( ͡◉ ͜ʖ ͡◉)**`)
        }
    )
}

///!rolld6
   
    if(message.content === prefix + "rolld6"){
        randomdice6()
        var dice6_embed = new Discord.RichEmbed()
        .setColor("#336699")
        .setTitle("***:four_leaf_clover: Résultat des dés:***")
        .addField("**Vous avez fait:**", "-")
        .setThumbnail(message.author.avatarURL)
        message.reply(dice6_embed);
        if(randdice6 == 1){
            message.channel.send({files: ["./assets/d1.png"]});
        }
        if(randdice6 == 2){
            message.channel.send({files: ["./assets/d2.png"]});
        }
        if(randdice6 == 3){
            message.channel.send({files: ["./assets/d3.png"]}); 
        }
        if(randdice6 == 4){
            message.channel.send({files: ["./assets/d4.png"]});
        }
        if(randdice6 == 5){
            message.channel.send({files: ["./assets/d5.png"]});
        }
        if(randdice6 == 6){
            message.channel.send({files: ["./assets/d6.png"]});
        }
    }
  
///roastme
  
    if(message.content === prefix + "roastme"){
       randomroast();

    if(randroast == 1){
        message.reply("**ligma balls. ( ͡◉ ͜ʖ ͡◉)**")
        }
    if(randroast == 2){
        message.reply("**tu savais que pour Halloween t'avais pas besoin de déguisement? ( ͡◉ ͜ʖ ͡◉)**")
        }
    if(randroast == 3){
        message.reply("**t'es tellement pauvre que dans la rue, t'imites les pigeons pour que les gens te donne des miettes de pain. ( ͡◉ ͜ʖ ͡◉)**")
        }
    if(randroast == 4){
        message.reply("**t'as pas peur de te faire agresser par des écureuils? Non parce que avec ta tête de gland, il faut faire attention... ( ͡◉ ͜ʖ ͡◉)**")
        }
    if(randroast == 5){
        message.reply("**t'es comme France 2, personne te regarde. ( ͡◉ ͜ʖ ͡◉)**")
        }
    if(randroast == 6){
        message.reply("**t'es la preuve vivante que Dieu à le sens de l'humour. ( ͡◉ ͜ʖ ͡◉)**")
        }
    if(randroast == 7){
        message.reply("**c'est parce que t'as une tête de cul que tu dis toujours de la merde? ( ͡◉ ͜ʖ ͡◉)**")
        }
    if(randroast == 8){
        message.reply("**si les cons étaient fluorescents, t'éclairerais à toi tout seul le Soleil... ( ͡◉ ͜ʖ ͡◉)**")
        }
    if(randroast == 9){
        message.reply("**ta voix ressemble à du laxatif. Quand tu parles tu me fais chier... ( ͡◉ ͜ʖ ͡◉)**")
        }
    if(randroast == 10){
        message.reply("**si je te parle pas, c'est pas que je suis timide! C'est juste que j'aime pas ta gueule... ( ͡◉ ͜ʖ ͡◉)**")
        }
    }
  
///kick

    if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
            return message.channel.send("**Tu n'as pas les droits d'expulser des membres du serveurs! (☭ ͜ʖ ☭)**")
        if(message.mentions.users.size === 0) {
            return message.channel.send("**Tu n'as mentionné aucune personne! (͠≖ ͜ʖ͠≖)**")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if (!kick) {
            return message.channel.send("**Je ne pense pas que cette personne soit présente sur le serveur! ¯\_(ತĹ̯ತ)_/¯**")
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("**Je n'ai pas la permission d'expulser des personnes du serveur, désolé. ʕ ͡° ʖ̯ ͡°ʔ**")
        }
        kick.kick().then(member => {
            message.channel.send(`**:zap: ${member.user.username} a été kick par ${message.author.username}. ( ͡◉ ͜ʖ ͡◉)**`)
        });
    }
  
///ban
  
    if (message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
            return message.channel.send("**Tu n'as pas les droits de bannir des membres du serveurs! (☭ ͜ʖ ☭)**")
        if(message.mentions.users.size === 0) {
            return message.channel.send("**Tu n'as mentionné aucune personne! (͠≖ ͜ʖ͠≖)**")
        }
        var ban = message.guild.member(message.mentions.users.first());
        if (!ban) {
            return message.channel.send("**Je ne pense pas que cette personne soit présente sur le serveur! ¯\_(ತĹ̯ತ)_/¯**")
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("**Je n'ai pas les permission de bannir des personnes du serveur, désolé. ʕ ͡° ʖ̯ ͡°ʔ**")
        }
        ban.ban().then(member => {
            message.channel.send(`**:boom: ${member.user.username} a été banni par ${message.author.username}. ( ͡◉ ͜ʖ ͡◉)**`)

        });
    }
  
///!mute
 
    if (message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
            return message.channel.send("**Tu n'as pas les droits de mute des membres du serveurs! (☭ ͜ʖ ☭)**")
        if(message.mentions.users.size === 0) {
            return message.channel.send("**Tu n'as mentionné aucune personne! (͠≖ ͜ʖ͠≖)**")
        }
        var mute = message.guild.member(message.mentions.users.first())
        if (!mute) {
            return message.channel.send("**Je ne pense pas que cette personne soit présente sur le serveur! ¯\_(ತĹ̯ತ)_/¯**")
        }
        if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
            return message.channel.send("**Je n'ai pas les permission de mute des personnes du serveur, désolé. ʕ ͡° ʖ̯ ͡°ʔ**");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`**:mute: ${mute.user.username} à été mute par ${message.author.username}**`);
        });
    }
  
///!unmute  
  
if (message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
            return message.channel.send("**Tu n'as pas les droits de démute des membres du serveurs! (☭ ͜ʖ ☭)**")
        if(message.mentions.users.size === 0) {
            return message.channel.send("**Tu n'as mentionné aucune personne! (͠≖ ͜ʖ͠≖)**")
        }
        var mute = message.guild.member(message.mentions.users.first())
        if (!mute) {
            return message.channel.send("**Je ne pense pas que cette personne soit présente sur le serveur! ¯\_(ತĹ̯ತ)_/¯**")
        }
        if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
            return message.channel.send("**Je n'ai pas les permission de démute des personnes du serveur, désolé. ʕ ͡° ʖ̯ ͡°ʔ**");+
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`**:mute: ${mute.user.username} à été démute par ${message.author.username}**`);
          

        });
    }
         
});



