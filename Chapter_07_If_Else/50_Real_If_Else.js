let isLoggedIn = true;
let userRole = "Editor";

if (isLoggedIn) {
    if (userRole === "Admin") {
        console.log("Welcome, Admin!");
    } else if (userRole === "Editor") {
        console.log("Welcome, Editor!");
    } else {
        console.log("Welcome, User!");
    }
} else {
    console.log("Please log in.");
}


let isLoggedIn = false;
let userRole = "Editor";

if (isLoggedIn) {
    if (userRole === "Admin") {
        console.log("Welcome, Admin!");
    } else if (userRole === "Editor") {
        console.log("Welcome, Editor!");
    } else {
        console.log("Welcome, User!");
    }
} else {
    console.log("Please log in.");
}   