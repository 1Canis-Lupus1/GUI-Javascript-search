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
  // console.log(cafes[1]);
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
  // console.log(places[1]);
});

function searching() {
  let inp = document.getElementById("search").value;
  inp = inp.toUpperCase();

  var myTBD = document.getElementById("myTBD");
  // Clear table rows
  myTBD.innerHTML = '';

  var result = calc(inp);

  for (var i in result) {
      // Create an empty <tr> element and adding to end
      var row = myTBD.insertRow(-1);

      // Insert new cells (<td> elements) 
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);

      // Set the properties 

      cell1.innerHTML = parseInt(i) + 1;
      cell2.innerHTML = result[i].street_no;
      cell2.innerHTML = result[i].name;
      cell3.innerHTML = result[i].locality;
      cell4.innerHTML = result[i].postal_code;
      cell5.innerHTML = result[i].lat;
      cell6.innerHTML = result[i].long;
  }
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