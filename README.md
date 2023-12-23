Admit it! Just the name makes you go 👀, and giggle nervously.
That's kind of the point.
This is an app my husband, who runs a circus performance troupe, dreamed up when I asked him to think of an app to build when I'd just completed my Front End Developer Certificate.
At first I wasn't convinced that the app would actually be an app in my definition of it. Was it useful? No. It sounded like something that could be done with just HTML and CSS.
But the more we laughed about it and came up with ideas, the more I realized it was actually a good assignment.
It will become a silly app with clown faces that you can click on and they start laughing. I haven't decided what the interface will look like yet, just working with audio in React as an exercise.


<a href="https://missfixit.github.io/clowncrack/index.html">check it out here</a>

Dev Notes for myself
12/08/23

I've added dynamically created buttons that play different sounds. They come from an array of objects stored in a different file. My next step is to make a click handler that will iterate over the buttons/clown objects and create a unique useState for each one. That way I can still use my playing state to run the buttons, but there will be a separate state for each button without me having to write out a different useState for each one. I want this program to work no matter how many clown objects there are in the external array file. I'm wondering if useReducer is what I want, but somehow I don't think so. I found an example using Array.from, and then using map to dynamically create all of the states. So I'll try that next.

My future goals are to add animation, maybe like bouncing balls with each clown's head. and the user can interact with the balls--if you touch the mouth, it turns the sound on and off. If you swipe the ball, it will go faster and bounce harder off the side of the screen. I'd like to speed up the sound if the ball is going faster, and slow it down if the ball is going slower. If i get really fancy, I could add left-right stereo effects based on screen placement, and instead of a graphic of a clown, it could be video of each individual performer laughing, mapped onto a round ball that bounces around in 3d.

12/21/23
I've been busy with the holidays, but a week ago or so I solved the state issue by component-izing each individual clown. Clown.js takes props from a separate file of clown objects, and creates an instance that tracks its own state (of audio on/off).
