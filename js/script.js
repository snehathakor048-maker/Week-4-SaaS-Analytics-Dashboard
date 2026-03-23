/* 
   DARK MODE
*/

const toggle = document.getElementById("themeToggle")

// load saved theme
const savedTheme = localStorage.getItem("theme")
if(savedTheme){
document.documentElement.setAttribute("data-theme", savedTheme)
}

toggle.addEventListener("click", () => {

const current = document.documentElement.getAttribute("data-theme")

if(current === "light"){
document.documentElement.setAttribute("data-theme","dark")
localStorage.setItem("theme","dark")
toggle.innerText = "🌙"
}else{
document.documentElement.setAttribute("data-theme","light")
localStorage.setItem("theme","light")
toggle.innerText = "☀️"
}
updateChart(mockDashboardData)
})
