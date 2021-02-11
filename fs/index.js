const fs = require("fs");

console.log("before", process.memoryUsage().rss);
const readStream = fs.createReadStream("./big.txt");
const writeStream = fs.createWriteStream("./big2.txt");
readStream.pipe(writeStream);
readStream.on("end", () => {
  console.log("stream", process.memoryUsage().rss);
});

// console.log("before", process.memoryUsage().rss);
// const data = fs.readFileSync("./big.txt");
// fs.writeFileSync("./big2.txt", data);
// console.log("buffer", process.memoryUsage().rss);

// const file = fs.createWriteStream("./big.txt");
// for (let i = 0; i < 10_000_000; i++) {
//   file.write("very very big file coming\n");
// }
// file.end();

// const zlib = require("zlib");
// const zlibStream = zlib.createGzip();
// const readStream = fs.createReadStream("./testbuffer.txt", {
//   highWaterMark: 16,
// });
// const writeStream = fs.createWriteStream("./wirtestream.txt.gz");
// readStream.pipe(zlibStream).pipe(writeStream);
// const writeStream = fs.createWriteStream("./wirtebuffer.txt");
// writeStream.on("finish", () => {
//   console.log("finish");
// });
// writeStream.write("ok write\n");
// writeStream.write("ok hihihihi\n");
// writeStream.end();
// const readStream = fs.createReadStream("./testbuffer.txt", {
//   highWaterMark: 16,
// });
// const data = [];
// readStream.on("data", (chunk) => {
//   data.push(chunk);
//   console.log("data: ", chunk, chunk.length);
// });
// readStream.on("error", (err) => {
//   throw err;
// });
// readStream.on("end", () => {
//   console.log("end: ", Buffer.concat(data).toString());
// });
// const buffer = Buffer.from("change me to buffer");
// console.log(buffer);
// console.log(buffer.length);
// console.log(buffer.toString());

// const arr = [Buffer.from("hi "), Buffer.from("bye "), Buffer.from("merong")];
// console.log(Buffer.concat(arr).toString());

// console.log(Buffer.alloc(5));

// const fs = require("fs").promises;

// (async () => {
//   let data = await fs.readFile("./test.txt");
//   console.log("1", data.toString());
//   data = await fs.readFile("./test.txt");
//   console.log("2", data.toString());
//   data = await fs.readFile("./test.txt");
//   console.log("3", data.toString());
//   data = await fs.readFile("./test.txt");
//   console.log("4", data.toString());
// })();
// fs.readFile("./test.txt")
//   .then((data) => {
//     console.log("1", data);
//     console.log(data.toString());
//     return fs.readFile("./test.txt");
//   })
//   .then((data) => {
//     console.log("2", data);
//     console.log(data.toString());
//     return fs.readFile("./test.txt");
//   })
//   .then((data) => {
//     console.log("3", data);
//     console.log(data.toString());
//     return fs.readFile("./test.txt");
//   })
//   .then((data) => {
//     console.log("4", data);
//     console.log(data.toString());
//   })
//   .catch((reason) => {
//     throw reason;
//   });
// const fs = require("fs");
// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("1", data);
//   console.log(data.toString());
//   fs.readFile("./test.txt", (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log("2", data);
//     console.log(data.toString());
//     fs.readFile("./test.txt", (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log("3", data);
//       console.log(data.toString());
//       fs.readFile("./test.txt", (err, data) => {
//         if (err) {
//           throw err;
//         }
//         console.log("4", data);
//         console.log(data.toString());
//       });
//     });
//   });
// });

// let data = fs.readFileSync("./test.txt");
// console.log("1", data.toString());
// data = fs.readFileSync("./test.txt");
// console.log("2", data.toString());
// data = fs.readFileSync("./test.txt");
// console.log("3", data.toString());
// data = fs.readFileSync("./test.txt");
// console.log("4", data.toString());

// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("1", data);
//   console.log(data.toString());
// });
// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("2", data);
//   console.log(data.toString());
// });
// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("3", data);
//   console.log(data.toString());
// });
// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("4", data);
//   console.log(data.toString());
// });

// const fs = require("fs").promises;

// fs.writeFile("./testWrite.txt", "test text")
//   .then(() => {
//     return fs.readFile("./testWrite.txt");
//   })
//   .then((value) => {
//     console.log(value);
//     console.log(value.toString());
//   })
//   .catch((reason) => {
//     throw reason;
//   });
// fs.readFile("./test.txt")
//   .then((value) => {
//     console.log(value);
//     console.log(value.toString());
//   })
//   .catch((reason) => {
//     throw reason;
//   });

// const fs = require("fs");

// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
//   console.log(data.toString());
// });
