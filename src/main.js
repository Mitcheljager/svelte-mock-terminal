import App from "./App.svelte"

const app = new App({
	target: document.body,
	props: {
		availableCommands: [ "Help", "Commands", "Ls" ]
	}
})

export default app
