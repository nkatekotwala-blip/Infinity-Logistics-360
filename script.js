const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation"
  );
  menuToggle.textContent = open ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
      });
});

// Automatic copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Demo shipment tracking
document.getElementById("trackingForm").addEventListener("submit", event => {
  event.preventDefault();

  const reference = document
    .getElementById("trackingNumber").value.trim();

  const result = document.getElementById("trackingResult");

  if (!reference) {
    result.textContent = "Please enter a tracking reference.";
    return;
  }
  result.textContent =
    "Reference " + reference +
    " is ready for an enquiry. Live tracking is not connected yet.";

  // Prepare an email enquiry using the entered reference.
  const recipient = "info@infinitylogistics360.co.za";
  const subject = encodeURIComponent(
    "Shipment tracking enquiry: " + reference
  );
  const body = encodeURIComponent(
    "Hello Infinity Logistics 360,\n\n" +
    "Please provide an update for shipment reference: " +
    reference + ".\n\nThank you."
  );

  const emailLink =
    "mailto:" + recipient +
    "?subject=" + subject +
    "&body=" + body;
    const link = document.createElement("a");
  link.href = emailLink;
  link.textContent = " Email our team about this shipment";
  link.className = "text-link";
  link.style.display = "block";
  link.style.marginTop = "8px";

  result.appendChild(document.createElement("br"));
  result.appendChild(link);
});

// Quote request via the customer's email application
document.getElementById("quoteForm").addEventListener("submit", event => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);

  // Replace with your actual business email.
  const recipient = "info@infinitylogistics360.co.za";

  const subject = encodeURIComponent(
    "Quote Request - Infinity Logistics 360"
  );

  const body = encodeURIComponent(
    "INFINITY LOGISTICS 360 - QUOTE REQUEST\n\n" +
    "Name: " + data.get("name") + "\n" +
    "Email: " + data.get("email") + "\n" +
    "Phone: " + (data.get("phone") || "Not provided") + "\n" +
    "Service: " + data.get("service") + "\n\n" +
    "Shipment details:\n" + data.get("message")
  );
  document.getElementById("quoteResult").textContent =
    "Your email application will open. Review and send your request.";

  window.location.href =
    "mailto:" + recipient +
    "?subject=" + subject +
    "&body=" + body;
});
   
