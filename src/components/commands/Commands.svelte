<script>
  import { availableCommands } from "../../stores/availableCommands"
</script>

<p>Available commands:</p>
<p>&nbsp;</p>
{ #each $availableCommands.sort() as command }
  <p>{ command.toUpperCase() }</p>
{ /each }
<p>&nbsp;</p>
