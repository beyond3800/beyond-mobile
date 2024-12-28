const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWNjZjhlMzE5MDA0MzI3ZDZjNTE0MDQ0ZjE3NzIxMSIsInN1YiI6IjY1MWRiZmNjYzUwYWQyMDBhZDgyZDk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8mJQt2eX2S4WXellnQEoaxQYgAMoM5B3aHkO9oToTA'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  // https://api.themoviedb.org/3/movie/top_rated
  // https://api.themoviedb.org/3/movie/now_playing
  // https://api.themoviedb.org/3/movie/upcoming
// https://api.themoviedb.org/3/movie/{movie_id}
//   'https://api.themoviedb.org/3/genre/movie/list?language=en'
// 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
  // https://api.themoviedb.org/3/movie/latest
  // https://api.themoviedb.org/3/movie/{movie_id}/account_states
  // https://api.themoviedb.org/3/movie/{movie_id}/images
  // https://api.themoviedb.org/3/movie/{movie_id}/lists
// https://api.themoviedb.org/3/movie/{movie_id}/videos
// https://api.themoviedb.org/3/search/movie
// https://api.themoviedb.org/3/search/person
// https://www.themoviedb.org/person
// https://www.themoviedb.org/tv
// https://www.themoviedb.org/tv/top-rated
const key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWNjZjhlMzE5MDA0MzI3ZDZjNTE0MDQ0ZjE3NzIxMSIsInN1YiI6IjY1MWRiZmNjYzUwYWQyMDBhZDgyZDk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8mJQt2eX2S4WXellnQEoaxQYgAMoM5B3aHkO9oToTA'