function explain_callback(name, age, task){
    console.log("hello", name);
    console.log("your age", age);
    task()
}

function washHand(){
    console.log("khabar por hat dhube");
}
function takeShower(){
    console.log("khabar por gosol korbe");
}
function scrollFacebook(){
    console.log("sara din facebook scroll koro");
}

explain_callback("alamin", 20, washHand);
explain_callback("tanvir", 18, takeShower);
explain_callback("solman", 22, scrollFacebook);