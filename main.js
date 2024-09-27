let db;

const request = indexedDB.open("UserDatabase", 1);

request.onupgradeneeded = (e) => {
    db = e.target.result;
    const store = db.createObjectStore("Users", { keyPath: "username" });
    
    store.createIndex("password", "password", { unique: false });
};

request.onsuccess = (e) => {
    db = e.target.result;
    checkLoginStatus(); // Check if the user is already logged in
};

request.onerror = (e) => {
    console.error("Error opening IndexedDB:", e.target.errorCode);
};

function signupUser() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    const transaction = db.transaction(["Users"], "readwrite");
    const store = transaction.objectStore("Users");

    const request = store.add({ username, password });

    request.onsuccess = () => {
        alert("Signup successful! Please login.");
        window.location.href = "login.html"; // Redirect to login page
    };

    request.onerror = (e) => {
        alert("Signup failed: User already exists.");
    };
}

function loginUser() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const transaction = db.transaction(["Users"], "readonly");
    const store = transaction.objectStore("Users");

    const request = store.get(username);

    request.onsuccess = (e) => {
        const user = e.target.result;
        if (user && user.password === password) {
            sessionStorage.setItem("loggedInUser", username);
            window.location.href = "index.html"; // Redirect to homepage
        } else {
            alert("Invalid username or password.");
        }
    };

    request.onerror = () => {
        alert("Login failed.");
    };
}

function checkLoginStatus() {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
        document.getElementById("welcome-message").innerText = `Welcome back, ${loggedInUser}!`;
    } else if (window.location.pathname !== "/signup.html" && window.location.pathname !== "/login.html") {
        // Redirect to signup page if not logged in and not on signup/login pages
        window.location.href = "signup.html";
    }
}

function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html"; // Redirect to login page
}
