const { Employee, Client } = require("./person");

module.exports = class PersonFactory {
  getPerson(type) {
    if (type == null) {
      return null;
    }

    switch (type.toLowerCase()) {
      case "employee":
        return new Employee();
      case "client":
        return new Client();
      default:
        return null;
    }
  }
};
