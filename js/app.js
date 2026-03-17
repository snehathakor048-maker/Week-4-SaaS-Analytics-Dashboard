import { mockDashboardData } from "./data.js"

const table = document.getElementById("tableData")

function renderTable(){

table.innerHTML=""

mockDashboardData.forEach(user=>{

const row = document.createElement("tr")

row.innerHTML=`

<td>${user.name}</td>
<td>${user.email}</td>
<td>$${user.revenue}</td>
<td class="${user.status.toLowerCase()}">${user.status}</td>
<td>${user.lastLogin}</td>

`

table.appendChild(row)

})

}

renderTable()
