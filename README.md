# Advanced JS Lab - Pokedex app

Here is the notion document to help you: 

```txt
https://www.notion.so/Advanced-Javascript-Simple-Pok-mon-Finder-355a368b7e0c804fb2fbf98314653f4b?source=copy_link
```

A very small JavaScript assignment for practicing:

- `fetch()`
- `async` / `await`
- `try...catch`
- basic DOM manipulation

Students receive the HTML and CSS. They only need to complete the TODOs in `app.js`.

## Goal

Create a small app where the user types a Pokémon name or ID, clicks Search, and sees basic information about that Pokémon.

## API Endpoint

Use this URL:

```txt
https://pokeapi.co/api/v2/pokemon/{pokemon-name-or-id}
```

Examples:

```txt
https://pokeapi.co/api/v2/pokemon/pikachu
https://pokeapi.co/api/v2/pokemon/25
```

## Required Features

1. Read the value from the input.
2. Call an async function named `getPokemon`.
3. Use `fetch()` to request data from PokéAPI.
4. Use `await` for the fetch request.
5. Use `await response.json()` to convert the response.
6. Use `try...catch` to handle errors.
7. Show this data on the page:
   - image
   - name
   - ID
   - first type
   - height
   - weight

## Files

```txt
simple-pokemon-finder/
├── index.html
├── style.css
├── app.js
├── README.md
```

## How to Run

Open `index.html` in the browser.

Recommended: use the Live Server extension in VS Code.
