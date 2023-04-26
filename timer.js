const schedule = process.argv.slice(2);

console.log(schedule);

const timer = function(timing) {
  let sortedTiming = timing.sort();
  
  const ring = function() {
      process.stdout.write('\x07');
  };

  for (let i = 0; i < sortedTiming.length; i++) {
    if(sortedTiming[i] === undefined || sortedTiming[i] === NaN || sortedTiming[i] < 0) {
      return ""
    }
    setTimeout(ring, sortedTiming[i] * 1000);
  }
}

timer(schedule);