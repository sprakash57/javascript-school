const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

const currentYear = new Date().getFullYear();

class ArrayOps {
    constructor(list) {
        this.list = list;
    }

    isAdult = () => this.list.some(l => currentYear - l.year >= 19);

    isEveryoneAdult = () => this.list.every(l => currentYear - l.year >= 19);

    getComment = () => this.list.find(l => l.id === 823423);

    getIndex = () => this.list.findIndex(l => l.id === 823423);

    deleteComment = id => this.list.filter(l => l.id !== id);
}

const peopleOps = new ArrayOps(people);
const commentOps = new ArrayOps(comments);
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
console.log(peopleOps.isAdult())
// Array.prototype.every() // is everyone 19 or older?
console.log(peopleOps.isEveryoneAdult())
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log(commentOps.getComment())
// Array.prototype.findIndex()
// Find the comment with this ID
console.log(commentOps.getIndex())
// delete the comment with the ID of 823423
console.log(commentOps.deleteComment(823423))