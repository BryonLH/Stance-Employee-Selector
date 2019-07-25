var namesArray = ["Melanie", "Dean", "Daniel", "Stacy", "Amy", "Biggie", "Val"];
var employeeNum = 0;
var employeesRemoved = [];
var num = 7;


$("#start-button").on("click", function (e) {
    // e.preventDefault();
    console.log("clicked");
    for (var i = 0; i < namesArray.length; i++) {
        console.log(namesArray[i]);
        employeeNum++;
        var employeeId = "employee" + employeeNum;
        console.log(employeeId);
        console.log(namesArray.length);
        $(`<p class='employees ${namesArray[i]}' value='${namesArray[i]}'>${namesArray[i]}</p>`).appendTo("#" + employeeId);
    };

    setTimeout(removeEmployee, 18000);
    setTimeout(removeEmployee, 15000);
    setTimeout(removeEmployee, 12000);
    setTimeout(removeEmployee, 9000);
    setTimeout(removeEmployee, 6000);
    setTimeout(removeEmployee, 3000);

    // while (namesArray.length > 1) {
        
    function removeEmployee() {
        if () {
            console.log("3 seconds!");
            var employeeToRemove = Math.floor(Math.random() * num);
            console.log("the random number is " + employeeToRemove);
            console.log(employeeToRemove);
            num--;
            employeesRemoved.push(employeeToRemove);
            $("#employee" + employeeToRemove).empty();
            console.log(employeesRemoved);
        }
    }

    // function fifteenSeconds() {
    //     console.log("3 seconds!");
    //     var employeeToRemove = namesArray[Math.floor(Math.random() * 7) + 1];
    //     console.log(employeeToRemove);
    //     employeesRemoved.push(employeeToRemove);
    //     $("#" + employeeToRemove).empty();
    // $("." + employeeToRemove).empty();
    // }

    // function twelveSeconds() {
    //     console.log("3 seconds!");
    //     var employeeToRemove = namesArray[Math.floor(Math.random() * 7) + 1];
    //     console.log(employeeToRemove);
    //     employeesRemoved.push(employeeToRemove);
    //     $("#" + employeeToRemove).empty();
    // }

    // function nineSeconds() {
    //     console.log("3 seconds!");
    //     var employeeToRemove = namesArray[Math.floor(Math.random() * 7) + 1];
    //     console.log(employeeToRemove);
    //     employeesRemoved.push(employeeToRemove);
    //     $("#" + employeeToRemove).empty();
    // }

    // function sixSeconds() {
    //     console.log("3 seconds!");
    //     var employeeToRemove = namesArray[Math.floor(Math.random() * 7) + 1];
    //     console.log(employeeToRemove);
    //     employeesRemoved.push(employeeToRemove);
    //     $("#" + employeeToRemove).empty();
    // }

    // function threeSeconds() {
    //     console.log("3 seconds!");
    //     var employeeToRemove = namesArray[Math.floor(Math.random() * 7) + 1];
    //     console.log(employeeToRemove);
    //     employeesRemoved.push(employeeToRemove);
    //     $("#" + employeeToRemove).empty();
    // }
})
