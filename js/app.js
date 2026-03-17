import { mockDashboardData } from "./data.js"

const table = document.getElementById("tableData")

function renderTable(){

table.innerHTML=""

mockDashboardData.forEach(user=>{

const row=document.createElement("tr")

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



/* ======================
   REVENUE CHART
====================== */

const ctx=document.getElementById("revenueChart")

const revenueData = mockDashboardData.map(user=>user.revenue)

const labels = mockDashboardData.map(user=>user.name)

new Chart(ctx,{

type:"line",

data:{

labels:labels,

datasets:[{

label:"Revenue",

data:revenueData,

borderColor:"#3b82f6",

backgroundColor:"rgba(59,130,246,0.2)",

fill:true,

tension:0.4

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

},

scales:{

x:{
ticks:{
color:"#94a3b8"
}
},

y:{
ticks:{
color:"#94a3b8"
}
}

}

}

})
