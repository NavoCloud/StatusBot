const Status = require('pterostatus');
const {admin_apikey, discord_token, discord_channel, panel_link, discord_webhook, node_name, node_total_status, embed_color, embed_title, embed_footer, offline_emoji, online_emoji, node_status, embed_thumbnail} = require('/home/container/config.json');
const Node = new Status.Node({
    name: `${node_name}`,
    interval: 15000,
    controller: 'http://0.0.0.0:8080'
});
const controller = require('./Lib/index')

const Controller = new controller(8080, {
    discord: {
        token: `${discord_token}`,
        channel: `${discord_channel}`,
    },
    pterodactyl: {
        panel: `${panel_link}`,
        apiKey: `${admin_apikey}`
    },
    notifications: {
        discord: `${discord_webhook}`
    },
    node: {
        message: `${node_status}`,
        online: `${online_emoji}`,
        offline: `${offline_emoji}`,
    },
    embed: {
        thumbnail: `${embed_thumbnail}`,
        color: `${embed_color}`,
        title: `${embed_title}`,
        description: `${node_total_status}`,
        footer: {
            text: `${embed_footer}, Made By Person0z with ❤️`,
        }
    },
    port: 8080,
    interval: 15000
});