/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file4215143340",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/webp",
      "image/avif"
    ],
    "name": "affiche_film",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [
      "1024x1024",
      "1024x680"
    ],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file4215143340",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/webp",
      "image/avif"
    ],
    "name": "affiche_film",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [
      "1024x1024",
      "1024x680"
    ],
    "type": "file"
  }))

  return app.save(collection)
})
