
---

## 📄 JavaScript Code (`script.js`)

Create a file called **`script.js`** and paste this inside:

```javascript
// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dynamic greeting message
const greeting = document.createElement("p");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning, welcome to Gayaza Church";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon, welcome to Gayaza Church";
} else {
    greeting.textContent = "Good Evening, welcome to Gayaza Church";
}

greeting.style.fontSize = "18px";
greeting.style.color = "#2c3e50";
greeting.style.marginTop = "10px";

// Add greeting below hero heading
document.querySelector(".hero").appendChild(greeting);

// Update footer year automatically
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.innerHTML = `&copy; ${year} Gayaza Church. All Rights Reserved.`;

// Simple contact form validation (only if form exists)
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");

        if (name.value === "" || email.value === "" || message.value === "") {
            alert("Please fill in all fields before submitting.");
        } else {
            alert("Thank you for contacting Gayaza Church. God bless you!");
            form.reset();
        }
    });
}
```

---

## 🔗 Link JavaScript to Your HTML

Add this **before `</body>`** in your HTML file:

```html
<script src="script.js"></script>
```

---





```html
<form>
    <input type="text" id="name" placeholder="Your Name"><br><br>
    <input type="email" id="email" placeholder="Your Email"><br><br>
    <textarea id="message" placeholder="Your Message"></textarea><br><br>
    <button type="submit">Send Message</button>
</form>
```
