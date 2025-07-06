const { createClient } =require('redis');
const redisClient=async()=>{

    const client = createClient({
        username: 'default',
        password: 'rFzH4ycZpglFPlk7kcqmcUNHaH9zTyeP',
        socket: {
            host: 'redis-10578.c264.ap-south-1-1.ec2.redns.redis-cloud.com',
            port: 10578
        }
    });

    
    client.on('error', err => console.log('Redis Client Error', err));
    
    await client.connect();
    console.log("redis connected successfully");
}
module.exports=redisClient;




