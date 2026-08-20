/* 
 * PROJECT: NEXSTAY - Hostel Management System
 * PURPOSE: Collage Semester 4 Frontend Project
 * DEVELOPED BY: [Your Name]
 * ROLL NO: [Your Roll No]
 * DATE: April 2026
 * ------------------------------------------------------------
 * MAIN JAVASCRIPT LOGIC FILE
 * Handles everything from Mess Menu to Room Allotment
 */

// ------------------------------------------------------------
// 1. MESS MENU SETTINGS
// ------------------------------------------------------------
const messData = [
    { day: 'Monday', meals: [
        { name: 'Breakfast', time: '07:30 AM – 09:30 AM', items: 'Poha, Boiled Egg / Banana, Bread Butter, Tea / Coffee' },
        { name: 'Lunch',     time: '12:30 PM – 02:30 PM', items: 'Dal Tadka, Steamed Rice, Phulka, Aloo Gobi, Salad, Buttermilk' },
        { name: 'Snacks',    time: '05:00 PM – 06:15 PM', items: 'Bread Pakora, Green Chutney, Masala Chai' },
        { name: 'Dinner',    time: '08:00 PM – 10:00 PM', items: 'Rajma Chawal, Roti, Mix Veg, Raita, Gulab Jamun' }
    ]},
    { day: 'Tuesday', meals: [
        { name: 'Breakfast', time: '07:30 AM – 09:30 AM', items: 'Idli (4 pcs), Sambar, Coconut Chutney, Tea / Coffee' },
        { name: 'Lunch',     time: '12:30 PM – 02:30 PM', items: 'Chole, Puri, Jeera Rice, Cucumber Salad, Lassi' },
        { name: 'Snacks',    time: '05:00 PM – 06:15 PM', items: 'Samosa (2 pcs), Tamarind Chutney, Ginger Tea' },
        { name: 'Dinner',    time: '08:00 PM – 10:00 PM', items: 'Paneer Butter Masala, Roti, Dal Makhani, Jeera Rice, Kheer' }
    ]},
    { day: 'Wednesday', meals: [
        { name: 'Breakfast', time: '07:30 AM – 09:30 AM', items: 'Upma, Coconut Chutney, Boiled Egg / Fruit, Tea / Coffee' },
        { name: 'Lunch',     time: '12:30 PM – 02:30 PM', items: 'Kadhi Pakora, Rice, Roti, Bhindi Fry, Papad, Salad' },
        { name: 'Snacks',    time: '05:00 PM – 06:15 PM', items: 'Veg Cutlet, Mint Chutney, Masala Chai' },
        { name: 'Dinner',    time: '08:00 PM – 10:00 PM', items: 'Dal Fry, Steamed Rice, Missi Roti, Aloo Matar, Halwa' }
    ]},
    { day: 'Thursday', meals: [
        { name: 'Breakfast', time: '07:30 AM – 09:30 AM', items: 'Idli Sambar, Coconut Chutney, Bread Butter, Tea / Coffee' },
        { name: 'Lunch',     time: '12:30 PM – 02:30 PM', items: 'Dal Tadka, Steamed Rice, Roti, Seasonal Mix Veg, Salad' },
        { name: 'Snacks',    time: '05:00 PM – 06:15 PM', items: 'Samosa, Mint Chutney, Masala Chai' },
        { name: 'Dinner',    time: '08:00 PM – 10:00 PM', items: 'Paneer Butter Masala, Jeera Rice, Tandoori Roti, Dal Makhani, Kheer' }
    ]},
    { day: 'Friday', meals: [
        { name: 'Breakfast', time: '07:30 AM – 09:30 AM', items: 'Puri Bhaji, Pickle, Boiled Egg / Banana, Tea / Coffee' },
        { name: 'Lunch',     time: '12:30 PM – 02:30 PM', items: 'Yellow Dal, Rice, Roti, Soya Curry, Raita, Papad' },
        { name: 'Snacks',    time: '05:00 PM – 06:15 PM', items: 'Dhokla, Green Chutney, Masala Chai' },
        { name: 'Dinner',    time: '08:00 PM – 10:00 PM', items: 'Veg Biryani, Raita, Salan, Gulab Jamun, Roti' }
    ]},
    { day: 'Saturday', meals: [
        { name: 'Breakfast', time: '08:00 AM – 10:00 AM', items: 'Aloo Paratha, Curd, Pickle, Butter, Tea / Coffee' },
        { name: 'Lunch',     time: '12:30 PM – 02:30 PM', items: 'Chana Masala, Rice, Roti, Aloo Palak, Salad, Sweet Lassi' },
        { name: 'Snacks',    time: '05:00 PM – 06:15 PM', items: 'Maggi / Popcorn, Ketchup, Tea' },
        { name: 'Dinner',    time: '08:00 PM – 10:00 PM', items: 'Dal Makhani, Butter Naan, Jeera Rice, Mix Veg, Ice Cream' }
    ]},
    { day: 'Sunday', meals: [
        { name: 'Breakfast', time: '08:30 AM – 10:30 AM', items: 'Chole Bhature, Pickle, Halwa, Tea / Coffee' },
        { name: 'Lunch',     time: '01:00 PM – 03:00 PM', items: 'Special Thali: Paneer Curry, Dal, Rice, Roti, Papad, Sweet, Salad' },
        { name: 'Snacks',    time: '05:00 PM – 06:15 PM', items: 'Pav Bhaji, Butter, Masala Chai' },
        { name: 'Dinner',    time: '08:00 PM – 10:00 PM', items: 'Veg Pulao, Raita, Roti, Dal Tadka, Gajar Halwa' }
    ]}
];

// This function changes the table content based on day clicked
function switchMessDay(index, btn) {
    document.querySelectorAll('#messDayBtns .btn-secondary').forEach(b => {
        b.style.background = ''; b.style.color = ''; b.style.borderColor = '';
    });
    btn.style.background = 'var(--primary)';
    btn.style.color = 'white';
    btn.style.borderColor = 'var(--primary)';
    
    // Target the table where data will be shown
    const tbody = document.getElementById('messTableBody');
    if (!tbody) return;
    tbody.innerHTML = messData[index].meals.map(m => `
        <tr>
            <td style="font-weight:700;color:var(--primary);white-space:nowrap;">${m.name}</td>
            <td style="white-space:nowrap;color:var(--text-muted);font-size:0.85rem;">${m.time}</td>
            <td>${m.items}</td>
        </tr>`).join('');
}

// ------------------------------------------------------------
// 2. HELPER FUNCTIONS
// ------------------------------------------------------------

// Function to show custom alert (Toast)
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const icons = {
        success: 'fa-circle-check',
        error:   'fa-circle-xmark',
        warning: 'fa-triangle-exclamation',
        info:    'fa-circle-info'
    };
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.cssText = type === 'error'
        ? 'background: linear-gradient(135deg, #b91c1c, #7f1d1d);'
        : type === 'warning'
        ? 'background: linear-gradient(135deg, #b45309, #78350f);'
        : type === 'info'
        ? 'background: linear-gradient(135deg, #1d4ed8, #1e3a8a);'
        : '';
    toast.innerHTML = `<i class="fa-solid ${icons[type] || icons.success}"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3200);
}

// ============================================================
//  UTILITY: Ripple Effect
// ============================================================
function addRipple(e, btn) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px;`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
}

// ============================================================
//  MODAL HELPERS
// ============================================================
function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add('active');
}
function closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove('active');
}

// Close any modal when clicking the dark overlay
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('glass-overlay')) {
        document.querySelectorAll('.glass-overlay.active').forEach(m => m.classList.remove('active'));
    }
});

// ============================================================
//  LOGIN MODAL & AUTHENTICATION
// ============================================================
function openLogin() {
    openModal('loginModal');
}
function closeLogin() {
    closeModal('loginModal');
}

// Toggle password visibility (eye icon)
function togglePasswordVisibility(inputId, btn) {
    const input = typeof inputId === 'string' ? document.getElementById(inputId) : inputId;
    if (!input) return;

    const icon = btn.querySelector('i') || btn;
    if (input.type === 'password') {
        input.type = 'text';
        if (icon) {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
        btn.setAttribute('aria-label', 'Hide password');
        btn.setAttribute('title', 'Hide password');
    } else {
        input.type = 'password';
        if (icon) {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
        btn.setAttribute('aria-label', 'Show password');
        btn.setAttribute('title', 'Show password');
    }
}

// Sync placeholder when role radio changes
function handleRoleChange(role) {
    const emailInput = document.getElementById('loginEmail');
    if (!emailInput) return;
    if (role === 'admin') {
        emailInput.placeholder = 'admin@nexstay.edu';
    } else if (role === 'warden') {
        emailInput.placeholder = 'warden@nexstay.edu';
    } else {
        emailInput.placeholder = 'student@nexstay.edu';
    }
}

// Valid registered users database
const NEXSTAY_USERS = {
    'student@nexstay.edu': { passwords: ['password123', 'student123', '123456'], role: 'student', name: 'Priya Sharma' },
    'priya@nexstay.edu':   { passwords: ['password123', 'priya123', '123456'],   role: 'student', name: 'Priya Sharma' },
    'warden@nexstay.edu':  { passwords: ['password123', 'warden123', '123456'],  role: 'warden',  name: 'R. K. Verma' },
    'verma@nexstay.edu':   { passwords: ['password123', 'verma123', '123456'],   role: 'warden',  name: 'R. K. Verma' },
    'admin@nexstay.edu':   { passwords: ['password123', 'admin123', '123456'],   role: 'admin',   name: 'Dr. S. K. Gupta' },
    'director@nexstay.edu':{ passwords: ['password123', 'admin123', '123456'],   role: 'admin',   name: 'Dr. S. K. Gupta' },
    'demo@nexstay.edu':    { passwords: ['password123', 'demo123', '123456'],    role: 'student', name: 'Demo Student' },
    'you@nexstay.edu':     { passwords: ['password123', 'nexstay123', '123456'], role: 'student', name: 'Priya Sharma' },
    'shivammiui5g@gmail.com': { passwords: ['password123', 'admin123', '123456'], role: 'admin', name: 'Shivam' }
};

// Role-based redirect on Sign In with validation & error handling
function handleLogin() {
    const emailInput = document.getElementById('loginEmail') || document.querySelector('#loginModal input[type="email"]');
    const passInput  = document.getElementById('loginPassword') || document.querySelector('#loginModal input[type="password"], #loginModal input[type="text"]');

    const email = emailInput ? emailInput.value.trim() : '';
    const password = passInput ? passInput.value : '';

    // 1. Email validation with regex: ^[^\s@]+@[^\s@]+\.[^\s@]+$
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showToast('Please enter your email address.', 'error');
        if (emailInput) emailInput.focus();
        return;
    }
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        if (emailInput) emailInput.focus();
        return;
    }

    // 2. Password minimum length validation (>= 6 chars)
    if (!password) {
        showToast('Please enter your password.', 'error');
        if (passInput) passInput.focus();
        return;
    }
    if (password.length < 6) {
        showToast('Password must be at least 6 characters.', 'error');
        if (passInput) passInput.focus();
        return;
    }

    // 3. User verification against database
    const normalizedEmail = email.toLowerCase();
    
    // Check registered custom users from localStorage if any
    let dynamicUsers = {};
    try {
        const stored = localStorage.getItem('nexstay_registered_users');
        if (stored) dynamicUsers = JSON.parse(stored);
    } catch (e) {
        console.warn('Error reading stored users:', e);
    }

    const allUsers = { ...NEXSTAY_USERS, ...dynamicUsers };
    const user = allUsers[normalizedEmail];

    // Error Handling: Wrong email → "User not found"
    if (!user) {
        showToast('User not found', 'error');
        if (emailInput) emailInput.focus();
        return;
    }

    // Error Handling: Wrong password → "Incorrect password"
    const validPasswords = Array.isArray(user.passwords) ? user.passwords : [user.password];
    if (!validPasswords.includes(password)) {
        showToast('Incorrect password', 'error');
        if (passInput) passInput.focus();
        return;
    }

    // Success: "Login successful"
    showToast('Login successful', 'success');

    // Persist session info
    const roles = document.getElementsByName('role');
    let selectedRole = user.role || 'student';
    roles.forEach(r => { if (r.checked) selectedRole = r.value; });

    localStorage.setItem('nexstay_user_email', normalizedEmail);
    localStorage.setItem('nexstay_user_name', user.name || 'User');
    localStorage.setItem('nexstay_user_role', selectedRole);

    const btn = document.querySelector('#loginModal button[type="submit"], #loginModal .btn-primary');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Signing In...';
    }

    setTimeout(() => {
        if (selectedRole === 'admin')        window.location.href = 'admin.html';
        else if (selectedRole === 'warden')  window.location.href = 'warden.html';
        else                                  window.location.href = 'dashboard.html';
    }, 700);
}

// ============================================================
//  PAYMENT MODAL (Student Dashboard)
// ============================================================
function openPaymentModal() {
    openModal('paymentModal');
}
function closePaymentModal() {
    closeModal('paymentModal');
}

function simulatePayment(btn) {
    const original = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
    setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Payment Successful!';
        btn.style.background = 'var(--success)';
        setTimeout(() => {
            closePaymentModal();
            showToast('₹12,500 paid successfully! Receipt sent to your email.', 'success');
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = original;
                btn.style.background = '';
            }, 500);
        }, 900);
    }, 2000);
}

// ============================================================
//  === STUDENT DASHBOARD FUNCTIONS ===
// ============================================================

// Apply Leave — opens modal, resets to form view
function applyLeave() {
    const form   = document.getElementById('leaveFormSection');
    const ticket = document.getElementById('qrTicketSection');
    const dateEl = document.getElementById('leaveDate');
    const rsEl   = document.getElementById('leaveReason');
    if (form)   form.style.display   = 'block';
    if (ticket) ticket.style.display = 'none';
    if (dateEl) dateEl.value = '';
    if (rsEl)   rsEl.value  = '';
    openModal('leaveModal');
}

function closeLeaveModal() {
    closeModal('leaveModal');
}

function generateQRPass(e) {
    e.preventDefault();
    const date   = document.getElementById('leaveDate')?.value;
    const reason = document.getElementById('leaveReason')?.value.trim();
    if (!date)   { showToast('Please select a departure date.', 'error'); return; }
    if (!reason) { showToast('Please enter a reason.', 'error'); return; }

    // Show loading on button
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...'; }

    setTimeout(() => {
        const name    = localStorage.getItem('nexstay_user_name') || 'Priya Sharma';
        const qrData  = encodeURIComponent(`NEXSTAY|${name}|EN2024045|${date}|${reason}`);
        const qrImg   = document.getElementById('generatedQR');
        const dateEl  = document.getElementById('ticketDate');
        const nameEl  = document.getElementById('leaveTicketName');

        if (qrImg)  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrData}`;
        if (dateEl) dateEl.textContent = `${new Date(date).toDateString()}  ·  ${reason}`;
        if (nameEl) nameEl.textContent = name;

        // Flip: hide form, show ticket
        document.getElementById('leaveFormSection').style.display = 'none';
        document.getElementById('qrTicketSection').style.display  = 'block';

        showToast('Gate Pass generated!', 'success');
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-qrcode"></i> Generate Gate Pass'; }
    }, 900);
}


// Report Issue
function reportIssue() {
    openModal('issueModal');
}

function submitIssue() {
    const issue = document.getElementById('issueDescription')?.value.trim();
    const type  = document.getElementById('issueType')?.value;
    if (!type)  { showToast('Please select issue type.', 'error'); return; }
    if (!issue) { showToast('Please describe the issue.', 'error'); return; }

    const btn = document.getElementById('issueSubmitBtn');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...'; }

    setTimeout(() => {
        closeModal('issueModal');
        showToast('Issue reported! Maintenance team will contact you within 24 hours.', 'success');
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Report'; }
        if (document.getElementById('issueDescription')) document.getElementById('issueDescription').value = '';
    }, 1000);
}

// Mess Menu Modal
function showMessMenu() {
    openModal('messModal');
}

// Download Statements
function downloadStatements() {
    showToast('Generating PDF statement... Download will start shortly.', 'info');
    setTimeout(() => showToast('Statement downloaded successfully!', 'success'), 2000);
}

// View All Messages
function viewAllMessages() {
    openModal('messagesModal');
}

// Notification Bell
function toggleNotifications() {
    openModal('notifModal');
}

// ============================================================
//  === WARDEN DASHBOARD FUNCTIONS ===
// ============================================================

function approveLeave(studentName, row) {
    const btn = row.querySelector('.approve-btn');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>'; }
    setTimeout(() => {
        showToast(`Leave approved for ${studentName}!`, 'success');
        const statusCell = row.querySelector('.status-cell');
        if (statusCell) statusCell.innerHTML = '<span class="badge success">Approved</span>';
        const actionCell = row.querySelector('.action-cell');
        if (actionCell) actionCell.innerHTML = '<span class="text-muted" style="font-size:0.82rem;">Processed</span>';
    }, 800);
}

function rejectLeave(studentName, row) {
    if (!confirm(`Reject leave request for ${studentName}?`)) return;
    setTimeout(() => {
        showToast(`Leave request for ${studentName} has been rejected.`, 'error');
        const statusCell = row.querySelector('.status-cell');
        if (statusCell) statusCell.innerHTML = '<span class="badge danger">Rejected</span>';
        const actionCell = row.querySelector('.action-cell');
        if (actionCell) actionCell.innerHTML = '<span class="text-muted" style="font-size:0.82rem;">Closed</span>';
    }, 400);
}

function markAttendance(studentName, btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    setTimeout(() => {
        showToast(`Attendance marked for ${studentName}!`, 'success');
        const parentRow = btn.closest('div[style]') || btn.parentElement;
        btn.outerHTML = '<span class="badge success">Present</span>';
    }, 700);
}

function generateReport() {
    const btn = document.querySelector('.topbar .btn-primary');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...'; }
    setTimeout(() => {
        showToast('Attendance report generated! Ready to download.', 'success');
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-print"></i> Generate Report'; }
    }, 1800);
}

function exportData() {
    showToast('Preparing CSV export...', 'info');
    setTimeout(() => showToast('Export complete! File saved to Downloads.', 'success'), 1800);
}

function searchAttendance(input) {
    if (input.value.length > 2) {
        showToast(`Searching for: ${input.value}`, 'info');
    }
}

// ============================================================
//  === ADMIN DASHBOARD FUNCTIONS ===
// ============================================================

function manageBlock(blockName) {
    openModal('blockModal');
    const title = document.getElementById('blockModalTitle');
    if (title) title.textContent = `Managing ${blockName}`;
}

function sendBroadcast() {
    openModal('broadcastModal');
}

function submitBroadcast() {
    const msg = document.getElementById('broadcastMessage')?.value.trim();
    if (!msg) { showToast('Please write a message to broadcast.', 'error'); return; }

    const btn = document.getElementById('broadcastSubmitBtn');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...'; }

    setTimeout(() => {
        closeModal('broadcastModal');
        showToast('Broadcast sent to all 1,450 students and 3 wardens!', 'success');
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-bullhorn"></i> Send Broadcast'; }
        if (document.getElementById('broadcastMessage')) document.getElementById('broadcastMessage').value = '';
    }, 1500);
}

function exportCSV() {
    showToast('Preparing campus-wide CSV report...', 'info');
    setTimeout(() => showToast('CSV exported! Check your Downloads folder.', 'success'), 2000);
}

// ============================================================
//  FAQ ACCORDION SYSTEM
// ============================================================
let currentFaqCategory = 'all';

function initFaqAccordion() {
    const faqList = document.getElementById('faqAccordionList');
    if (!faqList) return;

    // Search filter input listener
    const searchInput = document.getElementById('faqSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            filterFaqItems(query, currentFaqCategory);
        });
    }
}

function toggleFaqItem(button) {
    const item = button.closest('.faq-item');
    if (!item) return;

    const isActive = item.classList.contains('active');
    
    // Close sibling items for clean single accordion expansion
    const container = item.closest('.faq-accordion-list');
    if (container) {
        container.querySelectorAll('.faq-item.active').forEach(sibling => {
            if (sibling !== item) {
                sibling.classList.remove('active');
                const btn = sibling.querySelector('.faq-trigger');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (isActive) {
        item.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
    } else {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
    }
}

function setFaqCategory(category, button) {
    currentFaqCategory = category;
    
    // Update active pill styling
    document.querySelectorAll('.faq-pill').forEach(pill => pill.classList.remove('active'));
    if (button) button.classList.add('active');

    const searchInput = document.getElementById('faqSearchInput');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    filterFaqItems(query, category);
}

function filterFaqItems(query, category) {
    const items = document.querySelectorAll('#faqAccordionList .faq-item');
    const emptyMsg = document.getElementById('faqEmptyMessage');
    let visibleCount = 0;

    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category') || 'all';
        const questionText = (item.querySelector('.faq-question')?.textContent || '').toLowerCase();
        const answerText = (item.querySelector('.faq-answer')?.textContent || '').toLowerCase();

        const matchesCategory = category === 'all' || itemCategory === category;
        const matchesQuery = !query || questionText.includes(query) || answerText.includes(query);

        if (matchesCategory && matchesQuery) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    if (emptyMsg) {
        emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

// Auto-initialize FAQ accordion when DOM loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaqAccordion);
} else {
    initFaqAccordion();
}

// ============================================================
//  CONTACT ENQUIRY FORM VALIDATION & SUBMISSION
// ============================================================

function isValidEmail(email) {
    // Robust email regex pattern ensuring valid user part, @, domain name, and TLD
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(String(email).trim());
}

function setFieldError(fieldId, errorMsg) {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`error-${fieldId}`);
    if (input) {
        input.classList.add('input-error');
    }
    if (errorEl) {
        errorEl.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${errorMsg}`;
        errorEl.style.display = 'flex';
    }
}

function clearFieldError(fieldId) {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`error-${fieldId}`);
    if (input) {
        input.classList.remove('input-error');
    }
    if (errorEl) {
        errorEl.innerHTML = '';
        errorEl.style.display = 'none';
    }
}

function clearAllContactErrors() {
    ['contactName', 'contactEmail', 'contactMsg'].forEach(clearFieldError);
}

function initContactFormValidation() {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const msgInput = document.getElementById('contactMsg');

    if (nameInput) {
        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim().length > 0) clearFieldError('contactName');
        });
        nameInput.addEventListener('blur', () => {
            if (!nameInput.value.trim()) {
                setFieldError('contactName', 'Your full name is required.');
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('input', () => {
            if (isValidEmail(emailInput.value.trim())) clearFieldError('contactEmail');
        });
        emailInput.addEventListener('blur', () => {
            const val = emailInput.value.trim();
            if (!val) {
                setFieldError('contactEmail', 'Institution email is required.');
            } else if (!isValidEmail(val)) {
                setFieldError('contactEmail', 'Please enter a valid email address (e.g. director@university.edu).');
            }
        });
    }

    if (msgInput) {
        msgInput.addEventListener('input', () => {
            if (msgInput.value.trim().length > 0) clearFieldError('contactMsg');
        });
        msgInput.addEventListener('blur', () => {
            if (!msgInput.value.trim()) {
                setFieldError('contactMsg', 'Please enter your message or requirements.');
            }
        });
    }
}

// Auto-initialize form listeners on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactFormValidation);
} else {
    initContactFormValidation();
}

function submitEnquiry(btn) {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const msgInput = document.getElementById('contactMsg');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const msg = msgInput ? msgInput.value.trim() : '';

    clearAllContactErrors();

    let hasError = false;
    let firstErrorField = null;

    // 1. Validate Name
    if (!name) {
        setFieldError('contactName', 'Please enter your full name.');
        hasError = true;
        if (!firstErrorField) firstErrorField = nameInput;
    } else if (name.length < 2) {
        setFieldError('contactName', 'Name must be at least 2 characters.');
        hasError = true;
        if (!firstErrorField) firstErrorField = nameInput;
    }

    // 2. Validate Email (required & valid format)
    if (!email) {
        setFieldError('contactEmail', 'Please enter your institution email address.');
        hasError = true;
        if (!firstErrorField) firstErrorField = emailInput;
    } else if (!isValidEmail(email)) {
        setFieldError('contactEmail', 'Please enter a valid email address format (e.g. name@university.edu).');
        hasError = true;
        if (!firstErrorField) firstErrorField = emailInput;
    }

    // 3. Validate Message
    if (!msg) {
        setFieldError('contactMsg', 'Please enter your enquiry or campus requirements.');
        hasError = true;
        if (!firstErrorField) firstErrorField = msgInput;
    } else if (msg.length < 10) {
        setFieldError('contactMsg', 'Message must be at least 10 characters long.');
        hasError = true;
        if (!firstErrorField) firstErrorField = msgInput;
    }

    // If validation fails, stop submission and focus first error field
    if (hasError) {
        if (firstErrorField) {
            firstErrorField.focus();
        }
        showToast('Please correct the highlighted fields before submitting.', 'error');
        return;
    }

    // Process submission
    const submitBtn = btn || document.getElementById('contactSubmitBtn');
    const originalContent = submitBtn ? submitBtn.innerHTML : 'Send Enquiry';

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Sending Enquiry...';
    }

    setTimeout(() => {
        // Success notification
        showToast('Thank you! Your enquiry has been received. Our campus onboarding team will contact you within 24 hours.', 'success');

        // Reset form
        const form = document.getElementById('contactEnquiryForm');
        if (form) form.reset();
        clearAllContactErrors();

        // Restore button state
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fa-solid fa-check" style="margin-right:8px;"></i> Enquiry Sent!';
            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
            }, 3000);
        }
    }, 1200);
}


// ============================================================
//  DYNAMIC MODAL INJECTOR
//  Injects modals that don't exist in HTML yet
// ============================================================
function injectModals() {
    const page = window.location.pathname;

    // ---- STUDENT page modals ----
    if (page.includes('dashboard') || document.querySelector('.side-nav a[href*="dashboard"]')) {
        if (!document.getElementById('leaveModal'))   injectHTML(leaveModalHTML());
        if (!document.getElementById('issueModal'))   injectHTML(issueModalHTML());
        if (!document.getElementById('messModal'))    injectHTML(messModalHTML());
        if (!document.getElementById('notifModal'))   injectHTML(notifModalHTML());
        if (!document.getElementById('messagesModal'))injectHTML(messagesModalHTML());
    }
    // ---- ADMIN page modals ----
    if (page.includes('admin')) {
        if (!document.getElementById('broadcastModal')) injectHTML(broadcastModalHTML());
        if (!document.getElementById('blockModal'))     injectHTML(blockModalHTML());
    }
}

function injectHTML(html) {
    document.body.insertAdjacentHTML('beforeend', html);
}

// --- Leave Modal ---
function leaveModalHTML() {
    return `
    <div class="glass-overlay modal" id="leaveModal">
      <div class="modal-content" style="max-width:500px;">
        <button class="close-btn" onclick="closeModal('leaveModal')"><i class="fa-solid fa-xmark"></i></button>
        <h2>Apply for Leave</h2>
        <p>Submit a leave request to your warden for approval.</p>
        <div style="margin-top:20px; display:flex; flex-direction:column; gap:16px;">
          <div class="input-group" style="margin-bottom:0;">
            <label>Reason for Leave</label>
            <textarea id="leaveReason" rows="3" style="width:100%;padding:12px 14px;border:1.5px solid #ead0d2;border-radius:12px;font-family:inherit;font-size:0.92rem;resize:vertical;background:#fdf7f4;outline:none;" placeholder="e.g. Family function, Medical appointment..."></textarea>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div class="input-group" style="margin-bottom:0;">
              <label>From Date</label>
              <input type="date" id="leaveFrom" style="width:100%;padding:12px 14px;border:1.5px solid #ead0d2;border-radius:12px;font-family:inherit;font-size:0.92rem;background:#fdf7f4;outline:none;">
            </div>
            <div class="input-group" style="margin-bottom:0;">
              <label>To Date</label>
              <input type="date" id="leaveTo" style="width:100%;padding:12px 14px;border:1.5px solid #ead0d2;border-radius:12px;font-family:inherit;font-size:0.92rem;background:#fdf7f4;outline:none;">
            </div>
          </div>
          <div class="input-group" style="margin-bottom:0;">
            <label>Emergency Contact (optional)</label>
            <input type="tel" id="leaveContact" placeholder="+91 98765 43210" style="width:100%;padding:12px 14px;border:1.5px solid #ead0d2;border-radius:12px;font-family:inherit;font-size:0.92rem;background:#fdf7f4;outline:none;">
          </div>
          <button id="leaveSubmitBtn" class="btn-primary w-100 btn-pill" style="padding:15px;font-size:1rem;margin-top:4px;" onclick="submitLeave()">
            <i class="fa-solid fa-paper-plane"></i> Submit Application
          </button>
        </div>
      </div>
    </div>`;
}

// --- Issue / Complaint Modal ---
function issueModalHTML() {
    return `
    <div class="glass-overlay modal" id="issueModal">
      <div class="modal-content" style="max-width:480px;">
        <button class="close-btn" onclick="closeModal('issueModal')"><i class="fa-solid fa-xmark"></i></button>
        <h2>Report an Issue</h2>
        <p>Our maintenance team will respond within 24 hours.</p>
        <div style="margin-top:20px;display:flex;flex-direction:column;gap:14px;">
          <div class="input-group" style="margin-bottom:0;">
            <label>Issue Type</label>
            <select id="issueType" style="width:100%;padding:12px 14px;border:1.5px solid #ead0d2;border-radius:12px;font-family:inherit;font-size:0.92rem;background:#fdf7f4;outline:none;-webkit-appearance:none;cursor:pointer;">
              <option value="">— Select category —</option>
              <option value="electrical">Electrical / Power</option>
              <option value="plumbing">Plumbing / Water</option>
              <option value="internet">Internet / Wi-Fi</option>
              <option value="furniture">Furniture / Room</option>
              <option value="mess">Mess / Food</option>
              <option value="security">🔒 Security</option>
              <option value="other">📋 Other</option>
            </select>
          </div>
          <div class="input-group" style="margin-bottom:0;">
            <label>Description</label>
            <textarea id="issueDescription" rows="3" style="width:100%;padding:12px 14px;border:1.5px solid #ead0d2;border-radius:12px;font-family:inherit;font-size:0.92rem;resize:vertical;background:#fdf7f4;outline:none;" placeholder="Describe the problem in detail..."></textarea>
          </div>
          <div class="input-group" style="margin-bottom:0;">
            <label>Urgency</label>
            <div style="display:flex;gap:10px;">
              <label style="flex:1;cursor:pointer;"><input type="radio" name="urgency" value="low" checked style="margin-right:5px;">Low</label>
              <label style="flex:1;cursor:pointer;"><input type="radio" name="urgency" value="medium" style="margin-right:5px;">Medium</label>
              <label style="flex:1;cursor:pointer;"><input type="radio" name="urgency" value="high" style="margin-right:5px;"><span style="color:var(--danger);">High</span></label>
            </div>
          </div>
          <button id="issueSubmitBtn" class="btn-primary w-100 btn-pill" style="padding:15px;font-size:1rem;" onclick="submitIssue()">
            <i class="fa-solid fa-paper-plane"></i> Submit Report
          </button>
        </div>
      </div>
    </div>`;
}

// --- Mess Menu Modal ---
function messModalHTML() {
    const menu = {
        Breakfast: ['Idli Sambar', 'Poha', 'Bread Butter + Tea'],
        Lunch:     ['Dal Tadka', 'Rice', 'Roti', 'Mix Veg', 'Salad'],
        Snacks:    ['Samosa', 'Chai'],
        Dinner:    ['Paneer Masala', 'Rice', 'Roti', 'Dal Makhani', 'Kheer']
    };
    const rows = Object.entries(menu).map(([meal, items]) => `
        <tr>
          <td style="font-weight:700;color:var(--primary);padding:12px 16px;border-bottom:1px solid var(--border-light);">${meal}</td>
          <td style="padding:12px 16px;border-bottom:1px solid var(--border-light);">${items.join(' · ')}</td>
        </tr>`).join('');
    return `
    <div class="glass-overlay modal" id="messModal">
      <div class="modal-content" style="max-width:520px;">
        <button class="close-btn" onclick="closeModal('messModal')"><i class="fa-solid fa-xmark"></i></button>
        <h2>Today's Mess Menu</h2>
        <p style="margin-bottom:20px;">Thursday, April 10 · Block C Dining Hall</p>
        <table style="width:100%;border-collapse:collapse;">
          <thead><tr style="background:var(--bg-section);">
            <th style="text-align:left;padding:10px 16px;font-size:0.78rem;color:var(--text-muted);">Meal</th>
            <th style="text-align:left;padding:10px 16px;font-size:0.78rem;color:var(--text-muted);">Items</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <p style="font-size:0.78rem;margin-top:16px;"><i class="fa-solid fa-circle-info" style="color:var(--primary);"></i> Menu subject to change. Check notice board for updates.</p>
      </div>
    </div>`;
}

// --- Notifications Modal ---
function notifModalHTML() {
    return `
    <div class="glass-overlay modal" id="notifModal">
      <div class="modal-content" style="max-width:440px;">
        <button class="close-btn" onclick="closeModal('notifModal')"><i class="fa-solid fa-xmark"></i></button>
        <h2>Notifications</h2>
        <p style="margin-bottom:20px;">3 unread alerts</p>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div style="padding:14px;background:var(--primary-light);border-radius:12px;border-left:3px solid var(--primary);display:flex;gap:12px;align-items:flex-start;">
            <i class="fa-solid fa-wallet" style="color:var(--primary);margin-top:2px;"></i>
            <div><div style="font-weight:700;font-size:0.88rem;">Fee Due Reminder</div><div style="font-size:0.78rem;color:var(--text-muted);">₹12,500 due in 2 days. Pay now to avoid penalty.</div></div>
          </div>
          <div style="padding:14px;background:rgba(21,128,61,0.06);border-radius:12px;border-left:3px solid var(--success);display:flex;gap:12px;align-items:flex-start;">
            <i class="fa-solid fa-circle-check" style="color:var(--success);margin-top:2px;"></i>
            <div><div style="font-weight:700;font-size:0.88rem;">Leave Approved</div><div style="font-size:0.78rem;color:var(--text-muted);">Your April 15 leave pass was approved by Warden.</div></div>
          </div>
          <div style="padding:14px;background:rgba(180,83,9,0.06);border-radius:12px;border-left:3px solid var(--warning);display:flex;gap:12px;align-items:flex-start;">
            <i class="fa-solid fa-bullhorn" style="color:var(--warning);margin-top:2px;"></i>
            <div><div style="font-weight:700;font-size:0.88rem;">Maintenance Alert</div><div style="font-size:0.78rem;color:var(--text-muted);">Water supply off Friday 8AM-12PM. Block C.</div></div>
          </div>
        </div>
        <button class="btn-secondary w-100" style="margin-top:20px;" onclick="closeModal('notifModal'); showToast('All notifications marked as read.')">Mark all as read</button>
      </div>
    </div>`;
}

// --- All Messages Modal ---
function messagesModalHTML() {
    return `
    <div class="glass-overlay modal" id="messagesModal">
      <div class="modal-content" style="max-width:500px;">
        <button class="close-btn" onclick="closeModal('messagesModal')"><i class="fa-solid fa-xmark"></i></button>
        <h2>All Messages</h2>
        <p style="margin-bottom:20px;">Your inbox from wardens &amp; admin</p>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${['Leave Pass approved — have a safe trip.','Maintenance in Block C on Friday.','Mess menu updated for next week.','Monthly invoice available in Payments.','Please collect your ID card from office.'].map((msg, i) => `
          <div style="padding:14px;background:${i%2===0?'var(--bg-section)':'white'};border:1px solid var(--border-light);border-radius:12px;">
            <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:4px;">${i === 0 ? 'Warden · 2h ago' : i === 1 ? 'Admin · Yesterday' : `Admin · ${i+1} days ago`}</div>
            <div style="font-weight:600;font-size:0.88rem;">${msg}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>`;
}

// --- Broadcast Modal (Admin) ---
function broadcastModalHTML() {
    return `
    <div class="glass-overlay modal" id="broadcastModal">
      <div class="modal-content" style="max-width:500px;">
        <button class="close-btn" onclick="closeModal('broadcastModal')"><i class="fa-solid fa-xmark"></i></button>
        <h2>New Broadcast</h2>
        <p style="margin-bottom:20px;">Send a message to all students and wardens.</p>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div>
            <label style="font-size:0.82rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:7px;">Target Audience</label>
            <div style="display:flex;gap:10px;">
              <label style="flex:1;cursor:pointer;padding:10px;border:1.5px solid var(--border);border-radius:10px;text-align:center;font-size:0.85rem;font-weight:600;"><input type="checkbox" checked style="margin-right:5px;"> Students</label>
              <label style="flex:1;cursor:pointer;padding:10px;border:1.5px solid var(--border);border-radius:10px;text-align:center;font-size:0.85rem;font-weight:600;"><input type="checkbox" style="margin-right:5px;"> Wardens</label>
              <label style="flex:1;cursor:pointer;padding:10px;border:1.5px solid var(--border);border-radius:10px;text-align:center;font-size:0.85rem;font-weight:600;"><input type="checkbox" style="margin-right:5px;"> Both</label>
            </div>
          </div>
          <div>
            <label style="font-size:0.82rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:7px;">Message</label>
            <textarea id="broadcastMessage" rows="4" style="width:100%;padding:12px 14px;border:1.5px solid #ead0d2;border-radius:12px;font-family:inherit;font-size:0.92rem;resize:vertical;background:#fdf7f4;outline:none;" placeholder="Type your announcement here..."></textarea>
          </div>
          <div style="display:flex;gap:10px;">
            <select style="flex:1;padding:12px;border:1.5px solid #ead0d2;border-radius:12px;font-family:inherit;background:#fdf7f4;outline:none;">
              <option>Email</option><option>SMS</option><option>Push</option>
            </select>
            <button id="broadcastSubmitBtn" class="btn-primary btn-pill" style="flex:1;padding:12px;" onclick="submitBroadcast()">
              <i class="fa-solid fa-bullhorn"></i> Send Broadcast
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

// --- Block Modal (Admin) ---
function blockModalHTML() {
    return `
    <div class="glass-overlay modal" id="blockModal">
      <div class="modal-content" style="max-width:480px;">
        <button class="close-btn" onclick="closeModal('blockModal')"><i class="fa-solid fa-xmark"></i></button>
        <h2 id="blockModalTitle">Managing Block</h2>
        <p style="margin-bottom:20px;">Allocation and management options.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <button class="glass-card" style="text-align:center;padding:20px;cursor:pointer;border:none;" onclick="closeModal('blockModal');showToast('Room allocation editor opened.','info')">
            <i class="fa-solid fa-bed" style="font-size:1.4rem;color:var(--primary);margin-bottom:8px;display:block;"></i>
            <div style="font-weight:700;font-size:0.88rem;">Room Allocation</div>
          </button>
          <button class="glass-card" style="text-align:center;padding:20px;cursor:pointer;border:none;" onclick="closeModal('blockModal');showToast('Student roster downloaded.','success')">
            <i class="fa-solid fa-users" style="font-size:1.4rem;color:var(--success);margin-bottom:8px;display:block;"></i>
            <div style="font-weight:700;font-size:0.88rem;">Student Roster</div>
          </button>
          <button class="glass-card" style="text-align:center;padding:20px;cursor:pointer;border:none;" onclick="closeModal('blockModal');showToast('Warden assignment panel opened.','info')">
            <i class="fa-solid fa-user-tie" style="font-size:1.4rem;color:var(--gold);margin-bottom:8px;display:block;"></i>
            <div style="font-weight:700;font-size:0.88rem;">Assign Warden</div>
          </button>
          <button class="glass-card" style="text-align:center;padding:20px;cursor:pointer;border:none;" onclick="closeModal('blockModal');showToast('Block analytics report generated.','success')">
            <i class="fa-solid fa-chart-bar" style="font-size:1.4rem;color:#3b82f6;margin-bottom:8px;display:block;"></i>
            <div style="font-weight:700;font-size:0.88rem;">Analytics</div>
          </button>
        </div>
      </div>
    </div>`;
}

// ============================================================
//  INIT on page load
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    injectModals();

    // Navbar scroll shadow
    const nav = document.querySelector('.navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(114,47,55,0.1)' : 'none';
        });
    }
});


/* ============================================================
   PROFILE SETTINGS MODAL (DYNAMIC)
   ============================================================ */
/* ============================================================
   PROFILE SETTINGS MODAL (ROLE-ISOLATED)
   ============================================================ */
function getUserRole() {
    const path = window.location.pathname;
    if (path.includes('dashboard')) return 'student';
    if (path.includes('warden'))    return 'warden';
    if (path.includes('admin'))     return 'admin';
    return 'user';
}

function openProfileModal() {
    const modal = document.getElementById('profileModal');
    if(modal) modal.classList.add('active');
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    if(modal) modal.classList.remove('active');
}

// Dynamically Inject Editable Profile fields on Load
document.addEventListener('DOMContentLoaded', () => {
    const profileModal = document.getElementById('profileModal');
    if (profileModal) {
        const sidebarAvatar = document.querySelector('.sidebar .avatar');
        const sidebarName = document.querySelector('.sidebar .info h4');
        const sidebarSub = document.querySelector('.sidebar .info p');
        
        let defaultName = sidebarName ? sidebarName.innerText : 'User';
        let defaultEmail = sidebarSub ? sidebarSub.innerText : 'user@domain.com';
        let defaultImage = sidebarAvatar ? sidebarAvatar.src : 'https://images.unsplash.com/photo-1560250097-0b93528c311a';
        
        const role = getUserRole();
        const savedName = localStorage.getItem(`nexstay_${role}_name`)   || defaultName;
        const savedEmail = localStorage.getItem(`nexstay_${role}_email`) || defaultEmail;
        const savedImage = localStorage.getItem(`nexstay_${role}_image`) || defaultImage;

        // Apply immediately to sidebar
        if (sidebarAvatar) sidebarAvatar.src = savedImage;
        if (sidebarName) sidebarName.innerText = savedName;
        if (sidebarSub) sidebarSub.innerText = savedEmail;

        const content = profileModal.querySelector('.modal-content');
        if (content) {
            content.innerHTML = `
                <button class="close-btn" onclick="closeProfileModal()"><i class="fa-solid fa-xmark"></i></button>
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="position:relative; display:inline-block; margin:0 auto 12px; cursor:pointer;" onclick="document.getElementById('profileImgInput').click()" title="Click to change photo">
                        <img id="modalProfilePreview" src="${savedImage}" style="width:90px; height:90px; border-radius:50%; object-fit:cover; border:3px solid var(--primary); box-shadow:var(--shadow-md); transition: opacity 0.2s;">
                        <div style="position:absolute; inset:0; background:rgba(0,0,0,0.5); border-radius:50%; display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity 0.2s; color:white; font-size:1.2rem;" onmouseover="this.style.opacity=1; document.getElementById('modalProfilePreview').style.opacity=0.8" onmouseout="this.style.opacity=0; document.getElementById('modalProfilePreview').style.opacity=1"><i class="fa-solid fa-camera"></i></div>
                    </div>
                    <input type="file" id="profileImgInput" accept="image/*" style="display:none;" onchange="previewProfileImage(this)">
                    <h2 style="font-size:1.4rem;">Edit ${role.charAt(0).toUpperCase() + role.slice(1)} Profile</h2>
                    <p style="font-size:0.85rem; color:var(--text-muted);">Personalize your dashboard identity.</p>
                </div>
                <form id="editProfileForm" onsubmit="saveProfileDynamic(event)">
                    <div class="input-group">
                        <label>Full Name</label>
                        <input type="text" id="editProfileName" value="${savedName}" required style="padding-left:14px; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Role / Email</label>
                        <input type="text" id="editProfileEmail" value="${savedEmail}" required style="padding-left:14px;">
                    </div>
                    <button type="submit" class="btn-primary w-100 btn-pill" style="margin-top: 14px; padding:15px; font-size:1rem;">
                        <i class="fa-solid fa-floppy-disk"></i> Save ${role.charAt(0).toUpperCase() + role.slice(1)} Profile
                    </button>
                </form>
            `;
        }
    }
});

function previewProfileImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('modalProfilePreview').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function updateAllNames(name, email, imgSrc) {
    // Sidebar
    const sidebarAvatar = document.querySelector('.sidebar .avatar');
    const sidebarName   = document.querySelector('.sidebar .info h4');
    const sidebarSub    = document.querySelector('.sidebar .info p');
    if (sidebarAvatar) sidebarAvatar.src       = imgSrc;
    if (sidebarName)   sidebarName.innerText   = name;
    if (sidebarSub)    sidebarSub.innerText    = email;

    // QR Pass tab card
    const qrPassName = document.getElementById('qrPassName');
    if (qrPassName) qrPassName.innerText = name;

    // Leave ticket modal
    const ticketName = document.getElementById('leaveTicketName');
    if (ticketName) ticketName.innerText = name;
}

function saveProfileDynamic(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button[type="submit"]');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
    
    setTimeout(() => {
        const newName   = document.getElementById('editProfileName').value.trim();
        const newEmail  = document.getElementById('editProfileEmail').value.trim();
        const newImgSrc = document.getElementById('modalProfilePreview').src;
        const role      = getUserRole();
        
        localStorage.setItem(`nexstay_${role}_name`,  newName);
        localStorage.setItem(`nexstay_${role}_email`, newEmail);
        localStorage.setItem(`nexstay_${role}_image`, newImgSrc);

        updateAllNames(newName, newEmail, newImgSrc);
        
        closeProfileModal();
        showToast(`Profile updated! Welcome, ${newName}`, 'success');
        btn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> Save ${role.charAt(0).toUpperCase() + role.slice(1)} Profile`;
    }, 600);
}


// Update the dues card to green dynamically if paid
function updatePaymentUI() {
    if(localStorage.getItem('nexstay_fee_paid') === 'true') {
        // In the student dashboard, the 3rd card is the Dues card
        const cards = document.querySelectorAll('.grid-cards .glass-card');
        if(cards && cards.length >= 3) {
            const dueCard = cards[2]; 
            dueCard.querySelector('.icon').className = 'icon green'; // icon green
            dueCard.querySelector('h3').innerText = '₹0'; // amount zero
            dueCard.querySelector('small').className = 'text-success'; // text green
            dueCard.querySelector('small').innerHTML = '<i class="fa-solid fa-check-double"></i> Cleared for this semester';
        }
    }
}


// Run on page load automatically 
document.addEventListener('DOMContentLoaded', () => {
    updatePaymentUI();

    if (localStorage.getItem('nexstay_theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }

    // Restore saved profile name everywhere on page load
    const savedName  = localStorage.getItem('nexstay_user_name');
    const savedEmail = localStorage.getItem('nexstay_user_email');
    const savedImg   = localStorage.getItem('nexstay_user_image');
    if (savedName) updateAllNames(savedName, savedEmail || '', savedImg || '');

    // Auto-highlight today's day in Mess Menu
    const todayIndex = (new Date().getDay() + 6) % 7;
    const messBtns = document.querySelectorAll('#messDayBtns .btn-secondary');
    if (messBtns.length > 0) switchMessDay(todayIndex, messBtns[todayIndex]);
});

// Dark Theme Toggle function
function toggleDarkMode() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if(isDark) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('nexstay_theme', 'light');
        showToast('Light Mode activated', 'info');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('nexstay_theme', 'dark');
        showToast('Dark Mode activated!', 'success');
    }
}

// ------------------------------------------------------------
// 3. TAB SWITCHING LOGIC (For different roles)
// ------------------------------------------------------------

function switchAdminTab(tabId, element) {
    // Hide all sections first
    document.querySelectorAll('.admin-section').forEach(sec => sec.style.display = 'none');
    
    // Show the one that was clicked
    const activeSection = document.getElementById('section-' + tabId);
    if (activeSection) { 
        activeSection.style.display = 'block'; 
        activeSection.style.animation = 'fadeIn 0.3s ease forwards'; 
    }
    
    // Change active class in sidebar
    document.querySelectorAll('.side-nav a').forEach(link => link.classList.remove('active'));
    element.classList.add('active');

    // Run specific setup for this tab
    if (tabId === 'rooms') renderRoomStatus('Block A');
    if (tabId === 'overview') renderStudentDirectory('adminStudentDirectoryBody');
}

function switchStudentTab(tabId, element) {
    document.querySelectorAll('.student-section').forEach(sec => sec.style.display = 'none');
    const activeSection = document.getElementById('section-' + tabId);
    if (activeSection) { 
        activeSection.style.display = 'block'; 
        activeSection.style.animation = 'fadeIn 0.3s ease forwards'; 
    }
    document.querySelectorAll('.side-nav a').forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

function switchWardenTab(tabId, element) {
    document.querySelectorAll('.warden-section').forEach(sec => sec.style.display = 'none');
    const activeSection = document.getElementById('section-' + tabId);
    if (activeSection) { 
        activeSection.style.display = 'block'; 
        activeSection.style.animation = 'fadeIn 0.3s ease forwards'; 
    }
    document.querySelectorAll('.side-nav a').forEach(link => link.classList.remove('active'));
    element.classList.add('active');

    // Load room data for Warden
    if (tabId === 'rooms') renderRoomStatus('Block A');
    if (tabId === 'students') renderStudentDirectory('studentDirectoryBody', 'Block C');
}

// ------------------------------------------------------------
// 4. ROOM & STUDENT DATA GENERATOR
// ------------------------------------------------------------

let currentBlock = 'Block A';
let studentIdCounter = 1;

// This function creates random data for rooms - simulates a database
function generateRooms(blockName, count) {
    const rooms = [];
    const boyNames = ['Rahul', 'Amit', 'Vikash', 'Karan', 'Ishaan', 'Arnav', 'Kabir', 'Sumit', 'Rohan', 'Sarthak', 'Yash', 'Aditya'];
    const girlNames = ['Priya', 'Sneha', 'Sanya', 'Mehak', 'Zoya', 'Neha', 'Ritu', 'Anu', 'Diya', 'Komal', 'Maya', 'Heena'];
    const courses = ['B.Tech CSE', 'MBA', 'B.Arch', 'B.Com', 'AI & ML', 'BCA', 'M.Tech', 'Design'];
    const prefixes = ['BC', 'LBC', 'BT', 'DB', 'MBA', 'MCA'];
    
    // Choose gender pool based on block
    const namePool = (blockName === 'Block C') ? girlNames : boyNames;

    for (let i = 1; i <= count; i++) {
        const capacity = Math.random() > 0.3 ? 2 : 3;
        const occupancy = Math.floor(Math.random() * (capacity + 1));
        const roomType = Math.random() > 0.5 ? 'AC' : 'Non-AC';
        const occupants = [];
        
        for (let j = 0; j < occupancy; j++) {
            const paddedId = studentIdCounter.toString().padStart(3, '0');
            const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
            const uniqueId = `${randomPrefix}2024${paddedId}`;
            
            occupants.push({
                name: namePool[Math.floor(Math.random() * namePool.length)] + " " + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + ".",
                id: uniqueId,
                course: courses[Math.floor(Math.random() * courses.length)],
                semester: Math.floor(Math.random() * 8) + 1
            });
            studentIdCounter++;
        }
        
        rooms.push({
            id: i,
            occupancy: occupancy,
            capacity: capacity,
            type: roomType,
            occupants: occupants,
            condition: Math.random() > 0.8 ? 'Maintenance' : 'Good'
        });
    }
    return rooms;
}

// Global variable to store all info
const roomsData = {
    'Block A': generateRooms('Block A', 50),
    'Block B': generateRooms('Block B', 50),
    'Block C': generateRooms('Block C', 50)
};

// ------------------------------------------------------------
// 5. ROOM STATUS DASHBOARD FUNCTIONS
// ------------------------------------------------------------

function renderRoomStatus(blockName) {
    currentBlock = blockName;
    const grid = document.getElementById('roomGridContainer');
    if (!grid) return;

    // Filters logic
    const searchTerm = document.getElementById('roomSearchInput')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('statusFilter')?.value || 'all';

    const rooms = roomsData[blockName] || [];
    let html = '';
    let vacant = 0, partial = 0, full = 0;

    const filteredRooms = rooms.filter(room => {
        const matchesSearch = room.id.toString().includes(searchTerm);
        const free = room.capacity - room.occupancy;
        let status = 'available';
        if (free === 0) status = 'full';
        else if (free === 1 && room.capacity > 1) status = 'partial';

        const matchesStatus = (statusFilter === 'all' || statusFilter === status);
        return matchesSearch && matchesStatus;
    });

    // Count stats for the banner
    rooms.forEach(room => {
        const free = room.capacity - room.occupancy;
        if (free === 0) full++;
        else if (free === 1 && room.capacity > 1) partial++;
        else vacant++;
    });

    // Create the grid cards
    filteredRooms.forEach(room => {
        const free = room.capacity - room.occupancy;
        let statusClass = 'available';
        if (free === 0) statusClass = 'full';
        else if (free === 1 && room.capacity > 1) statusClass = 'partial';

        html += `
            <div class="room-card ${statusClass}" onclick="openRoomDetail('${blockName}', ${room.id})">
                <span class="type-tag">${room.type}</span>
                <h4>Room ${room.id}</h4>
                <p>${room.occupancy}/${room.capacity} Beds Filled</p>
                <div class="occupancy">
                    ${Array(room.capacity).fill(0).map((_, i) => 
                        `<div class="bed-dot ${i < room.occupancy ? 'filled' : ''}"></div>`
                    ).join('')}
                </div>
            </div>
        `;
    });

    grid.innerHTML = html || '<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);">No rooms found matching your search.</p>';
    
    // Update the numbers in the UI
    const vacEl = document.getElementById('totalVacant');
    const parEl = document.getElementById('totalPartial');
    const fulEl = document.getElementById('totalFull');
    if(vacEl) vacEl.innerText = vacant;
    if(parEl) parEl.innerText = partial;
    if(fulEl) fulEl.innerText = full;
}

// Function triggered when block tabs are switched
function updateRoomGrid(blockName, btn) {
    document.querySelectorAll('#roomBlockFilters .btn-secondary').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const search = document.getElementById('roomSearchInput');
    if(search) search.value = '';
    
    renderRoomStatus(blockName);
    showToast(`Now viewing ${blockName}`, 'info');
}

// Opens the detail modal when a room is clicked
function openRoomDetail(blockName, roomId) {
    const room = roomsData[blockName].find(r => r.id === roomId);
    if(!room) return;

    // Clean up old modal
    const old = document.getElementById('roomDetailModal');
    if(old) old.remove();

    const modalHTML = `
    <div class="glass-overlay modal active" id="roomDetailModal">
        <div class="modal-content" style="max-width:450px;">
            <button class="close-btn" onclick="closeModal('roomDetailModal')"><i class="fa-solid fa-xmark"></i></button>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:20px;">
                <div>
                    <h2 style="margin:0;">Room ${room.id}</h2>
                    <p style="color:var(--text-muted); font-size:0.9rem;">${blockName} · ${room.type} Suite</p>
                </div>
                <span class="badge ${room.condition === 'Good' ? 'success' : 'warning'}">${room.condition}</span>
            </div>

            <div class="occupants-list">
                <h4 style="font-size:0.95rem; margin-bottom:12px;">Current Students (${room.occupancy}/${room.capacity})</h4>
                ${room.occupants.length > 0 ? room.occupants.map(student => `
                    <div class="occupant-row">
                        <i class="fa-solid fa-user-graduate"></i>
                        <div class="occupant-info">
                            <h5>${student.name}</h5>
                            <p>${student.id} · ${student.course} · Sem ${student.semester}</p>
                        </div>
                    </div>
                `).join('') : '<p style="text-align:center; padding:20px; background:var(--bg-section); border-radius:12px; font-size:0.85rem; color:var(--text-muted);">Room is empty.</p>'}
            </div>

            <div style="display:flex; gap:10px; margin-top:24px;">
                <button class="btn-primary btn-pill" style="flex:1;" onclick="showToast('Panel under construction','info')">Allocate</button>
                <button class="btn-secondary btn-pill" style="flex:1;" onclick="showToast('Reported to Maintainance','success')">Report</button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// ------------------------------------------------------------
// 6. CSV DATA EXPORTER (Admin Feature)
// ------------------------------------------------------------
function exportRoomsToCSV() {
    // CSV Header row
    let csv = 'Block,Room_Number,Type,Occupancy,Capacity,Condition,Student_ID,Student_Name,Course,Semester\n';
    
    const blocks = ['Block A', 'Block B', 'Block C'];
    
    blocks.forEach(block => {
        const rooms = roomsData[block] || [];
        rooms.forEach(room => {
            if (room.occupants.length === 0) {
                // Formatting for Excel
                csv += `${block},${room.id},${room.type},0,${room.capacity},${room.condition},N/A,N/A,N/A,N/A\n`;
            } else {
                room.occupants.forEach(student => {
                    csv += `${block},${room.id},${room.type},${room.occupancy},${room.capacity},${room.condition},${student.id},${student.name},${student.course},${student.semester}\n`;
                });
            }
        });
    });

    // Create download link dynamically
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'hostel_report_2024.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('Inventory Report Exported!', 'success');
}

// ------------------------------------------------------------
// 7. STUDENT DIRECTORY (Dynamic Table)
// ------------------------------------------------------------
function renderStudentDirectory(targetBodyId, filterBlock = null) {
    const tbody = document.getElementById(targetBodyId);
    if (!tbody) return;

    let html = '';
    const blocks = filterBlock ? [filterBlock] : ['Block A', 'Block B', 'Block C'];
    
    blocks.forEach(block => {
        const rooms = roomsData[block] || [];
        rooms.forEach(room => {
            room.occupants.forEach(student => {
                // Logic to get initials for the circle
                const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2);
                
                // Random color for student chip
                const randomHue = Math.floor(Math.random() * 360);
                const bg = `hsl(${randomHue}, 60%, 45%)`;

                html += `
                    <tr>
                        <td style="font-family:monospace; color:var(--text-muted); font-weight:600;">${student.id}</td>
                        <td>
                            <div class="student-chip">
                                <div class="initials" style="background:${bg};">${initials}</div>
                                <div>
                                    <div style="font-weight:600;">${student.name}</div>
                                    <div style="font-size:0.75rem; color:var(--text-muted);">Course: ${student.course}</div>
                                </div>
                            </div>
                        </td>
                        <td><span style="font-weight:600;">${block} - ${room.id}</span></td>
                        <td>Sem ${student.semester}</td>
                        <td><button class="btn-text" onclick="showToast('Calling student...','info')">Call</button></td>
                    </tr>
                `;
            });
        });
    });

    tbody.innerHTML = html || '<tr><td colspan="5" style="text-align:center; padding:40px;">No records.</td></tr>';
}
