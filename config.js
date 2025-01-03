const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theophilustemilade9@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/techtheo/THEO-MDV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_38_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDg0LFxuICAgICAgICAzMixcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUxLFxuICAgICAgICA1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDUxLFxuICAgICAgICA0MixcbiAgICAgICAgMjQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgNyxcbiAgICAgICAgMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU2NBTzkrMjBSM0lHbVN4MXdyQkNlSXFUOWQzRUNra0xTNWZqY2VmZ3BQRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR3E4cHhjWjdSRENJNzQya01ZaDNoZ1wiLFxuICBcInBob25lSWRcIjogXCJkNDBiYzI1NC1mYjA2LTQ4NzgtOTY1OS1jNzAyYjU5M2UxMWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMjcsXG4gICAgICAyNDUsXG4gICAgICAxMzksXG4gICAgICA3OCxcbiAgICAgIDM1LFxuICAgICAgOSxcbiAgICAgIDIzMCxcbiAgICAgIDUwLFxuICAgICAgNzIsXG4gICAgICA3NyxcbiAgICAgIDI0NSxcbiAgICAgIDE2OSxcbiAgICAgIDIzLFxuICAgICAgNzEsXG4gICAgICAyNDEsXG4gICAgICAxNzUsXG4gICAgICAyMDcsXG4gICAgICA4NCxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAxMTUsXG4gICAgICAxNDMsXG4gICAgICA1NixcbiAgICAgIDkwLFxuICAgICAgODEsXG4gICAgICAxNTYsXG4gICAgICAxMjMsXG4gICAgICAyMDUsXG4gICAgICAxMTIsXG4gICAgICAxODgsXG4gICAgICAxNTIsXG4gICAgICAxMDksXG4gICAgICAxOTAsXG4gICAgICAyMjEsXG4gICAgICAxMzQsXG4gICAgICAxNzIsXG4gICAgICA3MSxcbiAgICAgIDE3NyxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBVlpYV1FYTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMzY3OTgwOTo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc1NjYzOTUzMTEzMDkyOjgzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09LNXRPZ0ZFSStZMzdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWk2VklSbWQ5emZraGVRSmZRQzNqcnRLeTE4YXhxYlhsVUl1SjVMTTRBTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwYjRVblVzUExPSndGdFl5ZmEwZWdsWHFIZnpvOEFveTlwdzhQV0RZcVNFaDc4eDduV1hDMnJaODk5d0RhZDlzeUYvWEx2VE93MnpTaStPZVNhVTREQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtV0RJMXhMSkg0MG91c1VqVkx0V0o2dll4WXc1bGtqdkFvZ1I3bnJEaC9jRFVWWG1HOGFGK2J6anBDMlZKZ0dIb2FHbEo4aUlLSzdvVHkrQkk0a0lnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAzNjc5ODA5OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTkwNDI3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFlV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWVXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ3U5RHdZN0dWQkhJNjNjWCtiQWEvK1RQRG5nRlkxZXFUWTJjYks0NXlkbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTYxMTQwNDUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU5MDQyODEzMDBcIn0iCn0=" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
