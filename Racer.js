export class Racer {
    constructor(name, picture, number, distance) {
        this.name = name
        this.picture = picture
        this.number = number
        this.distance = distance
    }
    get Template() {
        return `
        <div class="col-10 bg-dark text-light m-1 "> <span id="number" class="${this.distance}">${this.name} ${this.picture}</span></div>
            
        `
    }
}