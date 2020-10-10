import { writable } from "svelte/store"

const availableCommands = writable([ "Help", "Commands", "Ls", "Clear" ])

export { availableCommands }
