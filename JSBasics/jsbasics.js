
const fetchData = (shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject({ message: "Failed to fetch data!", code: "test" });
            } else {
                resolve({ message: "Data fetched successfully!", code: "success" });
            }   
         }, 2000);
    });
};

// Success case
fetchData(false).then(({message, code}) => {
    console.log(message + " " + code);
}).catch(error => {
    console.error("Error fetching data:", error);
});

// Failure case
fetchData(true).then(({message, code}) => {
    console.log(message + " " + code);
}).catch(error => {
    console.error("Error fetching data:", error);
});

console.log("Fetching data...");

/* const person = {
    name: "John",
    age: 30,
    city: "New York"
};

function greet({name}) {
    return `Hello, ${name}!`;
}

function checkRest({age, ...rest}) {
    console.log(`Age: ${age}`);
    console.log('Rest of the properties:', rest);
}

console.log(greet(person));
checkRest(person); */