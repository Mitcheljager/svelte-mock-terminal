<script>
  import { fileStructure } from "../../stores/fileStructure"
  export let currentPath
</script>

{ #each $fileStructure as file }
  { #if file.filetype == "folder" }
    <p class="folder">{ file.name }</p>
  { :else }
    <p>{ file.name }.{ file.filetype }</p>
  { /if }
{ /each }

<style>
  .folder {
    color: gray;
  }
</style>
