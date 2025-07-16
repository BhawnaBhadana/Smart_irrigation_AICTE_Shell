// ✅ Simulated sensor data — just like first row from your CSV
const sensorData = {
  "sensor_0": 4.0,
  "sensor_1": 2.0,
  "sensor_2": 3.0,
  "sensor_3": 7.0,
  "sensor_4": 1.0,
  "sensor_5": 0.0
};

// 🌿 Render sensor data into the table
const tableBody = document.querySelector("#sensorTable tbody");

Object.entries(sensorData).forEach(([key, value]) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${key}</td><td>${value}</td>`;
  tableBody.appendChild(row);
});

// 💧 Irrigation advice logic (based on average of displayed sensors)
const values = Object.values(sensorData);
const avg = values.reduce((sum, val) => sum + val, 0) / values.length;

let advice = "";
if (avg < 2) {
  advice = "🚨 Very Dry Soil – Immediate Irrigation Needed";
} else if (avg < 4) {
  advice = "💧 Moisture Low – Consider Irrigation Soon";
} else {
  advice = "✅ Moisture Level is Sufficient";
}

document.getElementById("adviceText").textContent = advice;
