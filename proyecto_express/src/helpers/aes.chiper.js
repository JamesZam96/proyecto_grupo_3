const crypto = require('crypto')
const algorithm = 'aes-256-ctr'
const ENCRYPTION_KEY = Buffer.from('meTYzIMae/xaneuGm55zH4A2uvgr+InuSq8PacSxu8E=', 'base64')
const IV_LENGTH = 16

function encrypt(text){
    let iv = crypto.randomBytes(IV_LENGTH)
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY, 'hex'), iv)
    let encrypted = cipher.update(text)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return iv.toString('hex')+':'+encrypted.toString('hex')
}

module.exports = {encrypt}