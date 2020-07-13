const express = require('express')
const createError = require('http-errors')
const fetch = require('node-fetch');
const app = express()
const PORT = 4000
const API_KEY = 'a315bd698beac601a5c8b6585bf1e3ba'
const OPEN_WEATHER_MAP_API = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=`

app.get('/weather', async (req, res) => {
    try {
        const { location } = req.query;
        if (!location) throw createError(401, 'invalid location on query.');
        let url = `${OPEN_WEATHER_MAP_API}${location}`
        let resData = await fetch(url).then(res => res.json())
        res.send(resData)
    } catch (error) {
        res.send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Listning on ${PORT}`);
})
