const getCafe=()=>{
  var api_add="https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json";
  
  return fetch(api_add).then((response)=>{
    return response.json();
  });
}

var cafe=[];
getCafe().then((val)=>{
  cafe=Array.from(val.cafe);
  console.log(cafe[0]);
});

const getPlace=()=>{
  var api_url="https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json";
  
  fetch(api_url).then((response)=>{
    return response.json();
  });
}

var places=[];
getPlace().then((val)=>{
  places=Array.from(val.places);
  console.log(places[0]);
});


let input = promt("Enter Cafe Name:");
input = input.toUpperCase();
//console.log(findCafe(input));

function findCafe(inp) {
  Result = [];
  for (let i = 0; i < cafe.length; i++) {
    if (cafe[i].name.toUpperCase().startsWith(inp) === true) {
      let search_id = cafe[i].place_id;
      for (let j = 0; j < places.length; j++) {
        if (places[j].id === search_id) {
          let new_obj = Object.assign({}, places[i]);
          new_obj["name"] = cafe[i].name;
          delete new_obj.id;
          Result.push(new_obj);
        }
      }
    }
  }
  return Result;
}
