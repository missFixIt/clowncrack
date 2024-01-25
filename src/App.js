import Clown from './Clown.js';
import clowns from './clowns_list.js';
import { useRef } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import getRandomIntInclusive from './getRandomIntInclusive.js';
import getRandomColor from './getRandomColor.js';
import Matter from "matter-js";
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Composites = Matter.Composites,
Common = Matter.Common,
Events = Matter.Events,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
Composite = Matter.Composite,
Bodies = Matter.Bodies;

// create engine
var engine = Engine.create({
    enableSleeping: true
}),
world = engine.world;
let vh = window.innerHeight;
let vw = window.innerWidth;
let wallStyles = {
    fillStyle: 'white'

};
// create renderer
var render = Render.create({
element: document.body,
engine: engine,
options: {
    width: vw,
    height: vh,
    wireframes: false
}
});

export default function App() {

  return (
    <>
      {/* <h1>ClownCrack</h1>
      <h2>Today's Clowns</h2> */}
      <ClownCrack/>
      </>
  );
}


function ClownCrack() {
  
    console.log("vw=" + vw + " vh= " + vh);
  
      Render.run(render);
  
      // create runner
      var runner = Runner.create();
      Runner.run(runner, engine);
  
      // add bodies
      Composite.add(world, [
          // walls
          Bodies.rectangle(vw/2, vh-8, vw, 10, { isStatic: true, render: wallStyles }),//bottom
          Bodies.rectangle(vw/2, 8, vw, 10, { isStatic: true, render: wallStyles }),//top
          Bodies.rectangle(8, vh/2, 10, vh, { isStatic: true, render: wallStyles }),//left
         Bodies.rectangle(vw-8, vh/2, 10, vh, { isStatic: true, render: wallStyles })//right
      ]);
      console.log(Bodies.circle);
      var stack = Composites.stack(50, 50, 2, 3, 0, 0, function(x, y) {
          return Bodies.circle(x, y, Common.random(20, 50), {setDensity: .5, restitution: .3});
          
      });
      console.log(Bodies.circle);
  Composite.add(world, stack);
  
      /*
      // sleep events
      for (var i = 0; i < stack.bodies.length; i++) {
          Events.on(stack.bodies[i], 'sleepStart sleepEnd', function(event) {
              var body = this;
              console.log('body id', body.id, 'sleeping:', body.isSleeping);
          });
      }
      */
  
      // add mouse control
      var mouse = Mouse.create(render.canvas),
          mouseConstraint = MouseConstraint.create(engine, {
              mouse: mouse,
              constraint: {
                  stiffness: 0.2,
                  render: {
                      visible: false
                  }
              }
          });
  
      Composite.add(world, mouseConstraint);
  
      // keep the mouse in sync with rendering
      render.mouse = mouse;
  
      // fit the render viewport to the scene
      Render.lookAt(render, {
          min: { x: 5, y: 5 },
          max: { x: vw-5, y: vh-5 }
      });
  
      // context for MatterTools.Demo
      // return {
      //     engine: engine,
      //     runner: runner,
      //     render: render,
      //     canvas: render.canvas,
      //     stop: function() {
      //         Matter.Render.stop(render);
      //         Matter.Runner.stop(runner);
      //     }
      // };
  
  


}