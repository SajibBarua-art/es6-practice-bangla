const person = { name: "sajib", address: "Bus Station", id: 101, age: 17, job:"Bekar", gfName: "single"}

// access the object normally
console.log(person.name, person.age);

// access the object in ES6 style
const {address, name, job} = person;
console.log(address, job);

const friends = ['Wasim', 'Jisan', 'Tazwar', 'Robin', 'Amjad', 'Ajij'];
// To set some array elements in some variables
// ... dots for access all remaining friends
const [firstFriend, secondFriend, ...remainingFriend] = friends;
console.log(firstFriend, secondFriend, remainingFriend);

// to nested object
const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'kopa samsu'
    }
}
const {leader} = complexObject.info;
console.log(leader);