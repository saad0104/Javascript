let data = "Website Data";

class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(data);
  }
}

class Admin extends user {
  constructor(name, email) {
    super(name, email);
  }

  editData() {
    data = "New Info";
    console.log(data);
  }
}

let std1 = new user("Rhea", "rhea@hotmail.com");
let std2 = new user("Bob", "bob.goodman@gmail.com");
console.log(std1.viewData());


let admin = new Admin("adm1", "adm1@cu.ac.bd");
console.log(admin.editData());
