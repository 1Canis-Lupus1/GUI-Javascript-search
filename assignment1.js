let input = promt("Enter Cafe Name:");
input = input.toUpperCase();
console.log(findCafe(input));

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
