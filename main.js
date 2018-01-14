// pseudo code

// check if each side is balanced

// ? = 3 ! = 2

// look through the string and count how many exclamation points and question marks there are.

// regex? to count Each
// store them in seperate variables
// multiply them respective to the character
// if left side is bigger return 'Left' other wise return 'Right' if they are equal return 'Balance'


function balance(left,right){
  var exclamationValue = 2;
  var questionmarkValue = 3;
  var leftMatch = ((left.match(/\?/g) || []).length * questionmarkValue) + ((left.match(/\!/g) || []).length * exclamationValue);
  var rightMatch = ((right.match(/\?/g) || []).length * questionmarkValue) + ((right.match(/\!/g) || []).length * exclamationValue);

  if (leftMatch > rightMatch) {
    return 'Left';
  } else if (rightMatch > leftMatch) {
    return 'Right'
  } else {
    return 'Balance'
  }
}

console.log(balance("!!???!????","??!!?!!!!!!!"));
