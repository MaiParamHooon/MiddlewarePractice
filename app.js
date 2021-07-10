const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
// app.use((req, res, next) => {
// 	console.log("Hello 1st middleware");
// 	return next();
// 	console.log("Hello 3 after 2nd middleware"); // yeh last meh run ho rha h but agar return next krdiya toh run nhi hoga
// });
// app.use((req, res, next) => {
// 	console.log("Hello 2nd middleware");
// 	return next();
// });

// app.use((req, res, next) => {
// 	req.method = "GET"; // making every req to get yeh toh nhi hi karoge
// 	req.requestTime = Date.now();
// 	console.log(req.method.toUpperCase(), req.path);
// 	return next();
// });

app.use("/dogs", (req, res, next) => {
	console.log("dogsss");
	next();
});

app.get("/", (req, res) => {
	// console.log(req.requestTime);
	res.send("Home");
});

app.get("/dogs", (req, res) => {
	// console.log(req.requestTime);
	res.send("dogs");
});

app.use((req, res) => {
	res.status(404).send("Not Found");
});

app.listen(3000, () => {
	console.log("App listening on port 3000!");
});
