var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      videoEmbeddable: true,
      part: 'snippet',
      type: 'video'
    },
    // dataType: dataType,
    success: function(response) {
      callback(response.items);
    },

    error: function(response) {
      callback(response);
    }
  });
};

window.searchYouTube = searchYouTube;
