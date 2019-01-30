
// const game = {
//     'supspects':  [
//     {
//         name: 'Rusty',
//         color: 'orange'
//     }, 
//     {
//         name: 'Miss',
//         color: 'red'
//     }
// ]
// } 


// const supspects = [
//     {
//         name: 'Rusty',
//         color: 'orange'
//     }, 
//     {
//         name: 'Miss',
//         color: 'red'
//     }
// ]

// var [color, color2] = [supspects[0].color, supspects[1].color]


// console.log(game.supspects.map(x => x.name).includes('Rusty'));


// function foo() {
//     for(let i = 0; i < game.supspects.length; i++) {
//         console.log(game.supspects[i])
//     }
// }

// foo();

// for(let key in game) {
//     console.log(key[game])
// }


// var gameLoop = function() {
//     for (var i = 0; i < game.supspects.length;i++){ 
//         console.log(i)
//         for(var key in game.supspects[i]) {
//             console.log(key)
//             if(game.supspects[i][key] === 'Rusty') {
//                 console.log(game.supspects[i][key] )
//                 console.log('true')
//             } else {
//                 console.log('false')
//             }
//         }

//     }
// }
// gameLoop()

// console.log(game.supspects.map(x => x.name));


function create(name) {
    let a =  {
        name: name,
        color: name.split(' ')[1],
        speak(name) {
            console.log(`my name is${name}`,)
        }
    };
};

create('Miss Scarlet');

var supspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var naem = supspects.forEach(x => x[2]);
console.log(name);

var supspectsList = [];


const array = [
    {
        color: 'red'
    },
    {
        color:'yellow'
    }
]


var ds = [{color: red},{color: green}] = array;
console.log(ds)

let a = array[0].color;
console.log(a)

(function foo() {
        console.log('ss')
    })