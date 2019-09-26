const express = require('express');
const videoController = require('../controllers/video.controller');
const router = express.Router();

router.route('/search-videos/:key')
  .get(
    videoController.getSearchedVideos
  )
router.route('/saved-videos/')
  .get(
    videoController.getSavedVideos
  )


module.exports = router;
