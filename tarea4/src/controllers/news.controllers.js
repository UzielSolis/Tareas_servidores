const axios = require("axios");
const responseStatus = require("../utils/response-status");

class newsController {
    getNews(req, res) {
        const theme = req.query.theme;

        if (!theme) {
            res.render('news_info', {
                layout: 'news',
                news: [],
            })
            return;
        }

        const url = `https://newsapi.org/v2/everything?q=${theme}&apiKey=${process.env.API_KEY}`;

        axios.get(url).then(response => {
            //res.status(responseStatus.SUCCESS).send(response.data);
            res.render('news_info', {
                layout: 'news',
                news: response.data.articles,
            })
        }).catch(e => {
            res.status(responseStatus.BAD_REQUEST).send('failed to get news');
        })

    };
}

module.exports = new newsController();