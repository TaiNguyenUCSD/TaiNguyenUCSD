var testCount = 0;
var out = document.getElementById("output");

function go(){
  testCount++;
  switch (testCount) {
    case 1:
      out.innerHTML = 'you pressed the button';
      break;

    case 2:
      out.innerHTML = 'you pressed it again';
      break;

    case 3:
    case 4:
    case 5:
      out.innerHTML = 'you pressed the button ' + testCount + ' times';
      break;

    default:
      out.innerHTML = 'stop!!';
      break;
  }
}
