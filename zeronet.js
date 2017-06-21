"use strict"

const MergeRecursive = require("merge-recursive")
const ZeroNet = require(__dirname + "/")
const fs = require("fs")
const path = require("path")

const defaults = {
  tls: "disabled",
  server: {
    host: "0.0.0.0",
    port: 15543
  },
  debug_file: path.resolve(process.cwd(""), "debug.log")
}

const errCB = err => {
  if (!err) return
  console.error("The node failed to start")
  console.error(err)
  process.exit(2)
}

const confpath = path.resolve(process.cwd(""), process.env.CONFIG_FILE || "config.json")

let config

if (fs.existsSync(confpath)) {
  const config_data = JSON.parse(fs.readFileSync(confpath).toString())
  config = MergeRecursive(config_data, defaults)
} else config = defaults

require("peer-id").create((err, id) => {
  config.id = id
  new ZeroNet(config, errCB)
})
