// Rudransh Infotech Interactive Logic

// Ensure siteConfig is loaded
if (typeof siteConfig === 'undefined') {
    console.error("Critical Error: data.js not loaded. Please check index.html");
}

const modal = document.getElementById("inquiryModal");
const serviceInput = document.getElementById("serviceNameInput");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("inquiryForm");
const servicesContainer = document.getElementById("services-container");

// 1. Dynamic Content Rendering
function renderServices() {
    if (!servicesContainer) return;

    servicesContainer.innerHTML = ""; // Clear existing

    siteConfig.categories.forEach(category => {
        // Create Category Header
        const header = document.createElement("h3");
        header.className = "category-header";
        header.innerHTML = `<i class="${category.icon}"></i> ${category.title}`;
        servicesContainer.appendChild(header);

        // Create Grid
        const grid = document.createElement("div");
        grid.className = "interactive-grid";

        // Create Cards
        category.services.forEach(service => {
            const card = document.createElement("div");
            card.className = "card";
            card.onclick = () => openModal(service.name);

            card.innerHTML = `
                <i class="${service.icon}"></i>
                <h4>${service.name}</h4>
                <p>${service.desc}</p>
            `;
            grid.appendChild(card);
        });

        servicesContainer.appendChild(grid);
    });
}

// 2. Modal Logic
function openModal(serviceName) {
    modal.style.display = "flex";
    serviceInput.value = serviceName;
    modalTitle.innerHTML = `Inquire about: <span style="color:#fbc2eb">${serviceName}</span>`;
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 3. Form Handling (Mailto Fallback)
form.onsubmit = function (e) {
    e.preventDefault();

    const name = document.getElementById("userName").value;
    const phone = document.getElementById("userPhone").value;
    const service = serviceInput.value;
    const msg = document.getElementById("userMessage").value;
    const emailTo = siteConfig.contact.email;

    alert(`Thank you ${name}! We have received your request for "${service}". We will call you at ${phone} shortly.`);

    const mailtoLink = `mailto:${emailTo}?subject=Service Request: ${service}&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0AMessage: ${msg}`;

    window.location.href = mailtoLink;

    modal.style.display = "none";
    form.reset();
}

// 4. WhatsApp Logic
function sendWhatsapp() {
    const service = serviceInput.value;
    const name = document.getElementById("userName").value || "Customer";
    const myNumber = siteConfig.contact.whatsappNumber;

    const text = `Hello Rudransh Infotech,%0AI am interested in: *${service}*.%0AMy Name: ${name}.`;

    const waLink = `https://wa.me/${myNumber}?text=${text}`;
    window.open(waLink, '_blank');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    console.log("Services loaded from config.");
});


/* AI Chat Logic */
const chatWindow = document.getElementById('chat-window');

function toggleChat() {
    if (chatWindow.style.display === 'flex') {
        chatWindow.style.display = 'none';
    } else {
        chatWindow.style.display = 'flex';
        // Focus input
        setTimeout(() => document.getElementById('chat-input').focus(), 100);
    }
}

function handleChatInput(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if (!msg) return;

    // 1. Add User Message
    addMessage(msg, 'user-msg');
    input.value = '';

    // 2. Add "Typing..." Indicator
    const chatBody = document.getElementById('chat-body');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'msg bot-msg typing-indicator';
    typingDiv.innerHTML = '<p><em>AI is typing...</em></p>';
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    // 3. Simulate AI thinking
    setTimeout(() => {
        // Remove typing indicator
        typingDiv.remove();

        const lowerMsg = msg.toLowerCase();
        let reply = "";
        let shouldOpenWhatsapp = false;

        if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('charge') || lowerMsg.includes('money')) {
            reply = "💰 Our pricing is very reasonable and depends on the work. I'm connecting you to our WhatsApp team for a quick & free quote! 📉";
            shouldOpenWhatsapp = true;
        } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('namaste')) {
            reply = "Namaste! 🙏 I am Rudransh AI, your personal assistant. Please tell me how I can serve you today?";
            shouldOpenWhatsapp = false;
        } else if (lowerMsg.includes('thank') || lowerMsg.includes('good')) {
            reply = "You are most welcome! 🌹 It is our honor to help you. We are always here for you.";
            shouldOpenWhatsapp = false;
        } else if (lowerMsg.includes('data') || lowerMsg.includes('recover') || lowerMsg.includes('delete')) {
            reply = "Don't panic! 🛡️ We are experts in Data Recovery. Your data is likely safe. Connecting you to our Recovery Specialist on WhatsApp...";
            shouldOpenWhatsapp = true;
        } else {
            reply = "✅ Rest assured! We understand your concern and we will definitely fix it. I am connecting you to our senior engineer on WhatsApp right now... 🛠️";
            shouldOpenWhatsapp = true;
        }

        addMessage(reply, 'bot-msg');

        // After small delay, open WhatsApp
        if (shouldOpenWhatsapp) {
            setTimeout(() => {
                const myNumber = siteConfig.contact.whatsappNumber;
                const text = `*Message from Website AI Chat*:%0A%0A"${msg}"%0A%0APlease reply.`;
                const waLink = `https://wa.me/${myNumber}?text=${text}`;
                window.location.href = waLink;
            }, 3000);
        }

    }, 1500); // 1.5s delay
}

function addMessage(text, className) {
    const chatBody = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = `msg ${className}`;
    div.innerHTML = `<p>${text}</p>`;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}
