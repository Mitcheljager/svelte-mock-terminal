<script>
  import { currentPath } from "../../stores/currentPath"
  import { fileStructure } from "../../stores/fileStructure"

  export let content

  let path = content.split(" ")[1]
  let realPath = []
  let currentFolderContents = $fileStructure

  setCurrentPath()

  function loopThroughCurrentPath() {
    const currentPathArray = $currentPath.split("/")

    currentPathArray.forEach(pathElement => {
      if (pathElement != "") setCurrentFolderContents(pathElement)
    })
  }

  function setCurrentFolderContents(pathElement) {
    let currentFolder = currentFolderContents.filter(folder => folder.type == "folder" && folder.name === pathElement)
    if (currentFolder.length) currentFolderContents = currentFolder[0].contents || []
  }

  function setCurrentPath() {
    if (path == "/" || path == "//") {
      $currentPath = ""
      realPath = ["/"]
    } else {
      loopThroughCurrentPath()
      realPath = currentFolderContents.filter(folder => folder.type == "folder" && folder.name === path)

      if (realPath.length) $currentPath += path + "/"
    }
  }
</script>

{ #if !realPath.length }
  Folder "{ path }" was not found.
{ /if }
