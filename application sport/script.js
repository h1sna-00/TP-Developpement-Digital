

"use strict";

// ==================================
// 1. INITIALISATION
// ==================================

const $ = (selector) => document.querySelector(selector);

const form = $("#athleteForm");
const table = $("#athleteTable");
const modalElement = $("#athleteModal");

const athleteModal = new bootstrap.Modal(modalElement);

const toast = new bootstrap.Toast($("#appToast"));

let athletes = JSON.parse(localStorage.getItem("eliteAthletes")) || [];

const sports = [
    "Football",
    "Basketball",
    "Kickboxing",
    "Athletics"
];

let performanceChart;
let sportsChart;
let trackingChart;


// ==================================
// 2. SAVE DATA
// ==================================

function saveData() {
    localStorage.setItem(
        "eliteAthletes",
        JSON.stringify(athletes)
    );
}


// ==================================
// 3. NOTIFICATIONS
// ==================================

function showToast(message) {

    $("#toastMessage").textContent = message;

    toast.show();

}


// ==================================
// 4. ATHLETE TABLE
// ==================================

function renderAthletes() {

    const search = $("#athleteSearch").value.toLowerCase();

    const filter = $("#sportFilter").value;

    const filtered = athletes.filter(athlete => {

        const matchesName = athlete.name.toLowerCase().includes(search);

        const matchesSport = filter === "all" || athlete.sport === filter;

        return matchesName && matchesSport;

    });

    table.innerHTML = "";

    filtered.forEach(athlete => {

        const row = document.createElement("tr");

        const initial = athlete.name.charAt(0).toUpperCase();

        row.innerHTML = `
            <td>
                <span class="athlete-avatar">${initial}</span>
                <strong></strong>
            </td>

            <td></td>

            <td>${athlete.age} years</td>

            <td>
                <span class="status-active">ACTIVE</span>
            </td>

            <td>
                <button class="action-btn edit-btn" data-id="${athlete.id}">
                    <i class="bi bi-pencil"></i>
                </button>

                <button class="action-btn delete-btn" data-id="${athlete.id}">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;

        row.querySelector("strong").textContent = athlete.name;
        row.cells[1].textContent = athlete.sport;

        table.appendChild(row);

    });

    $("#emptyMessage").classList.toggle(
        "d-none",
        filtered.length !== 0
    );

    $("#totalAthletes").textContent = athletes.length;

    $("#navAthleteCount").textContent = athletes.length;

    renderRecentAthletes();

    updateSportsChart();

}


// ==================================
// 5. ADD / EDIT ATHLETE
// ==================================

$("#addAthleteBtn").addEventListener("click", () => {

    form.reset();

    $("#editId").value = "";

    $("#modalTitle").textContent = "Add New Athlete";

    athleteModal.show();

});


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const id = $("#editId").value;

    const name = $("#athleteName").value.trim();

    const sport = $("#athleteSport").value;

    const age = Number($("#athleteAge").value);

    if (!name || !sports.includes(sport) ||
        !Number.isInteger(age) || age < 1 || age > 100) {

        showToast("Please check the information.");

        return;
    }

    if (id) {

        const athlete = athletes.find(a => a.id === id);

        if (!athlete) return;

        athlete.name = name;
        athlete.sport = sport;
        athlete.age = age;

        showToast("Athlete updated successfully!");

    } else {

        athletes.push({

            id: crypto.randomUUID(),

            name: name,

            sport: sport,

            age: age,

            createdAt: new Date().toISOString()

        });

        showToast("New athlete added successfully!");

    }

    saveData();

    renderAthletes();

    athleteModal.hide();

});


// ==================================
// 6. EDIT / DELETE
// ==================================

table.addEventListener("click", function(event) {

    const editButton = event.target.closest(".edit-btn");

    const deleteButton = event.target.closest(".delete-btn");

    if (editButton) {

        const athlete = athletes.find(
            a => a.id === editButton.dataset.id
        );

        if (!athlete) return;

        $("#editId").value = athlete.id;

        $("#athleteName").value = athlete.name;

        $("#athleteSport").value = athlete.sport;

        $("#athleteAge").value = athlete.age;

        $("#modalTitle").textContent = "Edit Athlete";

        athleteModal.show();

    }

    if (deleteButton) {

        const id = deleteButton.dataset.id;

        const confirmation = confirm(
            "Are you sure you want to delete this athlete?"
        );

        if (!confirmation) return;

        athletes = athletes.filter(a => a.id !== id);

        saveData();

        renderAthletes();

        showToast("Athlete deleted successfully!");

    }

});


// ==================================
// 7. SEARCH AND FILTER
// ==================================

$("#athleteSearch").addEventListener(
    "input",
    renderAthletes
);

$("#sportFilter").addEventListener(
    "change",
    renderAthletes
);


// Global search
$("#globalSearch").addEventListener("input", function() {

    $("#athleteSearch").value = this.value;

    location.hash = "athletes";

    renderAthletes();

});


// ==================================
// 8. RECENT ATHLETES
// ==================================

function renderRecentAthletes() {

    const recent = [...athletes].slice(-5).reverse();

    const container = $("#recentAthletes");

    container.innerHTML = "";

    recent.forEach(athlete => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <span class="athlete-avatar">
                    ${athlete.name.charAt(0).toUpperCase()}
                </span>
                <strong></strong>
            </td>

            <td></td>

            <td>${athlete.age} years</td>

            <td><span class="status-active">ACTIVE</span></td>
        `;

        row.querySelector("strong").textContent = athlete.name;

        row.cells[1].textContent = athlete.sport;

        container.appendChild(row);

    });

}


// ==================================
// 9. SPORTS STATISTICS
// ==================================

function getSportsStatistics() {

    return sports.map(sport =>

        athletes.filter(a => a.sport === sport).length

    );

}


// ==================================
// 10. CHART.JS
// ==================================

Chart.defaults.color = "#8995ad";

Chart.defaults.font.family = "Inter";


// Performance chart

performanceChart = new Chart($("#performanceChart"), {

    type: "line",

    data: {

        labels: [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"
        ],

        datasets: [{

            label: "Performance",

            data: [35, 42, 48, 45, 58, 65, 62, 72, 78, 75, 86, 92],

            borderColor: "#e6b84c",

            backgroundColor: "rgba(230,184,76,0.10)",

            fill: true,

            tension: 0.4,

            pointRadius: 3,

            pointBackgroundColor: "#e6b84c"

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            x: {
                grid: {
                    display: false
                }
            },

            y: {
                beginAtZero: true,

                max: 100,

                grid: {
                    color: "rgba(255,255,255,0.05)"
                }

            }

        }

    }

});


// Sports distribution

sportsChart = new Chart($("#sportsChart"), {

    type: "doughnut",

    data: {

        labels: sports,

        datasets: [{

            data: getSportsStatistics(),

            backgroundColor: [
                "#e6b84c",
                "#4d8dff",
                "#36c99a",
                "#a783ff"
            ],

            borderWidth: 0,

            hoverOffset: 8

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "72%",

        plugins: {

            legend: {
                display: false
            }

        }

    }

});


// Update sports chart

function updateSportsChart() {

    if (!sportsChart) return;

    const values = getSportsStatistics();

    sportsChart.data.datasets[0].data = values;

    sportsChart.update();

    $("#sportLegend").innerHTML = "";

    sports.forEach((sport, index) => {

        const item = document.createElement("span");

        item.innerHTML = `
            <span class="legend-dot"
                style="background:${sportsChart.data.datasets[0].backgroundColor[index]}">
            </span>
        `;

        item.appendChild(document.createTextNode(sport));

        $("#sportLegend").appendChild(item);

    });

}


// Tracking chart

trackingChart = new Chart($("#trackingChart"), {

    type: "bar",

    data: {

        labels: [
            "Discipline",
            "Technique",
            "Teamwork",
            "Consistency"
        ],

        datasets: [{

            label: "Progression",

            data: [90, 84, 78, 92],

            backgroundColor: "#e6b84c",

            borderRadius: 6

        }]

    },

    options: {

        responsive: true,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {

            y: {
                min: 0,
                max: 100
            }

        }

    }

});


// ==================================
// 11. MOBILE MENU
// ==================================

$("#mobileMenu").addEventListener("click", () => {

    $("#sidebar").classList.toggle("show");

});


// ==================================
// 12. NAVIGATION
// ==================================

document.querySelectorAll(".nav-item").forEach(link => {

    link.addEventListener("click", function() {

        document.querySelectorAll(".nav-item").forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

        $("#sidebar").classList.remove("show");

    });

});


// ==================================
// 13. LIGHT / DARK MODE
// ==================================

$("#themeBtn").addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const light = document.body.classList.contains("light-mode");

    localStorage.setItem("eliteTheme", light ? "light" : "dark");

    $("#themeBtn").innerHTML = light
        ? '<i class="bi bi-sun"></i>'
        : '<i class="bi bi-moon-stars"></i>';

    showToast(light ? "Light mode activated" : "Dark mode activated");

});


// Restore theme
if (localStorage.getItem("eliteTheme") === "light") {

    document.body.classList.add("light-mode");

    $("#themeBtn").innerHTML = '<i class="bi bi-sun"></i>';

}


// ==================================
// 14. EXPORT CSV
// ==================================

$("#exportBtn").addEventListener("click", () => {

    const header = ["Name", "Sport", "Age"];

    const rows = athletes.map(a => [
        a.name,
        a.sport,
        a.age
    ]);

    const csv = [header, ...rows]

        .map(row => row.map(value =>
            `"${String(value).replace(/"/g, '""')}"`
        ).join(","))

        .join("\n");

    const blob = new Blob(
        ["\uFEFF" + csv],
        { type: "text/csv;charset=utf-8;" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "elite-athletes.csv";

    link.click();

    URL.revokeObjectURL(url);

    showToast("CSV exported successfully!");

});


// ==================================
// 15. CLEAR DATA
// ==================================

$("#clearBtn").addEventListener("click", () => {

    if (!confirm("Delete all registered athletes?")) return;

    athletes = [];

    saveData();

    renderAthletes();

    showToast("All athlete records deleted.");

});


// ==================================
// 16. CURRENT DATE
// ==================================

$("#currentDate").textContent = new Intl.DateTimeFormat(
    "fr-FR",
    {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
).format(new Date());


// ==================================
// 17. START APPLICATION
// ==================================

renderAthletes();
