//RECODE BY MHANKBARBAR
//SELF BOT BY ZITSRAA
//YANG PASTI DISINI BANYAK YANG GUA COPAS
//TAMBAdeN NICK GUA LAH "ZITSRAA"
//JANGAN CUMA PAKE DOANG
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌',
		]
const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const yts = require( 'yt-search')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { help2 } = require('./src/help')
const { pler } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')
//********** DATABASE **********//
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//*********** CUSTOMABLE ***********//
prefix = ''
f = '_'
p = '*'
blocked = []
fake = '-DVNŠKI BÖT-'
fakeimage = fs.readFileSync('./media/zitsraa.jpeg')
numbernye = '0'
setthumb = fs.readFileSync('./media/zitsraa.jpeg')
join = '- [ DVNŠKI BOT ] -'
leave = '\`\`\`Bye\`\`\`'
promote = '*Your Welcome🥳*'
demote = '*kasihaan di demote*'
public = false

//*********** VCARD  ***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:DVNŠKIシ︎\n'
            + 'ORG:Owner DVNŠKI;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6289663660768:+62 896 6366 0768\n'
            + 'END:VCARD'

//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa'
const VhtearKey = '1BlnApiIkyPake'
const XteamKey = 'faisalkey'
const TobzApi = 'Bidmzz1sJ2L1TKyqaMEU'
const ZeksApi = 'jpALwxzsUag3ujvIKXUMza4ILqs'
const LolKey = 'ae0184cfdb19e8c46728a104'
const mankey = 'MAN'

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const Zitsraa = new WAConnection()
	Zitsraa.version = [2, 2119, 6]
	Zitsraa.logger.level = 'warn'
	console.log(banner.string)
	Zitsraa.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./zitsraa.json') && Zitsraa.loadAuthInfo('./zitsraa.json')
	Zitsraa.on('connecting', () => {
		start('2', 'Tunggu Sebentar Kak...')
	})
	Zitsraa.on('open', () => {
		success('2', 'Sudah Connect Tol👌..')
	})
	await Zitsraa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./zitsraa.json', JSON.stringify(Zitsraa.base64EncodedAuthInfo(), null, '\t'))

	Zitsraa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Zitsraa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Zitsraa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*User : @${num.split('@')[0]}*
*Join Group : ${mdata.subject}*
 
 ${join}`
				let buff = await getBuffer(ppimg)
				Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Zitsraa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*User : @${num.split('@')[0]}*
${leave}	`
				let buff = await getBuffer(ppimg)
				Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await Zitsraa.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await Zitsraa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙋𝙍𝙊𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`User :\`\`\` @${num.split('@')[0]}

\`\`\`Date : NOW\`\`\` 

\`\`\`Group :\`\`\` ${mdata.subject}

${promote}`
			Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await Zitsraa.groupMetadata(anu.jid)
			try {
					ppimg = await Zitsraa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝘿𝙀𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`User :\`\`\` @${num.split('@')[0]}

\`\`\`Date : NOW\`\`\`

\`\`\`Group :\`\`\` ${mdata.subject}

${demote}`
			Zitsraa.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

Zitsraa.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        Zitsraa.sendMessage(callerId, "Auto block system, don't call please", MessageType.text)
        await sleep(4000)
        await Zitsraa.blockUser(callerId, "add") // Block user
})
	Zitsraa.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	Zitsraa.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	//		if (!mek.key.fromMe) return
		global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey 
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
      const timer = moment.tz('Asia/Jakarta').format('DD-MMM-YYYY HH:mm')
        const times = moment.tz('Asia/Jakarta').format('DD-MMM-YYYY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: '⌛ Sedang di Prosess ⌛',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌  Maaf  Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}
      const totalchat = await Zitsraa.chats.all()
			const botNumber = Zitsraa.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await Zitsraa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Zitsraa.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				Zitsraa.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Zitsraa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `*${times}*
			
⎙ *DVNŠKI BOT*`,jpegThumbnail: fs.readFileSync(`./assets/peler.jpg`)}}}
			const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`DVNSKI`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `DVNSKI BOT`, 'jpegThumbnail': fs.readFileSync(`./assets/peler.jpg`)}}}
			const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
			const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `DVNSKI BOT`, 'jpegThumbnail': fs.readFileSync(`./assets/peler.jpg`)}}}
const catalogReply = (teks, judul) => {

Zitsraa.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { "productMessage": {

						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/Aq79TJ_z-SGqMNDVQVnX3Fmd8zu5nVEGndksF2pYx76e.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "Kv3xDPpFzppzRJS/9FyGtKyc6cdiJQ9kzM5lHJsxyIU=",
								"fileLength": "28573",
								"height": 720,
								"width": 720,
								"mediaKey": "IklNeUriGHykMLbj6YmcwYdG077n8ZY/xpQvRLFpWjQ=",
								"fileEncSha256": "UfukNZz3ad26fOvx1V/3YfwaUOg6ECv6YPz7RtSfH/o=",
								"directPath": "/v/t62.7118-24/19057636_968913973941883_3292179979991379577_n.enc?ccb=11-4&oh=52da57dc2b14287d7fb137047d1a55fb&oe=60B367D0",
								"mediaKeyTimestamp": "1620030467",
								"jpegThumbnail": fs.readFileSync('./StevenTs Logo.png')
							},
							"productId": "4083976448331261",
							"title": judul,
							"currencyCode": "IDR",
							"priceAmount1000": "9999999999",
							"productImageCount": 1
						},
						"businessOwnerJid": "6289663660768@s.whatsapp.net"
					}
				}
			}
		}
	)

	}

const iyah = (teks, judul) => {

Zitsraa.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { "productMessage": {

						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/Aq79TJ_z-SGqMNDVQVnX3Fmd8zu5nVEGndksF2pYx76e.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "Kv3xDPpFzppzRJS/9FyGtKyc6cdiJQ9kzM5lHJsxyIU=",
								"fileLength": "28573",
								"height": 720,
								"width": 720,
								"mediaKey": "IklNeUriGHykMLbj6YmcwYdG077n8ZY/xpQvRLFpWjQ=",
								"fileEncSha256": "UfukNZz3ad26fOvx1V/3YfwaUOg6ECv6YPz7RtSfH/o=",
								"directPath": "/v/t62.7118-24/19057636_968913973941883_3292179979991379577_n.enc?ccb=11-4&oh=52da57dc2b14287d7fb137047d1a55fb&oe=60B367D0",
								"mediaKeyTimestamp": "1620030467",
								"jpegThumbnail": fs.readFileSync('./zitsraa.png')
							},
							"productId": "4083976448331261",
							"title": judul,
							"currencyCode": "IDR",
							"priceAmount1000": "9999999999",
							"productImageCount": 1
						},
						"businessOwnerJid": "6289663660768@s.whatsapp.net", contextInfo: { forwardingScore: 947, isForwarded: true }
					}
				}
			}
		}
	)

	}
	

const fakegroup = (teks) => {
			Zitsraa.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": setthumb }}}
            


const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": setthumb} } }

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": setthumb
					},
					"title": fake,
					"description": "SELF BOT",
					"currencyCode": "USD",
					"priceAmount1000": "2000000000000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const sendButLocation = async (id, text1, desc1, idfoto, but = [], options = {}) => {
    	logor = idfoto
    const buttonMessages = {
               locationMessage: {jpegThumbnail:logor},
               contentText: text1,
               footerText: desc1,
               buttons: but,
               headerType: 6
               }
    Zitsraa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 


   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       Zitsraa.sendMessage(from, `Success`, `STATUS : SELF`)
     }
     if (chats.toLowerCase() == 'status'){
       Zitsraa.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
     }
   }
   if (button == 'Yes') {
  let ngocok = fs.readFileSync('./FILE3/Sound4.mp3')
        Zitsraa.sendMessage(from, ngocok, audio, {quoted: mek, ptt:true})
				}
				if (button == 'No') {
console.log('No')
Zitsraa.sendMessage(from, `BODO AMAT LU JELEK ANJG`, text, {quoted: mek})
}
if(button == 'Self'){
console.log('Self')
if (!mek.key.fromMe) return reply('*Kamu Owner?*')
			    public = false
			    Zitsraa.sendMessage(from, `\`\`\`Status : SELF\`\`\``, text,{quoted :mek})
			}
			if(button == 'Public'){
console.log('Public')
if (!mek.key.fromMe) return reply('*Kamu Owner?*')
			    public = true
			    Zitsraa.sendMessage(from, `\`\`\`Status : PUBLIC\`\`\``, text,{quoted :mek})
}
if (button == 'Friend') {
console.log('Friend')
Zitsraa.sendMessage(from, `You My Friend Now🤝🏻`, text, {quoted: mek})
}
if (button == 'Ngontol') {
console.log('Ngontol')
Zitsraa.sendMessage(from, `APA NJING`, text, {quoted: mek})
}
if (button == 'ASUPAN') {
console.log('ASUPAN')
	            reply(mess.wait)
	zenn = await getBuffer(`https://megayaa.herokuapp.com/api/asupan`)
			Zitsraa.sendMessage(from, zenn, video, {quoted: mek})
			
		        
}
if (button == 'LOLI') {
console.log('LOLI')
	            reply(mess.wait)
	zenn = await getBuffer(`https://megayaa.herokuapp.com/api/lolivid`)
				Zitsraa.sendMessage(from, zenn,video,{caption: 'Nih Lolinya Jangan Di Jadiin Bacol Bang :(',quoted: mek})
		        
}
if (button == 'NSFW MENU') {
console.log('NSFW MENU')
Zitsraa.sendMessage(from, `┌──「 *NSFW MENU* 」───
│
├ ${prefix}*hentai*
├ ${prefix}*blowjob*
├ ${prefix}*pussy*
├ ${prefix}*fox*
├ ${prefix}*masturbasi*
├ ${prefix}*panties*
├ ${prefix}*school*
├ ${prefix}*yuri*
├ ${prefix}*cum*
├ ${prefix}*cumsut*
├ ${prefix}*femdom*
├ ${prefix}*animewallpaper*
├ ${prefix}*dujin*
│
└──「 *DVNŠKI BÖT* 」───`, text, {quoted: mek})
}
if (button == 'OWNER') {
console.log('OWNER')
Zitsraa.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
Zitsraa.sendMessage(from, 'Itu Owner saya',MessageType.text, { quoted: mek} )
}
  if (!public){
    if (!mek.key.fromMe) return
  }

if (budy.includes('Assalamualaikum')) {
				let pelerd = fs.readFileSync('./stk/STK-20210624-WA0246.webp') 
				Zitsraa.sendMessage(from, pelerd, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: 'WAALAIKUMUSSALAM', jpegThumbnail: fs.readFileSync('./zitsraa.png'), remoteJid: "status@broadcast"}}}}) 
				}
				if (button == '💡 𝐎𝐖𝐍𝐄𝐑') {
console.log('OWNER')
Zitsraa.sendMessage(from, {displayname: "DVNSKI", vcard: vcard}, MessageType.contact, { quoted: mek})
Zitsraa.sendMessage(from, 'Tuh Kak Oner Ku',MessageType.text, { quoted: mek} )
}
if (button == 'Owner') {
console.log('OWNER')
xdev.sendMessage(from, {displayname: "ZennGans", vcard: vcard}, MessageType.contact, { quoted: dev})
xdev.sendMessage(from, 'Tuh Kak Jangan Diewe ya :(',MessageType.text, { quoted: dev} )
}
			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = Zitsraa.contacts[from] != undefined ? Zitsraa.contacts[from].vname || Zitsraa.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			switch(command) {
			case 'menu':
			case 'help':
			tamnel = fs.readFileSync('./assets/zitsraa.png')
					ran= getRandom('.png')
			Zitsraa.sendMessage(from, fs.readFileSync('./assets/man.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, quoted: fgclink,sendEphemeral: true,text,contextInfo: { forwardingScore: 945, isForwarded: true }})
Zitsraa.sendMessage(from,fs.readFileSync(`./assets/peler.jpg`), image, {caption: help(prefix), thumbnail: tamnel, quoted: fgclink,sendEphemeral: true,contextInfo: { forwardingScore: 945, isForwarded: true }})
fs.unlinkSync(ran)
break
case 'virgam':
Zitsraa.sendMessage(from,fs.readFileSync(`./assets/IMG-20210912-WA0047.jpg`), image, {caption: 'DVNSKI GXNS', quoted: ftoko,sendEphemeral: true,text,contextInfo: { forwardingScore: 945, isForwarded: true }})
break

            case '*tes':
           var buttons = [{buttonId:'Ngontol',buttonText:{displayText:'Ngontol'},type:1}]
           var buttonsMessage = {footerText:'Ih Wibu!',contentText:'Wildan Pengocok',headerType:'LOCATION',buttons,locationMessage:{jpegThumbnail: fs.readFileSync(`./zitsraa.png`)}}
           var sendMsg = await Zitsraa.prepareMessageFromContent(from, { buttonsMessage }, {})
              Zitsraa.relayWAMessage(sendMsg,  { waitForAck: true })
              break
        
			     case '-help': 
			       case '-menu':
			
sendButLocation(from, help(prefix), `DVNŠKI BOT ${times}`, fakeimage, [
          {
            buttonId: 'Owner',
            buttonText: {
              displayText: 'OWNER',
            },
            type: 1,
          }      
        ]);
break
case 'owner':
                Zitsraa.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: freply})
                 Zitsraa.sendMessage(from, 'Jika Mau Save Chat Aja Gan Ntar Disave Back:)',text, { quoted: freply} )
 break               
                
case 'status':
                Zitsraa.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
break
case '#help':
Zitsraa.sendMessage(from, help(prefix),'conversation',{contextInfo: {forwardingScore : 508, isForwarded: true,externalAdReply:{title:'DVNŠKI BOT' ,mediaType:2,thumbnail: fs.readFileSync('./assets/buset.jpg')}},quoted : ftoko})
break
case 'ler':
var buttons = [{buttonId:'MENU',buttonText:{displayText:'📒 𝐌𝐄𝐍𝐔'},type:1},{buttonId:'OWNER',buttonText:{displayText:'💡 𝐎𝐖𝐍𝐄𝐑'},type:1}]
             var buttonsMessage = {footerText:'Made With ❤ by Zenn',contentText: help(prefix),headerType:'LOCATION',buttons,locationMessage:{jpegThumbnail: fs.readFileSync(`./zitsraa.png`)}}
             var sendMsg = await Zitsraa.prepareMessageFromContent(from, { buttonsMessage }, {})
                 Zitsraa.relayWAMessage(sendMsg, { waitForAck: true })
                 break
case 't.':
      sendButLocation(from,`pilih mode di bawah ini agar bot bisa di pakai`, "*_© FERDI Z-AFK_*",
{fakeimage},
[{buttonId:`${prefix}public`,buttonText:{displayText:'public'},type:1},
{buttonId:`${prefix}self`,buttonText:{displayText:'self'},type:1}]
)      
break   
case 'hallo':
             var buttons = [{ buttonId: 'example', buttonText: { displayText: 'Yes' }, type: 1 }, { buttonId: 'example1', buttonText: { displayText: 'No' }, type: 1 },{ buttonId: 'example2', buttonText: { displayText: 'Friend' }, type: 1 }, { buttonId: 'example', buttonText: { displayText: 'Ngontol' }, type: 1 },]
             var buttonsMessage = { contentText: `Do you love me?`, footerText: 'Jujur Aja :)', buttons: buttons, headerType: 1 }
             var sendMsg = await Zitsraa.prepareMessageFromContent(from, { buttonsMessage }, {})
                 Zitsraa.relayWAMessage(sendMsg, { waitForAck: true })
                 break
                 case 'bot':
                 pus = 'DVNŠKI BOT Di Sini Ketik .help Untuk Melihat Daftar Menu :)'
                 Zitsraa.sendMessage(from, pus ,text ,{quoted: fgclink})
                 break
                 case 'sbot':
             var buttons = [{ buttonId: 'example20', buttonText: { displayText: 'Self' }, type: 1 }, { buttonId: 'example2', buttonText: { displayText: 'Public' }, type: 1 }]
             var buttonsMessage = { contentText: `STATUS BOT`, footerText: 'DVNŠKI BOT', buttons: buttons, headerType: 1 }
             var sendMsg = await Zitsraa.prepareMessageFromContent(from, { buttonsMessage }, {})
                 Zitsraa.relayWAMessage(sendMsg, { waitForAck: true })
                 break
				case 'segs':
             var buttons = [{ buttonId: 'example1', buttonText: { displayText: 'NSFW MENU' }, type: 1 },{ buttonId: 'example2', buttonText: { displayText: 'ASUPAN' }, type: 1 },{ buttonId: 'example3', buttonText: { displayText: 'LOLI' }, type: 1 }]
             var buttonsMessage = { contentText: `Ya DVNŠKI BOT Disini Click Button Di Bawah Untuk Daftar Menu Segs`, footerText: 'DVNŠKI BOT', buttons: buttons, headerType: 1 }
             var sendMsg = await Zitsraa.prepareMessageFromContent(from, { buttonsMessage }, {})
                 Zitsraa.relayWAMessage(sendMsg, { waitForAck: true })
                 break
                  case 'menunsfw':
				
                 lol = `┌──「 *NSFW MENU* 」───
│
├ ${prefix}*hentai*
├ ${prefix}*blowjob*
├ ${prefix}*pussy*
├ ${prefix}*fox*
├ ${prefix}*masturbasi*
├ ${prefix}*panties*
├ ${prefix}*school*
├ ${prefix}*yuri*
├ ${prefix}*cum*
├ ${prefix}*cumsut*
├ ${prefix}*femdom*
├ ${prefix}*animewallpaper*
├ ${prefix}*dujin*
│
└──「 *DVNŠKI BÖT* 」───`
Zitsraa.sendMessage(from, lol, text, {quoted: fdocu, contextInfo: { forwardingScore: 945, isForwarded: true }})
break
					
					case 'zhelp':
                  case 'zmenu':
Zitsraa.sendMessage(from, help(prefix), text,{contextInfo: {forwardingScore : 508, isForwarded: true},quoted : ftoko})

Zitsraa.sendMessage(from, fs.readFileSync('./assets/man.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdocu})
					break
					
case "hi":
        var buttons = [{ buttonId: 'example', buttonText: { displayText: 'yes' }, type: 1 }, { buttonId: 'example2', buttonText: { displayText: 'no' }, type: 1 }]
        var buttonsMessage = { contentText: `Do you love me? `, footerText: `${timer}`, buttons: buttons, headerType: 1 }
        var sendMsg = await Zitsraa.prepareMessageFromContent(from, { buttonsMessage }, {quoted: mek})
        Zitsraa.relayWAMessage(sendMsg, { waitForAck: true })
        break
			  case "vhelp":
        var buttons = [{ buttonId: 'example', buttonText: { displayText: 'Owner' }, type: 1 }, { buttonId: 'example2', buttonText: { displayText: 'Bahasa' }, type: 1 }] 
        var buttonsMessage = { contentText: help(prefix), footerText: 'DVNSKI BOTㅤㅤㅤㅤ ウィルダン', buttons: buttons, headerType: 1 }
       Zitsraa.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {quoted: mek})
        break
			  //********** SELF&PUBLIC **********//
			  case 'self':
			  if (!mek.key.fromMe) return reply('*Kamu Owner?*')
			    public = false
			    Zitsraa.sendMessage(from, `\`\`\`Status : SELF\`\`\``, text,{quoted :mek})
			    break
			    
			  case 'public':
			    if (!mek.key.fromMe) return reply('*Kamu Owner?*')
			    public = true
			    Zitsraa.sendMessage(from, `\`\`\`Status : PUBLIC\`\`\``, text,{quoted :mek})
			    break
			    
			    case 'sound1':
			    Zitsraa.sendMessage(from, fs.readFileSync('./FILE3/sound85.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
			    break
			    case 'sound4':
			    Zitsraa.sendMessage(from, fs.readFileSync('./FILE3/sound70.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
			    break
			    case 'sound2':
			    Zitsraa.sendMessage(from, fs.readFileSync('./FILE3/sound43.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
			    break
			    case 'sound3':
			    Zitsraa.sendMessage(from, fs.readFileSync('./assets/takeme.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
			    break
			    
case 'bahasa': case 'kodebahasa':
pelet = `*──「 DVNŠKI BÔT 」──*
*${jam}*
*${times}*

*Language Code	Language Name*
af	Afrikaans
hy	Armenian
id	Indonesian
bn	Bengali
ca	Catalan
cs	Czech
da	Danish
de	German
en	English
es	Spanish
fil	Filipino
fr	French
hr	Croatian
is	Icelandic
it	Italian
jv	Javanese
km	Khmer
lv	Latvian
hu	Hungarian
ml	Malayalam
mr	Marathi
nl	Dutch
ne	Nepali
nb	Norwegian
pl	Polish
pt	Portuguese
ro	Romanian
si	Sinhala
sk	Slovak
su	Sundanese
sw	Swahili
fi	Finnish
sv	Swedish
ta	Tamil
te	Telugu
vi	Vietnamese
tr	Turkish
el	Greek
ru	Russian
sr	Serbian
uk	Ukranian
ar	Arabic
hi	Hindi
th	Thai
ko	Korean
cmn	Chinese
ja	Japanese`
Zitsraa.sendMessage(from, pelet, text, {quoted: fgclink, contextInfo: { forwardingScore: 945, isForwarded: true }})
break

case 'hentai':
                   reply('[❗] SEDANG DIPROSES', text, freply, fgif)
Zitsraa.sendMessage(from, {url: `https://megayaa.herokuapp.com/api/akaneko/hentai`}, image, {quoted: fgif}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   
                   case 'play':
     if (args.length < 1) return reply('namanya apa ? Misal play wuhan kontol?')
     anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${body.slice(6)}&APIKEY=${XteamKey}`)
     if (anu.error) return reply(anu.error)
     infomp3 = `*「❗」Lagu Ditemukan「❗」*\n➸ Judul : ${anu.judul}\n➸ Size : ${anu.size}\n\n*[WAIT] Proses Dumlu Yakan*`
     bumfer = await getBuffer(anu.thumbnail)
     lamgu = await getBuffer(anu.url)
     Zitsraa.sendMessage(from, bumfer, image, {quoted: fdocu, caption: infomp3})
     Zitsraa.sendMessage(from, lamgu, audio, {mimetype: 'audio/mp4', quoted: mek})
break
                 

case '.bc':  case 'broadcast':
  if (!mek.key.fromMe) return reply('*Kamu Owner?*')
if (!isOwner) return reply('lu owner bukan??')
					if (args.length < 1) return reply('Teksnya?')
					anu = await Zitsraa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Zitsraa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Zitsraa.sendMessage(_.jid, buff, image, {caption: `[ _*DVNŠKI BOT- Broadcast*_ ]\n\n${body.slice(4)}`})
						}
						reply('_Sukses broadcast slurrd_')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ _*DanskiBot - Broadcast*_ ]\n\n${body.slice(3)}`)
						}
						reply('_Sukses broadcast kawand_')
					}
					break

case 'bc2':
if (!mek.key.fromMe) return reply('*Kamu Owner?*')
				if (args.length < 1) return reply('pesannya mana?')

				anu = await Zitsraa.chats.all()
				broadcast = args.join(' ')
				if (isMedia && !Mel.message.videoMessage || isQuotedImage) {
			
				buff = await Zitsraa.downloadMediaMessage(encmedia)
				for (let _ of anu) {
			    
				await Zitsraa.sendMessage(_.jid, buff, image, {caption: `「  BROADCAST 」\n\n${broadcast}`, contextInfo: { mentionedJid: [sender] }})
				}
				} else {
				for (let _ of anu) {
				await require('delay')(3000)
				await Zitsraa.sendMessage(_.jid, `「 BROADCAST 」\n\n${broadcast}`, text, { contextInfo: { mentionedJid: [sender] }})
				}
				reply('Suksess broadcast')
				}
		        addFilter(sender)
			    break

case 'bc1':
            if (!isOwner) return Zitsraa.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
            if (!mek.key.fromMe) return reply('*Kamu Owner?*')
            let msg = body.slice(4)
            
            {
                var cvk = await Zitsraa.getChatById(ids)
                if (!cvk.isReadOnly) await Zitsraa.sendText(ids, `[ DVNŠKI BOT BROADCAST ]\n\n${msg}`)
            }
            Zitsraa.reply(from, 'Broadcast Success!', id)
            break

			    case 'mute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                Zitsraa.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                Zitsraa.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
                case 'slot2':
                    result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=AkiraBotWa`)
                        txt = `*🎰Slot didapatkan🎰* \n\n${result.map}\n`
                        txt += `\n🔖Hasil : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                     reply(txt)
                  break
			    case 'unpin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                Zitsraa.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
                
            case 'pin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                Zitsraa.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
            case 'unreadall':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                var chats = await Zitsraa.chats.all()
                chats.map( async ({ jid }) => {
                await Zitsraa.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await Zitsraa.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                var chats = await Zitsraa.chats.all()
                chats.map( async ({ jid }) => {
                await Zitsraa.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await Zitsraa.sendMessage(from, teks, text, {quoted: freply})
		console.log(chats.length)
		break
            case 'unarchiveall':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await Zitsraa.chats.all()
                for (let _ of anu) {
                Zitsraa.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            Zitsraa.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`, text, { quoted: mek })
            break
            case 'archive':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                Zitsraa.modifyChat(from, ChatModification.archive)
                break
            case 'delthischat':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                Zitsraa.modifyChat(from, ChatModification.delete)
                break
                
                case 'shutdown':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
	        await Zitsraa.sendMessage(from, `Bye...\n_DVNSKI off dulu yaa.._`, text,{quoted : mek})
		await sleep(3000)
                Zitsraa.close()
		break
		
		case 'demoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Zitsraa.groupDemoteAdmin(from, members_id)
                break
                
           
			  //********** SETTING BOT **********//
			  case 'setleave':
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					Zitsraa.sendMessage(from,`\`\`\`Leave berhasil di ubah menjadi : ${body.slice(10)}\`\`\``, text,{quoted : mek})
				break 
				
				case 'setpromote':
				  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					Zitsraa.sendMessage(from,`\`\`\`Promote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : mek})
				break 
				
					case 'setdemote':
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					Zitsraa.sendMessage(from ,`\`\`\`Demote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : mek})
				break 
				
				case 'setbodymenu':
				  if (args.length < 1) return reply('*_CONTOH :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Contoh penggunaan : .setbodymenu *')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					Zitsraa.sendMessage(from ,`\`\`\`Body menu berhasil di ubah menjadi : ${body.slice(13)}\`\`\``, text,{quoted : mek})
				break 
				
					case 'setwelcome':
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					Zitsraa.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : mek})
				break 
				
			  case 'setreply':
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					fake = body.slice(10)
					Zitsraa.sendMessage(from, `reply berhasil di ubah menjadi : ${fake}`,text,{quoted : mek})
				break 
				
				
				
				case 'setthumb':
                case 'setthumbnail':
               if ((isMedia || isQuotedImage) && args.length == 0) {
               ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               const ehgmediab = await Zitsraa.downloadAndSaveMediaMessage(ger)
               nihiyab = await imageToBase64(ehgmediab)
               setthumb = `${nihiyab}` 
					reply(`*Sukses mengubah thumbnail fake reply*`)
			   } else if (isQuotedSticker) {
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
			   setthumb = anu
			   reply(`*Sukses mengubah thumbnail fake reply*`)
			}
					break	
				
				case 'getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await Zitsraa.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
				
				case 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await Zitsraa.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					Zitsraa.sendMessage(from, thumb, MessageType.image,{quoted : fdocu})}
//sendMessage(from , menu, text,{quoted : mek})
				break
				
				  case 'join':
				if (!mek.key.fromMe) return
                           if (!q) return reply('Masukan link group')
                           var codeInvite = body.slice(5).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
                           var response = await Zitsraa.acceptInvite(codeInvite);
                           console.log(response);
                           Zitsraa.sendMessage(from, 'sukses masuk ke grup',text,{quoted :ftoko})
                           
                           break

                           
        //********** SYSTEM **********//
        case 'return':
                                case 'run':
                                        return fakegroup(JSON.stringify(eval(args.join(''))))
                                        break
			     case '.':
                        let code = args.join(" ")
                    try {
    
                    if (!code) return Zitsraa.reply(from, 'No JavaScript Code', id)
                    let evaled;
    
                    if (code.includes("--silent") && code.includes("--async")) {
                    code = code.replace("--async", "").replace("--silent", "");
    
                    return await eval(`(async () => { ${code} })()`)
                    } else if (code.includes("--async")) {
                    code = code.replace("--async", "");
            
                    evaled = await eval(`(async () => { ${code} })()`);
                    } else if (code.includes("--silent")) {
                    code = code.replace("--silent", "");
            
                    return await eval(code);
                    } else evaled = await eval(code);
    
                  if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled, { depth: 0 });
      
                let output = clean(evaled);
                var options = {
                    contextInfo: {
                        participant: '0@s.whatsapp.net',
                        quotedMessage: {
                            extendedTextMessage: {
                                text: "𝐄𝐗𝐄𝐂𝐔𝐓𝐎𝐑"
                            }
                        }
                    }
                }
                Zitsraa.sendMessage(from, `${output}`, text, options)
                } catch(err) {
                console.error(err)
                reply(err)
                }
                function clean(text) {
                if (typeof text === "string")
                  return text
                    .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                    .replace(/@/g, `@${String.fromCharCode(8203)}`);
                // eslint-disable-line prefer-template
                else return text;
                }
                break
                
             
				
				case 'blocklist':
				  case 'listblock':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					
					//********** CONVERT **********//
					case 'exif':
	        if (!mek.key.fromMe) return reply('*Kamu Owner?*')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('sukses')
	        break
	        
	        case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await Zitsraa.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    Zitsraa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	        
					case 'take':
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
					var pembawm = body.slice(5)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await Zitsraa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					Zitsraa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
				
                    
				case 'togif':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.video}`)
                                        const buff = await getBuffer(rume.data.result)
                                        Zitsraa.sendMessage(from, buff, video, {
mimetype: 'video/mp4', caption: 'Nih', quoted: mek})
                                }
                                break
				
				case '.tovideo':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Zitsraa.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/togif?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Zitsraa.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: "video/gif", filename: file_name }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
 //=============//MENU NSFW// ==============//
 //https://megayaa.herokuapp.com/api//

case '.hentai':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/hentai`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: floc, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case '.cum':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/cum`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                case '.test':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://kuhong-api.herokuapp.com/api/porno`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
case 'animewallpaper':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/wallpapers`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
           case '.dujin':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/doujin`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break        
                   case '.femdom':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/femdom`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case '.pussy':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/pussy`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case '.fox':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/foxgirl`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case '.blowjob':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/blowjob`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case '.panties':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/panties`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case '.masturbasi':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/masturbation`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
	               break
	               case '.school':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/school`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case '.yuri':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/yuri`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
             case '.cumsut':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                   anu = await getBuffer(`https://megayaa.herokuapp.com/api/akaneko/cumslut`)
                  Zitsraa.sendMessage(from, anu, image, {quoted: fgif, caption: fake, thumbnail: tamnel}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break     
                  case 'kbbi':
  Zitsraa.updatePresence(from, Presence.composing)
  if (args.length < 1) return reply(`*☒* Masukan teks\nContoh : ${prefix}kbbi manusia`)
  tels = args.join(' ')
  res = await axios.get(`https://freerestapi.herokuapp.com/api/KBBI?text=${tels}`)

danski = res.data.arti[0]

quot = `*KAMUS BAHASA BESAR INDONESIA*

`
reply(quot + danski)
  break
  case 'eval':
case 'ev':
              if (!mek.key.fromMe) return reply('*Kamu Owner?*')
            
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await Zitsraa.sendText(from, evaled)
                } catch (err) {
                    console.error(err)
                    await Zitsraa.reply(from, 'Error!', id)
                }
            break

    
					case 'fdeface':
					var nn = body.slice(8)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					//imgbbb = require('imgbb-uploader')
					//run = getRandom('.jpeg')
					//encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
					//media = await lolteam.downloadAndSaveMediaMessage(encmedia)
					ddatae = await imageToBase64(JSON.stringify('./media/zitsraa.jpeg').replace(/\"/gi, ''))

					Zitsraa.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
					
					case 'nobg':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`https://api.zeks.xyz/api/removebg?apikey=apivinz&url=${getUrl}`)
Zitsraa.sendMessage(from, buff, image, {quoted: mek})
}
break
					
					case 'textmaker':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
var tex1 = body.slice(11).split('|')[0]
var tex2 = body.slice(11).split('|')[1]
if (!tex2) return reply('Format salah!')
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`http://lolhuman.herokuapp.com/api/memegen?apikey=${LolKey}&texttop=${tex1}&textbottom=${tex2}&img=${getUrl}`)
Zitsraa.sendMessage(from, buff, image, {quoted: mek})
}
break
					
	
					
case 'attp':
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp danski Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(5)}`)
				Zitsraa.sendMessage(from, attp2, sticker, {quoted: freply})
				break
				case 'ttp':
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp danski Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=halo${body.slice(4)}`)
				Zitsraa.sendMessage(from, attp2, sticker, {quoted: mek})
				break
case 'ttp.': 
                    reply(mess.wait)
var tod = args.join(' ')
const getbaff = await getBuffer(`https://api.xteam.xyz/ttp?file&text=halo${tod}`)

var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
Zitsraa.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: mek})
break
case 'glitch':
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}Glitch danski`)
glitch = body.slice(7)
reply('❗SEDANG DI PROSES HARAP MENUNGGU')
buffer = await getBuffer(`https://man-api.herokuapp.com/api/textmaker/game?theme=pubg&text=TEKS1&text2=TEKS2&apikey=MAN`)
Zitsraa.sendMessage(from, buffer, image, {quoted: fdocu})
break
case 'jadwaltvnow':
Zitsraa.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {
method: 'get'
  })
  reply(anu.result.jadwalTV)
  
  } catch {
    reply(mess.ferr)
  }
  break
  case 'map':
   if (args.length < 1) return reply('*☒* Masukan nama daerah')
  daerah = body.slice(4)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply(mess.wait)
  hasil = await getBuffer(data.gambar)
  Zitsraa.sendMessage(from, hasil, image, {
quoted: mek, caption: `Hasil Dari *${daerah}*`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
  case 'cuaca':
  if (args.length < 1) return reply('Masukan nama daerah')
  tels = body.slice(6)
  try {
  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/cuaca?p=${tels}`, {
method: 'get'
  })
  hasil = `‣ *Tempat* : ${anu.hasil.Nama}\n‣ *Cuaca* : ${anu.hasil.Cuaca}\n‣ *Angin* : ${anu.hasil.Angin}\n‣ *Suhu* : ${anu.hasil.Suhu}\n‣ *Kelembapan* : ${anu.hasil.Kelembaban}\n‣ *Keterangan* : ${anu.hasil.Keterangan}`
  Zitsraa.sendMessage(from, hasil, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
  case 'infogempa':
  Zitsraa.updatePresence(from, Presence.composing)
  try {
  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infogempa`, {
method: 'get'
  })
  hasil = `‣ *Kedalaman* : ${anu.kedalaman}\n‣ *Koordinat* : ${anu.koordinat}\n‣ *Lokasi* : ${anu.lokasi}\n‣ *Magnitude* : ${anu.magnitude}\n‣ *Potensi* : ${anu.potensi}\n‣ *Waktu* : ${anu.waktu}`
  buffer = await getBuffer(anu.map)
  Zitsraa.sendMessage(from, buffer, image, {
caption: hasil, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
  case 'ytsearch':
			if (args.length < 1) return reply('Mau Nyari Apa Kak?')
			reply(mess.wait)
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await Zitsraa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
  case 'ytmp3':
  reply(mess.wait)
  play = body.slice(6)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Format link salah, gunakan link youtube')
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=${ZeksApi}`)
  infomp3 = `*Audio Ditemukan!!!*\n‣ Judul : ${anu.result.title}\n‣ Source : ${anu.result.source}\n‣ Ukuran : ${anu.result.size}\n\n_Mengirim file silakan tunggu_\n\n_Jika video tidak muncul download sendiri menggunakan link dibawah_\n‣ *link* : ${anu.result.link}`
  tamnel = fs.readFileSync('./assets/buset.jpg')
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  Zitsraa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  , fake, thumbnail: tamnel})
  Zitsraa.sendMessage(from, lagu, document, {
mimetype: 'audio/mp3', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
case 'ytmp4':
reply(mess.wait)
  play = body.slice(6)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=${ZeksApi}`)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Format link salah, gunakan link youtube')
  if (anu.error) return reply(anu.error)
  infomp3 = `*Video Ditemukan*\n‣ *Judul* : ${anu.result.title}\n‣ *Source* : ${anu.result.source}\n‣ *Ukuran* : ${anu.result.size}\n\n_Mengirim file silakan tunggu_\n\n_Jika video tidak muncul download sendiri menggunakan link dibawah_\n‣ *link* : ${anu.result.url_video}`
  tamnel = fs.readFileSync('./assets/buset.jpg')
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_video)
  Zitsraa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  ,fake, thumbnail: tamnel})
  Zitsraa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
  ,caption: fake, thumbnail: tamnel})
  
  } catch {
    reply(mess.ferr)
  }
  break
  case  'tourl':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
		            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            owgi = await Zitsraa.downloadMediaMessage(boij)
		            res = await upload(owgi)
		            reply(res)
		            } else {
		            freply('kirim/reply gambar/video')
		            }
		            break
  case 'shortlink':
Zitsraa.updatePresence(from, Presence.composing)
  var teks = args.join(" ")
  if (args.length < 1) return reply(`*☒* Masukan link\nContoh : ${prefix}shorturl xnxx.com`)
  res = await axios.get(`https://megayaa.herokuapp.com/api/short/tiny?url=${teks}`)
reply(res.data.result)
break
  case 'phublogo':
            if (args.length === 1) return reply(`Kirim perintah *${prefix}logopornhub [ |Teks1|Teks2 ]*,\n\n contoh : *${prefix}phub |Danski| Hub*`)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                reply(`sabar bro proses dulu....`)
                const lpornhub = argz[1]
                const lpornhub2 = argz[2]   
                if (lpornhub > 10) return reply('*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_')
                if (lpornhub2 > 10) return reply('*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_')
                buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/phblogo?text1=${lpornhub}&text2=${lpornhub2}`)
                Zitsraa.sendMessage(from, buffer, image, {quoted: mek})
            } else {
                await reply(`Wrong Format!\n[❗] Kirim perintah *${prefix}logopornhub [ |Teks1| Teks2 ]*,\n\n contoh : *${prefix}logopornhub |Danski| Hub*`)
            }
            break
case 'ninjalogo':
if (args.length < 1) return reply('namanya apa tod?')
				var gh = body.slice(10)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}ninjalogo Ramlan & Gans`)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: mek})
				break
				
				case 'halloweentext':
				ween = body.slice(14)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    Zitsraa.sendMessage(from, buffer, image, {quoted: mek})
		    break
case 'cloudtext':
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}cloudtext Ramlan`)
cloud = body.slice(10)
reply('「❗」Bentar Bro Gw Terbang dulu')
buffer = await getBuffer(`https://api.xteam.xyz/textpro/cloudtext?text=${cloud}&APIKEY=${XteamKey}`)
Zitsraa.sendMessage(from, buffer, image, {quoted: mek})
break
case 'cloudtext':
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}cloudtext Ramlan`)
cloud = body.slice(10)
reply('「❗」Sedang Di Proses !')
buffer = await getBuffer(`https://kuhong-api.herokuapp.com/api/phcomment`)
Zitsraa.sendMessage(from, buffer, image, {quoted: mek})
break
case 'tts':
					if (args.length < 1) return Zitsraa.sendMessage(from, `Kode bahasanya mana om bila tidak tau ketik Kodebahasa`, text, {quoted: fvn})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Zitsraa.sendMessage(from, 'Textnya mana om', text, {quoted: fvn})
					dtt = body.slice(6)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						Zitsraa.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
					case 'block':
  Zitsraa.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
  Zitsraa.blockUser (`${body.slice(7)}@c.us`, "add")
  Zitsraa.sendMessage(from, `Memblokir nomor, Perintah Diterima`, text, {
quoted: mek
  })
  break

//membuka blokir
case 'unblock':
  Zitsraa.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
  Zitsraa.unblockUser (`${body.slice(8)}@c.us`, "remove")
  Zitsraa.sendMessage(from, `Membuka blokir, Perintah diterima`, text, {quoted: mek})
  break
case 'delete':
  case 'del':
if (!isGroup)return reply(mess.only.group)
try {
Zitsraa.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Hanya bisa menghapus pesan dariku')
}
break
					case 'tiktoknowm':
                if (args.length < 1) return reply('Urlnya mana sayang?')
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
                ige = body.slice(12)
                anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${lolhuman}&url=${args[0]}`, { method: 'get' })
                reply('*Proses Dulu Sabar*')
                if (anu.error) return reply(anu.error)
                buffer = await getBuffer(anu.result.link)
                Zitsraa.sendMessage(from, buffer, video, {quoted: mek, caption: 'Nih cuk, Sewa Bot Asu'})
                break
            case 'tiktod':
            case 'tiktok':
                if (args.length < 1) return reply('Urlnya mana um?')
                if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
                anu = await fetchJson(`https://api.zeks.xyz/tiktok?text=url=${args[0]}&APIKEY=${ZeksApi}`, )
                reply('[WAIT] Proses Dumlu Yakan')
                buffer = await getBuffer(anu.result.video)
                Zitsraa.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
                break
                case 'nulis2':
            case 'tulis2':
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 IKY baik hati')
                laysha = body.slice(7)
                reply('WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
                Zitsraa.sendMessage(from, buff, image, { quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*' })
                break
            case 'nulis':
            case 'tulis':
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 ITS baik hati')
                laysha = body.slice(7)
                reply('WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${laysha}&APIKEY=${XteamKey}`)
                Zitsraa.sendMessage(from, buff, image, { quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*' })
                break
                case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${LolKey}`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*Jawaban :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, tebakbender, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
                case 'tebakgambar':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${LolKey}`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break  
				case 'family100':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LolKey}`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*Jawaban :* '+anu.result.aswer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, family, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'caklontong':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${LolKey}`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
					case '.asupan':
                    get_result = await fetchJson(`https://megayaa.herokuapp.com/api/asupan`)
                    buffer = await getBuffer(get_result.result)
                    Zitsraa.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
					case 'meme':        
                   pler = await fetchJson(`https://megayaa.herokuapp.com/api/random/meme`)
                   buffer = await getBuffer(pler.result)
                   Zitsraa.sendMessage(from, ewe, image, {quoted: mek})
                   break
                          case 'stickerwa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://megayaa.herokuapp.com/api/searchsticker?q=Naruto`)
                    get_result = get_result.result
                       Zitsraa.sendMessage(from,get_result,{quoted: mek})
                   
                    break
                    
                    
                    
                    case 'rs':
                      case 'rsticker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Zitsraa.sendMessage(from, ini_buff, sticker, { quoted: freply}).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                    case 'swm':
                    case 'stickerwm':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} Zitsraa|Rapayee`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Zitsraa.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Zitsraa.sendMessage(from, ini_buff, sticker, { quoted: freply }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
case 'stickergif':
case '.stickergif':
case '.sgif':
case '#stickergif':
case '#sgif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Zitsraa.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker slurd`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Zitsraa.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba nanti ya slurr.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								costum(buff, sticker, nomcr, dp)
							})
						})
						} else {
						reply(`Kirim video dengan caption ${prefix}sgif atau tag video yang sudah dikirim slurr`)
					}
					break
         
		case 'sticker':
		case '.sticker':
		case '.s':
		case'#sticker':
		case'#s':
                  case 's':
                  case 'stiker':
                  if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                  const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
                  ran = getRandom('.webp')
                  await ffmpeg(`./${media}`)
                  .input(media)
                  .on('start', function (cmd) {
                  console.log(`Comenzando : ${cmd}`)
                  })
                  .on('error', function (err) {
                  console.log(`Error : ${err}`)
                  fs.unlinkSync(media)
                  reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker slurd`)
                  })
                  .on('end', function () {
                  console.log('Finish!')
                  exec(`webpmux -set exif ${addMetadata('DVNSKI','DVNSKI')} ${ran} -o ${ran}`, async (error) => {
                  Zitsraa.sendMessage(from, fs.readFileSync(ran), sticker, { thumbnail:fakeimage, contextInfo: { externalAdReply:{title:`DVNSKI`,body:`DVNSKI`,previewType:"PHOTO",thumbnail:fakeimage,sourceUrl:`https://chat.whatsapp.com/JguG3o2zufeAzV4vBPmc57`}}, quoted : mek })
                  fs.unlinkSync(media)
                  fs.unlinkSync(ran)
                  })
                  })
                  .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                  .toFormat('webp')
                  .save(ran)
                  } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                  const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                  const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
                  ran = getRandom('.webp')
                  reply(mess.waitstk)
                  await ffmpeg(`./${media}`)
                  .inputFormat(media.split('.')[1])
                  .on('start', function (cmd) {
                  console.log(`Comenzando : ${cmd}`)
                  })
                  .on('error', function (err) {
                  console.log(`Error : ${err}`)
                  fs.unlinkSync(media)
                  tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                  reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker slurd`)
                  })
                  .on('end', function () {
                  console.log('Finish!')
                  exec(`webpmux -set exif ${addMetadata('DVNSKI','DVNSKI')} ${ran} -o ${ran}`, async (error) => {
                  Zitsraa.sendMessage(from, fs.readFileSync(ran), sticker, { thumbnail:fakeimage, contextInfo: { externalAdReply:{title:`DVNSKI`,body:`DVNSKI`,previewType:"PHOTO",thumbnail:fakeimage,sourceUrl:`https://chat.whatsapp.com/Fg8ywXJv9UeHcem90k8Ptq`}}, quoted : mek })
                  fs.unlinkSync(media)
                  fs.unlinkSync(ran)
                  })
                  })
                  .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                  .toFormat('webp')
                  .save(ran)
                  } else {
					Zitsraa.sendMessage(from, `Tandai gambar dengan: stiker\nUntuk video hanya 5 detik.`, text,{sendEphemeral: true, quoted : mek})
					}
                  break
					
					case 'toimg2':
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, buffer, image, {quoted: mek, caption: fake})
						fs.unlinkSync(ran)
					})
					
					break 
					case 'bass':

    if (!isQuotedAudio && args.length < 1) return reply(`Silahkan Reply Audio Dan Masukan Jumlah Nya!\n\nEx : ${prefix+command} 10`)


					media = await Zitsraa.downloadAndSaveMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
           h = args.join(" ")

					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=${h} ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
				break
					
case 'toimg':
					if (!isQuotedSticker) return reply(' reply stickernya gan')
           tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, buffer, image, {quoted: mek, caption: fake, thumbnail: tamnel})
						fs.unlinkSync(ran)
					})
					
					break
case '#toimg':
					if (!isQuotedSticker) return reply(' reply stickernya gan')
           tamnel = fs.readFileSync('./assets/peler.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, buffer, image, {quoted: mek, caption: fake, thumbnail: tamnel})
						fs.unlinkSync(ran)
					})
					
					break		
					case 'ping':
					  const chatsIds = await Zitsraa.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` *Loaded Message*
                
\`\`\` [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                Zitsraa.sendMessage(from, p0, text, { quoted: mek})
                    break
                    
					case 'runtime':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ *RUNTIME*
├ *Nama bot : DVNSKI BOT*
├ *Server :*  *Baileys*
├ *Runtime :*
├   \`\`\`${kyun(uptime)}\`\`\`
├ *Speed :*
├   \`\`\`${latensip.toFixed(4)} Second\`\`\`
└─────────────`
			             Zitsraa.sendMessage(from, anjink, text,{quoted : mek})
			           break
			           case 'term': 
case 'exec':
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return Zitsraa.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
Zitsraa.sendMessage(from, stdout, text, term)
}
})
break

					  //********** Funny COMMAND **********//
					  
					  case '.kontak':
					if (!mek.key.fromMe) return
					
                        entah = args[0]
                        disname = args[1]
                        if (isNaN(entah)) return reply('Invalid phone number'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${disname}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            Zitsraa.sendMessage(from, {displayName: disname, vcard: vcard}, contact)
                            break
                            
			     case '.kontag':
			       if (!mek.key.fromMe) return
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await Zitsraa.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${Zitsraa.user.jid.split('@')[0]}:${Zitsraa.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				Zitsraa.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/zitsraa.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        case '.hidetag':
					if (!isGroup) return reply(mess.only.group)
					if (!mek.key.fromMe) return
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null)
					var value = body.slice(9)
					var group = await Zitsraa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					Zitsraa.sendMessage(from, options, text,{quoted : ftoko})
					break
					
					  
					
			           case '.stctag':
			if (!mek.key.fromMe) return
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await Zitsraa.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await Zitsraa.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        Zitsraa.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case '.imgtag':
					  if (!mek.key.fromMe) return
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Zitsraa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await Zitsraa.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Zitsraa.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    
                    case 'owner':
                 Zitsraa.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: freply})
                 Zitsraa.sendMessage(from, 'Jika Mau Save Chat Aja Gan Ntar Disave Back:)',text, { quoted: freply} )
                 break
 
        
    			  //********** ONLY GROUP **********//
        case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await Zitsraa.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    Zitsraa.sendMessage(from, yeh, text, {quoted: mek})
			        break
			        
        case 'grup':
					case 'gc':
					case 'group':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						Zitsraa.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						Zitsraa.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
					case 'chatlist':
				case 'cekchat':
					Zitsraa.updatePresence(from, Presence.composing)
					Zitsraa.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : mek})
					break
					
					case '.demote':
			      case '.dm' : 
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						Zitsraa.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case '.promote':
				case '.pm':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						Zitsraa.groupMakeAdmin(from, mentioned)
					}
					break
					
    					case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                    break
                    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Zitsraa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            
          case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Zitsraa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek ,caption: 'NIH TOL !' })
            fs.unlinkSync(ran)
            })
            break
            case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Zitsraa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Zitsraa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'setppbot':
			    Zitsraa.updatePresence(from, Presence.composing)
if (!mek.key.fromMe) return reply('*Kamu Owner?*')
					Zitsraa.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(enmedia) 
					p = 'sukses mengganti foto profil'
Zitsraa.sendMessage(from, p, text, {quoted:mek})
					await Zitsraa.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break
                    case 'setdesc':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
Zitsraa.groupUpdateDescription(from, `${args.join(" ")}`)
break
case 'setname':
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
Zitsraa.groupUpdateSubject(from, `${args.join(" ")}`)
Zitsraa.sendMessage(from, 'Succes change name group', text, {quoted:mek})
break
					case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Zitsraa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					
			    case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					}
					break 
					
										case 'online':
										  case 'listonline':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(Zitsraa.chats.get(ido).presences), Zitsraa.user.jid]
                Zitsraa.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: mek,
                    contextInfo: { mentionedJid: online }
                })
                break
                
                case 'infoall':
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :* - [ 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 ] -\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMATION* ⟫━━━┓`+teks+'╚═ *「 DVNSKI BOT 」* ', members_id, true)
					break
					
					case 'edotensei':
					  case 'edotense':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di edotense!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, edotense :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, edotense : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					}
					break
					
					case 'notif':
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Zitsraa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await Zitsraa.sendMessage(from, options, text)
break

      case 'leave': 
				    if (!isGroup) return reply(mess.only.group)
			    	anu = await Zitsraa.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	                break



				
					  //********** STORAGE **********//
case 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				Zitsraa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: freply })
				break
				
case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Zitsraa.sendMessage(from, result, sticker,{quoted:freply})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'addimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: freply })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				Zitsraa.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				case 'addvid':
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				Zitsraa.sendMessage(from, buffer, video, { quoted: freply, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply })
				break
case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				Zitsraa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: freply, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break
				//********** DOWNLOAD **********//
				

				
				case '.play':   
				  if (args.length < 1) return reply('*Masukan judul lagu nya?*')
                Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/play?lagu=${play}&APIKEY=ZeksApi`)
				if (anu.error) return reply(anu.error)
				infomp3   =`*「 Play To Mp3 」*
				
Judul : ${anu.judul}
Size : ${anu.size}
Source : ${anu.source}
				
*_Tunggu Sebentar.._* `
				buffer = await getBuffer(anu.thumbnail)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
        lagu = await getBuffer(anu.url)
				Zitsraa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp3', filename: `${anu.url}.mp3`, quoted: mek})
				break
				case 'lirik':

if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")

teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `*Lirik Lagu :*


${res[0].result}
`
reply(lirik)
})
break
case 'igd':
reply(mess.wait)
    if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply('Format link salah, gunakan link instagram')
  play = body.slice(3)
  try {
  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${lolKey}&url=${play}`)
  lagu = await getBuffer(anu.result)
  Zitsraa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
  
				case '.play':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                Zitsraa.sendMessage(from, mess.wait, text,{quoted : mek})
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = ` *Video Ditemukan!!!*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*_Tunggu Sebentar.._*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				Zitsraa.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
				Zitsraa.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: fake, thumbnail: tamnel})
					break 
				
        case 'ig':
          if (args.length < 1) return reply('*Masukan Url nya?*')
          query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${query}&apikey=apivinz`, {method: 'get'})
					tods = ` Instagram DOWNLOADER

Username : ${anu.owner}
Caption : ${anu.caption}
`
					Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.result[0].url)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result[0].url}.mp4`, quoted: freply, caption : tods})
					break 
					
case 'fb':
  if (args.length < 1) return reply('*Masukan Url nya?*')
  query = args.join(" ")
					anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${query}`, {method: 'get'})
					wing = ` *F A C E B O O K DOWNLOADER*
					
*Judul :* ${anu.result.judul}`
					
					Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.result.url)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.url}.mp4`, quoted: mek, caption: wing})
					break 
				case 'quotes1':
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/randomquote/muslim?apikey=alpin1`)
                   anu1 = `➻ *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'quotes2':
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/quotes/kanye?apikey=alpin1`)
                   anu1 = `➻ *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'wallpaper': case 'walpaper':
                   reply('[❗] SEDANG DIPROSES', text, mek, mek)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/random/wallpaper?apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   Zitsraa.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: mek})
                   break
                   case 'imo': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   F = body.slice(5)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/lmo?text=${F}&theme=bintang&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   Zitsraa.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: mek})
                   break
              case 'cersex':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
                   case 'cerpen':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break
                   case 'anime':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_baguette`)
                   Zitsraa.sendMessage(from, anu, image, {quoted: mek}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'anime1':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_dva`)
                   Zitsraa.sendMessage(from, anu, image, {quoted: mek}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'yuri':
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_yuri`)
                   Zitsraa.sendMessage(from, anu, image, {quoted: mek}).catch(e => {
	               nayz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'tongue':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'jadwalsholat':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} makassar*`)  
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
                   case 'pantun':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break 
                   case 'cuaca': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} makassar*`)  
                   reply('[❗] SEDANG DIPROSES', text, freply, mek)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break 
case 'tiktok':
  if (args.length < 1) return reply('*Masukan Url nya?*')
					query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/tiktok?url=${query}&apikey=apivinz`, {method: 'get'})
					
					Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
					pyu = `*TIKTOK DOWNLOADER*
					
Author : ${anu.author}
Title : ${anu.title}	`
					buffer = await getBuffer(anu.no_watermark)
					buff = await getBuffer(anu.audio)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.no_watermark}.mp4`, quoted: freply, caption: pyu})
					Zitsraa.sendMessage(from, buff, audio, {quoted : mek})
					break
				
				case '"ytmp4':
				  if (args.length < 1) return reply('*Masukan Url nya?*')
ini_link = args[0]
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${ini_link}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4* 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
					 
 Tunggu Sebentar kak...`
					 buff = await getBuffer(anu.thumbnail)
					Zitsraa.sendMessage(from, mess.wait, text,{quoted : mek})
					tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
					buffer = await getBuffer(anu.url)
					Zitsraa.sendMessage(from, buff, image, {quoted: mek, caption: ytt , fake, thumbnail: tamnel})
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: mek, caption: 'Nih Gan' , fake, thumbnail: tamnel})
					break 

				case '"ytmp3':
				  if (args.length < 1) return reply('*Masukan Url nya?*')
				  tamnel = fs.readFileSync('./assets/buset.jpg')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage
                    ini_link = args[0]
                    anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${ini_link}&APIKEY=${XteamKey}`)
                    					ytt = `「 *YOUTUBE MP3* 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
					 
 Tunggu Sebentar kak...`
					 buff = await getBuffer(anu.thumbnail)
					Zitsraa.sendMessage(from, mess.wait, text,{quoted : mek})
					buffer = await getBuffer(anu.url)
					Zitsraa.sendMessage(from, buff, image, {quoted: mek, caption: ytt ,fake, thumbnail: tamnel})
					Zitsraa.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: mek})
				break


        
//********** UPLOAD **********
case 'upswtext':
					Zitsraa.updatePresence(from, Presence.composing)
					Zitsraa.sendMessage('status@broadcast', `${q}`, extendedText)
					Zitsraa.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : mek})
					break
					
				case 'upswimg':
					Zitsraa.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await Zitsraa.downloadMediaMessage(swsw)
						Zitsraa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					Zitsraa.sendMessage(from, bur, text, { quoted: mek })
					break
					
				case 'upswvideo':
					Zitsraa.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await Zitsraa.downloadMediaMessage(swsw)
						Zitsraa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					Zitsraa.sendMessage(from, bur, text, { quoted: mek })
					break
					
					case 'toko':
					  case 'troli':

				catalogReply('Belanja Slurr', 'sedia boba')
				break
          
          case 'help2':

				icatalogReply('daftar menu', 'DVNŠKI BOT')
				
				break
                    case 'asmaulhusna':
                    awok = await fetchJson(`https://megayaa.herokuapp.com/api/random/asmaulhusna`)
                    asma = awok.result
                    husna = `No : ${asma.index}\n`
                    husna += `Latin: ${asma.latin}\n`
                    husna += `Arab : ${asma.arabic}\n`
                    husna += `Indonesia : ${asma.translation_id}\n`
                    husna += `English : ${asma.translation_en}`
                    reply(husna)
                    break
                    case 'textthumb':
case 'text':
				if (!q) return reply(from, 'textnya apa brohh')
				Zitsraa.sendMessage(from, `${q}`,
					MessageType.text, { sendEphemeral: true,
					thumbnail: setthumb
					})
				break
				
case 'toggle':
if (!isGroup) return
Zitsraa.toggleDisappearingMessages(from, 'Stipen') 
//Jangan di ubah nanti gak work
break
				
case 'toggle':
if (!ischat) return
Zitsraa.toggleDisappearingMessages(from, 'Stipen') 
//Jangan di ubah nanti gak work
break
case 'randomquran':
			data = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
			teks = `Nama: ${data.result.nama}\nArti: ${data.result.arti}\nayat: ${data.result.ayat}\nAsma: ${data.result.asma}\nRukuk: ${data.result.rukuk}\nNomor: ${data.result.nomor}\nType: ${data.result.type}\nKeterangan: ${data.result.keterangan}`
			buffs = await getBuffer(data.result.audio)
			zitsraa.sendMessage(from, `${teks}`, MessageType.text, {quoted: tod})
			zitsraa.sendMessage(from, buffs, audio, {mimetype: 'audio/mp4', filename: `quran.mp3`, quoted: tod})
			break
case 'pc': 
					if (args.length < 1) return reply('.......')
					anu = await zitsraa.chats.all()
					if (isMedia && !tod.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
						buff = await zitsraa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							zitsraa.sendMessage(_.jid, buff, image, {caption: `❮ 𝘽𝙊𝙏 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `❮ 𝘽𝙊𝙏 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗??𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break
					if (button == '💡 𝐎𝐖??𝐄𝐑') {
console.log('OWNER')
Zitsraa.sendMessage(from, {displayname: "DVNSKI", vcard: vcard}, MessageType.contact, { quoted: mek})
Zitsraa.sendMessage(from, 'Tuh Kak Oner Ku',MessageType.text, { quoted: mek} )
}
if (button == 'Iya') {
  let ngocok = fs.readFileSync('./assetes/Sound4.mp3')
        Zitsraa.sendMessage(from, ngocok, audio, {quoted: mek, ptt:true})
				}
				if (button == 'OWNER CONTACT') {
							console.log(color('CREATOR BOT: 👤','aqua'))
							Zitsraa.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, {contextInfo: {forwardingScore : 508, isForwarded: true},sendEphemeral: true, quoted:mek})
							Zitsraa.sendMessage(from, `Kontak dari Pencipta saya 🐦`, text, {sendEphemeral:true, quoted: mek, thumbnail: fakeimage})
							}
							if (button == 'STATUS BOT') {
							console.log(color('STATUS BOT: 👤','aqua'))
							const chatsIds = await Zitsraa.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ Samsung ] HANDPHONE\`\`\`
\`\`\` - [ ${Zitsraa.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ SELF ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4095 ] RAM\`\`\`

\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                Zitsraa.sendMessage(from, p0, text, { quoted: ftoko})
							}
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
