import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPokemonAsync,
  addTodoAsync,
  showPokemon,
  showPokemonName,
  getPokemonNameAsync,
} from "./features/pokemonSlice";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const pokemon = useSelector(showPokemon);
  const pokemonName = useSelector(showPokemonName);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [newTodo, setNewTodo] = useState({
    userId: 69,
    id: 69,
    title: "",
    completed: false,
  });

  const addNewTodo = () => {
    dispatch(addTodoAsync(newTodo));
  };

  useEffect(() => {
    dispatch(getPokemonAsync());
  }, [dispatch]);

  // console.log(pokemonName)
  return (
    <div className="App">
      {/* PokemonName หรือถ้ามี */}
      {pokemonName && (
        <div>
          <div className="text-center">
            <h1>{pokemonName[0].name}</h1>
          </div>
          <div className="text-center">
            <img src={pokemonName[0].sprites.front_shiny} height="200" />
          </div>
        </div>
      )}

      {pokemonName && (
        <div className="text-center">
          {" "}
          Edit <input placeholder={pokemonName[0].name}></input>
        </div>
      )}

      <h1 className="text-center">Pokemon Api</h1>
      <div className="d-flex justify-content-center m-3">
        <button onClick={() => dispatch(getPokemonAsync())}>GET Pokemon</button>
        <button onClick={() => dispatch(getPokemonNameAsync("bulbasaur"))}>
          GET pokemonName
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <input
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <button onClick={addNewTodo}>Add new todo</button>
      </div>

      {/* Pokemon หรือถ้ามี */}
      {showForm ? (
        <>
          <div className="d-flex justify-content-center">
            <button
              className="text-cente mt-3"
              onClick={() => setShowForm(false)}
            >
              Close list Pokemon
            </button>
          </div>

          <div className="d-flex justify-content-center mt-3 row g-4">
            {console.log(pokemon)}
            {pokemon &&
              pokemon[0].results.map((items) => (
                <div
                  className="card w-25 m-3 p-3"
                  onClick={() => dispatch(getPokemonNameAsync(items.name))}
                  key={items.name}
                >
                  <img
                    class="card-img-top"
                    // src={items.sprites.front_shiny}
                    alt="Img poke"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      {items.name ? items.name : "N/A"}
                    </h5>
                    <p class="card-text">test</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>

                  {/* {items.name ? items.name : "N/A"} */}
                  <button to="/EditPoke">Edit</button>
                </div>
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="text-center mt-3">
            {" "}
            <button onClick={() => setShowForm(true)}>Open List Pokemon</button>
          </div>
        </>
      )}
    </div>
  );
}
