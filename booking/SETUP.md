# دليل الإعداد - نظام الحجز

---

## الفكرة العامة - كيف يشتغل النظام

```
الزبون يحجز موعد
        ↓
الموقع يستقبل الطلب
        ↓
        ├──→ Google Sheets (يحفظ الحجز)
        └──→ Google Calendar (يضيف موعد وترسللك إشعار تلقائي)
```

---

## الخطوة 1: إعداد Google Sheets + Calendar

### 1.1 - إنشاء الجدول
1. افتح [sheets.google.com](https://sheets.google.com)
2. اصنع جدول جديد وسمّه: `3A Service Bookings`
3. في الصف الأول اكتب هذه العناوين (كل واحد في خانة منفصلة):

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Date | Time | Services | Price | Car | License | Customer | Phone | Email |

### 1.2 - إنشاء Apps Script
1. في Google Sheets، اضغط على **Extensions** → **Apps Script**
2. احذف كل الكود الموجود
3. انسخ هذا الكود والصقه:

```javascript
const SHEET_NAME = "Sheet1";

function doGet(e) {
  const date = e.parameter.date;
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();

  const booked = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] === date) booked.push(data[i][2]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ booked }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();

    // فحص إذا الوقت محجوز
    for (let i = 1; i < data.length; i++) {
      if (data[i][1] === body.date && data[i][2] === body.time) {
        return ContentService
          .createTextOutput(JSON.stringify({ error: "conflict" }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    // تجهيز المعلومات
    const services = body.services.map(s => s.nameEn).join(", ");
    const total = body.services.reduce((sum, s) => sum + s.price, 0);
    const car = body.carBrand + " " + body.carModel + " " + body.carYear;

    // حفظ في Google Sheets
    sheet.appendRow([
      new Date().toISOString(),
      body.date,
      body.time,
      services,
      total + "€",
      car,
      body.licensePlate,
      body.customerName,
      body.phone,
      body.email,
    ]);

    // إضافة موعد في Google Calendar
    const timeParts = body.time.split(":");
    const startDate = new Date(body.date);
    startDate.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]), 0);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // ساعة واحدة

    const title = "🚗 " + car + " — " + services;
    const description =
      "👤 " + body.customerName + "\n" +
      "📞 " + body.phone + "\n" +
      "📧 " + body.email + "\n" +
      "🔢 " + body.licensePlate + "\n" +
      "💰 " + total + "€" +
      (body.additionalInfo ? "\n📝 " + body.additionalInfo : "");

    CalendarApp.getDefaultCalendar().createEvent(title, startDate, endDate, {
      description: description,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 1.3 - نشر السكريبت
1. اضغط على زر **Deploy** (أعلى اليمين) → **New deployment**
2. اضغط على أيقونة الترس ⚙ واختر **Web app**
3. في "Execute as": اختر **Me**
4. في "Who has access": اختر **Anyone**
5. اضغط **Deploy** — سيطلب منك تصريح، اقبله
6. انسخ الـ **URL** اللي يظهر ✅ — هذا هو `GOOGLE_SCRIPT_URL`

> ⚠️ كل مرة تعدّل الكود، اضغط **Deploy** → **New deployment** من جديد وانسخ الـ URL الجديد.

---

## الخطوة 2: إعداد إشعارات Google Calendar

السكريبت يضيف الحجز تلقائياً في تقويمك. لتفعيل الإشعارات:

1. افتح [calendar.google.com](https://calendar.google.com)
2. على اليسار، اضغط على النقاط الثلاث بجانب **My Calendar**
3. اختر **Settings and sharing**
4. روح على **Event notifications**
5. أضف إشعار: **Email** — **0 minutes** (أو أي وقت تريده)

بكذا كل حجز جديد يرسللك إيميل فوري ✅

---

## الخطوة 3: إعداد ملف البيئة

1. داخل مجلد `booking/`، انسخ الملف `.env.local.example` وغيّر اسمه إلى `.env.local`
2. افتحه وحط الـ URL:
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/xxxxx/exec
```

---

## الخطوة 4: تشغيل المشروع محلياً

افتح Terminal وأكتب:
```bash
cd Desktop/A3/booking
npm install
npm run dev
```

افتح المتصفح: `http://localhost:3000` — تشوف صفحة الحجز ✅

---

## الخطوة 5: الرفع على Netlify

> ملاحظة: نظام الحجز (Next.js) يحتاج إعداد خاص على Netlify.

### 5.1 - تثبيت Netlify Plugin
في Terminal داخل مجلد `booking/`:
```bash
npm install @netlify/plugin-nextjs --save-dev
```

### 5.2 - إنشاء ملف netlify.toml
أنشئ ملف اسمه `netlify.toml` داخل مجلد `booking/` وأكتب فيه:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 5.3 - ربط Netlify
1. سجّل دخول على [netlify.com](https://netlify.com)
2. اضغط **Add new site** → **Import an existing project**
3. اختر GitHub واختر الـ repository
4. في **Base directory**: اكتب `booking`
5. في **Build command**: `npm run build`
6. في **Publish directory**: `.next`

### 5.4 - إضافة متغير البيئة
1. روح **Site settings** → **Environment variables**
2. أضف: `GOOGLE_SCRIPT_URL` = الـ URL اللي نسخته من Google

### 5.5 - Deploy
اضغط **Deploy site** ✅

---

## ربط زر الحجز بموقعك الرئيسي

في أي صفحة HTML، أضف:
```html
<a href="https://your-app.netlify.app" class="btn-primary">
  Varaa aika / Book Now
</a>
```

---

## الأسئلة الشائعة

**كيف أحذف حجز؟**
احذف السطر من Google Sheets — الحجز في Calendar تحذفه من Calendar مباشرة.

**كيف أغير الأوقات المتاحة؟**
افتح [booking/lib/services.ts](lib/services.ts) وعدّل `TIME_SLOTS`.

**كيف أضيف خدمة جديدة؟**
افتح [booking/lib/services.ts](lib/services.ts) وأضف خدمة في `SERVICES`.
