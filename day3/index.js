var name="twinkle";
var numberone=1;
var verify=true;
var numbertwo=2;
var sum=numberone+numbertwo;
var mul=numberone*numbertwo;

//cmnnt
    const student={name:"jons",age:45};
    function display(){
       
        
       // document.getElementById("valobject").innerHTML=this.student.name+this.student.age;
        console.log(student.name);
        console.log(student.age);
       
        
    }
    
    function checkeven(){
        var picknum=document.getElementById("readnum").value;
        if (picknum %2 == 0){
            console.log("even");
        }
        else{
            console.log("odd");
        }
    }


function addition(){
    var sum=numberone+numbertwo;
    var mul=numberone*numbertwo;
    document.getElementById("newtwo").innerHTML=sum;
document.getElementById("newthree").innerHTML=mul;
console.log(sum);
console.log(mul);
return sum;
    
}