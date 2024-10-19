function removeFirstOccurrence(inputString, searchString) {
     // Your code here
  //position of the search string
  const index = inputString.indexOf(searchString);
  if (index !== -1) {//if we find the index of this substr "the"
    const left = inputString.slice(0, index); //we cute the left    we can also use here .trimEnd()
 //to remove the space  
   const right = inputString.slice(index + searchString.length).trimStart();
    return left + right;
  }
  }
  
  const inputString =
    "Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.";
  const searchString = "the";
  const result = removeFirstOccurrence(inputString, searchString);
  console.log(result);
  