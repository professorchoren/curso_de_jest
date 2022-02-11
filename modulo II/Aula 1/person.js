class Person {
  fullName;
  email;
  birthday;
  constructor(fullName, email, birthday) {
    this.fullName = fullName;
    this.email = email;
    this.birthday = birthday;
  }
}

class Employee extends Person {
  salary;

  constructor(fullName, email, birthday, salary) {
    super(fullName, email, birthday);
    this.salary = salary;
  }
}

class Client extends Person {
  address;
  constructor(fullName, email, birthday, address) {
    super(fullName, email, birthday);
    this.address = address;
  }
}

module.exports = { Person, Employee, Client };
