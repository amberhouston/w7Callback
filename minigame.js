function funBtnClicked() { 
    for (let x = 0; x <= 99; x ++){

        if (x === 0) {
                console.log(x + " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");
        }
        else {
                console.log(x + " is odd");
        }
      }
 }
 let funBtn = document.querySelector('#funBtn');
 funBtn.addEventListener('click',funBtnClicked);


function runBtnClicked() { 
    console.log("https://www.youtube.com/watch?v=hFEFdufsj50")
 }
 let runBtn = document.querySelector('#runBtn');
 runBtn.addEventListener('click',runBtnClicked);



function beeBtnClicked() { 
    console.log("According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second. Hello? - Barry? - Adam? - Can you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's.  Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me!  - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation. ")
 }
 let beeBtn = document.querySelector('#beeBtn');
 beeBtn.addEventListener('click',beeBtnClicked);