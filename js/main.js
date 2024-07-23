
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var myQuestions = [
    {
        question: "What does TNR stand for?",
        answers: {
            a: 'trap-neuter-release',
            b: 'trap-neuter-return',
            c: 'trap-neuter-rejoice'
        },
        correctAnswer: 'b'
    },
    {
        question: "What are the benefits of TNR?",
        answers: {
            a: 'Reduces the number of community cats over time',
            b: 'Reduces nuisance behaviors like fighting and spraying',
            c: 'Allows cats to live healthier lives with reduced risk of disease',
            d: 'All of the above'
        },
        correctAnswer: 'd'
    },
    {
        question: "What treatments does a TNR cat typically receive?",
        answers: {
            a: 'They are spayed/neutered, vaccinated, and microchipped',
            b: 'They are spayed/neutered only',
            c: 'Only the males are snipped'
        },
        correctAnswer: 'a'
    },
    {
        question: "What defines a community cat?",
        answers: {
            a: 'outdoor, unowned, free-roaming cats',
            b: 'any free-roaming cat - owned or unowned',
            c: 'owned indoor/outdoor cats'
        },
        correctAnswer: 'a'
    },
    {
        question: "What happens to feral community cats brought to most shelters?",
        answers: {
            a: 'They are adopted out.',
            b: 'The go to barn homes.',
            c: 'They are euthanized.'
        },
        correctAnswer: 'c'
    },
    {
        question: "How many community cats exist across the United States?",
        answers: {
            a: 'between 60,000 and 100,000',
            b: 'between 800,000 and one million',
            c: 'between 60 million and 100 million'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which ear is ear-tipped in Wisconsin?",
        answers: {
            a: 'left',
            b: 'right',
            c: 'both'
        },
        correctAnswer: 'a'
    },
    {
        question: "Why do we ear-tip TNR cats?",
        answers: {
            a: 'To show they are unadoptable',
            b: 'It prevents an already neutered cat the stress of re-trapping',
            c: 'It tells people which cats are aggressive'
        },
        correctAnswer: 'b'
    },
    {
        question: "Do ear-tipped community cats get adopted out?",
        answers: {
            a: 'Yes. After being fixed we find almost half of community cats become friendly and enjoy indoor life',
            b: 'No. All ear-tipped cats are feral and should be left outdoors',
            c: 'Yes, but it is rare for an outdoor cat to enjoy indoor life.'
        },
        correctAnswer: 'a'
    },
    {
        question: "Is it helpful to feed outdoor cats?",
        answers: {
            a: 'Absolutely. They need our help',
            b: 'No. They are acclimated to outdoors and do not need us',
            c: 'Yes. But only if they are fixed or if you plan to TNR them ASAP.'
        },
        correctAnswer: 'c'
    }
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'darkolivegreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'crimson';
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


