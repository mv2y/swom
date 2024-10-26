// تكوين Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// مرجع قاعدة البيانات
var messagesRef = firebase.database().ref('messages');

// إضافة حدث الإرسال للنموذج
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // الحصول على القيم
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    // حفظ الرسالة في Firebase
    saveMessage(name, message);

    // إعادة تعيين النموذج بعد الإرسال
    document.getElementById('contactForm').reset();
}

// حفظ الرسالة إلى Firebase
function saveMessage(name, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        message: message
    });
}
