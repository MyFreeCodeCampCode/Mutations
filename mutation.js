
function mutation(arr) { 
   var myWord = arr[0].toLowerCase(); //select first element and make it lower case
   var mySecondWord = arr[1].toLowerCase(); //select second element and make it lower case
  
  for (var i = 0; i < mySecondWord.length; i++) {
    if (myWord.indexOf(mySecondWord[i]) == -1) { //if no letter, exit with false
         return false;
     }    
  }  
  
  return true; //if all the letters are in, exit with true
}

//test case
//mutation(["hello", "hey"]);
