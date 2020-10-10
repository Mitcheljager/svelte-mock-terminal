import { writable } from "svelte/store"

const lines = writable([{ path: "\\", content: "", component: "Welcome" }])

export { lines }
