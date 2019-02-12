//Searching Textual Data with Binary Search

function binSearch(arr, data){
    var upperBound = arr.length -1;
    var lowerBound = 0;

    while (lowerBound <= upperBound){
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if(arr[mid] < data){
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data){
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function insertionsort(arr){
    var temp, inner;
    for(var outer = 1; outer <= arr.length-1; outer++){
        temp = arr[outer];
        inner = outer;
        while(inner > 0 && (arr[inner-1] >= temp)){
            arr[inner] = arr[inner-1];
            --inner;
        }
        arr[inner] = temp;
    }
}

var words = `Wrote water woman of heart it total other. 
By in entirely securing suitable graceful at families improved. 
Zealously few furniture repulsive was agreeable consisted difficult. 
Collected breakfast estimable questions in to favourite it.
 Known he place worth words it as to. Spoke now noise off smart her ready. `;

words = words.split(" ");
console.log(words);
console.log("-------------");
insertionsort(words);
console.log(words);
var theword = "agreeable";
var position = binSearch(words, theword);

if(position >= 0){
    console.log("Found " +  theword + " at postion: " + position + ".");
}else {
    console.log("Word "+ theword + " not found.");
}