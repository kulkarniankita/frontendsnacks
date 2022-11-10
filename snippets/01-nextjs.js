async function fetchData(params) {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  return res.json();
}

async function Page() {
  const data = await fetchData();
  return data.species.name; //Ditto will be printed
}