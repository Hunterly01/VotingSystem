const prompt = require("prompt-sync")(); 


let availableMahwaBooks = [
{title: "Solo leveling",
 status: "available"},
{title: "Biginning after the end",
 status: "available"},
{title: "Eleceeed",
 status: "available"},
{title: "reincarnated as a martial artiste",
 status: "available"}
];

function viewBooks(){
console.log("Available Mahwa Books are :");
availableMahwaBooks.forEach((mahwaBooks, index) => {
console.log(`${index + 1}. ${mahwaBooks.title}, ${mahwaBooks.status}`);
});
}


function borrowBook(number) {
	let index = number - 1;
	if (index >= 0 && index < availableMahwaBooks.length) {
		let selectedBook = availableMahwaBooks[index];
		if (selectedBook.status === "available") {
			selectedBook.status = "borrowed";
		console.log(`You borrowed "${selectedBook.title}"`);
	} else {
		console.log(`Sorry, "${selectedBook.title}" is not available`);
    	}
	} else {
    		console.log("Invalid input");
  }
}


function returnBook(number1){
	let index = number1 - 1;
	if (index >= 0 && index < availableMahwaBooks.length) {
		let selectedBook = availableMahwaBooks[index];
		if (selectedBook.status === "borrowed") {
			selectedBook.status = "available";
		console.log(`You returned "${selectedBook.title}"`);
	} else {
		console.log(`Sorry, "${selectedBook.title}" is now available`);
    	}
	} else {
    		console.log("Invalid input");
  }
}




function main(){
	let hunterly = true
	while(hunterly){
	console.log("welcome to hunter lee library app");
	console.log("1.ViewBook");
	console.log("2.borrow book");
	console.log("3.return book");
	console.log("0.Exit");
	let option = parseInt(prompt("Enter an option:"));
	
	switch(option){
		case 1:
			console.log("ViewBook");
			viewBooks();
			break;
		case 2:
			console.log("borrow book");
			let number = parseInt(prompt("Enter the number of book:"));
			borrowBook(number);
			break;
		case 3:
			console.log("return book");
			let number1 = parseInt(prompt("Enter the number of book:"));
			returnBook(number1);
			break;			
		case 0:
			console.log("Exiting bye bye");
			hunterly = false;
			break;

		default:
			console.log("invalid input.. try again");
}
}
}
main();