# Enhancing stack trace output

When a Node process experiences an error, the function where the error occurred, and the function that called that function (and so on) is written to STDERR as the final output of the application.

This is called a stack trace. By default, Node's JavaScript engine (V8) retains a total of 10 frames (references to functions in a stack).

In the following example the default stack trace of 10 doesn't provide enough information to perform root-cause analysis of the faulty process.