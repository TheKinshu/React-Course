// Default way to create a function
function printMyName(name){
    console.log(name)
}

printMyName("Max")

// Using the arrow method to create a function
const multi = (name) => {
    console.log(name)
}

multi("Max")

// Without brackets it will only take one argument
const single = name => {
    console.log(name)
}

single("Max")

// Does not contain an argument
const no = () => {
    console.log("name")
}

no("Max")

// Returning variables
const multiply = (number) => {
    return number*2
}

console.log(multiply(2))

//
const mutliply2 = (number) => number*2

console.log(mutliply2(2))