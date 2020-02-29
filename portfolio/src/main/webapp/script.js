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
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Brazil!', 'Bangkok, Thailand!', 'Accra, Ghana!', 'Botswana!','Machu Picchu!','Beijing, China!','Chichen Itza, Mexico!'];
  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

//add Hello Nzinga! to the page
//async function getHelloNzingaUsingAsyncAwait() {
//  const response = await fetch('/data');
//  const quote = await response.text();
//  document.getElementById('HelloNzinga-container').innerText = quote;
//}

function getHelloNzingaUsingAsyncAwait() {
    fetch('/data')  // sends a request to /my-data-url
    .then(response => response.json()) // parses the response as JSON
    .then((myObject) => { // now we can reference the fields in myObject!
    console.log(myObject[0]);
    console.log(myObject[1]);
    console.log(myObject[2]);
    const quote = myObject[0]+" "+myObject[1]+" "+myObject[2];
    document.getElementById('HelloNzinga-container').innerText = quote;
});
}