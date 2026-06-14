# 📚 مرجع الخدمات - المعلومات الدقيقة

## الخدمات الموجودة:

### 1️⃣ Öljynvaihto (Oil Change) ✅
- **السعر:** 120€
- **الصورة:** pic copy/oil/oilfilter.jpeg
- **الشعار:** "Nopea ja edullinen"
- **الملف:** services/oljynvaihto.html
- **الحالة:** ✅ نموذج أساسي

### 2️⃣ Jarrujen Vaihto (Brake Service) ✅
- **السعر:** 149€
- **الصورة:** pic copy/jarrut/break1.jpg
- **الشعار:** "Turvallisuus ensin"
- **الملف:** services/jarrut.html
- **الحالة:** ✅ تم تطويره بالكامل

---

## الخدمات التالية (المطلوب تعديلها):

### 3️⃣ Määräaikaishuolto (Scheduled Maintenance)
- **الاسم الفنلندي:** Määräaikaishuolto
- **الترجمة الإنجليزية:** Scheduled Maintenance
- **السعر:** تحت التحديد [?]
- **الصورة:** pic copy/maaraikaishuolto/[image name]
- **الشعار:** "Kunnossapito ensin" (Maintenance First)
- **الملف المصدر:** services/oljynvaihto.html
- **الملف الهدف:** services/maaraikaishuolto.html

**FAQ Questions (مقترحة):**
1. Mitä sisältyy määräaikaishuoltoon?
2. Kuinka usein auto tarvitsee määräaikaishuoltoa?
3. Paljonko määräaikaishuolto maksaa Espoossa?
4. Pitääkö käyttää alkuperäisiä osia?
5. Säilyykö takuu käytettäessä 3A Servicea?
6. Kauanko määräaikaishuolto kestää?
7. Onko määräaikaishuolto pakollinen?

**What's Included Items (5):**
1. Moottoriöljyn vaihto ja suodatin
2. Ilmansuodattimen tarkistus
3. Rengaspaineiden tarkistus
4. Nesteiden tarkistus
5. Huoltokirjamerkintä

---

### 4️⃣ Jakohihnan Vaihto (Timing Belt)
- **الاسم الفنلندي:** Jakohihnan Vaihto
- **الترجمة:** Timing Belt Replacement
- **السعر:** تحت التحديد [?]
- **الصورة:** pic copy/jakohihna/[image name]
- **الشعار:** "Luotettava toiminta" (Reliable Operation)
- **الملف الهدف:** services/jakohihna.html

---

### 5️⃣ Ilmastointi (AC Service)
- **الاسم الفنلندي:** Ilmastointi
- **الترجمة:** Air Conditioning Service
- **السعر:** تحت التحديد [?]
- **الصورة:** pic copy/ilmastointi/[image name]
- **الشعار:** "Mukava ajaminen" (Comfortable Driving)
- **الملف الهدف:** services/ilmastointi.html

---

## معلومات موحدة (لكل الخدمات):

### العنوان (دائماً):
- **الشارع:** Sillankorva 8
- **المدينة:** Espoo
- **الرمز البريدي:** 02300
- **الدولة:** Finland

### الهاتف (دائماً):
- **الرقم:** +358449773677
- **رابط:** tel:+358449773677

### البريد الإلكتروني (دائماً):
- **البريد:** info@3aservice.fi
- **رابط:** mailto:info@3aservice.fi

### ساعات العمل (دائماً):
- **أيام:** Monday - Friday
- **الوقت:** 08:00 - 17:00

### التقييم (دائماً):
- **النقاط:** 4.9/5
- **عدد التقييمات:** 100+

### الماركات (دائماً - نفسها لكل الخدمات):
- Audi
- Mercedes-Benz
- BMW
- Honda
- Skoda
- Toyota
- Volvo
- (تكرار لـ seamless carousel)

### الشعار في المقدمة (دائماً):
- **النص:** ★ 4.9 · 100+ Google
- **الفاصل:** AD-Valtuutettu

---

## نموذج الـ Title و Description

### القالب:
```
Title: [الخدمة] Espoo — 3A Service Oy | [الشعار]
Description: [الخدمة] ja huolto Espoossa alkaen [السعر]€. [تفاصيل قصيرة]. AD-valtuutettu korjaamo. Varaa aika verkossa.
```

### أمثلة:
```
Öljynvaihto:
Title: Öljynvaihto Espoo — 3A Service Oy | Nopea ja edullinen
Description: Öljynvaihto Espoossa alkaen 120€. Nopea palvelu, kaikki automerkit. AD-valtuutettu korjaamo — takuusi säilyy. Varaa aika verkossa.

Jarrujen Vaihto:
Title: Jarrujen Vaihto Espoo — 3A Service Oy | Turvallisuus ensin
Description: Jarrujen vaihto ja huolto Espoossa alkaen 149€. Etujarrut, takajarrut, jarrulevyt ja -palat. AD-valtuutettu korjaamo. Varaa aika verkossa.
```

---

## Schema JSON Structure

### Service Schema Format:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[الخدمة]",
  "provider": {
    "@type": "AutoRepair",
    "name": "3A Service Oy",
    "telephone": "+358449773677",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sillankorva 8",
      "addressLocality": "Espoo",
      "postalCode": "02300",
      "addressCountry": "FI"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "[السعر بدون €]",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "[السعر بدون €]"
    }
  },
  "areaServed": "Espoo",
  "description": "[وصف الخدمة]"
}
```

### LocalBusiness Schema Format:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "3A Service Oy - [الخدمة]",
  "description": "[وصف]",
  "telephone": "+358449773677",
  "email": "info@3aservice.fi",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sillankorva 8",
    "addressLocality": "Espoo",
    "postalCode": "02300",
    "addressCountry": "FI"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 60.216,
    "longitude": 24.756
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "100"
  },
  "priceRange": "€[السعر]"
}
```

---

## قائمة الاختبارات

### اختبارات محلية:
```bash
# تحقق من Title
curl http://localhost:8000/services/[file].html | grep '<title>'

# تحقق من Meta Description
curl http://localhost:8000/services/[file].html | grep 'description'

# تحقق من LocalBusiness Schema
curl http://localhost:8000/services/[file].html | grep 'LocalBusiness'

# تحقق من الصور
curl http://localhost:8000/services/[file].html | grep 'pic\ copy'
```

### اختبارات Vercel:
```
https://thereala3.vercel.app/services/[file].html
```

---

**آخر تحديث:** 2026-06-14
**الإصدار:** 1.0
