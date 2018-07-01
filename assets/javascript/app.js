// variables
var score = 0;

var trueBtn = $("#true");
var falseBtn = $("#false");
// questions
var questions = [

    {
        q: "the man in the lab coat is morty",
        answers: false,
    },

    {
        q: "the first successfully cloned animal was a sheep",
        answers: true,
    },

    {
        q: " the official currency of china is yen",
        answers: false,
    },

    {
        q: "jerry and beth got a divorce in season 1",
        answers: false,
    },

    {
        q: "jerry was very loved in rick and Morty",
        answers: false,
    },

    {
        q: "Evil morty was captured",
        answers: false,
    }
];


// holds the current question
var currentquestion = [];
// holds the answer
var answer = "";

// timer
var timer = 20;
var timeStart = false;
var timeInterval;

$(document).ready(function () {

            // game start function
            function load() {
                score = 0;
                correctAnswer = 0;
                inCorrectAnswer = 0;
                $("#qeustion").empty();
                timer = 20;
                $("#timer").text("Time:" + timer + "second");
            }

        }; load();

        $("gameStart").click(function gameStart() {
                function begin() {
                    clearInterval(timeInterval);
                    timeInterval = setInterval(decrement, 1000);
                };


                function decreasing() {

                    timer--;



                    $("#timer").text("Time:" + timer + "second");


                    if (timer === 0) {
                        end();

                        alert("time is up");
                    }
                };

                function end() {
                    clearInterval(timeInterval);
                }

                begin();
                $("#questions").text(questions);

                answer = questions.answer;

                $("#true").on("click", function ()) {
                            trueBtn = true;
                            if (trueBtn === answer) {
                                score++;
                            } else if (trueBtn !== answer) {
                                score = score;

                            }
                        }

                        $("#false").on("click", function ()) {
                                falseBtn = false;
                            }

                            if (falseBtn === answer)
                            {

                            }


                        };











                        // when time reaches zero then switch to next question

                        // make sure that the answer and the question match
                        // user input on the button html button .val method radio buttons 
                        // if  answer === correct answer then 
                        // if the answer is correct then increase by 1 and show gif 
                        // if they get it wrong then the correct answer shows up and the score remains the same 




                        // have a time limit for about 15 sec
                        // if they get the answer right then their score goes up by 1 and shows the gif of the correct answer 
                        // but if they get it wrong then their score  stays as zero and shows the correct answer and alerts better luck next time