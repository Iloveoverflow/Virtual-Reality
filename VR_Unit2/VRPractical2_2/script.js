
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    car.x =0;
    car.dx =0.01;

    pokemonball.a =0;
    pokemonball.da =1;

    rocket.y = -2;
    rocket.dy = 0.02

    loop();
    
})

function loop(){
    
    car.x += car.dx;
    car.setAttribute("position",{ x:car.x, y:0, z:-5 })


    pokemonball.a += pokemonball.da;
    pokemonball.setAttribute("rotation",`${pokemonball} 0 0` );

    rocket.a += rocket.da;
    rocket.setAttribute("roation"," 0 " + rocket.y + " -10 ");


    window.requestAnimationFrame(loop);
}