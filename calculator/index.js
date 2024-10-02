const res = document.getElementById("con");

var ex = "";
var l=[];
var e=[]
var r=[];


function play(n) {
  if (n == `del`) {
    ex = ex.slice(0, -1);
  } else if (n == `res`) {
    ex = "";
  } else {
    ex += n;
  }
  
  l.push(ex);
  res.value = ex;
}

function cal() {

  ex = res.value;
  e.push(ex);
  ex = eval(ex);
  l.push(ex);
  r.push(ex);
  res.value = ex;
}


function rep(){
    l.pop();
    if(l.length==0){
        res.value="";
        ex="";
    }
    else{
    res.value=l[l.length-1];
    ex=l[l.length-1];
    }

}

function his(){
    if(e.length!=0){
        
    
    res.value=e[e.length-1]+`=`+r[r.length-1];
    e.pop();
    r.pop();
    }
}


var input = document.getElementById("conn");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("c").click();
  }
});
