export default class Bar{
    constructor(pongBar){
        this.pongBar = pongBar
    }


get position(){ 
    return parseFloat(getComputedStyle(this.pongBar).getPropertyValue("--position"));
}

set position(val){
    this.pongBar.style.setProperty("--position", val += val)
}

}