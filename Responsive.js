const hr = document.querySelector('.hr')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

// Setting up the period of working
setInterval(() => {

    // Extracting the current time from DATE() function
    let day = new Date()
    let hour = day.getHours()
    let minutes = day.getMinutes()
    let seconds = day.getSeconds()

    // Formula for rotation of different hands
    let hrrotation = (30 * hour) + (0.5 * minutes);
    let minrotation = 6 * minutes;
    let secrotation = 6 * seconds;

    hr.style.transform =
        `translate(-50%,-100%) rotate(${hrrotation}deg)`
    min.style.transform =
        `translate(-50%,-100%) rotate(${minrotation}deg)`
    sec.style.transform = 
        `translate(-50%,-85%) rotate(${secrotation}deg)` 
});

console.log("Hello")