// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random song to the page.
 */
function addRandomSong() {
  const songs =
    ['Blueberry Faygo - Lil Mosey', 'Stay - Rihanna', 'Circles - Mac Miller', 'Life Is Good - Future, Drake', 'Put On - Jeezy', 'Movement - Hozier', 'Love Yourz - J. Cole'];

  // Pick a random song.
  const song = songs[Math.floor(Math.random() * songs.length)];

  // Add it to the page.
  const songContainer = document.getElementById('song-container');
  songContainer.innerText = song;
}

async function requestData() {
  const response = await fetch('/data');
  const text = await response.text();
  document.getElementById('comments-container').innerText = text;
}

function loadCommentsJson() {
  fetch('/data')  // sends a request to /data
  .then(response => response.json()) // parses the response as JSON
  .then((comments) => { // now we can reference the fields in comments!
    console.log(comments);
    const allComments = document.getElementById('comments-container');
    for(i = 0; i < comments.length; i++) {
      allComments.appendChild(createParagraphElement(comments[i].commentsList));
    }
  });
}

function createParagraphElement(text) {
  const pElement = document.createElement('p');
  pElement.innerText = text;
  return pElement;
}

function createMap() {
  const map = new google.maps.Map(
    document.getElementById('map'),
    {center: {lat: 37.422, lng: -122.084}, zoom: 16});
}