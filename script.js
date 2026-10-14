const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

// Demo tracking: this does not connect to a live courier system.
document.getElementById("trackingForm").addEventListener("submit", event => {
  event.preventDefault();

  const trackingNumber = document
    .getElementById("trackingNumber").value.trim();

  const result = document.getElementById("trackingResult");

  if (!trackingNumber) {
    result.textContent = "Please enter a tracking number.";
    return;
  }

  result.textContent =
    `Tracking number ${trackingNumber} received. ` +
    "Live tracking is not connected yet. Please contact our team for an update.";
});

// Demo quote form: opens an email draft on the customer's device.
document.getElementById("quoteForm").addEventListener("submit", event => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const recipient = "info@yourcompany.co.za"; // Replace with your email.

  const subject = encodeURIComponent("New Logistics Quote Request");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\n` +
    `Email: ${data.get("email")}\n` +
    `Service: ${data.get("service")}\n\n` +
    `Shipment details:\n${data.get("message")}`
  );

  document.getElementById("quoteResult").textContent =
    "Opening your email application. Please review and send your request.";

  window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;
});
