/*****RÉGI PUSKÁNAK */

var database = [
	{
		username: "Attila",
		password: "Hydra05091" 
	},

	{	username: "Hydra",
		password: "Medion1011"
	},

	{	username: "Hydra05091",
		password: "supnigga"
	},


];


var newsFeed = [
{
	username: "Bobby",
	timeline: "So tired"
},
{ 
	username: "Sally",
	timeline: "sup nigga"

}

];

var namePrompt = prompt ("what's your username?");
var passwordPrompt = prompt ("what's your password?");

function isUserValid(username,password) {
	for (var i = 0 ; i<database.length;i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
	}
}
return false;
}

function signin(username,password) {
		if (isUserValid(username,password)) {
			console.log(newsFeed);
			alert("welcome back")
	} else {
		alert("sorry,wrong username or password");
	}
}

signin(namePrompt, passwordPrompt);



/****RÉGI PUSKÁNAK ******/




const database = [
{
	username:"Hydra",
	password:"hithere",
},
{
	username: "Hydra2",
	password: "Medion1011"
},

]

var namePrompt = prompt ("what's your username?");
var passwordPrompt = prompt ("what's your password?");


const isUserValid = (user,pw) => {
	for (let i=0;i<database.length;i++) {
	if (database[i].username === user && 
		database[i].password === pw) {
		return true
    }
}
return false
}


const logIn = (user,pw) => {
	if (isUserValid(user,pw)) {
		alert("hi there")
	} else {
		alert("idk you")
	}
}

logIn(namePrompt,passwordPrompt)