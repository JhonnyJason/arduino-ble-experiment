module.exports = {
    "mode": "development",
    "devtool": "none",
    "context": "/home/lenny/thingies/arduino-ble-experiment",
    "watch": true,
    "entry": {
        "serviceworker": "/home/lenny/thingies/arduino-ble-experiment/toolset/build/js/serviceworker.js"
    },
    "output": {
        "filename": "[name].js",
        "path": "/home/lenny/thingies/arduino-ble-experiment/toolset/build/bundles/dev"
    }
}