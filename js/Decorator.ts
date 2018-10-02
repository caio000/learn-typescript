@course
class Person {
  constructor(
    private name: string
  ){ }
}

function course (target: any) {
  Object.defineProperty(target.prototype, "course", {
    value: () => "typescript aprendendo junto devdojo"
  });
}

let person = new Person('fulano');
console.log(person.course);


// Decorators com Parâmetros
@Course({
  course: 'Typescript'
})
class Teacher {
  constructor(
    private name: string,
  ){ }
}

function Course(config: any) {
  return (target: any) => {
    Object.defineProperty(target.prototype, "course", {
      value: () => config.course
    });
  }
}


const teacher = new Teacher('beltrano');
console.log(teacher.course());
