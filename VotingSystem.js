const prompt = require("prompt-sync")();
let candidates = [];
let voters = [];
let votes = {};

function registerCandidate(){
	let name = prompt(" Enter candidate Name:");
	let age = parseInt(prompt(" Enter candidate Age:"));
	let party = prompt(" Enter candidate political party:");
	let relatioshipStatus = prompt(" Enter candidate relatioship status:").toLowerCase();


	if(relatioshipStatus == "married" && age >= 18){
		candidates.push(name);
		votes[name] = 0;
		console.log(name, "has been successfuly registered");
	} else {
		console.log("candidate doesn't meet the requirement");
		}
				
}

function registerVoters(){
	let name = prompt(" Enter your Name:");
	let age = parseInt(prompt(" Enter your Age:"));
	let nationality = prompt("Are you a nigerian:").toLowerCase();
	if(age >= 18 && nationality == "yes"){
		voters.push(name);
		console.log(name, "has been successfuly registered and eligible to vote");
	} else {
		console.log("you are not eligible");
		}
}


function main(){
	let hunterly = true
	while(hunterly){
		console.log("Voting System Menu");
		console.log("1.Candidate Resgistration");
		console.log("2.Voters Resgistration");
		console.log("0.Exit");

	let option = parseInt(prompt("enter an option from (1-6):"));
	switch(option){
		case 1:
			console.log("Candidate Registration");
			registerCandidate();
			break;
		case 2:
			console.log("Voters Registration");
			registerVoters();
			break;
		case 0:
			console.log("bye bye ");
			hunterly = false;
			break;
		default:
			console.log("invalid option. Try again");


}
}
}
main();