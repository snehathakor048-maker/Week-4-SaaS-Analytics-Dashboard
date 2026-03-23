import { mockDashboardData } from "./data.js"

const table = document.getElementById("tableData")
const filter = document.getElementById("statusFilter")
const toggle = document.getElementById("themeToggle")

let chart

/* ======================
   TABLE RENDER
====================== */
function renderTable(data){

table.innerHTML=""

data.forEach(user=>{

const row=document.createElement("tr")

row.innerHTML=`
<td>${user.name}</td>
<td>${user.email}</td>
<td>$${user.revenue.toLocaleString()}</td>
<td><span class="status ${user.status.toLowerCase()}">${user.status}</span></td>
<td>${user.lastLogin}</td>
`

table.appendChild(row)

})

}

/* ======================
   FILTER
====================== */
filter.addEventListener("change", ()=>{

const value = filter.value

let filtered = mockDashboardData

if(value !== "all"){
filtered = mockDashboardData.filter(
u => u.status.toLowerCase() === value
)
}

renderTable(filtered)
updateChart(filtered)

})

/* ======================
   CHART
====================== */
const ctx = document.getElementById("revenueChart")

function updateChart(data){

const labels = data.map(u=>u.name)
const revenue = data.map(u=>u.revenue)

// ✅ detect theme
const isLight = document.documentElement.getAttribute("data-theme") === "light"

const textColor = isLight ? "#0f172a" : "#94a3b8"
const gridColor = isLight ? "#e2e8f0" : "#1e293b"

if(chart){
chart.destroy()
}

chart = new Chart(ctx,{
type:"line",
data:{
labels,
datasets:[{
data:revenue,
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
x:{
ticks:{color:textColor},
grid:{color:gridColor}
},
y:{
ticks:{color:textColor},
grid:{color:gridColor}
}
}
}
})

}

/* ======================
   DARK MODE FIX (MAIN PART)
====================== */

// Load saved theme
const savedTheme = localStorage.getItem("theme")
if(savedTheme){
document.documentElement.setAttribute("data-theme", savedTheme)
}

// Button click
toggle.addEventListener("click", ()=>{

let current = document.documentElement.getAttribute("data-theme")

if(current === "light"){
document.documentElement.setAttribute("data-theme","dark")
localStorage.setItem("theme","dark")
toggle.innerText = "🌙"
}else{
document.documentElement.setAttribute("data-theme","light")
localStorage.setItem("theme","light")
toggle.innerText = "☀️"
}

})

/* ======================
   INIT
====================== */
renderTable(mockDashboardData)
updateChart(mockDashboardData)
