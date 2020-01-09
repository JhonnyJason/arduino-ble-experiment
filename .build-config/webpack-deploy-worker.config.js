module.exports = {
    "mode": "production",
    "context": "/home/lenny/thingies/arduino-ble-experiment",
    "entry": {
        "serviceworker": "/home/lenny/thingies/arduino-ble-experiment/toolset/build/js/serviceworker.js"
    },
    "output": {
        "filename": "[name].js",
        "path": "/home/lenny/thingies/arduino-ble-experiment/toolset/build/bundles/deploy"
    }
}