const redis = require("redis")
const { promisify } = require("util");

const client = redis.createClient({
    host: process.env.REDIS_SERVER,
    port: process.env.REDIS_PORT,
});

client.auth(process.env.REDIS_AUTH)

const GET_ASYNC = promisify(client.get).bind(client)
const SET_ASYNC = promisify(client.set).bind(client)

module.exports =  {
    getCache : (key) => {
        return GET_ASYNC(key)
    },
    setCache  : (key,value,expires) => {
        return SET_ASYNC(
            key,
            JSON.stringify(value),
            'EX',
            expires || 60 * 60 * 24 * 10
        )
    }
}