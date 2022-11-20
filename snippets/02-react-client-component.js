//app/page.js
//fetch is your typical fetch function but it's 
//extended by Next.js

async function fetchData(params) {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  return res.json();
}

export default async function Page() {
  const data = await fetchData();
  return (
    <div>
      {data.results.map((result) => (
        <p key={result.name}>{result.name}</p>
      ))}
    </div>
  );
}
