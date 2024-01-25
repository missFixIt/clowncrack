// import Matter from "matter-js";
// // import clowns from "./clowns_list";
// // let viewH = window.innerHeight;
// // let viewW = window.innerWidth;
// // module aliases
// export default function Start() {
//     var Engine = Matter.Engine,
//     Render = Matter.Render,
//     Runner = Matter.Runner,
//     Bodies = Matter.Bodies,
//     Composite = Matter.Composite;

// // create an engine
// var engine = Engine.create();
// //var clownContainer = document.getElementById('root')
// // create a renderer
// var render = Render.create({
//     element: document.body,
//     engine: engine
// });

// // create two boxes and a ground
// // clowns.map(clown => (
// //     <Clown
// //       dragConstraints={constraintsRef}
// //       key={clown.id}
// //       id={clown.id}
// //       clownSize={getRandomIntInclusive(1, 10)}
// //       clownColor={getRandomColor()}
// //       clownName={clown.clownName}
// //       url={clown.url}
// //     />
    
// //   ))
// var boxA = Bodies.circle(400, 200, 80);
// var boxB = Bodies.circle(450, 50, 50);
// boxA.restitution = .5;
// boxB.restitution = .8;
// boxB.inverseMass = 1;
// console.log(boxB);
// var ground = Bodies.rectangle(400, 510, 810, 60, { isStatic: true });

// // add all of the bodies to the world
// Composite.add(engine.world, [boxA, boxB, ground]);

// // run the renderer
// Render.run(render);

// // create runner
// var runner = Runner.create();

// // run the engine
//     Runner.run(runner, engine);


// }