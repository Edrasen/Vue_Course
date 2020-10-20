fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    //console.log(data.results)
    let arrayNombres = []
    data.results.forEach((element) => {
      arrayNombres.push(element.name)
    });
    console.log(arrayNombres)
  })
  .catch((error) => console.log(error));

//async await
const obtenerPokemones = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    //console.log(data.results);
    const arrayNombres = data.results.map(poke => poke.name)
    console.log(arrayNombres)
  } catch (error) {
    console.log(error)
  }
}

obtenerPokemones();
