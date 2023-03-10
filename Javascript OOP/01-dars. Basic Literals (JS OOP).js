// const s1 = 'Hello';
// console.log(typeof s1);
// console.log(s1.toUpperCase());

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// console.log(navigator.appVersion);


// --- Object Literal --- //

const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.author} wrote ${this.title} in ${this.year}`;
    }
};

console.log(book1.getSummary());


const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function() {
        return `${this.author} wrote ${this.title} in ${this.year}`;
    }
};

console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));