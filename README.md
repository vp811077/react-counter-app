# React Counter App

## Project Objective
To develop a simple and interactive counter application using React that demonstrates:
- State management using **useState**
- Event handling
- Conditional rendering

This project aims to build a strong foundation in React’s core concepts through practical implementation.

---

## Brief Description
A simple React counter app demonstrating state management, event handling, and conditional rendering.  
Includes customizable step size, upper/lower bounds, option to allow/disallow negative values, and `localStorage` persistence.

---

## Links
- **GitHub Repository:** https://github.com/vikash4509/React-Counter-App.git
- **Live Demo:** https://react-counter-app-myproject.netlify.app/

---

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **React.js**

---

## How to Run Locally
- **Clone the repository**
```bash
git clone https://github.com/vikash4509/React-Counter-App.git
```
- **Navigate into the project folder**
```bash
cd react-counter-app
```
- **Install dependencies**
```bash
npm install
```
- **Start the development server**
```bash
npm start
```

## Challenges Faced & Solutions
- **Challenge:** Maintaining counter state after page reload  
  **Solution:** Used `localStorage` to persist data.

- **Challenge:** Disabling buttons at bounds  
  **Solution:** Conditional rendering & state checks.

## Screenshots

![Image](https://github.com/user-attachments/assets/3ce80795-73d1-4133-8605-7008476976fd)
*Screenshot showing the initial UI of the counter app with the counter display and control buttons.* 
![Image](https://github.com/user-attachments/assets/05e77565-ebe5-4cff-b229-92a2e6000e11)
*Screenshot demonstrating the increment (+) button working and increasing the counter value.* 
![Image](https://github.com/user-attachments/assets/3970ccf8-86f2-4e65-8dfb-d4b83c7a4442)
*Screenshot showing the decrement (-) button functioning correctly and decreasing the counter value.* 
![Image](https://github.com/user-attachments/assets/7820e1eb-44ec-4496-9a7f-d2339692219d)
*Screenshot illustrating the buttons (+ and -) disabled at the upper and lower bounds respectively to prevent exceeding limits.* 
---

## Feature List
- Increment, decrement, reset counter value
- Customizable step size
- Upper/lower bounds with button disable
- Toggle for allowing negative values
- Dynamic text color based on state
- Persist state with `localStorage`

---

## Sample Input & Output

| Action              | Expected Output                   |
|---------------------|---------------------------------|
| Click +             | Counter increases by step size  |
| Click -             | Counter decreases by step size  |
| Change step size    | Increment/Decrement changes accordingly |
| Reach upper bound   | + button disabled                |
| Reach lower bound   | - button disabled                |
| Toggle negative off | Counter min = 0                  |
| Click reset         | Counter = 0                     |

---

## Evaluation Criteria Mapping

| Criteria          | Status                               |
|-------------------|------------------------------------|
| Functionality     | ✅ All core features working as specified |
| React Concepts    | ✅ Correct use of `useState`, event handling, conditional rendering |
| UI/UX             | ✅ Clean layout, intuitive interface |
| Edge Handling     | ✅ Bounds enforced, buttons disabled at limits |
| Code Quality      | ✅ Modular, commented, readable    |
| Bonus Features    | ✅ `localStorage` persistence, dynamic styling |
| Deployment        | ✅ Ready for GitHub Pages, Vercel, or Netlify |
| Documentation     | ✅ Complete README.md with all sections |

---

## Author

**Name:** Vikash Kumar Gupta  
**Date:** August 2025
