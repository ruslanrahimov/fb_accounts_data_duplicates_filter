const fs = require("fs");
const path = require("path");

const data = fs
	.readFileSync(path.resolve(__dirname, "src", "data.txt"), "utf-8")
	.split("\r\n");

const filtredObject = {};

for (const line of data) {
	const obj = {};
	const id = line.split(":")[0];
	obj[id] = line;
	Object.assign(filtredObject, obj);
}

for (const id in filtredObject) {
	if (Object.hasOwnProperty.call(filtredObject, id)) {
		const element = filtredObject[id];
		fs.appendFileSync(
			path.resolve(__dirname, "src", "filtred.txt"),
			`${element}\r\n`
		);
	}
}
