const ctx = document.getElementById('chart');

new Chart(ctx, {

type: 'line',

data: {

labels: ['Jan','Feb','Mar','Apr','May','Jun'],

datasets: [{

label: 'Revenue',

data: [5000,8000,6000,9000,11000,15000],

borderColor: '#3b82f6',

tension:0.4

}]

},

options:{

plugins:{
legend:{
display:false
}
}

}

});
