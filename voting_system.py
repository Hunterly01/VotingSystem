candidates = []
voters = []
votes = {}
voted_voters = []


def register_candidate():
	name = input(" Enter candidate Name:");
	age = int(input(" Enter candidate Age:"));
	party = input(" Enter candidate political party:");
	relatioshipStatus = input(" Enter candidate relatioship status:").lower();


	if(relatioshipStatus == "married" and age >= 18):
		candidates.append(name);
		votes[name] = 0;
		print(name + " has been successfuly registered");
	else:
		print("candidate doesn't meet the requirement");



def register_voters():
	name = input(" Enter your Name:");
	age = int(input(" Enter your Age:"));
	nationality = input("Are you a nigerian:").lower();
	if(age >= 18 and nationality == "yes"):
		voters.append(name);
		print(name + " has been successfuly registered and eligible to vote");
	else:
		print("you are not eligible");


def vote_process():
    print("Voting ")
    name = input("Enter your name: ")
    if name in voters and name not in voted_voters:
        print("Candidates:")
        for candidate in candidates:
            print(f" {candidate}")
        choice = input("Enter the name of the candidate you want to vote for: ")
        if choice in candidates:
            votes[choice] += 1
            voted_voters.append(name);
            print("Vote cast successfully");
        else:
            print("Invalid candidate.");
    elif name in voted_voters:
        print("you have already voted");
    else:
        print("You are not a registered voter");
 
def count_votes():
    print("Counting Votes ")
    for candidate, count in votes.items():
        print(f"{candidate}: {count} vote(s)")
    print()


def main():
	while True:
		print(" Voting System Menu");
		print("1. Register Candidate");
		print("2. Register Voter");
		print("3. Vote");
		print("4. Count Votes");
		print("0. Exit");
		option = int(input("Select any option: "));
		match(option):
			case 1:
				print("Register Candidate");
				register_candidate();
			case 2:
				print("Register Voter");
				register_voters();
			case 3:
				print("Vote");
				vote_process();
			case 4:
				print("Count Votes");
				count_votes();
			case 0:
				print("bye bye");
				break;
			case _:
				print("Invalid choice. Try again");

main()


