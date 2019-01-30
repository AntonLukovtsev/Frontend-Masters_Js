

const _ = {};

_.map = function(list ,callback) {
    var storage = [];

    _.each(list, function(v, i, list){
        storage.push(callback(v, i, list));
    })

    // for(var i = 0; i < list.length; i++){
    //     storage.push(callback(list[i], i, list));
    // };

    return storage;
}

_.map([1,2,3], function(val) { return val + 1, console.log(val + 1) });


 
_.each = function (list, callback) {
    if(Array.isArray(list)) {
        for(var i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        };
    } else {misconception
        for(let key in list) {
            console.log(key)
            callback(list.key, key, list);
        }
    }
        
};

_.each(['sally', 'georgir','porgie'], function(name ,i, list) {
    console.log(list[i + 1])
    if(list[i + 1]) {
        console.log(name, 'is younger than', name[i+1])
    } else {
        console.log(name, 'is the oldest' )
    }
})




const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function(item) {
    return  `broken${item}`
};

_.map(weapons, makeBroken);