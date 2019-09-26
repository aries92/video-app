const {google} = require('googleapis');

const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyA2tFjqISJ7vRmfF1YDJ71fc7sLakDu16Y',
});

exports.getSearchedVideos = async (req, res) => {
  try {
    const result = await youtube.search.list({
      part: 'id,snippet',
      q: req.params.key.replace(/%20/g, "+"),
      maxResults: 9
    });
    const {data: {items}} = result;

    return res.status(200).json({
      videos: items
    });
  } catch (error) {
    return res.status(404)
  }
}
exports.getSavedVideos = async (req, res) => {
  try {
    const videoIdList = req.query.id.toString()
    const result = await youtube.videos.list({
      part: 'id,snippet',
      id: videoIdList,
    })
    const {data: {items}} = result;

    return res.status(200).json({
      videos: items
    });
  } catch (error) {
    return res.status(404)
  }
}



