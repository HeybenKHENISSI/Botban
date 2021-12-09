const Discord = require("discord.js");
const client = new Discord.Client();
const bdd = require("./bdd.json");
const fs = require("fs");
const { channel } = require("diagnostics_channel");
const prefix ="!";
var idcaptach;
client.on("ready", () =>{
    console.log("le bot est allumé")
});

client.on("guildMemberAdd", member => {
    if (member.user.bot == false) {
    if(member.user.username.includes("ora") || member.user.username.includes("Announcement") || member.user.username.includes("Admin") || member.user.username.includes("Moderator") || member.user.username.includes("Important") || member.user.username.includes("Mint") || member.user.username.includes("Minting") || member.user.username.includes("Administrator") || member.user.username.includes("Director") || member.user.username.includes("CEO") || member.user.username.includes("CTO") || member.user.username.includes("Manager") || member.user.username.includes("Announcements") || member.user.username.includes("Bot") ||  member.user.username.includes("Notification")){
    //console.log(/*"est ban"*/"est" + member.user.username)
    console.log(member.user.username + " est ban car il possède un pseudon non conforme")
    member.guild.member(member.user.id).ban({reason: 'ban'})
   }
    }
  /* else{
    member.roles.add('916346014372356126');
    bdd["captcha"][member.id] = { "value": Math.floor(Math.random() * Math.floor(10000)), "statut": false }
    console.log(member.id);
    console.log(member.user.username);
    console.log(member.user.id);
    Savebdd();
    var channel_ticket = message.guild.channels.create('Verification',{
        type: 'text',
        permissionOverwrites: [{
            id: message.guild.id,
            deny: ["VIEW_CHANNEL"],
        },
        {
            id: message.author.id,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"],
        },
    ]
    }).then(result => {console.log('Here is channel id', result.id)})
    console.log(channel_ticket.cache.id)
    //client.channels.cache.get(result.id).send(`Bonjour ${member} ! Ton code de captcha est : ${bdd["captcha"][member.id]["value"]}`)
   }*/
});

client.on("message", async message =>{
    if (message.author.user.bot == false) {
    if(message.author.username.includes("Announcement") || message.author.username.includes("Admin") || message.author.username.includes("Moderator") || message.author.username.includes("Important") || message.author.username.includes("Mint") || message.author.username.includes("Minting") || message.author.username.includes("Administrator") || message.author.username.includes("Director") || message.author.username.includes("CEO") || message.author.username.includes("CTO") || message.author.username.includes("Manager") || message.author.username.includes("Announcements") || message.author.username.includes("Bot") ||  message.author.username.includes("Notification")){
        //console.log(/*"est ban"*/"est" + member.user.username)
        console.log(message.author.username + " est ban car il possède un pseudon non conforme")
        message.guild.member(message.author.id).ban({reason: 'ban'})
    }
    }
   /* else{
        if(message.content.includes("mora") || message.content.includes("lol")){
            console.log("hiuhiuhui");
            message.member.roles.add('912793132729528330');
            setTimeout(function(){
                message.member.roles.remove('912793132729528330');
            }, 5000);
        }

        if (message.content === "!start"){
            client.channels.cache.get('912713234648272936').send("yes");*/
            //const Equipe_rouge = "Equipe Rouge";
            //let role = message.guild.roles.cache.find(r => r.id === "916346014372356126");
            //const num = message.guild.channels.cache.get(message.guild.channels.create(Equipe_rouge));
            //console.log(num);
            /*channel.overwritePermissions([
                {
                        id: guild.roles.cache.get(args.),
                        allow: action === 'add' ? args : [],
                        deny: action === 'remove' ? args : [],
            },
        ])*/
            
         /*   var channel_ticket = message.guild.channels.create('ticket',{
                type: 'text',
                permissionOverwrites: [{
                    id: message.guild.id,
                    deny: ["VIEW_CHANNEL"],
                },
                {
                    id: message.author.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"],
                },
            ]
            }).then(result => {idd = console.log("lolo " +result.id)})*/
           // var idd = arrive(message);
            //console.log("id est " + $idd)
            //console.log("id est " + `$idd`)
            //console.log("huihui" + channel_ticket.guild.id)
        //}
      /*  console.log("id est " + idd)
        console.log("passe 0");
        if(message.author.id == '912704949031432273' || message.member.permissions.has('ADMINISTRATOR')) return;
        console.log("passe 1");
        if(message.channel.id == "916346265401450496") {
            console.log("passe 2");
            console.log(message.member.id);
            console.log(message.author.id);
            message.delete();
            if(!bdd["captcha"][message.member.id]["statut"]){
                console.log("passe 3");
                if (isNaN(message.content)) {
                    console.log("passe 4");
                    const message_2 = await message.channel.send('Tu dois indiquer la valeur de la captcha envoyée au dessus');
                    return await message_2.delete({ timeout: 15000 });
                }
                else {
                    if(message.content == bdd["captcha"][message.member.id]["value"]){
                        console.log("passe 5");
                        bdd["captcha"][message.member.id]["statut"] = true;
                        Savebdd();
                        message.member.roles.remove('916346014372356126');
                        message.member.roles.add('916347449809989654');
    
                    }
                    else{
                        console.log("passe 6");
                        const message_3 = await message.channel.send('Tu dois indiquer la valeur de la captcha envoyée au dessus');
                        return await message_3.delete({ timeout: 15000 });
                    }
                }
            }
        }*/
    //}

})
/*
client.on('guildMemberRemove', async member => {
    delete bdd["captcha"][member.id]
    Savebdd();
})
*/
/*
function arrive(message){
    var channel_ticket = message.guild.channels.create('ticket',{
        type: 'text',
        permissionOverwrites: [{
            id: message.guild.id,
            deny: ["VIEW_CHANNEL"],
        },
        {
            id: message.author.id,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"],
        },
    ]
    }).then(result => {return result.id})
}
*//*
function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}
*/
client.login(process.env.token);

