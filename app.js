// - 21 yoshdan kichik bo'lgan talabalarni o'chirib yangi massiv qaytaring
// - Ingliz tili o'qiydigan qizlarni qaytaring, yangi massivda
// - Kimyo o'qimaydigan bollarni o'chirib yangi massiv qaytaring
// - { name: "Vali", age: 25, gender: "male", subjects: ["Math"] } ushbu objectni studentlar qatoriga qo'shing
// - { name: "Suhrob", age: 20, gender: "male", subjects: ["Geography", "History"] } aynan shu bilan bir xil bo'lgan objectni massiv ichidan qidirib topadigan funksiya yozing. Umuman olgan parametridan obyekt qabul qiladi va uni qidiradi

const students = [
  { name: "Ali", age: 20, gender: "male", subjects: ["Math", "Physics"] },
  {
    name: "Zarina",
    age: 21,
    gender: "female",
    subjects: ["English", "History"],
  },
  {
    name: "Bekzod",
    age: 22,
    gender: "male",
    subjects: ["Biology", "Chemistry"],
  },
  {
    name: "Gulnora",
    age: 19,
    gender: "female",
    subjects: ["Math", "Informatics"],
  },
  { name: "Iskandar", age: 23, gender: "male", subjects: ["Physics", "Math"] },
  {
    name: "Suhrob",
    age: 20,
    gender: "male",
    subjects: ["Geography", "History"],
  },
  { name: "Madina", age: 21, gender: "female", subjects: ["English", "Art"] },
  {
    name: "Sardor",
    age: 19,
    gender: "male",
    subjects: ["Informatics", "Math"],
  },
  {
    name: "Malika",
    age: 22,
    gender: "female",
    subjects: ["Biology", "History"],
  },
  { name: "Shokir", age: 20, gender: "male", subjects: ["Chemistry", "Math"] },
  {
    name: "Alisher",
    age: 21,
    gender: "male",
    subjects: ["Physics", "History"],
  },
  { name: "Nigora", age: 19, gender: "female", subjects: ["English", "Art"] },
  {
    name: "Sherzod",
    age: 22,
    gender: "male",
    subjects: ["Math", "Informatics"],
  },
  {
    name: "Dilshod",
    age: 23,
    gender: "male",
    subjects: ["Physics", "Geography"],
  },
  { name: "Yulduz", age: 20, gender: "female", subjects: ["Art", "History"] },
  { name: "Xurshid", age: 21, gender: "male", subjects: ["Math", "Physics"] },
  {
    name: "Feruza",
    age: 19,
    gender: "female",
    subjects: ["Biology", "English"],
  },
  {
    name: "Abdulloh",
    age: 22,
    gender: "male",
    subjects: ["Geography", "Math"],
  },
  {
    name: "Shahnoza",
    age: 20,
    gender: "female",
    subjects: ["Informatics", "Physics"],
  },
  { name: "Zokir", age: 23, gender: "male", subjects: ["Math", "Biology"] },
];

// - 21 yoshdan kichik bo'lgan talabalarni o'chirib yangi massiv qaytaring
let filterStudent = students.filter((students) => students.age > 21);

console.log(filterStudent);

// - Ingliz tili o'qiydigan qizlarni qaytaring, yangi massivda
let filterStudent1 = students.filter(
  (students) =>
    students.gender == "female" && students.subjects.includes("English")
);

console.log(filterStudent1);

// - Kimyo o'qimaydigan bollarni o'chirib yangi massiv qaytaring
let filterStudent2 = students.filter(
  (students) =>
    students.gender == "male" && students.subjects.includes("Chemistry")
);
console.log(filterStudent2);

// - { name: "Vali", age: 25, gender: "male", subjects: ["Math"] } ushbu objectni studentlar qatoriga qo'shing

const newStudent = {
  name: "Vali",
  age: 25,
  gender: "male",
  subjects: ["Math"],
};
students.push(newStudent);
console.log(students);

// - { name: "Suhrob", age: 20, gender: "male", subjects: ["Geography", "History"] } aynan shu bilan bir xil bo'lgan objectni massiv ichidan qidirib topadigan funksiya yozing. Umuman olgan parametridan obyekt qabul qiladi va uni qidiradi
const findStudent = students.find(
  (students) =>
    students.gender == "male" &&
    students.name == "Suhrob" &&
    students.age == 20 &&
    students.subjects.includes("Geography") &&
    students.subjects.includes("History")
);
console.log(findStudent);

//  array metodi bo'lgan sort bilan bir xil ishlaydigan funksiya yozing. 
// Unga ko'ra 1-parametridan massiv 2-parametridan "asc" yoki "desc" so'zlarini 
// qabul qiladi. Agar "asc" berilsa massivni o'sish "desc" berilsa kamayish tartibida
//  tartiblab qaytarib beradi. sort metodini ishlatmang.

Array.prototype.mySort = function (order) {
  let n = this.length;
  if (order !== "asc" && order !== "desc") {
    return false;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (order === "asc") {
        if (this[j] > this[j + 1]) {
          let temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      } else if (order === "desc") {
        if (this[j] < this[j + 1]) {
          let temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }
  }
  return this;
};
let arr5 = [15, 68, 95, 26, 3, 15, 478];
console.log(arr5.mySort("desc"));
