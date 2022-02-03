var employee = JSON.parse(employeeData);


console.table(employee);

for(let val of employee){


 

    document.getElementById("result").innerHTML += `

 

    
       <th scope="row">${val.id}</th>
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
