const prompt = require("prompt-sync")();
let candidates = [];
let voters = [];
let votes = {};
let votedVoters = [];

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


function toVote(){
	let name = prompt(" Enter your Name:");
	if (voters.includes(name) && !votedVoters.includes(name)) {
		console.log("Candidates:");
        candidates.forEach(candidate => console.log(candidate));
        let choice = prompt("Enter the name of the candidate you want to vote for:");

	if (candidates.includes(choice)) {
            votes[choice]++;
            votedVoters.push(name);
            console.log("Vote cast successfully");
        } else {
            console.log("Invalid candidate");
        }
    } else if (votedVoters.includes(name)) {
        console.log("You have already voted.");
    } else {
        console.log("You are not a registered voter.");
    }
}

function countVotes() {
    
    for (let candidate in votes) {
        console.log(`${candidate}: ${votes[candidate]} vote(s)`);
    }
    console.log();
}




function main(){
	let hunterly = true
	while(hunterly){
		console.log("Voting System Menu");
		console.log("1.Candidate Resgistration");
		console.log("2.Voters Resgistration");
		console.log("3.Voting");
		console.log("4.count votes");
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
		case 3:
			console.log("Voting");
			toVote();
			break;
		case 4:
			console.log("Counting Votes");
			countVotes();
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