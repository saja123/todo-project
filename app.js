var username=prompt("Enter your name")
var usergender=prompt("Enter you gender")
var age=prompt("Enter your Age")
if (age<=0){
    alert("the age can't be less than or equal zero")
}
confirm ("Are you sure you want skip the welcome message?")
if(usergender=="Male"){
    alert("Welcome MR. " + username + "your Age is " + age)

}else if (usergender=="Female"){
    alert("Welcome Ms. " + username + "your Age is " + age)  
}else{
    alert("Welcome " + username + "your Age is " + age)   
}

