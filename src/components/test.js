import React, { useState, useEffect } from 'react';
import data from '../logic/spotify_data.json'
export function MyComponent() {
  const [spotifyData, setSpotifyData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
    
  // Now you can use spotifyData
  return (
    <div>
      a
    </div>
  );
}

