const Discord = require("discord.js");
const client = new Discord.Client();
const commontags = require("common-tags")
const ms = require("ms")
const fs = require("fs")
let prefix = "d*";
let ikinciprefix = "<@425664347184955392>";
const logembed = ({title:"Dikkat :warning:",description:"Bu sunucuda #db-log adlı bir kanal yok!", color:"300000"});
client.on('ready', () => {
client.user.setActivity(`d*yardım | ${client.users.size} kullanıcı`);
console.log(`${client.user.tag} botuna giriş yapıldı.`);
});

client.on('guildMemberAdd', üye => {
  const sunuculog = üye.guild.channels.find('name', 'db-log');
  if (!sunuculog) return;
let hgembed = new Discord.RichEmbed()
.setTitle('Sunucunuza yeni bir üye katıldı!')
.setDescription(`O şanslı üye **${üye}**!`)
.setThumbnail(üye.user.avatarURL)
.setColor(300000)
sunuculog.send({embed: hgembed})
});

client.on('message', msg => {
	var bannedUsers = ["414353271474487298"]
if (bannedUsers.includes(msg.author.id)) return;

let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));

var yapımcılar = ["275677698368471041"]
var başlangıçekibi = ["318730491945680896"]
var ekibimiz = ["318730491945680896"]
var editörler = ["363292987050033152"]

if(msg.author.bot) return;

if (!points[msg.author.id]) points[msg.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[msg.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    userData.level = curLevel;
    msg.reply(`**${curLevel}** seviyesine ulaştın!`);
  }

  if (msg.content.toLocaleLowerCase().startsWith(prefix + "seviyem")) {
	let levelmesaj = new Discord.RichEmbed()
	.setAuthor(msg.author.username, msg.author.avatarURL)
	.setDescription(`Seviyen ${userData.level}, puanın ise ${userData.points}.`)
	.setColor(300000)
    msg.channel.send({embed: levelmesaj});
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

if (msg.content.toLowerCase() === prefix + 'kullanıcıbilgim'){
    var Durum = msg.author.presence.status;
    var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
    var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
  const kullanicibilgimk = new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.avatarURL)
  .setColor(Durm)
  .setTimestamp()
  .addField('Ad:', msg.author.username + '#' + msg.author.discriminator)
  .addField('ID:', msg.author.id)
  .addField('Kayıt tarihi:', msg.author.createdAt)
  .addField('Durum:', durm)
  .addField('Şu an oynadığı oyun:', msg.author.presence.game ? msg.author.presence.game.name : 'Şu an oyun oynamıyor')
  .addField('BOT mu?', msg.author.bot ? '\n Evet' : 'Hayır')
  console.log("d*kullanıcıbilgim komutu " + msg.author.username + " tarafından kullanıldı.")
  return msg.channel.sendEmbed(kullanicibilgimk);
}
        
if (msg.content.toLowerCase() === prefix + 'kbilgim'){
  var Durum = msg.author.presence.status;
  var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
  var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
const kullanicibilgimk = new Discord.RichEmbed()
.setAuthor(msg.author.username, msg.author.avatarURL)
.setColor(Durm)
.setTimestamp()
.addField('Ad:', msg.author.username + '#' + msg.author.discriminator)
.addField('ID:', msg.author.id)
.addField('Kayıt tarihi:', msg.author.createdAt)
.addField('Durum:', durm)
.addField('Şu an oynadığı oyun:', msg.author.presence.game ? msg.author.presence.game.name : 'Şu an oyun oynamıyor')
.addField('BOT mu?', msg.author.bot ? '\n Evet' : 'Hayır')
console.log("d*kbilgim komutu " + msg.author.username + " tarafından kullanıldı.")
return msg.channel.sendEmbed(kullanicibilgimk)
}

if (msg.content.toLowerCase() === prefix + 'sunucubilgi') {
    if (msg.channel.type !== 'dm') {
      let sunucubilgi = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .addField('Ad:', msg.guild.name)
    .addField('ID', msg.guild.id)
    .addField('Bölge', msg.guild.region)
    .addField('Üye sayısı:', msg.guild.memberCount)
    .addField('Sahibi:', msg.guild.owner)
    .addField('Kanal sayısı:', msg.guild.channels.size)
    .addField('Oluşturulma tarihi:', msg.guild.createdAt)
    return  msg.channel.sendEmbed(sunucubilgi);
    }
  }

  if (msg.content.toLowerCase() === prefix + 'sbilgi') {
    if (msg.channel.type !== 'dm') {
      let sunucubilgi = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .addField('Ad:', msg.guild.name)
    .addField('ID', msg.guild.id)
    .addField('Bölge', msg.guild.region)
    .addField('Üye sayısı:', msg.guild.memberCount)
    .addField('Sahibi:', msg.guild.owner)
    .addField('Kanal sayısı:', msg.guild.channels.size)
    .addField('Oluşturulma tarihi:', msg.guild.createdAt)
    return  msg.channel.sendEmbed(sunucubilgi);
    }
}

if (msg.content.startsWith(prefix + "konuştur ")) {
    if (msg.channel.type !== "dm"){
    let konusulacak = msg.content.substring(2 + 8);
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
        msg.reply("mesajları yönet yetkin yok!")
    } else {
		msg.delete(1);
        msg.channel.send(konusulacak)
    }}
}

if(msg.channel.type != "dm"){
	if (msg.content === prefix +'ping') {
	  msg.channel.bulkDelete(1);
	  msg.channel.send(`Pingim şuan ${client.ping} ms. Yani ${client.ping/1000} saniye.`);
	}}
  
  if(msg.content === prefix + 'aga-relax-zamanı'){
	  let embed = new Discord.RichEmbed()
	  .setTitle("Aga Relax Zamanı!")
	  .setDescription("Teşekkürler: relax#6813")
	  .setColor(3447003)
	  .setImage("https://cdn.discordapp.com/attachments/364486332216639490/414773970215370762/aga_relax_zaman.png")
	  return msg.channel.send({embed})}
	
	  if (msg.content.startsWith(prefix + "temizle ")) {
		if (msg.channel.type !== "dm"){
		let mesajsil = msg.content.substring(2 + 8);
		if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
			msg.reply("Yetkin yok!")
		} else {
			msg.channel.bulkDelete(mesajsil)
			msg.channel.send(`${mesajsil} adet mesaj silindi.`)
			client.setTimeout(() =>{ msg.channel.bulkDelete(1)}, require("ms")("3sec"));
		}}
	}

const ozelmsjembed = new Discord.RichEmbed()
.addField('Özelden Mesaj Gönderdim!','Özel mesajlarını kontrol et! :postbox:')
.setColor(3447003)
  
const ekip = new Discord.RichEmbed()
.setTitle('Dost BOT - Ekip')
.addField('Yapımcı','AhmetEsad#2057')
.addField('Editör + VDS','MemoKK#5966')
.addField('Ekiptekiler','DepressedBoy5#9066')
.addField('Yeni Başvuranlar','DepressedBoy5#9066 - Onaylandı')
.setFooter('Siz de mi ekibe katılmak istiyorsunuz? Yalnızca d*ekibebaşvur komutumuzu kullanın.')
.setColor(100000)

const kabulembed = new Discord.RichEmbed()
.setTitle('Başvurunuz Onaylandı!')
.setDescription('Kabul edildiniz!')
.addField('Sıradakiler Ne?','Bize sunabileceğiniz tüm fikirleri toplayın! Duymaktan mutluluk duyarız!')
.addField('Sonra','İleride botun dosyalarına erişim hakkı kazanabilirsiniz!')
.setColor(300000)

const retembed = new Discord.RichEmbed()
.setTitle('Başvurunuz Reddedildi.')
.setDescription('Kabul edilmediniz.')
.addField('Sıradakiler Ne?','Lütfen bekleyin, kararlarımız değişebilir.')
.addField('Dikkat Edilmesi Gerekenler','Lütfen ardı ardına birkaç kez başvurmayın.')
.setColor(300000)

const yardimembed = new Discord.RichEmbed()
.addField('__BOT Hakkında__',`**${prefix}yardım** : Botun Komutlarını Gösterir.\n**${prefix}davet** : Botun davet linkini gönderir.\n**${prefix}yapımcılar** : Botun yapımcılarını gösterir.\n**${prefix}ekibebaşvur** : Ekibe başvurursunuz.`)
.addField('__Admin Komutları__', `**${prefix}eval** : JavaScript Kodunu Dener\n**${prefix}reboot** : Botu Yeniden Başlatır`)
.addField('__Sunucu Komutları__',`**${prefix}sunucubilgi** : Sunucu hakkında detaylı bilgidir.\n**${prefix}afk** : AFK olursunuz. Sebep yazmak isteğe bağlıdır.`)
.addField('__Kullanıcı Komutları__',`**${prefix}kullanıcıbilgim** : Hakkınızda bilgi verir.\n**${prefix}avatar** : Etiketlediğiniz kullanıcının avatarını gösterir.\n**${prefix}seviyem** : Levelinizi gösterir.`)
.addField('__Moderatör Komutları__',`**${prefix}temizle** : Belirtilen sayı kadar mesaj siler.\n**${prefix}konuştur** : Mesaj yönetebilenlere özel konuşturmadır.`)
.setColor('FFFFFF')
.setFooter('Botun Yapımcıları: AhmetEsad#2057 ve MemoKK#5966')

 if(msg.channel.type === "dm"){
	 console.log(msg.author.username + ' **DM üzerinden şunu söyledi**: ' + msg.content);
	 client.users.get('275677698368471041').send(msg.author.id + ' | ' + msg.author.username + '#' + msg.author.discriminator + ' **DM üzerinden şunu söyledi**: ' + msg.content);
	 client.users.get('363292987050033152').send(msg.author.id + ' | ' + msg.author.username + '#' + msg.author.discriminator + ' **DM üzerinden şunu söyledi**: ' + msg.content);
 }

 if(msg.content.toLocaleLowerCase().startsWith(prefix + 'reboot')){
if(yapımcılar.includes(msg.author.id)){
			 msg.channel.send('Bot 3 Saniye İçinde Yeniden Başlatılıyor..')
 client.setTimeout(() =>{ msg.channel.send('BOT Başarıyla Yeniden Başlatıldı :ok_hand:')}, require("ms")("2sec"));
 client.setTimeout(() =>{ process.exit()}, require("ms")("3sec"));
} else {
	let memokkveahmetesad = new Discord.RichEmbed()
	.setTitle('Buna Yetkin Yok, ' + msg.author.username + '!')
	.setDescription('Kör değilim, AhmetEsad veya MemoKK olmadığını görebiliyorum bundan şüphen olmasın!')
	.setColor('FFFFFF')
msg.channel.send({embed : memokkveahmetesad})
 }}

 if(msg.channel.type != 'dm'){
 var kullanıcıavatar = msg.mentions.members.first()
 if(msg.content.toLocaleLowerCase().startsWith(prefix + 'avatar ')){
let avatarembed = new Discord.RichEmbed()
.setDescription(kullanıcıavatar.displayName + ' Kullanıcısının Avatarı')
.setImage(kullanıcıavatar.user.avatarURL)
.setColor(300000)
msg.channel.send({embed: avatarembed})}
 }

 if(msg.content.toLocaleLowerCase().startsWith(prefix + 'afk')){
   let sebep = msg.content.substring(2 + 4)
   let direkafk = new Discord.RichEmbed()
   .setAuthor(msg.author.username, msg.author.avatarURL)
   .setTitle('AFK')
   .setDescription(msg.author.username + ' adlı kişi artık klavyeden uzakta.')
   .addField('Sebep','Sebep girilmedi')
   .setTimestamp()
   .setColor(300000)
   if (!sebep) return msg.channel.send({embed: direkafk});
   let afkembed = new Discord.RichEmbed()
   .setAuthor(msg.author.username, msg.author.avatarURL)
   .setTitle('AFK')
   .setDescription(msg.author.username + ' adlı kişi artık klavyeden uzakta.')
   .addField('Sebep',sebep)
   .setTimestamp()
   .setColor(300000)
   msg.channel.send({embed: afkembed})}

   if(msg.content.toLocaleLowerCase().startsWith('/afk')){
    let sebep = msg.content.substring(1 + 4)
    let direkafk = new Discord.RichEmbed()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setTitle('AFK')
    .setDescription(msg.author.username + ' adlı kişi artık klavyeden uzakta.')
    .addField('Sebep','Sebep girilmedi')
    .setTimestamp()
    .setColor(300000)
    if (!sebep) return msg.channel.send({embed: direkafk});
    let afkembed = new Discord.RichEmbed()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setTitle('AFK')
    .setDescription(msg.author.username + ' adlı kişi artık klavyeden uzakta.')
    .addField('Sebep',sebep)
    .setTimestamp()
    .setColor(300000)
    msg.channel.send({embed: afkembed})}

   if(msg.content.toLocaleLowerCase().startsWith('!afk')){
    let sebep = msg.content.substring(1 + 4)
    let direkafk = new Discord.RichEmbed()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setTitle('AFK')
    .setDescription(msg.author.username + ' adlı kişi artık klavyeden uzakta.')
    .addField('Sebep','Sebep girilmedi')
    .setTimestamp()
    .setColor(300000)
    if (!sebep) return msg.channel.send({embed: direkafk});
    let afkembed = new Discord.RichEmbed()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setTitle('AFK')
    .setDescription(msg.author.username + ' adlı kişi artık klavyeden uzakta.')
    .addField('Sebep',sebep)
    .setTimestamp()
    .setColor(300000)
    msg.channel.send({embed: afkembed})}

 if(msg.content.toLocaleLowerCase() === prefix + 'avatar'){
msg.reply('kimin avatarını istiyorsan onu etiketlemelisin.');
 }

 if(msg.content.toLocaleLowerCase().startsWith(prefix + 'yardım')){
 msg.author.send({embed: yardimembed});
	msg.channel.send({embed: ozelmsjembed})
}

if(msg.content.toLocaleLowerCase() === prefix + 'y'){
	msg.author.send({embed: yardimembed});
	   msg.channel.send({embed: ozelmsjembed})
   }

   if(msg.content.toLocaleLowerCase().includes('`')){
	   console.log(msg.content)
   }

if(msg.content.toLocaleLowerCase().startsWith(prefix + 'davet')){
	let davetembed = new Discord.RichEmbed()
	.setDescription('Davet Linki İçin [Tıkla](https://bit.ly/dost-bot)')
	.setColor(300000)
	msg.channel.send({embed: davetembed})
}

if(msg.content.toLocaleLowerCase().startsWith(prefix + 'ekle')){
	let davetembed = new Discord.RichEmbed()
	.setDescription('Davet Linki İçin [Tıkla](https://bit.ly/dost-bot)')
	.setColor(300000)
	msg.channel.send({embed: davetembed})
}

if(msg.content.toLocaleLowerCase().startsWith(prefix + 'yapımcılar')){
msg.channel.send({embed: ekip})
}

if(msg.content.toLocaleLowerCase().startsWith(prefix + 'ekip')){
msg.channel.send({embed: ekip})
}

if(msg.content.toLocaleLowerCase() === prefix + 'ekibebaşvur'){
let başvuruformu = new Discord.RichEmbed()
.setTitle('Ekibe Başvuru Formu')
.setDescription('Lütfen Düzgün Şekilde Doldurup Gönderiniz. Dalga geçme amaçlı atılan başvurular, banlanmanıza sebep olabilir!')
.addField('__Adınız__','Bize adınızı söyleyin!')
.addField('__Yaşınız__','Botun ekibinde olmak için hangi yaşta olduğunuzu bize söyleyin.')
.addField('__100 Üzerinden Discord.JS Bilginiz__','Bize bildiklerinizi anlatın!')
.addField('__Botunuz var mı?__','Botunuzun olup olmadığını bize söyleyin. Varsa adını öğrenmekten gurur duyarız!')
.addField('__Günde Kaç Saat Aktifsiniz?__','Bize, günde kaç saati bilgisayar başında öldürdüğünüzü söyleyin.')
.addField('__Bize Ne Tür Kodlarla Yardımcı Olabilirsiniz?__','Hangi kodlarla bize yardımcı olabileceğinizi söyleyin. Eğer gerçekten yararlı şeyler ise tabii.')
.addField('__Başvurunuzu Gönderin__!',"Birazdan, size DM üzerinden örnek bir başvuru formu atacağız. Gerekli alanları doldurup bize **d*ekibebaşvur <başvurunuz>** şeklinde gönderin!")
.setColor(100000)
.setFooter('Başarılar!')
msg.channel.send({embed: başvuruformu})
let örnekbaşvuru = new Discord.RichEmbed()
.setTitle('İşte O Örnek Başvuru Formu!')
.addField('Şimdi buradan bakarak gönderebileceksin!','Adınız :\nYaşınız :\n100 Üzerinden Discord.JS Bilginiz :\nBotunuz Var Mı :\nGünde Kaç Saat Aktifsiniz :\nBize Ne Tür Kodlarla Yardımcı Olabilirsiniz :')
.setFooter('Başarılar Dileriz!')
.setColor(100000)
client.setTimeout(() =>{ msg.author.send({embed: örnekbaşvuru})}, require("ms")("20sec"));
}

if(msg.content.toLocaleLowerCase().startsWith(prefix + 'ekibebaşvur ')){
	let başvuru = msg.content.substring(2 + 12)
let gönderildi = new Discord.RichEmbed()
.setTitle('Başvurunuz Başarıyla Ulaştırıldı!')
.setColor(300000)
.setDescription("Başvurunuzu AhmetEsad ve MemoKK'nın evinin önündeki posta kutusuna bıraktık! Ve birazdan, bu mektubun bir kopyasını size de atacağız!")
	msg.channel.send({embed: gönderildi})
	let dmmsj = new Discord.RichEmbed()
	.setTitle('Başvurunuz:')
	.setDescription(başvuru)
	.setColor(100000)
	msg.author.send(dmmsj)
	let ahmetesada = new Discord.RichEmbed()
	.setTitle(msg.author.username + '#' + msg.author.discriminator + ' Kişisinin Başvurusu')
	.setDescription(başvuru)
	.setColor(100000)
	client.users.get('275677698368471041').send(ahmetesada)
	client.users.get('363292987050033152').send(ahmetesada)
	}

 function clean(text) {
	if (typeof(text) === "string")
	  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
  }

  const args = msg.content.split(" ").slice(1);

  if (msg.content.startsWith(prefix+ "eval ")) {
	  if(msg.content.includes("token")) return msg.channel.sendCode('xl', 'Şuan tokenimi aldın cidden.')
	if(msg.author.id !== "275677698368471041") return;
	try {
	  const code = args.join(" ");
	  let evaled = eval(code);

	  if (typeof evaled !== "string")
		evaled = require("util").inspect(evaled);

	  msg.channel.send(clean(evaled), {code:"xl"});
	} catch (err) {
	  msg.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	}
  }
  });








client.login('NDI1NjY0MzQ3MTg0OTU1Mzky.DaopSQ.ZIyAFxkyd5WsZpK2HMr2tai2Z8E');