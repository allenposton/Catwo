var input = document.getElementById("user-input");




function test(){
  alert("Yep");
  
}




/// User Input
  
function handle(e){
    var key = e.which;
    if (key == 13){
      alert(input.value);
      getInput();
    }
  }
  
  function getInput(){
    // Gets Users Input
    var input = document.getElementById("user-input");
    document.body.style.background  = input.value;
    document.getElementById("User").innerHtml = input.value; 
  }
