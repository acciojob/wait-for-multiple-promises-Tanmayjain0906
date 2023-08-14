let output = document.getElementById("output");
let tr = document.createElement("tr");
tr.id = "loading";
let td = document.createElement("td");
td.innerText = "Loading...";
td.colSpan = "2";
tr.appendChild(td);
output.appendChild(tr);

let prom1 = new Promise((resolve) => {
	let delay = (Math.random()*3)+1;
	setTimeout(() => {
		resolve(`Promise 1 ${delay}`)
	}, delay*1000);
})

let prom2 = new Promise((resolve) => {
	let delay = (Math.random()*3)+1;
	setTimeout(() => {
		resolve(`Promise 2 ${delay}`)
	}, delay*1000);
})

let prom3 = new Promise((resolve) => {
	let delay = (Math.random()*3)+1;
	setTimeout(() => {
		resolve(`Promise 3 ${delay}`)
	}, delay*1000);
})
let sum = 0;
Promise.all([prom1, prom2, prom3]).then((data) => {
	output.removeChild(tr);
	data.forEach((val) => {
		let words = val.split(" ");
		let tr1 = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		td1.innerText = `${words[0]} ${words[1]}`;
		td2.innerText = words[2];
		sum += parseFloat(words[2]);
		tr1.append(td1, td2);
		output.appendChild(tr1);
	})

let tr2 = document.createElement("tr");
let td3 = document.createElement("td");
let td4 = document.createElement("td");

td3.innerText = "Total";
td4.innerText = sum;

tr2.append(td3, td4);
output.appendChild(tr2);
})



