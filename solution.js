const getCafes = () => {
  const api =
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json";
  return fetch(api).then((response) => {
    return response.json();
  });
};
var cafes = [];
getCafes().then((result) => {
  cafes = Array.from(result.cafes);
  console.log(cafes[1]);
});


const getPlaces = () => {
  const api =
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json";
  return fetch(api).then((response) => {
    return response.json();
  });
};
var places = [];
getPlaces().then((result) => {
  places = Array.from(result.places);
  console.log(places[1]);
});


function searching() {
  let inp = document.getElementById("search").value;
  inp = inp.toUpperCase();
  //Call calc()
}

function calc(inp) {
  arr = [];
  for (let i = 0; i < cafes.length; i++) {
    if (cafes[i].name.toUpperCase().startsWith(inp) === true) {
      let id1 = cafes[i].location_id;
      //   console.log('hi:'+inp);
      for (let j = 0; j < places.length; j++) {
        if (places[j].id === id1) {
          var obj = Object.assign({}, places[j]);
          obj["name"] = cafes[i].name;
          delete obj.id;
          arr.push(obj);
        }
      }
    }
  }
  return arr;
}
