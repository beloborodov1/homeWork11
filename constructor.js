function random (min,max){
    return Math.round(Math.random()*(max-min)+min)
}
  
function Company(){
    this.stuff =[];
}
 
Company.levels =[{
    name:'junior',
    salaryFrom:300,
    salaryTo:500
    },{
    name: 'Middle',
    salaryFrom:800,
    salaryTo:1500
    },{
    name: 'Senior',
    salaryFrom:1300,
    salaryTo:4500
    }]

Employee.prototype.clone = function(type){
    return new Employee(this.id,this.name,this.surname,this.level,this.salary,this.technology)
}

Company.prototype.add = function (emp){
    //var i = random(0,2)
    var empClone = emp.clone();
    //empClone.level = Company.levels[i];
    this.stuff.push(empClone);
    //dsalary = (random(Company.levels[i].salaryFrom,Company.levels[i].salaryTo))
    //this.stuff.push(empClone);
}

Company.prototype.remove = function (id){
    this.stuff.splice(this.stuff.findIndex(function(el){
        return el.id === id;
    }),1);
}

Company.prototype.getSalurySum = function (){
    return this.stuff.reduce(function(acc,next){
        return acc+next.salary;
    }, 0);
}

Company.prototype.getAccountInfo = function (){
    return this.stuff.map( function (developer){
        return new AccountantInfo(developer);
    })
}


function Employee (id, name, surname, level, salary, technology, isOccupied) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this. level = level,
    this.salary = salary,
    this.technology = technology;
    this.isOccupied = false;
}

Employee.tech = [
    'JavaScript', 'PHP', '.Net',
    'Java', 'C++', 'C', 'Swift',
    'Delphi', 'HTML', 'DevOps',
    'Administrator', 'Scala'
];

function AccountantInfo(user) {
    this.name = user.name + ' ' + user.surname;
    this.tax = Math.round(user.salary * .05);
    this.salary = user.salary;
}