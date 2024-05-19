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


let dashboard = document.getElementById('dashboard')

let clienti = document.getElementById('clienti')
let contentClienti = document.getElementById('content-clienti')


let daContattare = document.getElementById('da-contattare')
let contentDaContattare = document.getElementById('content-da-contattare')


let contattati = document.getElementById('contattati')
let contentContattati = document.getElementById('content-contattati')

dashboard.addEventListener('click', () => {
    contentClienti.style.display = 'block';
    contentDaContattare.style.display = 'block';
    contentContattati.style.display = 'block';
    dashboard.className = "current-page";
    clienti.className = "";
    daContattare.className = "";
    contattati.className = "";
})

clienti.addEventListener('click', () => {
    contentClienti.style.display = 'block';
    contentDaContattare.style.display = 'none';
    contentContattati.style.display = 'none';
    clienti.className = "current-page";
    dashboard.className = "";
    daContattare.className = "";
    contattati.className = "";
})

daContattare.addEventListener('click', () => {
    contentClienti.style.display = 'none';
    contentDaContattare.style.display = 'block';
    contentContattati.style.display = 'none';
    daContattare.className = "current-page";
    dashboard.className = "";
    clienti.className = "";
    contattati.className = "";
})

contattati.addEventListener('click', () => {
    contentClienti.style.display = 'none';
    contentDaContattare.style.display = 'none';
    contentContattati.style.display = 'block';
    contattati.className = "current-page";
    dashboard.className = "";
    daContattare.className = "";
    clienti.className = "";
})