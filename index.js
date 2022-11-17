
const TelegramApi = require('node-telegram-bot-api');

const token = '5716925008:AAHAEDRhSnIzgkoLrqZ6wy6hSU_HPlceoJE';

const bot = new TelegramApi(token, {polling: true});





const start = () => {
	bot.setMyCommands([
	{command: '/start', description: 'Приветствие'},
	{command: '/info', description: 'Информация'}
])
	bot.on('message', async	msg => {
	const text = msg.text;
	const chatId = msg.chat.id; 
	
	if(text === '/start') {
		return bot.sendMessage(chatId, `Эй, ${msg.from.first_name} ${msg.from.last_name} купи носки! их очень много`)
	}
	if(text === '/info') {
		return bot.sendMessage(chatId, `Есть адидас найк и ещё что нибудь найдём! ;)`)
	}
	return bot.sendMessage(chatId, `Я тебя не понимаю`)

})
}

start()