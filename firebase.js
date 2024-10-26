// تكوين Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBsiKfixDMSYY1Xvv2wmsXdg-jNP6c-zqU",
    authDomain: "tvtc-swom.firebaseapp.com",
    databaseURL: "https://tvtc-swom-default-rtdb.firebaseio.com",
    projectId: "tvtc-swom",
    storageBucket: "tvtc-swom.appspot.com",
    messagingSenderId: "511661649198",
    appId: "1:511661649198:web:1d53385172f7d114bc1ebf",
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
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value;

    // حفظ الرسالة في Firebase
    saveMessage(name,  email, message);

    // إعادة تعيين النموذج بعد الإرسال
    document.getElementById('contactForm').reset();
}

// حفظ الرسالة إلى Firebase
function saveMessage(name,  email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}
