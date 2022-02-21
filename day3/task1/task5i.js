function age(){
    var date=new Date();
    
    console.log(date);
    var bdate=document.getElementById("bdate").value;
    var bdatee=new Date(bdate);

    console.log(bdate);

    var year=date.getFullYear();
    console.log(year);
    var birthyear=bdatee.getFullYear();
    console.log(birthyear);
    var personage=year-birthyear;
    console.log(personage);
    
}
