import fastify from "fastify";


const app = fastify()

app.get('/teste', () => {
    console.log("TEST")
})

app.listen({
    port: 3000
}).then(() => {
    console.log('HTTP server running!')
})