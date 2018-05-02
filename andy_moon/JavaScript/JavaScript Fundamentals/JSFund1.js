function names() {
  let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
  ];
  for (i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
}
names();



function names() {

  let users = {
    employees: [
      { 'first_name': 'Miguel', 'last_name': 'Jones' },
      { 'first_name': 'Ernie', 'last_name': 'Bertson' },
      { 'first_name': 'Nora', 'last_name': 'Lu' },
      { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
      { 'first_name': 'Lillian', 'last_name': 'Chambers' },
      { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
  };
  console.log(Object.keys(users)[0]);
  for (i = 0; i < users.employees.length; i++) {
    var a = users.employees[i];
    console.log((i + 1) + " - " + a.last_name + ", " + a.first_name + " - " + (a.last_name.length + a.first_name.length));
  }
  console.log(Object.keys(users)[1]);
  for (j = 0; j < users.managers.length; j++) {
    var b = users.managers[j];
    console.log((j + 1) + " - " + b.last_name + ", " + b.first_name + " - " + (b.last_name.length + b.first_name.length));
  }
}
names();