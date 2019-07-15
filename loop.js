//node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new tasks, timers, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check One: Any pending setTimeout, setInterval, setImmediate?
  // Check Two: Any pending os tasks (like maybe server listening to some port)
  // Check Three: Any pending Long Running Operations?(Like fs module)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

//entire body executes in 1 tick
while (shouldContinue()) {
  // 1) Node looks at pending timers and sees if any functions are ready to be called
  // 2) Node looks at pending os tasks and pending operations and calls relevant callbacks
  // 3) Pause execution, Continue when...
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete
  // 4) Look at pendingTimers. Call any setImmediate
  // 5) Handle any 'close' events
}

//exit back to terminal
