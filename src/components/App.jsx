class App extends React.Component {
  constructor (props) {
    console.log(props);
    super(props);
    this.state = {
      videoData: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => 
      this.setState({
        videoData: videos,
        currentVideo: videos[0]
      })
    );
  }

  onVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }


  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search
                handleSearchInputChange={ _.debounce( this.getYouTubeVideos.bind(this), 500 )}
              />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo} />
            </div>
          </div>
          <div className="col-md-5" >
            <VideoList videos={this.state.videoData} clickFunction={this.onVideoListEntryClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;