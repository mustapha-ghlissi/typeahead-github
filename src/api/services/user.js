
const SEARCH_URL = 'https://api.github.com/search/users';

export function getUsers(criteria) {

  const queryString = 'q=' + encodeURIComponent(criteria) + '&per_page=100';
  const url  = SEARCH_URL + '?' + queryString;

  return fetch(url)
    .then(response => response.json());
}