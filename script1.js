//constructor function
function Book(name, author, asbn) {
	this.name = name;
	this.author = author;
	this.asbn = asbn;
}
//Display function
function Display() {}
Display.prototype.clear = function () {
	let submit = document.getElementById("submitForm");
	submit.reset();
};
Display.prototype.add = function (book) {
	console.log("add UI");
	let myString = document.getElementById("tableBody");

	let UiString = `<tr>
    <th>${book.name}</th>
    <th>${book.author}</th>
    <th>${book.asbn}</th>
    </tr>`;
	myString.innerHTML += UiString;
};
	Display.prototype.validate = function (book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    Display.prototype.show = function (harii) {
        let message = document.getElementById('ptag');
        message.innerHTML = `<P>${harii}</p>
                          `

        setTimeout(function () {
            message.innerHTML = ''
        }, 2000);
    
    }

let submit = document.getElementById("submitForm");
submit.addEventListener("submit", submitall);

function submitall(event) {
	let myname = document.getElementById("name").value;
	let myauthor = document.getElementById("author").value;
	let myasbn = document.getElementById("asbn").value;
	let book = new Book(myname, myauthor, myasbn);

	let display = new Display();

    if(display.validate(book)){
        	display.clear();
	       display.add(book);
           display.show('Your form is successFully its time later   ');
    }else{
        display.show('Fill the form try');
    }


	// let mylocalstorage = localStorage.getItem('info');

	// if( mylocalstorage == null){
	//     mybook = [];
	// }else{
	//     mybook = JSON.parse(mylocalstorage);
	// }
	// mybook.push(book.value);

	// localStorage.setItem("info",JSON.stringify(book));

	// console.log(mybook)

	console.log(book);
	event.preventDefault();
}
