<script>
	import { readable, get } from "svelte/store"
	import { lines } from "./stores/lines"
	import { fileStructure } from "./stores/fileStructure"
	import { currentPath } from "./stores/currentPath"

	import Input from "./components/Input.svelte"

	import Undefined from "./components/commands/Undefined.svelte"
	import Welcome from "./components/commands/Welcome.svelte"
	import Help from "./components/commands/Help.svelte"
	import Commands from "./components/commands/commands.svelte"
	import Ls from "./components/commands/Ls.svelte"
	import Clear from "./components/commands/Clear.svelte"
	import Cd from "./components/commands/Cd.svelte"
</script>

<main class="board">
	<div class="board__content">
		{ #each $lines as line }
			{ #if line.component }
				<p class="line-content">//Root/{ line.path }{ line.content }</p>
				<svelte:component
					this={ eval(line.component) }
					content={ line.content } />
			{ :else }
				<p>{ line.content }</p>
			{ /if }
		{ /each }
	</div>

	<div class="board__footer">
		<div class="board__path">//Root/{ $currentPath }</div>
		<Input />
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
		white-space: nowrap;
	}

	.line-content {
		color: gray;
	}
</style>
