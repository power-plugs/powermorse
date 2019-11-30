const { Plugin } = require('powercord/entities');

module.exports = class Morse extends Plugin {
  startPlugin () {
    this.registerCommand('morse',[],'Morse-ify text','{c} [text to morse]',(args) => ({send: true,result: powercord.morse.encode(args.join(" "))}));
    this.registerCommand('demorse',[],'De-morse-ify text','{c} [text to morse]',(args) => ({send: true,result: powercord.morse.decode(args.join(" "))})
    );
  }
};

powercord.morse = {};
powercord.morse.encode = (text) => {
  var alphabet={'a':'.-','b':'-...','c':'-.-.','d':'-..','e':'.','f':'..-.','g':'--.','h':'....','i':'..','j':'.---','k':'-.-','l':'.-..','m':'--','n':'-.','o':'---','p':'.--.','q':'--.-','r':'.-.','s':'...','t':'-','u':'..-','v':'...-','w':'.--','x':'-..-','y':'-.--','z':'--..',' ':'/','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.','0':'-----'}

  return text.split('').map(function(e){return alphabet[e.toLowerCase()] || '';}).join(' ').replace(/ +/g, ' ');
}
powercord.morse.decode = (text) => {
  var ref = {'.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f','--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l','--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r','...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x','-.--':'y','--..':'z','/':' ','.----':'1','..---':'2','...--':'3','....-':'4','.....':'5','-....':'6','--...':'7','---..':'8','----.':'9','-----':'0'};
  
  return text.split('    ').map(a => a.split(' ').map(b => ref[b]).join('')).join(' ');
}