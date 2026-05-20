function getUserStatus() {
    //var status_code = "Inactive"; // This variable is hoisted to the top of the function scope
    console.log("Status_code");
    var status_code = "Active";
    console.log(status_code);
}
getUserStatus();


//Note var is function scoped and hoisted, while let and const are block scoped and not hoisted in the same way.
//The top getUserStatus function will log "Status_code" and then "Active" due to hoisting of the var declaration. If we were to use let or const instead of var, it would throw a ReferenceError when trying to access status_code before its declaration.
