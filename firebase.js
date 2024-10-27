// تكوين Firebase - قم باستبدال القيم بمعلومات مشروعك من Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDORqDeI0KxwNSvVlnMPNDo9-L3haUmjpg",
  authDomain: "swom-cee14.firebaseapp.com",
  projectId: "swom-cee14",
  storageBucket: "swom-cee14.appspot.com",
  messagingSenderId: "363742687449",
  appId: "1:363742687449:web:04f862995bb556cd964ec8",
  measurementId: "G-T2L2X1MFV3"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// مرجع قاعدة البيانات
var messagesRef = firebase.database().ref('messages');

// إضافة حدث الإرسال للنموذج
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // الحصول على القيم من النموذج
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // حفظ الرسالة في Firebase
    saveMessage(name, email, message);

    // إعادة تعيين النموذج بعد الإرسال
    document.getElementById('contactForm').reset();

    // رسالة تأكيد للمستخدم
    alert("تم إرسال الرسالة بنجاح!");
}

// دالة لحفظ الرسالة في Firebase
function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}
