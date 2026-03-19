import { mockDashboardData } from "./data.js"

const table = document.getElementById("tableData")

function renderTable(){

table.innerHTML=""

/* FORMAT FUNCTION */
function formatCurrency(num){
return "$" + num.toLocaleString()
}

mockDashboardData.forEach(user=>{

const row=document.createElement("tr")

row.innerHTML=`

<td>${user.name}</td>
<td>${user.email}</td>
<td>${formatCurrency(user.revenue)}</td>
<td>
<span class="status ${user.status.toLowerCase()}">
${user.status}
</span>
</td>
<td>${user.lastLogin}</td>

`

table.appendChild(row)

})

}

renderTable()

/* CHART */

const ctx=document.getElementById("revenueChart")

const labels = mockDashboardData.map(user=>user.name)
const revenueData = mockDashboardData.map(user=>user.revenue)

new Chart(ctx,{

type:"line",

data:{
labels:labels,
datasets:[{
data:revenueData,
borderColor:"#3b82f6",
backgroundColor:"rgba(59,130,246,0.2)",
fill:true,
tension:0.4
}]
},

options:{
responsive:true,
maintainAspectRatio:false,
plugins:{legend:{display:false}},
scales:{
x:{ticks:{color:"#94a3b8"}},
y:{ticks:{color:"#94a3b8"}}
}
}

})
