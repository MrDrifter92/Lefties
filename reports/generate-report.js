// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  
  // Helper: Get URL parameter
  function getParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || "";
  }

  // Fill text fields
  document.getElementById("clientName").textContent = getParam("client");
  document.getElementById("serviceAddress").textContent = getParam("address");
  document.getElementById("jobDate").textContent = getParam("date");
  document.getElementById("technicianName").textContent = getParam("tech");
  document.getElementById("techNotes").textContent = getParam("notes");

  // Fill services list
  const servicesList = getParam("services").split(",");
  const servicesContainer = document.getElementById("servicesList");
  servicesList.forEach(service => {
    if (service.trim()) {
      const li = document.createElement("li");
      li.textContent = service.trim();
      servicesContainer.appendChild(li);
    }
  });

  // Fill before/after images
  document.getElementById("beforeImg").src = getParam("before");
  document.getElementById("afterImg").src = getParam("after");

});
