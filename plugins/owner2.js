const Turbo = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'QWxleGE=', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Turbo.addCommand({pattern: 'owner', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'ð½ð°ð¼ð´', description: "ð É´á´á´á´ á´Ò á´á´¡É´á´Ê ð.\n\n\nfayassie\n ", rowId:" rowid1"},
        {title: 'ð¸ð½ððð° ', description: "ð ÉªÉ´sá´á´É¢Êá´á´ ð.\n\n\nhttps://instagram.com/fs._gfx_?igshid=YmMyMTA2M2Y=\n ", rowId:" rowid2"},
        {title: 'ð½ðð¼ð±ð´ð', description: "ð É´á´á´Êá´Ê ð.\n\n\nhttps://wa.me/919947511243\n ", rowId:" rowid3"},
        ]
       
       const sections = [{title: "Toxic Turbo", rows: rows}]
       
       const button = {
        buttonText: 'ð¥µKELLYMOWLð¥¶',
        description: "ð« á´á´¡É´á´Ê á´á´á´á´ÉªÊs",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
