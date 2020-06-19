
const isPalindrome = (string, counter1, counter2, center) => {
    let palindrome;
  
      if(counter1 + counter2 == 0){
        console.log("hello")
         finished = true;
      } else if(string[counter1] == string[counter2]){
         palindrome = true
         isPalindrome(string, counter1 + 1, counter2 - 1)
      } else if(string[counter1] != string[counter2]){
        console.log(counter1 + 1)
        console.log(counter2 - 1)
          return false
    } 
   return palindrome
  }
  
  const a = "monm"
  
  
  isPalindrome(a, 0, a.length -1, false);
  