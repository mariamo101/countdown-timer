# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)

### Screenshot

<img width="1024" alt="Screenshot 2024-03-15 at 23 05 40" src="https://github.com/mariamo101/advice-generator-app/assets/117212859/f6aea2df-ebdf-47c6-abdc-cc80310205d3">

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-)
- Live Site URL: [Add live site URL here](https://countdown-timer-one-lemon.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```css
body {
  height: 100vh;
  background: #261a2d;
  background-image: url(./images/bg-stars.svg), url(./images/pattern-hills.svg);
  background-repeat: no-repeat;
  background-position: top, bottom;
  background-size: auto 70%, auto 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
```

```js
let intervalTime = countDown - currentTime;
let intervalDay = Math.floor(intervalTime / 1000 / 60 / 60 / 24);
let intervalHours = Math.floor((intervalTime / 1000 / 60 / 60) % 24);
let intervalMinutes = Math.floor((intervalTime / 1000 / 60) % 60);
let intervalSeconds = Math.floor((intervalTime / 1000) % 60);
```
