// shows array of flavors in table
const froyo = [' vanilla' , 'strawberry' , 'coffee'] ;
    console.table(froyo);


const userInputString = prompt(
    "Please enter a list of comma-separated flavors. (Example: flavor,flavor,flavor,...)"
);
    const stringArray = userInputString.split(",") ;

    // loop through array of froyo flavors
        for (let i = 0; i < froyo.length; i++) {
        console.log('froyo:' , froyo[i]) ;
}

/* Keep count of how many orders per flavor
vanilla,vanilla,vanilla,strawberry,coffee,coffee
*/

function countFlavorFreq(froyo) {
    const froyoCount = {} ;
            froyoCount.forEach(froyo => {
                froyoCount[froyo] = (froyoCount[froyo] || 0) + 1;
    });
    return froyoCount;
}
    //console.log('Number of Orders' ,  froyoCount);


