import { writable } from "svelte/store"

const fileStructure = writable([
  {
    name: "images", filetype: "folder", contents: [{
      name: "subfolder", filetype: "folder"
    }, {
      name: "image", filetype: "jpg"
    }]
  }, {
    name: "documents", filetype: "folder"
  }, {
    name: "file", filetype: "txt"
  }
])

export { fileStructure }
