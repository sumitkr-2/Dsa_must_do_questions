# 📘 DSA Progress Tracker
<img width="1470" height="835" alt="image" src="https://github.com/user-attachments/assets/4344d26d-1ca0-4b51-a649-f4ccda36b0f6" />
```md



A clean, interactive, and fully client-side **DSA tracking website** built using **HTML, CSS, and JavaScript**.  
This project helps track solved and unsolved Data Structures & Algorithms problems with visual progress, filters, and export functionality.

> Built for discipline, consistency, and interview preparation.

---

## 🚀 Live Demo


---

## ✨ Features

### 📊 Progress Tracking
- Circular progress indicator showing completion percentage
- Real-time updates when marking questions solved/unsolved
- Persistent progress using **LocalStorage**

### 🧠 Complete DSA Coverage
- **10 core DSA categories**
- **100+ curated problems**
- Categories include:
  - Arrays
  - Strings
  - Linked List
  - Stack & Queue
  - Binary Tree
  - Binary Search Tree
  - Recursion & Backtracking
  - Dynamic Programming
  - Graphs
  - Heap / Priority Queue

### 🎨 UI & UX
- Dark / Light mode toggle
- Smooth transitions and animations
- Section fade-in effects
- Responsive layout

### 🔍 Filters
- View **All** questions
- View **Solved** questions
- View **Unsolved** questions

### 📤 Export
- Export progress as a `.json` file for backup or reuse

---

## 🛠 Tech Stack

| Technology | Usage |
|----------|------|
| HTML5 | Structure |
| CSS3 | Styling, transitions, animations |
| JavaScript (Vanilla) | Logic & state management |
| LocalStorage | Persistent progress |
| SVG | Circular progress visualization |

No frameworks. Lightweight and fast.

---


## 🎨 CSS Highlights

- CSS variables for theming
- Smooth hover and click transitions
- SVG-based animated circular progress graph
- Light/Dark mode via class toggling

```css
:root {
  --bg: #0f172a;
  --card: #020617;
  --text: #e5e7eb;
  --accent: #38bdf8;
}
````

---

## ⚙️ How It Works

* Each question is identified by a unique key
* Checkbox states are stored in `localStorage`
* Progress is computed dynamically:

  ```
  (solved / total) × 100
  ```
* SVG stroke offset updates the circular progress graph

---

## 🌍 Deployment (GitHub Pages)

1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Set source:

   * Branch: `main`
   * Folder: `/root`
4. Save and wait a few seconds
5. Your site will be live

---

## 🧪 Local Setup

```bash
git clone https://github.com/your-username/dsa-tracker.git
cd dsa-tracker
open index.html
```

No build tools required.

---

## 📌 Usage & Attribution

You are free to **use this project for personal learning or inspiration**.

If you:

* reuse the code,
* modify it,
* or build something based on this project,

**please ensure proper credit is given to the original author.**

Attribution should clearly mention:

> Built by **Sumit**

This project is **not intended to be redistributed or claimed as original work by others** without acknowledgment.

---

## 👨‍💻 Author

**Sumit**
Computer Science student focused on DSA, consistency, and interview preparation.

---

## 📄 License

This project is intended for **personal and educational use**.
Commercial redistribution without attribution is not permitted.

