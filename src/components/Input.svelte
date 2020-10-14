<script>
  import { availableCommands } from "../stores/availableCommands"
  import { lines } from "../stores/lines"
  import { currentPath } from "../stores/currentPath"

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

    let command = element.value.split(" ")[0]
    command = command.charAt(0).toUpperCase() + command.slice(1).toLowerCase()
    $lines = [...$lines, { path: $currentPath, content: element.value, component: $availableCommands.includes(command) ? command : "Undefined" }]

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

<input class="board__input" autofocus on:blur={ keepFocus } on:keydown={ handleKeypress } />

<style lang="scss">
  .board__input {
    width: 100%;
    line-height: 1rem;
    background: black;
    border: 0;
    color: white;
    font-family: "Consolas", monospace;
    font-size: 1rem;
  }

  .board__input:focus {
    border: 0;
    outline: none;
  }
</style>
