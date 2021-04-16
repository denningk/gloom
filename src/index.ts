import { Engine } from "./Core/Engine"

window.onload = () => {
    const engine = new Engine(document.getElementById('viewport') as HTMLCanvasElement);
}
