/**
 * SMTP なでしこ3プラグイン
 */

const nodemailer = require("nodemailer")
const path = require("path")
const fs = require('fs')

const PluginSMTP = {
    'meta': {
        type: 'const',
        value: { // プラグインに関する情報を指定する
            pluginName: 'nadesiko3-smtp', // プラグインの名前
            description: 'メール送信プラグイン', // プラグインの説明
            pluginVersion: '3.6.16', // プラグインのバージョン
            nakoRuntime: ['cnako'], // 対象ランタイム
            nakoVersion: '3.6.16' // 要求なでしこバージョン
        }
    },
    '初期化': {
        type: 'func',
        josi: [],
        fn: function (sys) {
        }
    },

    // @SMTP
    'メール送信': { // @辞書型のデータ{host:'xxx',port:xxx,secure:true,auth:{user:'xxx',pass:'xxx'},from:'xxx',to:'xxx',subject:'xxx',text:'xxx',html:'xxx'}を指定してメールを送信して情報を返す // @めーるそうしん
        type: 'func',
        josi: [['の', 'で']],
        asyncFn: true,
        fn: async function (data, sys) {
            const poter = nodemailer.createTransport({
                host: data['data'],
                port: data['port'],
                secure: data['secure'],
                auth: data['auth']
            })
            return await porter.sendMail({
                from: data['from'],
                to: data['to'],
                subject: data['subject'],
                text: data['text'],
                html: data['html']
            })
        }
    },

    'GMAIL送信': { // @辞書型のデータ{user:'xxx',pass:'xxx',宛先:'xxx',件名:'xxx',本文:'xxx',html:'xxx',添付:[{filename:'xxx', path:'xxx'}]}を指定してGMAILからメール送信して情報を返す // @GMAILそうしん
        type: 'func',
        josi: [['の', 'で']],
        asyncFn: true,
        fn: async function (data, sys) {
            const porter = nodemailer.createTransport({
                service: 'gmail',
                port: 465,
                secure: true,
                auth: {
                    user: data['user'],
                    pass: data['pass']
                }
            })
            const opt = {
                from: data['user'],
                to: data['to'] || data['宛先'],
                subject: data['subject'] || data['件名'],
                text: data['text'] || data['本文'],
                html: data['html'],
                attachments: data['attachments'] || data['添付']
            }
            return await porter.sendMail(opt)
        }
    }
}

// モジュールのエクスポート(必ず必要)
module.exports = PluginSMTP

