import bruce from './audio/Bruce01.mp3';
import bruce2 from './audio/Bruce02.mp3';
import bruce3 from './audio/Bruce03.mp3';
import bruce4 from './audio/Bruce04.mp3';
import brittany from './audio/Brittany01.mp3';
import brittany2 from './audio/Brittany02.mp3';


const sounds = [

    {
        id: 1,
        url: brittany,
        buttonName: 'Brittany01',
        clownName: 'Brittany!',
        color: 'red',
        size: "200px",
            
    },
    {
        id: 2,
        url: bruce,
        buttonName: 'Bruce01',
        clownName: 'Bruce!',
        color: 'blue',
        size: "200px",
    },
    {
        id: 3,
        url: bruce2,
        buttonName: 'Bruce02',
        clownName: 'Bruce!',
        color: 'violet',
        size: "50px",
    },
    {
        id: 4,
        url: bruce3,
        buttonName: 'Bruce03',
        clownName: 'Bruce!',
        color: 'aqua',
        size: "70px",
    },

    {
        id: 5,
        url: brittany2,
        buttonName: 'Brittany02',
        clownName: 'Brittany!',
        color: 'yellow',
        size: "120px",
            
    },
    {
        id: 6,
        url: bruce4,
        buttonName: 'Bruce04',
        clownName: 'Bruce!',
        color: 'green',
        size: "100px",
    },

    
];
export default sounds;
export { bruce, brittany, bruce2, bruce3, bruce4, brittany2 };