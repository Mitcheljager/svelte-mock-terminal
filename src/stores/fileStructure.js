import { writable } from "svelte/store"

const fileStructure = writable([
  {
    name: "images", type: "folder", contents: [{
      name: "subfolder", type: "folder"
    }, {
      name: "image", type: "jpg"
    }]
  }, {
    name: "documents", type: "folder"
  }, {
    name: "file", type: "txt"
  }
])

export { fileStructure }
