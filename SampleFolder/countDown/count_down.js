let count = 0;
const intervalId = setInterval(function()  {
    console.log("count: " + count);
    count++;
    if (count > 5) {
        clearInterval(intervalId);  // Stop after 6 iterations
    }
}, 1000);  // Displays every 1000ms