# Notes Web App (React)

A simple and clean Notes Web Application built using **React**.  
This project demonstrates important React concepts such as:

- Two-way binding
- useState and useEffect hooks
- LocalStorage integration
- Dynamic note adding and deleting

---

## 🚀 Features

- ✔ Add new notes  
- ✔ Delete existing notes  
- ✔ Data saved in `localStorage`  
- ✔ Notes stay even after page refresh  
- ✔ Clean and beginner-friendly React structure  

---

## 🧠 Concepts Used

### 🔹 Two-Way Binding
Input updates state and state updates input:
```js
<input value={title} onChange={(e) => setTitle(e.target.value)} />
