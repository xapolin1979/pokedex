let btn = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";
let pokeContainer = document.querySelector(".card-container");

for (let i = 1; i <= 150; i++) {
  setTimeout(() => {
    fetch(URL + i)
      .then((res) => res.json())
      .then((datos) => pokemons(datos));
  }, i * 0.5);
}

const pokemons = (poke) => {
  let id = poke.id.toString();
  if (id.length == 1) {
    id = `#00${id}`;
  } else if (id.length == 2) {
    id = `#0${id}`;
  } else {
    id = `#${id}`;
  }

  let tipos = poke.types.map(
    (type) => `<p class="tipo ${type.type.name}"> ${type.type.name}</p>`
  );
  tipos = tipos.join("");

  pokeContainer.innerHTML += `<div class="card-poke">
    <div class="pokemon-imagen">
      <p class="pokemon-id-atras">${id}</p>
      <img
        src="${poke.sprites.other["official-artwork"].front_default}"
        alt=""
      />
    </div>

    <div class="info-pokemon">
      <p class="pokemon-id">${id}</p>
      <h2 class="pokemon-nombre">${poke.name}</h2>
    </div>
    <div class="pokemon-tipo">
      ${tipos}
     
    </div>
 
  </div>`;
};

btn.forEach((botones) => {
  botones.addEventListener("click", (e) => {
    const botonid = e.currentTarget.id;
    pokeContainer.innerHTML="";
    for (let i = 1; i <= 200; i++) {
      setTimeout(() => {
        fetch(URL + i)
          .then((res) => res.json())
          .then((datos) => {
          

           if(botonid ==='ver-todos'){
            pokemons(datos)
           }
           else{
            const tipos=datos.types.map(type=>type.type.name);
            if(tipos.some(tipo=> tipo.includes(botonid))){
              pokemons(datos)
            }
           }
          
          
          



          });
      }, i * 0.5);
    }
  });
});

/*
 <div class="card-poke">
          <div class="pokemon-imagen">
            <p class="pokemon-id-atras">#025</p>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              alt=""
            />
          </div>

          <div class="info-pokemon">
            <p class="pokemon-id">#025</p>
            <h2 class="pokemon-nombre">Picatchu</h2>
          </div>
          <div class="pokemon-tipo">
            <p class="tipo electric">ELECTRIC</p>
            <p class="tipo fighting">FIGHTING</p>
          </div>
        </div>





*/
