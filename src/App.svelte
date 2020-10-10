<script>
	import { readable, get } from "svelte/store"
	import { lines } from "./stores/lines"
	import { fileStructure } from "./stores/fileStructure"
	import { availableCommands } from "./stores/availableCommands"

	import Undefined from "./components/commands/undefined.svelte"
	import Welcome from "./components/commands/welcome.svelte"
	import Help from "./components/commands/help.svelte"
	import Commands from "./components/commands/commands.svelte"
	import Ls from "./components/commands/Ls.svelte"
	import Clear from "./components/commands/Clear.svelte"

	let currentPath = "\\"
	let currentLine = $lines.length

  function keepFocus() {
		setTimeout(() => { this.focus() })
  }

	function handleKeypress() {
		if (event.key == "Enter") submitLine(this)
		if (event.key == "ArrowUp") lineUp(this)
		if (event.key == "ArrowDown") lineDown(this)
	}

	function setInputValue(element, value) {
		element.value = value

		const boardContent = document.querySelector(".board__content")
		setTimeout(() => { boardContent.scrollTop = boardContent.scrollHeight })
	}

	function submitLine(element) {
		if (!element.value) return

		const command = element.value.charAt(0).toUpperCase() + element.value.slice(1).toLowerCase()
		$lines = [...$lines, { path: currentPath, content: element.value, component: $availableCommands.includes(command) ? command : "Undefined" }]

		setInputValue(element, "")
		currentLine = $lines.length
	}

	function lineUp(element) {
		event.preventDefault()
		if (currentLine <= 0) return

		currentLine--
		setInputValue(element, $lines[currentLine].content)
	}

	function lineDown(element) {
		event.preventDefault()
		if (currentLine >= $lines.length - 1) return

		currentLine++
		setInputValue(element, $lines[currentLine].content)
	}
</script>

<main class="board">
	<div class="board__content">
		{ #each $lines as line }
			{ #if line.component }
				<p class="line-content">\\Root{ line.path }{ line.content }</p>
				<svelte:component
					this={ eval(line.component) }
					content={ line.content }
					currentPath={ currentPath } />
			{ :else }
				<p>{ line.content }</p>
			{ /if }
		{ /each }
	</div>

	<div class="board__footer">
		<div class="board__path">\\Root{ currentPath }</div>
		<input class="board__input" autofocus on:blur={ keepFocus } on:keydown={ handleKeypress } />
	</div>
</main>

<style>
	:global(:root) {
		font-size: 14px;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: "Consolas", monospace;
	}

	:global(p) {
		margin: 0;
	}

	.board {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		background: black;
		color: lightgray;
		height: 100vh;
		padding: .5rem;
	}

	.board__content {
		max-height: calc(100vh - 2.5rem);
		overflow-y: auto;
	}

	.board__footer {
		display: flex;
		align-items: center;
		padding: .5rem 0 0;
	}

	.board__path {
		color: gray;
	}

	.board__input {
		width: 100%;
		line-height: 1rem;
		background: black;
		border: 0;
		color: white;
		font-family: "Consolas", monospace;
		font-size: 1rem;
	}

	.line-content {
		color: gray;
	}
</style>
