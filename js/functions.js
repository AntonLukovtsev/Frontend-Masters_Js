
const _ = {};

_.each = function (list, callback) {
    if(Array.isArray(list)) {
        for(var i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    } else {
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