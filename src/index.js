const fetch = require("wumpfetch");
class Client {
    constructor(token) {
        this.KEY = token;
    };

    /**
     *
     * @param { Object } The Bot Client
     * @returns
     */

    async postStats(bot) {
        let servercount = Number(bot.servers.size) || Number(bot.servers.size()) || null;
        if (!this.KEY) throw new TypeError('API token not provided');
        if (!Number(servercount)) throw new TypeError('Server count must be a valid number');
	console.log(servercount)
          return fetch(`https://revoltbots.org/api/v1/bots/stats`, {
            method: 'POST',
            headers: {
                server_count: servercount,
                'Authorization': this.KEY,
            }
        }).send()
            .then(res => res.json())

    };

    /**
     *
     * @param { Object } The Bot Client
     * @returns
     */
    async autopostStats(bot) {
	console.log('Starting Auto post!')
	setInterval(()=>{
        let servercount = Number(bot.servers.size) || Number(bot.servers.size()) || null;
        if (!this.KEY) throw new TypeError('API token not provided');
        if (!Number(servercount)) throw new TypeError('Server count must be a valid number');
          return fetch(`https://revoltbots.org/api/v1/bots/stats`, {
            method: 'POST',
            headers: {
                server_count: servercount,
                'Authorization': this.KEY,
            }
        }).send()
            .then(res => res.json())
	}, 3600000)
    };
}
module.exports = Client;
