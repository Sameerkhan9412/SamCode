const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: "rFzH4ycZpglFPlk7kcqmcUNHaH9zTyeP",
    socket: {
        host: "redis-10578.c264.ap-south-1-1.ec2.redns.redis-cloud.com",
        port: 10578
    }
});

module.exports = redisClient;