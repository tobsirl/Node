# Enhancing stack trace output

When a Node process experiences an error, the function where the error occurred, and the function that called that function (and so on) is written to STDERR as the final output of the application.

This is called a stack trace. By default, Node's JavaScript engine (V8) retains a total of 10 frames (references to functions in a stack).

In the following example the default stack trace of 10 doesn't provide enough information to perform root-cause analysis of the faulty process.

The stack trace limit can be increased using
```sh
node --stack-trace-limit=21 index.js
```

The `--stack-trace-limit` flag instructs the V8 JavaScript engine to retain more stacks on each tick (each time round) of the event loop. 

When an error occurs, a stack trace is generated that traces back through the preceding function calls as far as the defined limit allows.

