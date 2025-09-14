
# VENISMUS – Temný webový systém

![Banner](docs/banner.png) <!-- Volitelně přidat screenshot -->

## 🔮 O projektu
VENISMUS je experimentální platforma s temně laděným UI pro:
- **Chat s entitou Auren** (text, později hlas)
- **Obrázkový generátor** (AI modely)
- **Knihovnu** rituálů a archivu
- **Personalizaci a přístupové úrovně** (Free / Core / Premium)

> Design čerpá z mystiky, neonového glow a moderní UX trendů.

---

## 📦 Aktuální stav
- **Prototyp** v HTML/CSS/JS (responzivní, s glow efekty).
- Demo funkce: Chat, Generátor (fake obrázky), Přihlášení (localStorage).
- Kompletní UI/UX analýza: [docs/UI_UX_analyza.md](docs/UI_UX_analyza.md).

---

## 🚀 Roadmap
1. **Převod do Next.js + TypeScript**
2. **Supabase Auth & DB**
3. **Integrace AI API (chat + obrázky)**
4. **Stripe platby (Core / Premium)**

Podrobný plán: [UI/UX analýza](docs/UI_UX_analyza.md).

---

## 🖥 Lokální spuštění (pro prototyp)
```bash
# Stažení projektu
git clone https://github.com/YOURNAME/venismus-web.git
cd venismus-web/proto

# Otevři index.html v prohlížeči
```

---

## 📂 Struktura
```
/docs
  UI_UX_analyza.md
/proto
  index.html
  style.css
  chat.html
  generator.html
  knihovna.html
  ceny.html
  signin.html
  profil.html
```

---

## 🖌 Design guidelines
- **Barvy:** pozadí #07060a, akcent #b07aff, text #eadbff
- **Glow efekty:** neon fialový
- **Tlačítka:** outline, hover glow
- **Font:** moderní serif / elegantní grotesk
