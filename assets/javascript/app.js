// variables
var score = 0;
var trueBtn = $("#true");
var falseBtn = $("#false");
// questions
var questions = [

    {
        question: "the man in the lab coat is morty",
        answers: false,
    },

    {
        question: "the first successfully cloned animal was a sheep",
        answers: true,
    },

    {
        question: " the official currency of china is yen",
        answers: false,
    },

    {
        question: "jerry and beth got a divorce in season 1",
        answers: false,
    },

    {
        question: "jerry was very loved in rick and Morty",
        answers: false,
    },

    {
        question: "Evil morty was captured",
        answers: false,
    }
];
//  quetion that was picked
var currentQuestion = [];
var currentAnswer = "";

// timer
var time = 20;
var timerunning = false;
var timerInterval;


// functions
$(document).ready(function () {
    function load() {
        score = 0;
        $("#questions").empty();
        time = 20;
        timerunning = true;
        $("#time").text("time left:" + time + " seconds ");
    };

    load();

    // gameStart
    $("#gameStart").click(function start()) {
        function begin() {
            clearInterval(timerInterval);
            timerInterval = setInterval(decrement, 1000);
        };

        function decrement() {
            time--;
            $("#time").text("Time Remaining: " + time + " seconds");

            if (time == 0) {
                end();
                alert("time is up");
            };
        };

        function end() {
            clearInterval(timerInterval);

        }
        begin();


        currentQuestion = questions[math.floor(math.random() * questions.length)];
        $("#questions").text(currentQuestion.question)
        currentAnswer = currentQuestion.answer;
    };


    function answerChoice() {
        $("#true").on("click", function () {
            trueBtn = true;
            if (trueBtn === currentAnswer) {
                score++;
            } else if (trueBtn !== currentAnswer) {
                score = score;
            }
            $("#questions").text(currentQuestion.question);
            currentAnswer = currentQuestion.answer;
        });

    }

    $("#false").on("click", function () {

        falseBtn = false;
        if (falseBtn === currentAnswer) {
            score++;

        } else if (falseBtn !== currentAnswer) {
            score = score;
        }
        currentAnswer = currentQuestion.answers;
    });


    answerChoice();


    function finished() {
        if (question.length === 0) {
            $("#questions").empty();
            $(".container").text("score:" + score);
        }

        if (time === 0) {
            alert("time is up");
        }


        end();

    }


});

// when time reaches zero then switch to next question

// make sure that the answer and the question match
// user input on the button html button .val method radio buttons 
// if  answer === correct answer then 
// if the answer is correct then increase by 1 and show gif 
// if they get it wrong then the correct answer shows up and the score remains the same 




// have a time limit for about 15 sec
// if they get the answer right then their score goes up by 1 and shows the gif of the correct answer 
// but if they get it wrong then their score  stays as zero and shows the correct answer and alerts better luck next time