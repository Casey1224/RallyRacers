import { AppState } from "./appstate.js";
console.log(AppState)

function _drawRacers() {
    let racers = AppState.racers
    let template = ''
    racers.forEach(racer => template += racer.Template)
    console.log(template);
    document.getElementById('racers').innerHTML = template
}

class Controller {
    constructor() {
        _drawRacers()
    }
}
function _moveRacers() {
    racers.forEach(racers => racers.distance)
    setInterval(100)

}

let controller = new Controller()
window['app'] = { controller: controller }