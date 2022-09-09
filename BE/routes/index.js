var express = require('express');
var router = express.Router();
const Video = require('../models/video')
const fetch = require("node-fetch");

router.get('/', function(req, res, next) {
  Video.find().then((result) => {
		res.send(result)
	}).catch((err) => console.log(err))
});

router.post('/search', function(req, res, next) {
  getVideo(req.body.Title).then(data => {
    new Video({
      title: data.items[0].snippet.title,
      id: data.items[0].id.videoId,
      description: data.items[0].snippet.description,
      thumbnail: data.items[0].snippet.thumbnails.default.url,
      publishedAt: data.items[0].snippet.publishTime
    }).save().then((result) => {
      res.send(result)
    }).catch((err) => {console.log(err); res.send({"data": "duplicate", "title": data.items[0].snippet.title})})
  })
});

router.post('/remove', function(req, res, next) {
  Video.deleteOne({"id": req.body.id}).then((result) => {
		res.send(result)
	}).catch((err) => console.log(err))
});

async function getVideo(title) {
	const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + encodeURI(title) + '&key=AIzaSyC0ku6PZlOYfyf1F6Xyad5x_D3TwNrywmg')
	return response.json()
}

module.exports = router;
