const spwan = require("child_process").spawn;
const python = spwan("python", ["test.py"]);
python.stdout.on("data", (chunk) => {
  console.log(chunk.toString());
});

python.stderr.on("data", (chunk) => {
  console.log(chunk.toString());
});
// const exec = require("child_process").exec;

// const ls = exec("ls -alt ../../codestates");
// ls.stdout.on("data", (chunk) => {
//   console.log(chunk);
//   console.log();
//   console.log();
//   console.log(chunk.toString());
// });
// // ls.stderr.on("data", (chunk) => {
// //   console.log(chunk.toString());
// // });
