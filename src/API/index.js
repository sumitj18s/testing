async function getData(url) {
  const result = await fetch(url)
    .then((response) => response.json())
    .then((myJson) => {
      return myJson;
    });

  return result;
}

async function postData(url) {
  const result = await fetch(url, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((myJson) => {
      return myJson;
    });

  return result;
}

export { getData, postData };
