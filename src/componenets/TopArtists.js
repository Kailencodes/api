import React, { Component } from 'react';

const token = 'BQA0FsfzV80PfIUM0IcJuHGt6uEi9FIvc_rsDGkxBNvIoISP87otlUr4IJjGGSIsFcc1X9ZzCEFhFQmVQIGqPxcxwkyhSrUUSk3j7PM07hwAcMdK9RVa7g-HeLQPhhAKTme0BRcNJjNNT5s99Yl8I3bEzZPUnASfrR2V8CYARkoMP4ztkxJMQImlRJuqP1qo_-n0oz3c';

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body)
  });
  return await res.json();
}

class TopArtists extends Component {


  constructor(props) {
    super(props);
    this.state = {
      topTracks: []
    };
  }

  async componentDidMount() {
    const topTracks = await this.getTopTracks();
    this.setState({ topTracks });
  }

  async getTopTracks() {
    const tracks = await fetchWebApi(
      'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
    );
    return tracks.items;
  }

  render() {
    const { topTracks } = this.state;
    const trackList = topTracks.map(({ name, artists }) => (
      <li key={name}>
        {name} by {artists.map(artist => artist.name).join(', ')}
      </li>
    ));

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
        <h2>Top Tracks:</h2>
        <ul>{trackList}</ul>
      </div>
    );
  }
}

export default TopArtists;

