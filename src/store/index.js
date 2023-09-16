import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state: {
        pokemons: [],
        pokemon: {},
        filter: {
            query : ''
        },
        favorites: [],
    },

    getters: {
        getPokemons: (state) => {
            if (state.filter.query.length > 0) {
                return state.pokemons.filter(pokemon => pokemon?.name.includes(state.filter.query))
            } else {
                return state.pokemons
            }
        },
        getPokemon: (state) => {
            return state.pokemon
        },  
        getFavorites: (state) => {
            if (state.filter.query.length > 0) {
                return state.favorites.filter(pokemon => pokemon?.name.includes(state.filter.query))
            } else {
                return state.favorites
            }
        }
    },

    mutations: {
        setPokemons(state, payload) {
            const pokemons = payload.map(pokemon => {
                return { ...pokemon, isFavorite: false }
            })
            return state.pokemons = pokemons
        },
        setPokemon(state, payload) {
            const favorites = state.favorites.filter(favorite => favorite.name === payload.name)
            if (favorites.length > 0) {
                return state.pokemon = { ...payload, isFavorite: true }
            } else {
                return state.pokemon = { ...payload, isFavorite: false }
            }
        },
        setQuery(state, query) {
            return state.filter.query = query
        },
        setFavoriteList(state, payload) {
            const pokemon = state.pokemons.find(pokemon => pokemon?.name === payload)
            pokemon.isFavorite = !pokemon.isFavorite
            if (pokemon.isFavorite) {
                state.favorites.push(pokemon)
            }
        },
        setFavoriteModal(state, payload) {
            return state.pokemon.isFavorite = true
        },
        removeFavoriteList(state, payload) {
            const pokemon = state.pokemons.find(pokemon => pokemon?.name === payload)
            pokemon.isFavorite = !pokemon.isFavorite
            if (!pokemon.isFavorite) {
                state.favorites = state.favorites.filter(pokemon => pokemon?.name !== payload)
            }
            let { favorites } = JSON.parse(localStorage.getItem('vuex')) ?? []
            if (favorites) {
                favorites = favorites.filter(pokemon => pokemon?.name !== payload)
                localStorage.setItem('vuex', JSON.stringify({ favorites }))
                return favorites
            }
        },   
    },

    actions: {
        async fetchPokemons({ commit }) {
            const pokemosStorage = JSON.parse(localStorage.getItem('vuex')) ?? []
            if (pokemosStorage?.pokemons?.length > 0) {
                return this.state.pokemons = pokemosStorage?.pokemons
            } else {
                try {
                    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
                    const data = await res.json()
                    commit('setPokemons', data.results)
                } catch (error) {
                    console.log(error)
                }
            }
        },

        async fetchPokemon({ commit }, name) {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                const data = await res.json()
                commit('setPokemon', data)
            } catch (error) {
                console.log(error)
            }
        },
    },
    
    modules: {
    },

    plugins: [createPersistedState(
        {
            paths: ['favorites', 'pokemons'],
            storage: window.localStorage,
        }
    )],
})


