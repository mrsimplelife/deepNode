const {
  isMainThread,
  parentPort,
  Worker,
  workerData,
} = require("worker_threads");

const min = 2;
const max = 10_000_000;
const primes = [];
function isSosu(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function generatePrimes(start, end) {
  for (let i = start; i <= end; i++) {
    if (isSosu(i)) {
      primes.push(i);
    }
  }
}
if (isMainThread) {
  const threads = new Set();
  const threadCount = 16;
  const range = Math.ceil((max + min) / threadCount);
  let start = min;
  let end = start + range;
  console.time("prime");
  for (let i = 0; i < threadCount; i++) {
    if (i === threadCount - 1) {
      end = max + min;
    }
    const worker = new Worker(__filename, {
      workerData: { start, end },
    });
    worker.on("message", (value) => {
      primes.push(...value);
    });
    worker.on("error", (err) => {
      throw err;
    });
    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.timeEnd("prime");
        console.log(primes.length);
      }
    });
    threads.add(worker);
    start += range + 1;
    end = start + range;
  }
} else {
  generatePrimes(workerData.start, workerData.end);
  parentPort.postMessage(primes);
}

// const min = 2;
// const max = 10_000_000;
// const primes = [];
// function isSosu(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function generatePrimes(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (isSosu(i)) {
//       primes.push(i);
//     }
//   }
// }
// console.time("generatePrimes");
// generatePrimes(min, max);
// console.timeEnd("generatePrimes");
// console.log(primes.length);

// const min = 2;
// const max = 10_000_000;
// const primes = [];
// const isSosuArr = [false, false];
// function generatePrimes(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (isSosuArr[i] === undefined) {
//       isSosuArr[i] = true;
//       if (isSosuArr[i]) {
//         primes.push(i);
//       }
//       for (let j = i + i; j <= end; j += i) {
//         isSosuArr[j] = false;
//       }
//     }
//   }
// }
// console.time("generatePrimes");
// generatePrimes(min, max);
// console.timeEnd("generatePrimes");
// console.log(primes.length);

// if (isMainThread) {
//   const threads = new Set();
//   threads.add(
//     new Worker(__filename, {
//       workerData: { start: 1 },
//     })
//   );
//   threads.add(
//     new Worker(__filename, {
//       workerData: { start: 2 },
//     })
//   );
//   for (let worker of threads) {
//     worker.on("message", (value) => {
//       console.log(value);
//     });
//     worker.on("exit", (exitCode) => {
//       threads.delete(worker);
//       if (threads.size === 0) {
//         console.log(exitCode);
//       }
//     });
//   }
// } else {
//   const data = workerData;
//   parentPort.postMessage(data.start + 100);
// }

// if (isMainThread) {
//   console.log(__filename);
//   const worker = new Worker(__filename);
//   worker.on("message", (value) => {
//     console.log(value);
//   });
//   worker.on("exit", (exitCode) => {
//     console.log(exitCode);
//   });
//   worker.postMessage("ping");
// } else {
//   parentPort.on("message", (value) => {
//     console.log(value);
//     parentPort.postMessage("pong");
//     parentPort.close();
//   });
// }
