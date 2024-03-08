// Here's the corrected JavaScript code:

const people = [
    {
        name: "tchilla",
        age: 30,
    },
    {
        name: "Killmonger",
        age: 25,
    },
    {
        name: "Shuri",
        age: 18,
    },
];


function sortFuncTwo() {

people.sort(function(a, b) {
    return a.age - b.age;
});



let output = "";
    for (let i = 0; i < people.length; i++) {
        output += "<p>" + people[i].name + "</p>\n";
    }

    document.getElementById("dispTwo").innerHTML = output;


}




