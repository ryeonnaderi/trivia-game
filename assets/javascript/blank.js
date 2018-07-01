var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0;

var trueButton = $("#trueBtn");
var falseButton = $("#falseBtn");

var questionArray = [{
    question: "The man in black is Westley.",
    answer: true,
}, {
    question: "Westley was the next door neighbor to Buttercup.",
    answer: false,
}, {
    question: "Humperdinck is the Prince of Florin.",
    answer: true,
}, {
    question: "R.O.U.S. stands for Rat of Unusual Shape.",
    answer: false,
}, {
    question: "Buttercup nearly suffocated in the Fire Swamp.",
    answer: true,
}, {
    question: "Domingo Montoya is the six-fingered man.",
    answer: false,
}, {
    question: "The Dread Pirate Roberts is believed to have killed Westley while he was sailing to America.",
    answer: true,
}, {
    question: "Westley poisoned Inigo.",
    answer: false,
}, {
    question: "Inigo wanted to kill Count Rugen to avenge his father's death.",
    answer: true,
}, {
    question: "Fezzik was made fun being the size of a teenager at the age of six when he was in school.",
    answer: false,
}];

// console.log(questionArray[0].question);
// console.log(questionArray[0].answer);

//Variable to hold the random question from the array
var randomQuestion = [];
//Variable to hold the answer to the random question
var randomAnswer = "";

//Timer variables
var timer = 60;
var timerRunning = false;
//  Variable that will hold our setInterval
var timerInterval;


//============================= FUNCTIONS ==============================

//Page loads
$(document).ready(function () {

    //----------------------------- GAME START ----------------------------

    function pageLoads() {

        //Resets all counters
        correctAnswerCounter = 0;
        incorrectAnswerCounter = 0;
        unansweredAnswerCounter = 0;

        //Need to hide question until 
        $("#triviaQuestion").empty();

        //Timer set to start
        timer = 60;
        $("#timer").text("Time Remaining: " + timer + " seconds");

    };

    pageLoads();

    //===================== ON CLICK EVENT FOR START BUTTON ==================

    //User pushes the start button to begin the game
    $("#startBtn").click(function gameStart() {

        function run() {
            clearInterval(timerInterval);
            timerInterval = setInterval(decrement, 1000);
        };

        //  The decrement function.
        function decrement() {

            //  Decrease number by one.
            timer--;

            //  Show the number in the #timer tag.
            $("#timer").text("Time Remaining: " + timer + " seconds");


            //  Once number hits zero...
            if (timer === 0) {

                //  ...run the stop function.
                stop();

                //  Alert the user that time is up.
                alert("Time Up!");
            };
        };

        //  The stop function
        function stop() {

            //  Clears our timer
            clearInterval(timerInterval);
        }

        //  Execute the run function.
        run();

        //Random question is generated
        randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];

        //Adds random question to HTML
        $("#triviaQuestion").text(randomQuestion.question);

        randomAnswer = randomQuestion.answer;

        
    });

    //============================= CONDITIONALS ==============================

    function answerChoice() {

        //User selects the TRUE button
        $("#trueBtn").on("click", function () {

            trueButton = true;

            //If button chosen matches the correct answer, then correctAnswerCounter ++, otherwise, incorrectAnswerCounter++
            if (trueButton === randomAnswer) {
                correctAnswerCounter++
            } else if (trueButton !== randomAnswer) {
                incorrectAnswerCounter++
            }

            //Random question is generated
            randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];

            //Adds random question to HTML
            $("#triviaQuestion").text(randomQuestion.question);

            //Variable to hold answer boolean
            randomAnswer = randomQuestion.answer;

            console.log("Correct Answers: " + correctAnswerCounter);
            console.log("Incorrect Answers: " + incorrectAnswerCounter);
        });

        //User selects the TRUE button
        $("#falseBtn").on("click", function () {

            falseButton = false;

            //If button chosen matches the correct answer, then correctAnswerCounter ++, otherwise, incorrectAnswerCounter++
            if (falseButton === randomAnswer) {
                correctAnswerCounter++
            } else if (falseButton !== randomAnswer) {
                incorrectAnswerCounter++
            }

            //Random question is generated
            randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];

            //Adds random question to HTML
            $("#triviaQuestion").text(randomQuestion.question);

            //Variable to hold answer boolean
            randomAnswer = randomQuestion.answer;

            console.log("Correct Answers: " + correctAnswerCounter);
            console.log("Incorrect Answers: " + incorrectAnswerCounter);
        });

    };


    answerChoice();


//Game completion:
    //If questionArray < 1, then game is over
    //If timer == 0, then game is over



//Upon completion:

    // $("#completed").text("Correct Answers: " + correctAnswerCounter);
    // $("#completed").append("Incorrect Answers: " + incorrectAnswerCounter);

    // };


});