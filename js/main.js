
const game = {
    'supspects':  [
    {
        name: 'Rusty',
        color: 'orange'
    }, 
    {
        name: 'Miss',
        color: 'red'
    }
]
} 

console.log(game.supspects.map(x => x.name).includes('Rusty'));


function foo() {
    for (var i = 0; i < game; i++ ) {
        console.log(game[i]) 
    } 
}

foo();