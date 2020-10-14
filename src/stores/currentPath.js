import { writable } from "svelte/store"

const currentPath = writable("")

export { currentPath }
