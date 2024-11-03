// إعداد Supabase
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mjuebspsfaikutlglwey.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// وظيفة لإرسال الرسالة إلى قاعدة البيانات
async function sendMessage(name, email, message) {
    try {
        // إضافة الرسالة إلى جدول "messages"
        const { data, error } = await supabase
            .from('messages')  // اسم الجدول
            .insert([{ name: name, email: email, message: message }]);  // البيانات

        if (error) throw error;

        console.log('تم إرسال الرسالة بنجاح:', data);
        alert('تم إرسال الرسالة بنجاح!');
    } catch (error) {
        console.error('خطأ في إرسال الرسالة:', error.message);
        alert('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.');
    }
}

// استدعاء الدالة عند إرسال النموذج
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // جمع بيانات النموذج
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // استدعاء دالة إرسال الرسالة
    sendMessage(name, email, message);

    // إعادة تعيين الحقول بعد الإرسال
    document.getElementById('messageForm').reset();
});
