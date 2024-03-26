//buttons const
const playButton = document.getElementsByClassName('pl')[0];
const lapbtn = document.getElementsByClassName('la')[0];
const resetbtn = document.getElementsByClassName('re')[0];
const clrbtn = document.getElementsByClassName('lapclr')[0];

// display minute sec and msec constants
const minute = document.getElementsByClassName('min')[0];
const second = document.getElementsByClassName('sec')[0];
const centisecond = document.getElementsByClassName('msec')[0];
const laps = document.getElementsByClassName('laps')[0];


console.log(playButton)


/// this are the constants
let isplay = false
let sec_counter = 0;
let sec;
let centisec;
let centi_counter = 0;
let min;
let min_counter = 0;
let isreset = false
let lapitem = 0;


const toggleBtn = () => {
    lapbtn.classList.remove('hidden-la')
    resetbtn.classList.remove('hidden-re')
}


// this function is for the clock 
const play = () => {
    if (!isplay) {   // not isplay meaning that isplay is true and enter the if statement 
        // if second time play is pressed then isplay is true opposite of it is false  and select else block
        playButton.innerHTML = 'Pause';// chnages the play button to pause to pause the timer in between

        //min hand
        min = setInterval(() => {
            minute.innerHTML = `${++min_counter} :`; // set the innertex to the counter
        }, 60 * 1000);  /* interval of 60sec*/

        //sec hand
        sec = setInterval(() => {
            if (sec_counter === 60) {
                sec_counter = 0;   // here if the counter hits 60 sec the counter is set to 0 similar for misec
            }
            second.innerHTML = `&nbsp${++sec_counter} :`;

        }, 1000);

        //misec hand
        centisec = setInterval(() => {
            if (centi_counter === 100) {
                centi_counter = 0
            }
            centisecond.innerHTML = `&nbsp${++centi_counter}`;
        }, 10);


        isplay = true
        isreset = true;
    } else {
        playButton.innerHTML = 'play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centisec);

        isplay = false;
        isreset = false;

    }
    toggleBtn();
}

//this function is for the reset button
const reset = () => {
    isreset = true
    //play()
    lapbtn.classList.add("hidden")
    resetbtn.classList.add("hidden")
    minute.innerHTML = "&nbsp"
    second.innerHTML = "&nbsp";
    centisecond.innerHTML = "&nbsp ";
    lapbtn.classList.add('hidden-la')
    resetbtn.classList.add('hidden-re')
}


// this function is for lap button 
const lap = () => {
    const li = document.createElement("li")
    const number = document.createElement("span")
    const timespamp = document.createElement("span")

    li.setAttribute("class", "listitems")
    number.setAttribute("class", "number")
    timespamp.setAttribute("class", "timespamp")


    // to print the number of laps 
    number.innerText = `=> ${++lapitem}`;

    // to print the laps 
    timespamp.innerHTML = `${min_counter} : ${sec_counter} : ${centi_counter}`
    li.append(number, timespamp);
    laps.append(li);

    clrbtn.classList.remove("hidden-clr")  /// here this method is used to remove the clear button from hidden function in css so that it is displayed on the screen  and when it is don it is added back to clear all
}

// this function for clear all laps button
const clearall = () => {
    laps.innerHTML = ``;
    laps.append(clrbtn);
    clrbtn.classList.add("hidden-clr")


}



playButton.addEventListener("click", play);
resetbtn.addEventListener("click", reset);
lapbtn.addEventListener("click", lap);
clrbtn.addEventListener("click", clearall)




// at the start the lap and the reset button are hidden due to css hidden and when play bytton is pressed it is changed to pause and timer display starts
