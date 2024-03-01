import assert from 'assert'

function categorize(values){
    const objet = {};

    values.forEach(value => {
        const type = typeof value;

        if(objet[type]){
objet[type].push(value);
        } else{
            objet[type] = [value];
            
        }console.log(values)
    });
    return objet;

}


function sayHi() {
    console.log('hi');
}



assert.deepStrictEqual(
    categorize([1, 'hello', sayHi, 'world', true, 0n, 1000]),
    {
        number:[1,1000],
        string: ['hello', 'world'],
        function: [sayHi],
        boolean:[true],
        bigint:[0n]
    }
)

import assert from 'assert'

let tableauFinal =[];
for (let i =0; i< tableauDoublon.length; i++){
    let tableau = tableauDoublon[i];
    if(tableauFinal.indexOf(tableau)=== -1){
        tableauFinal.push(tableau);
    }
}
return tableauFinal;

// je bloque!!!!!

assert.deepStrictEqual(
    [1, 1, 6, 2, 3, 2, 2, 4, 6, 6, 1].dedup(),
    [1, 6, 2, 3, 4]
)