const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '1104281087:AAFIMNaiDVHpWxNF42CYuG44ii9xamHCJxY'
console.log('Bot has been started ....')
const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

bot.onText(/\/start/, (msg) => {

    const {id} = msg.chat
    if (msg.text === 'Закрыть') {

        bot.sendMessage(id, 'Опишите Вашу проблему', {
            reply_markup: {
                remove_keyboard: true
            }
        })

    }
    const html = `Здравствуйте, <strong>${msg.from.first_name}  ${msg.from.last_name}.</strong> `
    bot.sendMessage(id, html, {parse_mode: 'HTML'})
    bot.sendMessage(id, 'Опишите Вашу проблему, напишите Ваш ИНН или номер договора. Вы так же можете отправить свои контактные данные, чтобы наш менеджер связался с Вами.', {
        reply_markup: {
            keyboard: [
                [{
                    text: 'Отправить контакт',
                    request_contact: true
                }],
                ['Закрыть']
            ],
            one_time_keyboard: true
        }
    })

  })





