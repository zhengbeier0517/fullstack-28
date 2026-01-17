// Callbacks
function fetchData(url, callback) {
  setTimeout(() => {
    const data = `Data from ${url}`;
    callback(data);
  }, 2000);
}

fetchData('https://api.example.com', (data) => {
  console.log(data);
});


// Promises
function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('Invalid URL');
      return;
    }
    setTimeout(() => {
      const data = `Data from ${url}`;
      resolve(data);
    }, 2000);
  });
}

fetchDataPromise('https://api.example.com')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });


// Async/Await
async function fetchDataAsync(url) {
  try {
    const data = await fetchDataPromise(url);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync('https://api.example.com');
