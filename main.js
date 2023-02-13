const Discord = require('discord.js');
const client = new Discord.Client();

const prefix= 'e give ';


client.once('ready',()=>{
    console.log("It's working");
} )

client.on('message', message =>{
    if(!message.content.startsWith(prefix)||message.author.bot)
        return;
    let returnmessage = "/e give "; 
    var item;
    const args= message.content.slice(prefix.length).split(/ +/);
    
    var command = args.shift().toLowerCase();

    if(command === 'all'){
        returnmessage+= "-all";
    } 
    else{
        returnmessage+= "-p "+ command;
    }


    //console.log(args);
    if(args!=0){
        command = args.shift();
        item=command;
        returnmessage+= " -i "+ command;
    }


    if(args!=0){
        command = args.shift();
        returnmessage+= " -a "+ command;
    }
    else
    returnmessage+= " -a 1";

    if(args!=0){
        command = args.shift().toLowerCase();
        if(command[0]=='n'){
            command=command.substring(1);
            let aux = returnmessage.split(item);
            returnmessage = aux.shift()+'"'+item+"::"+command+'" '+aux.shift();
            
        }
        else{
            let aux=command.split(':');
            let aux2=aux.shift();
            if(aux2=="power")
                returnmessage+=" -e arrow_damage:"+aux.shift();
            else
            if(aux2=="flame")
                returnmessage+=" -e arrow_fire:"+aux.shift();
            else
            if(aux2=="infinity")
                returnmessage+=" -e arrow_infinite:"+aux.shift();
            else
            if(aux2=="punch")
                returnmessage+=" -e arrow_knockback:"+aux.shift();
            else
            if(aux2=="sharp"||aux2=="sharpness")
                returnmessage+=" -e damage_all:"+aux.shift();
            else
            if(aux2=="bane"||aux2=="arthropods")
                returnmessage+=" -e damage_arthropods:"+aux.shift();
            else
            if(aux2=="smite")
                returnmessage+=" -e damage_undead:"+aux.shift();
            else
            if(aux2=="efficiency")
                returnmessage+=" -e dig_speed:"+aux.shift();
            else
            if(aux2=="unbreaking")
                returnmessage+=" -e durability:"+aux.shift();
            else
            if(aux2=="fortune")
                returnmessage+=" -e loot_bonus_blocks:"+aux.shift();
            else
            if(aux2=="looting")
                returnmessage+=" -e loot_bonus_mobs:"+aux.shift();
            else
            if(aux2=="respiration")
                returnmessage+=" -e oxygen:"+aux.shift();
            else
            if(aux2=="protection"||aux2=="prot")
                returnmessage+=" -e protection_environmental:"+aux.shift();
            else
            if(aux2=="blast")
                returnmessage+=" -e protection_explosions:"+aux.shift();
            else
            if(aux2=="feather")
                returnmessage+=" -e protection_fall:"+aux.shift();
            else
            if(aux2=="fire")
                returnmessage+=" -e protection_fire:"+aux.shift();
            else
            if(aux2=="projectile")
                returnmessage+=" -e protection_projectile:"+aux.shift();
            else
                returnmessage+=" -e "+aux2+':'+aux.shift();
        }

    }

    if(args!=0){
        command = args.shift();
        command = command.substring(1);
        let aux = returnmessage.split(item);
        returnmessage=aux.shift()+'"'+item+"::"+command+'" '+aux.shift();
        




    }
    message.author.send(returnmessage);


    


});

client.login('NzUyNTI1MDU4OTExNzY0NTAx.X1Y5kw.7KDHmu9prOOZvotFtoPlF4pmbUc');