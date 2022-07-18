//function
function checkCreds(){
	console.log("checkCreds() started");
	//fisrt name variable
	var firstName;
	//last name varible
	var lastName;
	//badge number variable
	var badgeNumb;
	//full name variable
	var fullName;
	//full name length variable
	var fullNameLenth;
	
	//first name value
	firstName = document.getElementById("fName").value;
	console.log("The first name is: " + firstName);
	
	//last name value
	lastName = document.getElementById("lName").value;
	console.log("The last name is: " + lastName);
	
	//badge number value
	badgeNumb = document.getElementById("badgeID").value;
	console.log("The badge number is: " + badgeNumb);
	
	//full name 
	fullName = firstName + " " + lastName;
	console.log("The users full name is: " + fullName);
	
	//full name length 
	fullNameLenth = fullName.lenth;
	console.log("The users full name is: " + fullNameLenth + "characters.");
	
	//if statement
	if( fullNameLenth > 20){
		document.getElementById("loginStatus").innerHTML = "invalid name, 		please try again."
	//else if statement
	}else if(badgeNumb > 999 || badgeNumb < 1){
		document.getElementById("loginStatus").innerHTML = "invalid badge 		number,please try again."
	//else statement
	}else{
		location.replace("./uatSpace.html");
	}
}