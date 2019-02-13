var company = new Company();

for (var i = 0; i <10; i++){
    j = random(0,2)
    company.add(
        new Employee (
            i+1,
            'random' + i,
            'RandomSur' + i,
            Company.levels[j].name,
            random(Company.levels[j].salaryFrom,Company.levels[j].salaryTo),
            Employee.tech [random(0,Employee.tech.length-1)]),     
    )
}


var accInfo = company.getAccountInfo();
var salarySum = company.getSalurySum();
console.log(company,accInfo,salarySum);