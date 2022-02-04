var employee = JSON.parse(employeeData);


console.table(employee);

for(let val of employee){
   let bigSalary = "";
   let info = "";
   if(val.salary <= 2500){
     bigSalary = "danger";
     info = "Lower Salary";
   }
   else if(val.salary <=3000){
     bigSalary = "warning";
     info = "Good Salary";
   }
   else{
      bigSalary = "success";
      info = "High Salary";
   }

 

    document.getElementById("result").innerHTML += `

 

    
       <th scope="row">${val.id}</th>
       <td class="bg-${bigSalary}">${info}</td>
       <td>${val.firstName}</td>
       <td>${val.lastName}</td>
       <td>${val.emailAddress}</td>
       <td>${val.jobTitle}</td>
       <td>${val.salary}</td>
    
  


`
}




   // document.getElementById("id").innerHTML += val.id;
    // document.getElementById("firstName").innerHTML += val.firstName;
    // document.getElementById("lastName").innerHTML += val.lastName;
    // document.getElementById("email").innerHTML += val.emailAddress;
    // document.getElementById("jobTitle").innerHTML += val.jobTitle;
    // document.getElementById("salary").innerHTML += val.salary;
