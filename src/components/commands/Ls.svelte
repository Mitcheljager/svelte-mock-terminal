<script>
  import { currentPath } from "../../stores/currentPath"
  import { fileStructure } from "../../stores/fileStructure"
</script>

{ #each $fileStructure as file }
  { #if file.type == "folder" }
    <p class="folder">{ file.name }</p>
  { :else }
    <p>{ file.name }.{ file.type }</p>
  { /if }
{ /each }

<style>
  .folder {
    color: gray;
  }
</style>
