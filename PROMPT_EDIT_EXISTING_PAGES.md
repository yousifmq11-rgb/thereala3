# 📋 PROMPT: تعديل صفحات الخدمات الموجودة

## 🎯 الهدف
تعديل صفحة خدمة موجودة (مثل oljynvaihto.html) لتصبح صفحة خدمة مختلفة (مثل maaraikaishuolto.html) **مع الحفاظ على نفس الهيكل والتصميم**.

---

## 🔄 عملية التعديل

### الخطوة 1: تحديد الصفحة المصدر والهدف
```
الصفحة المصدر (template): /services/oljynvaihto.html
الصفحة الهدف (للتعديل): /services/[new-service].html
```

### الخطوة 2: المحتويات التي يجب تعديلها (قائمة دقيقة)

**A. Meta Tags و Schema (في `<head>`)**
- [ ] `<title>` - استبدل اسم الخدمة والشعار
- [ ] `<meta name="description">` - استبدل وصف الخدمة والسعر
- [ ] `<link rel="canonical">` - استبدل رابط الصفحة
- [ ] Service Schema JSON - استبدل name, price, description
- [ ] FAQ Schema JSON - استبدل جميع 7 أسئلة وإجابات
- [ ] LocalBusiness Schema JSON - استبدل اسم الخدمة فقط (العنوان نفسه)
- [ ] Meta keywords - استبدل بكلمات الخدمة الجديدة
- [ ] Open Graph tags - استبدل العنوان والوصف

**B. Breadcrumb (سطر 145)**
- [ ] استبدل آخر breadcrumb من "Öljynvaihto" إلى اسم الخدمة الجديدة

**C. Hero Section (سطور 150-189)**
- [ ] background-image في CSS - استبدل الصورة
- [ ] `<img>` alt text - استبدل الوصف
- [ ] `<h1>` العنوان الرئيسي - استبدل باسم الخدمة
- [ ] وصف الخدمة تحت H1 - استبدل بوصف جديد
- [ ] الأزرار - اترك كما هي (Varaa aika و رقم الهاتف)

**D. What's Included Section (سطور 191-209)**
- [ ] Section tag - اترك "Mitä sisältyy"
- [ ] H2 heading - استبدل باسم الخدمة
- [ ] 5 check-items:
  - [ ] البند 1: العنوان والوصف
  - [ ] البند 2: العنوان والوصف
  - [ ] البند 3: العنوان والوصف
  - [ ] البند 4: العنوان والوصف
  - [ ] البند 5: العنوان والوصف

**E. Detailed Content Section (سطور 211-236)**
- [ ] Main H2 heading - استبدل "Miksi [الخدمة] on tärkeä?"
- [ ] الفقرة الأولى (introduction) - استبدل بمعلومات الخدمة
- [ ] H3 subheadings (5 عناوين فرعية) - استبدل بعناوين مناسبة
- [ ] الفقرات تحت كل H3 - استبدل بمحتوى الخدمة

**F. Why Us Section (سطور 238-347)**
- [ ] Main H2 - استبدل باسم الخدمة "ammattitaidolla"
- [ ] 6 benefit items على اليسار:
  - [ ] البند 1-6: تحديث العنوان والوصف
- [ ] صورة على اليمين - استبدل src بصورة الخدمة
- [ ] القسم الثاني H2 - استبدل "Miksi valita..." (اترك الجملة كما هي لكن غيّر الخدمة)
- [ ] 6 items في القائمة الثانية:
  - [ ] تحديث محتوى كل عنصر

**G. Brands Section (سطور 349-381)**
- [ ] اترك كما هو (نفس الماركات لكل الخدمات)

**H. AutoJerry Reviews (سطور 383-395)**
- [ ] اترك كما هو (نفس الـ iframe)

**I. Google Reviews (سطور 397-420)**
- [ ] Section tag - اترك "Google Reviews"
- [ ] H2 heading - اترك "Mitä asiakkaamme sanovat"
- [ ] 6 testimonial cards - استبدل المحتوى:
  - [ ] Testimonial 1: النص والاسم والسيارة والخدمة
  - [ ] Testimonial 2-6: نفس الطريقة

**J. FAQ Section (سطور 422-480)**
- [ ] Section tag و H2 - اترك كما هو
- [ ] 7 FAQ items - استبدل جميع الأسئلة والإجابات:
  - [ ] السؤال 1-7: عنوان مختلف وإجابة مختلفة

**K. Contact Section (سطور 483-583)**
- [ ] اترك كما هو (نموذج التواصل نفسه)

**L. Footer (سطور 585-608)**
- [ ] اترك كل شيء كما هو **إلا:**
  - [ ] السطر 593: استبدل الـ highlight من "oljynvaihto.html" إلى "[new-service].html"
  - [ ] أضف `style="color:var(--brand);"` للخدمة الجديدة فقط

---

## 📊 جدول الاستبدال السريع

| العنصر | البحث عن | استبدل بـ | أين |
|-------|---------|----------|-----|
| Title | Öljynvaihto Espoo | [الخدمة] Espoo | `<head>` |
| Description | alkaen 120€ | alkaen [السعر]€ | meta |
| Hero Image | oil/oilfilter.jpeg | [service]/image.jpg | CSS & img |
| Service Name | Öljynvaihto | [الخدمة] | Schema JSON |
| Price | "120" | "[السعر]" | Schema JSON |
| FAQ | 7 أسئلة زيت | 7 أسئلة جديدة | Schema JSON |
| Footer Link | oljynvaihto.html | [new-service].html | footer |

---

## 🔍 أماكن التغيير الحرجة (تحتاج عناية خاصة)

### 1️⃣ Schema JSON (يجب أن تكون بصيغة JSON صحيحة)
```json
- "name": "الخدمة الجديدة"
- "price": "السعر الجديد"
- "description": "وصف الخدمة"
```

### 2️⃣ Breadcrumb (آخر عنصر فقط)
```html
تغيير من: <span>Öljynvaihto</span>
إلى: <span>[الخدمة الجديدة]</span>
```

### 3️⃣ Footer Services Link (تحت "Palvelut")
```html
تغيير من: <a href="oljynvaihto.html" style="color:var(--brand);">
إلى: <a href="[new-service].html" style="color:var(--brand);">
```

### 4️⃣ Hero Background Image (في CSS)
```css
تغيير من: background-image:url('../pic\ copy/oil/oilfilter.jpeg');
إلى: background-image:url('../pic\ copy/[service]/image.jpg');
```

---

## ✅ قائمة التحقق (Checklist)

### Before Commit:
- [ ] جميع مراجع الخدمة القديمة تم استبدالها
- [ ] السعر محدث في 3 أماكن (meta description, schema, why-us section)
- [ ] جميع الصور تشير للمجلد الصحيح
- [ ] meta title و description يتضمنان الخدمة الجديدة
- [ ] canonical link صحيح
- [ ] Service schema name و price صحيح
- [ ] FAQ schema 7 أسئلة جديدة
- [ ] LocalBusiness schema محدث (name فقط)
- [ ] Footer link highlight على الصفحة الجديدة
- [ ] H1 و H2 headings محدثة
- [ ] Testimonials تتضمن اسم الخدمة الجديد
- [ ] جميع الصور موجودة (اختبر على localhost)

### After Commit:
- [ ] git status فارغ (no uncommitted changes)
- [ ] git log يظهر الـ commit الجديد
- [ ] Vercel تحديث الصفحة تلقائياً
- [ ] الصفحة تظهر صحيحة على https://thereala3.vercel.app/services/[new-service].html

---

## 🎯 مثال: تعديل oljynvaihto.html إلى maaraikaishuolto.html

### معلومات الخدمة:
```
الاسم الفنلندي: Määräaikaishuolto
الترجمة: Scheduled Maintenance
السعر: €[X]
الصورة: pic copy/maaraikaishuolto/maintenance.jpg
الشعار: "Kunnossapito ensin"
```

### أول 10 استبدالات:
1. Title: "Määräaikaishuolto Espoo — 3A Service Oy | Kunnossapito ensin"
2. Description: "Määräaikaishuolto ja huolto Espoossa alkaen €X..."
3. Service schema name: "Määräaikaishuolto"
4. Service schema price: "X"
5. Hero H1: "Määräaikaishuolto ammattitaidolla"
6. What's Included H2: "Kattava määräaikaishuolto paketti"
7. Why Us H2: "Määräaikaishuolto ammattitaidolla"
8. Footer link: <a href="maaraikaishuolto.html" style="color:var(--brand);">
9. FAQ Q1: "Mitä sisältyy määräaikaishuoltoon?"
10. Hero image: ../pic\ copy/maaraikaishuolto/maintenance.jpg

---

## 🚀 أوامر الـ Git

```bash
# 1. قبل البدء: تحقق من الحالة
git status

# 2. بعد التعديل: اختبر
curl http://localhost:8000/services/[new-service].html | grep '<title>'

# 3. إضافة الملف
git add services/[new-service].html

# 4. الـ Commit بالصيغة الصحيحة
git commit -m "Add [Service Name] service page with full content and SEO

- Complete service description and details
- 5 included items
- 7 FAQ questions optimized for search
- LocalBusiness schema for Google Maps
- Optimized pricing at €X

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"

# 5. الـ Push
git push origin main
```

---

## 📌 أهم الملاحظات

⚠️ **احذر من:**
1. ❌ عدم تحديث Footer link (الخدمة لن تظهر كـ active)
2. ❌ نسيان تحديث السعر في schema
3. ❌ استخدام صيغة JSON خاطئة في schema
4. ❌ عدم تحديث جميع مراجع الصورة
5. ❌ نسيان تحديث آخر breadcrumb

✅ **تأكد من:**
1. جميع الاستبدالات دقيقة
2. JSON صحيح (استخدم JSONLint.com للتحقق)
3. الصور موجودة فعلاً
4. اختبر على localhost قبل push
5. تحقق من Vercel بعد push

---

**آخر تحديث:** 2026-06-14
**الإصدار:** 2.0 - لتعديل الصفحات الموجودة
