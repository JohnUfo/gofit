import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ru: {
    translation: {
      "nav": {
        "trainers": "Тренеры",
        "pricing": "Цены",
        "about": "Услуги",
        "contact": "Контакты",
        "join": "Вступить"
      },
      "hero": {
        "subtitle": "ТВОЯ ФИТНЕС - ТЕРРИТОРИЯ",
        "title": "ДОБРО ПОЖАЛОВАТЬ В GOFIT",
        "title_part1": "РАСКРОЙ СВОЙ",
        "title_part2": "ИСТИННЫЙ ПОТЕНЦИАЛ",
        "description": "Тренажерный зал, Файт-зона, Групповые занятия, Сауна и Бар зона.",
        "cta_start": "Начать тренировки",
        "cta_more": "Узнать больше"
      },
      "gallery": {
        "title": "Наша Атмосфера",
        "description": "Почувствуйте атмосферу мирового уровня, созданную для вашего успеха."
      },
      "trainers": {
        "title": "Команда",
        "experience": "опыта",
        "years": "лет",
        "year": "год",
        "trainer1": {
           "name": "Абдуллаев Азиз",
           "specialty": "Bodybuilder IFBB PRO",
           "tags": ["Men's Physique", "Diamond Cup 2025"]
        },
        "trainer2": {
           "name": "Исломжон Кхайруллаев",
           "specialty": "Коррекция веса",
           "tags": ["Техника упражнений", "Питание"]
        },
        "trainer3": {
           "name": "Элеонора Геннадьевна",
           "specialty": "ЛФК, Стретчинг, Пилатес",
           "tags": ["Мастер спорта", "Магистр педагогики"]
        },
        "trainer4": {
           "name": "Умаров Акмал",
           "specialty": "Силовой и функциональный тренинг",
           "tags": ["TRX", "ViPR", "Платформа 360"]
        },
        "trainer5": {
           "name": "Киреева Ольга",
           "specialty": "Групповые программы",
           "tags": ["Pilates", "TRX", "Женский тренинг"]
        },
        "trainer6": {
           "name": "Анжелика Арсеновна",
           "specialty": "Классические силовые тренировки",
           "tags": ["Набор массы", "Снижение веса"]
        }
      },
      "footer": {
        "copyright": "© 2026 GOFIT. Все права защищены. Твоя фитнес - территория."
      },
      "features": {
        "gym": "Тренажерный зал",
        "fight": "Файт-зона",
        "group": "Групповые направления",
        "sauna": "Сауна",
        "bar": "Бар зона",
        "massage": "3 вида массажа",
        "freezing": "Заморозка (45/60 дней)",
        "fight_soon": "Файт-зона скоро будет готова! (Входит в абонемент)"
      },
      "services": {
        "title_part1": "Наши",
        "title_part2": "Услуги",
        "gym_desc": "У нас есть все необходимые тренажеры для тренировок. Современное оборудование и квалифицированные инструкторы помогут вам достичь любой цели.",
        "group_desc": "Здесь вы можете заниматься вместе с единомышленницами. Мы предлагаем йогу, пилатес, танцы, аэробику и другие программы.",
        "fight_desc": "Зона, где можно снять стресс после работы, повысить мастерство и научиться самообороне.",
        "sauna_desc": "После тренировки вы можете отдохнуть и восстановить силы в сауне.",
        "bar_desc": "Уютное место для отдыха и общения. Наслаждайтесь смузи и протеиновыми коктейлями."
      },
      "pricing": {
        "title": "Выберите свой Тариф",
        "fight_promo": "Файт-зона скоро будет готова! (Входит в абонемент)",
        "personal": "Персональные тренировки",
        "session": "Трен.",
        "months": "мес",
        "vip": "Go VIP",
        "morning": "Go Morning",
        "day": "Go Day",
        "active": "Go Active"
      },
      "contact_info": {
        "title": "Контакты",
        "schedule": "Режим работы",
        "working_hours": "Пн-Сб: 07:00 - 23:00 / Вс: 09:00 - 21:00",
        "phone": "+998 90 499 99 29",
        "address_label": "Адрес",
        "address": "Park City TJM, Северный Олмазор, Ташкент",
        "open_map": "Открыть в Yandex Maps",
        "call_us": "Позвонить нам"
      }
    }
  },
  uz: {
    translation: {
      "nav": {
        "trainers": "Trenerlar",
        "pricing": "Narxlar",
        "about": "Xizmatlar",
        "contact": "Kontaktlar",
        "join": "A'zo bo'lish"
      },
      "hero": {
        "subtitle": "SIZNING FITNES HUDUDINGIZ",
        "title": "GOFIT-GA XUSH KELIBSIZ",
        "title_part1": "O'ZINGIZNING HAQIQIY",
        "title_part2": "SALOHIYATINGIZNI OCHING",
        "description": "Trenajyor zali, Fight-zona, Guruh mashg'ulotlari, Sauna va Bar zona.",
        "cta_start": "Mashg'ulotni boshlash",
        "cta_more": "Batafsil"
      },
      "gallery": {
        "title": "Bizning Muhit",
        "description": "Sizning muvaffaqiyatingiz uchun yaratilgan jahon darajasidagi mashg'ulot muhitini his qiling."
      },
      "trainers": {
        "title": "Jamoa",
        "experience": "tajriba",
        "years": "yil",
        "year": "yil",
        "trainer1": {
           "name": "Abdullaev Aziz",
           "specialty": "Bodybuilder IFBB PRO",
           "tags": ["Men's Physique", "Diamond Cup 2025"]
        },
        "trainer2": {
           "name": "Islomjon Xayrullaev",
           "specialty": "Vazn korreksiyasi",
           "tags": ["Mashq texnikasi", "Oziqlanish"]
        },
        "trainer3": {
           "name": "Eleonora Gennayevna",
           "specialty": "LFK, Stretching, Pilates",
           "tags": ["Sport ustasi", "Pedagogika magistri"]
        },
        "trainer4": {
           "name": "Umarov Akmal",
           "specialty": "Kuch va funksional mashg'ulotlar",
           "tags": ["TRX", "ViPR", "Platforma 360"]
        },
        "trainer5": {
           "name": "Kireeva Olga",
           "specialty": "Guruh dasturlari",
           "tags": ["Pilates", "TRX", "Ayollar mashg'uloti"]
        },
        "trainer6": {
           "name": "Anjelika Arsenovna",
           "specialty": "Klassik kuch mashg'ulotlari",
           "tags": ["Massani oshirish", "Vazn yo'qotish"]
        }
      },
      "footer": {
        "copyright": "© 2026 GOFIT. Barcha huquqlar himoyalangan. Sizning fitnes hududingiz."
      },
      "features": {
        "gym": "Trenajyor zali",
        "fight": "Fight-zona",
        "group": "Guruh mashg'ulotlari",
        "sauna": "Sauna",
        "bar": "Bar zonasi",
        "massage": "3 turdagi massaj",
        "freezing": "Muzlatish (45/60 kun)",
        "fight_soon": "Fight-zona yaqinda tayyor bo'ladi! (Abonement ichiga kiradi)"
      },
      "services": {
        "title_part1": "Bizning",
        "title_part2": "Xizmatlar",
        "gym_desc": "Bizda mashg'ulotlar uchun barcha zarur trenajyorlar mavjud. Zamonaviy uskunalar va malakali instruktorlar sizga har qanday maqsadga erishishga yordam beradi.",
        "group_desc": "Bu yerda siz fikrdosh ayollar bilan birga mashq qilishingiz mumkin. Biz yoga, pilates, raqs, aerobika va boshqa turli xil dasturlarni taklif etamiz.",
        "fight_desc": "Ishdan keyin stressni chiqarish, mahoratini oshirish va o'zini himoya qilishni o'rganish mumkin bo'lgan hudud.",
        "sauna_desc": "Mashg'ulotdan so'ng saunada dam olib, kuchingizni tiklashingiz mumkin.",
        "bar_desc": "Dam olish va suhbatlashish uchun shinam joy. Bu yerda siz foydali smuzi, protein kokteylidan bahramand bo'lishingiz mumkin."
      },
      "pricing": {
        "title": "Tarifni tanlang",
        "fight_promo": "Fight-zona yaqinda tayyor bo'ladi! (Abonement ichiga kiradi)",
        "personal": "Shaxsiy mashg'ulotlar",
        "session": "mashg'ulot",
        "months": "oy",
        "vip": "Go VIP",
        "morning": "Go Morning",
        "day": "Go Day",
        "active": "Go Active"
      },
      "contact_info": {
        "title": "Kontaktlar",
        "schedule": "Ish vaqti",
        "working_hours": "Dushanba-Shanba: 07:00 - 23:00 / Yakshanba: 09:00 - 21:00",
        "phone": "+998 90 499 99 29",
        "address_label": "Manzil",
        "address": "Park City TJM, Shimoliy Olmazor, Toshkent",
        "open_map": "Yandex Mapsda ochish",
        "call_us": "Bizga qo'ng'iroq qiling"
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "trainers": "Trainers",
        "pricing": "Pricing",
        "about": "Services",
        "contact": "Contacts",
        "join": "Join Now"
      },
      "hero": {
        "subtitle": "YOUR FITNESS TERRITORY",
        "title": "WELCOME TO GOFIT",
        "title_part1": "UNLEASH YOUR",
        "title_part2": "TRUE POTENTIAL",
        "description": "Gym, Fight-zone, Group classes, Sauna and Bar zone.",
        "cta_start": "Start Training",
        "cta_more": "Learn More"
      },
      "gallery": {
        "title": "Our Atmosphere",
        "description": "Experience a world-class training environment designed for your success."
      },
      "trainers": {
        "title": "Team",
        "experience": "experience",
        "years": "years",
        "year": "year",
        "trainer1": {
           "name": "Aziz Abdullaev",
           "specialty": "Bodybuilder IFBB PRO",
           "tags": ["Men's Physique", "Diamond Cup 2025"]
        },
        "trainer2": {
           "name": "Islomjon Khayrullaev",
           "specialty": "Weight Correction",
           "tags": ["Exercise Technique", "Nutrition"]
        },
        "trainer3": {
           "name": "Eleonora Gennadyevna",
           "specialty": "LFK, Stretching, Pilates",
           "tags": ["Master of Sports", "Master of Pedagogy"]
        },
        "trainer4": {
           "name": "Akmal Umarov",
           "specialty": "Strength & Functional Training",
           "tags": ["TRX", "ViPR", "Platform 360"]
        },
        "trainer5": {
           "name": "Olga Kireeva",
           "specialty": "Group Programs",
           "tags": ["Pilates", "TRX", "Women's Training"]
        },
        "trainer6": {
           "name": "Anzhelika Arsenovna",
           "specialty": "Classic Strength Training",
           "tags": ["Muscle Gain", "Weight Loss"]
        }
      },
      "footer": {
        "copyright": "© 2026 GOFIT. All rights reserved. Your fitness territory."
      },
      "features": {
        "gym": "Gym",
        "fight": "Fight-zone",
        "group": "Group Classes",
        "sauna": "Sauna",
        "bar": "Bar Zone",
        "massage": "3 types of massage",
        "freezing": "Freezing (45/60 days)",
        "fight_soon": "Fight-zone coming soon! (Included in membership)"
      },
      "services": {
        "title_part1": "Our",
        "title_part2": "Services",
        "gym_desc": "We have all the necessary machines for training. Modern equipment and qualified instructors will help you achieve any goal.",
        "group_desc": "Here you can practice with like-minded women. We offer yoga, pilates, dance, aerobics and more.",
        "fight_desc": "An area where you can relieve stress after work, improve skills and learn self-defense.",
        "sauna_desc": "After training, you can relax and regain strength in the sauna.",
        "bar_desc": "A cozy place to relax and socialize. Enjoy smoothies and protein shakes."
      },
      "pricing": {
        "title": "Choose your Plan",
        "fight_promo": "Fight-zone coming soon! (Included in membership)",
        "personal": "Personal Training",
        "session": "Session",
        "months": "months",
        "vip": "Go VIP",
        "morning": "Go Morning",
        "day": "Go Day",
        "active": "Go Active"
      },
      "contact_info": {
        "title": "Contacts",
        "schedule": "Working Hours",
        "working_hours": "Mon-Sat: 07:00 - 23:00 / Sun: 09:00 - 21:00",
        "phone": "+998 90 499 99 29",
        "address_label": "Address",
        "address": "Park City TJM, North Olmazor, Tashkent",
        "open_map": "Open in Yandex Maps",
        "call_us": "Call Us"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
