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
var currentQuestion = [];
var currentAnswer = "";



// var questionIndex = 0;
//  var questionInterval = setInterval(function()
//  {
//      questionIndex++;
//      if(question>=questions.length)
//      {
//          clearInterval(questionInterval);
//      }
//  },1000);
   


//  quetion that was picked


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
        
        $("#time").text("Time Remaining: " + time + " seconds");
    };

    load();
    
    
    //  $("#questions").text(questions.question); 
     console.log("current question " + currentQuestion);
    
     function end() {
        clearInterval(timerInterval);
        $(".container").text("final: " + score);
    };

    // gameStart
    $("#gameStart").click(function start() {
        function begin() {
            generateQuestion();
            timerunning = true;
        
            clearInterval(timerInterval);
            timerInterval = setInterval(decrement, 1000);
        };

        function decrement() {
            time--;
            $("#time").text("Time Remaining: " + time + " seconds");

            if (time === 0) {
                end();
                alert("time is up");
            };
        };

        
        begin();


        
        
        
    });
    function generateQuestion()
    {
        if(checkednotFinished())
        {
            var randomIndex = Math.floor(Math.random()*questions.length);
            currentQuestion = questions.splice(randomIndex,1)[0];
            $("#questions").text(currentQuestion.question);
            currentAnswer =currentQuestion.answers;
        }
        
        
    };

    


    function answerChoice() {
        $("#true").on("click", function () {
        
            if (true === currentAnswer) {
                score++;

                
            } else {
                score = score;
            
            }
            $("#questions").text(currentQuestion.question);
            generateQuestion();
            
        });



        $("#false").on("click", function () {

            
            if (false === currentAnswer) {
                score++;
                
            } else  {
                score = score;
            }
            $("#questions").text(currentQuestion.question);
            generateQuestion();
            
        });

    };

    answerChoice();


    function checkednotFinished() {
        if (questions.length === 0) {
            $("#questions").empty();
            $(".container").text("score:" + score);
            end();
            return false;
        }

        if (time === 0) {
            alert("time is up");
            end();
            return false;
        }

        return true;
        

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