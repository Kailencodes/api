import React, { Component } from 'react';

class RecommendedTracks extends Component {
  state = {
    recommendedTracks: []
  };

  async componentDidMount() {
    const token = 'BQA0FsfzV80PfIUM0IcJuHGt6uEi9FIvc_rsDGkxBNvIoISP87otlUr4IJjGGSIsFcc1X9ZzCEFhFQmVQIGqPxcxwkyhSrUUSk3j7PM07hwAcMdK9RVa7g-HeLQPhhAKTme0BRcNJjNNT5s99Yl8I3bEzZPUnASfrR2V8CYARkoMP4ztkxJMQImlRJuqP1qo_-n0oz3c';
    const topTracksIds = [
      '15DLl1r2zi07Ssq5RT1yT0','407ltk0BtcZI8kgu0HH4Yj','3OKaCwKtsZ4Dqzm6foitxm','1EryAkZ0VHstC6haIxVBiE','2Ih217RCGAmyQR68Nn7Cqo'
    ];

    const recommendedTracks = await fetch(`https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(res => res.json()).then(data => data.tracks);

    this.setState({ recommendedTracks });
  }

  render() {
    const { recommendedTracks } = this.state;

    return (
      <div style={{ 
        background: '#1DB954',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <h1>Recommended Tracks</h1>
        <ul>
          {recommendedTracks.map(({ name, artists, id }) => (
            <li key={id}>
              {name} by {artists.map(artist => artist.name).join(', ')}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecommendedTracks;
