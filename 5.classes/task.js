// printed edition

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name        = name;
    this.releaseDate = releaseDate;
    this.pagesCount  = pagesCount;
    this._state      = 100;
    this.type        = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if(newState < 0) {
        this._state = 0;
    }
    else if (newState > 100) {
        this._state = 100;
    }
    else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }

}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type   = "book";
    this.author = author;
  }
}
  
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type   = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type   = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type   = "detective";
  }
}

// library

class Library {
  constructor(name) {
    this.name  = name;
    this.books = [];
  }

  addBook(book) {
    if(book.state > 30) {
        this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}

// test

const library = new Library("Библиотека имени Ленина");

library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new Book("Алексей Ремезов", "Царь Максимилиан", 1919, 19));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new Book("Николай Носов", "Незнайка на луне", 1965, 576));

console.log(library.findBookBy("releaseDate", 1919).name); // Царь Максимилиан
takenBook = library.giveBookByName("Мурзилка");
console.log(takenBook.name); // Мурзилка
takenBook.state = 50;
takenBook.fix();
console.log(takenBook.state); // 75
library.books.push(takenBook); // но правильнее было бы создать соответствующий метод
console.log(library);


/*
// examples

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100



const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);
 
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15




const library = new Library("Библиотека имени Ленина");
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
console.log(library.giveBookByName("Машина времени"));
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
*/



// students

class Student {
  constructor(name) {
    this.name   = name;
    this.marks  = {};
  }

  addMark(mark, subject) {
    if(mark <2 || mark >5) {
        return;
    }
    if(this.marks[subject] === undefined) {
        this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if(this.marks[subject] === undefined) {
      return 0;
    }
    return this.marks[subject].reduce((sum, current) => sum + current, 0) / this.marks[subject].length;
  }

  getAverage() {
    let subjects = Object.keys(this.marks);
    if(subjects.length === 0) {
      return 0;
    }
    else {
      return subjects.reduce((sum, current) => sum + this.getAverageBySubject(current), 0) / subjects.length;
    }
  }
}

// test

const student = new Student("Олег Никифоров");

student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5

console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.

console.log(student.getAverage()); // Средний балл по всем предметам 4.75

//console.log(student);
