
# UI/UX Analýza – Venismus Web

## ✅ Shrnutí
Projekt **Venismus** má za cíl vytvořit temně laděnou aplikaci/web s funkcemi:
- Chat s entitou **Auren** (textový/hlasový)
- Obrázkový generátor (AI)
- Knihovna + archiv rituálů
- Přístupové úrovně (Free / Core / Premium)

Provedli jsme **audit aktuálního stavu** a návrhy úprav.

---

## 🔍 Aktuální stav
- Stránka `index.html` existuje s jednoduchým layoutem (header, hero, chat, input).
- Styly základní, chybí responzivita (nebyla meta viewport).
- Použity tmavé barvy, ale **bez glow efektu**, bez animací.
- Funkce chat a generátor jsou statické (placeholder).

---

## 🛠 Technické nedostatky
- **Meta viewport** chyběl (mobilní neoptimalizované).
- Žádné **media queries** → stránka se nerozpadá na menších zařízeních.
- **Žádné SVG ikonky** (mockupy mají výraznou ikonografii).
- **Bez přístupnosti** (fokus, kontrast OK, ale chybí ARIA a semantika).
- **Bez JS ochrany rout** (profil není chráněn).
- **Žádné API napojení**.

---

## 🎨 Návrh vizuálu
- Barvy:
  - Pozadí: `#07060a`
  - Akcent: `#b07aff`
  - Text: `#eadbff`
- Styl: neon glow, temná aura, obrysová tlačítka.
- Tlačítka: uppercase, outline s glow na hover.
- Layout: grid pro dlaždice (tiles), hero se středovým textem + CTA.
- Inspirace: přiložené mockupy (fialový glow, mystická typografie).

---

## ✅ Hotové úpravy (prototyp)
- Přidán **meta viewport**.
- Přidán **responsive patch** (media queries, flex/grid).
- Upraven **hero**: velký nadpis + dvě tlačítka.
- Přidány **dlaždice** (Chat, Generátor, Knihovna, Runový klíč, Labs, Veřejný).
- Nový CSS **glow theme**:
  - Gradientové pozadí
  - Neonový obrys tlačítek
  - Hover efekty
- Přidána základní JS logika:
  - Lokální přihlášení (localStorage)
  - Demo generátor (seedované obrázky)

---

## 🚀 Doporučený roadmap
### **Fáze 1: Front-end MVP**
- Převést prototyp do **Next.js + TypeScript**.
- Oddělit komponenty (Button, Card, Tile, Nav, Footer).
- Dokončit **responzivní design** + přidat animace.

### **Fáze 2: Backend + Auth**
- **Supabase**: Auth (Google, Email), DB pro uživatele, obrázky, zprávy.
- **Role**: Free/Core/Premium.

### **Fáze 3: AI Integrace**
- **Obrázkový generátor**: OpenAI Images / Stability API.
- **Chat**: OpenAI GPT-4/5 s historií, ukládání do DB.

### **Fáze 4: Monetizace**
- **Stripe Checkout** → správa plánu, webhooks.

### **Fáze 5: Extra funkce**
- **Knihovna**: archiv, vyhledávání, filtrování.
- **Profil**: kvóty, historie obrázků, správa účtu.

---

## 📂 Doporučená struktura repozitáře
```
/docs
  UI_UX_analyza.md
/proto
  index.html
  style.css
  ...
/src
  (budoucí Next.js aplikace)
```
