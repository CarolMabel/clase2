           var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });
function setup() {
  createCanvas(valor, valor, WEBGL);
     select("#nombre").html("Carol Alvarez.");
                select("#aprendizaje").html("nuevos métodos de programación para aplicar al diseño.");
    describe('A white box on a gray background.');
}

function draw() {
  background(200);

  // Enable orbiting with the mouse.
  orbitControl();
    pointLight(175,100,220, valor/3, valor/2, 50);
    specularMaterial(255);
    shininess(1);
    fill(70, 120, 255);

  // Draw the box.
  box(); (valor/50, 10, 20, 5);
}