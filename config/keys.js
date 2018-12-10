console.log('this is loaded');

exports.server = {
    id: process.env.SERVER_ID,
    secret: process.env.SERVER_SECRET
};

module.exports = server;