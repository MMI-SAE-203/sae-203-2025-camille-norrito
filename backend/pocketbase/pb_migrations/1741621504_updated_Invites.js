/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // remove field
  collection.fields.removeById("select759313138")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select759313138",
    "maxSelect": 1,
    "name": "intervention_invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "jsp"
    ]
  }))

  return app.save(collection)
})
