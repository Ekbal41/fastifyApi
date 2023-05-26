'use strict'
module.exports = async function (fastify, opts) {
    fastify.route({
        url: '/',
        method: 'GET',
        schema: {
            tags: ['root'],
            description: "Returns a welcome message.",
            summary: 'Returns a welcome message.',
            response: {
                200: {
                    type: 'object',
                    description: 'Successful response',
                    properties: {
                        message: { type: 'string' }
                    }

                },
                404: {
                    type: 'object',
                    description: ' not found',

                }
            }

        },
        handler: async function (request, reply) {
            reply.send({ message: 'Welcome to fastisy api . To see docs go to "/docs".' })

        }

    })


}