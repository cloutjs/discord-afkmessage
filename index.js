const Discord = require("discord.js");
const client = new Discord.Client();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.clear();

  rl.question('What is your discord token? ', (answer) => {
    const token = answer
  
{
  console.clear();

  rl.question('What message do you want to put as AFK Message? ', (answer2) => {
    const messagee = answer2

    {
    client.on("ready", () => {
    console.clear();
    console.log(`Logged in as ${client.user.tag}`);
    console.log(`AFK Message: ${messagee}`);
    console.log("");
    console.log("When you are not afk anymore, close this window!")});
    
        client.on("message", async message => {
        if(message.content == `<@!${client.user.id}>`) {
            return message.channel.send(messagee)
        }
        });
    

    
    client.login(token)
}})}});