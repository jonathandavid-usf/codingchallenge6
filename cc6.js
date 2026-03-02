class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}
 
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${super.describe()} They manage a team of ${this.teamSize} people.`;
    }
}

const emp1 = new Employee("Wilson", "Engineering");
const emp2 = new Employee("Biff", "Marketing");
const mgr1 = new Manager("Chuck", "Engineering", 5);
const mgr2 = new Manager("Diana", "Marketing", 3);
 
class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}

const company = new Company();
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mgr1);
company.addEmployee(mgr2);
company.listEmployees();
