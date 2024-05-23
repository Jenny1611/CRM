
/*----------------------------------DASHBOARD----------------------------------------------------*/

// Sales Funnel Chart
var salesFunnelCtx = document.getElementById('salesFunnelChart').getContext('2d');
var salesFunnelChart = new Chart(salesFunnelCtx, {
    type: 'bar',
    data: {
        labels: ['Prospects', 'Qualified', 'Proposal', 'Closed'],
        datasets: [{
            label: 'Sales Funnel',
            data: [100, 50, 25, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,  // Assicura che il grafico mantenga le proporzioni
    }
});

// Activity Chart
var activityCtx = document.getElementById('activityChart').getContext('2d');
var activityChart = new Chart(activityCtx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
            label: 'Attività',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,  // Assicura che il grafico mantenga le proporzioni
    }
});

// Deals Milestones Chart
var dealsMilestonesCtx = document.getElementById('dealsMilestonesChart').getContext('2d');
var dealsMilestonesChart = new Chart(dealsMilestonesCtx, {
    type: 'pie',
    data: {
        labels: ['Iniziale', 'In corso', 'Chiusi','Persi'],
        datasets: [{
            label: 'Milestones',
            data: [30, 25, 30,15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(144, 238, 144, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(144, 238, 144, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,  // Assicura che il grafico mantenga le proporzioni
    }
});

// Revenue Chart
var revenueCtx = document.getElementById('revenueChart').getContext('2d');
var revenueChart = new Chart(revenueCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Ricavi',
            data: [1000, 2000, 1500, 2500, 3000, 4000],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,  // Assicura che il grafico mantenga le proporzioni
    }
});

// Email Opened Chart
var emailOpenedCtx = document.getElementById('emailOpenedChart').getContext('2d');
var emailOpenedChart = new Chart(emailOpenedCtx, {
    type: 'pie',
    data: {
        labels: ['Aperte', 'Non Aperte'],
        datasets: [{
            label: 'Email Aperte',
            data: [30, 70],  // Adatta i valori a seconda delle tue esigenze
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true  // Assicura che il grafico mantenga le proporzioni
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const labels = ['Mario Task', 'Pippo Task', 'Gigi Task', 'Giorgio Task', 'Anna Task', 'Giulia Task', 'Armando Task'];
    const data = {
        labels: labels,
        datasets: [{
            axis: 'y',
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    };
    const activityChart = new Chart(
        document.getElementById('activityChart2'),
        config
    );
});
/**-------------------------------------FINE ------------------------------------------------ */


/*
var xValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var yValues = [0, 30, 15, 2, 45, 20, 60, 53, 100, 75, 50];

new Chart("graficoCartesiano", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
        }]
    },
    options: {
        responsive: false,
        legend: { display: true },
        scales: {
            yAxes: [{ ticks: { min: 0, max: 100 } }],
            xAxes: [{ ticks: { min: 0, max: 100 } }]
        }
    }
});


const ctx = document.getElementById('myDoughnutChart').getContext('2d');

const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Viola', 'Giallo', 'Blu'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(150, 0, 255)',
                'rgb(255, 255, 0)',
                'rgb(00, 00, 255)',
            ],
            borderColor: [
                'rgb(150, 0, 255)',
                'rgb(255, 255, 0)',
                'rgb(00, 00, 255)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
});
*/

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);

    if (event.target.className === "div-ondrop") {
        event.target.appendChild(draggedElement);
    } else if (event.target.className === 'div-drag') {
        event.target.insertAdjacentElement('afterend', draggedElement);
    }
}


const email_opening = document.getElementByClassName("email-box-unopened");
const icon_path = document.getElementById('make-image').src = "/sidebar/" + email_aperta + ".jpg";
const email_icon_path;
email_opening.array.forEach(email => {

    email.addEventListener('click'){
        email.className("email-box-opened")
        email_icon = icon_path;
        

    }
});

