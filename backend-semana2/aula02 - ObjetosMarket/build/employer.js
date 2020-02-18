"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        Employer.totalOfEmployee++;
    }
}
exports.Employer = Employer;
Employer.totalOfEmployee = 0;
//# sourceMappingURL=employer.js.map