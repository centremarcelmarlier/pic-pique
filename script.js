

function startGame(){

}

function setNextQuestion(){
    
}
class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }

  let questions = [
    new Question("Combien de jeunes une maman hérisson peut-elle avoir sur une année ?", 
    ["1 à 3", "5 à 9", "10 à 20", "20 à 25"], 
    "5 à 9"),
	  
    new Question("Combien de piquants possède un hérisson adulte ?", 
    ["Entre 5000 et 7500", "Entre 7500 et 10.000", "Entre 10.000 et 20.000", "Entre 50 et 100"], 
    "Entre 5000 et 7500"),
	  
	new Question("A quel régime alimentaire appartiennent-ils ?", 
    ["Omnivore", "Carnivore", "Herbivore", "Insectivore"], 
    "Insectivore"),
	  
	new Question("Quel bruit étrange fait le hérisson ?", 
    ["Le miaulement du chat", "Le grognement du cochon", "Le grincement de la chauve-souris", "Le coassement de la grenouille"], 
    "Le grognement du cochon"),
	  
	new Question("Le hérisson sait-il nager ?", 
    ["non, il pourrait se noyer s'il y a une mare dans votre jardin", "oui, il a tous ses brevets de natation", "oui mais attention, il lui faut une rampe pour sortir de votre mare sinon, il s'y noie !", "oui mais seulement en dos crawlé"], 
    "oui mais attention, il lui faut une rampe pour sortir de votre mare sinon, il s'y noie !"),
	  
	  
	new Question("Observation : Qui possède des piquants comme Pic-Pique ?", 
    ["Le champignon", "Le marron", "L'oiseau", "L'arbre"], 
    "Le marron"),

	new Question("Observation : Où se cache Pic-Pique ? ", 
    ["Dans le creux d’un arbre", "Derrière le chien Jojo", "Sur une branche d’arbre", "Dans une maison"], 
    "Dans le creux d’un arbre"),
	  
	new Question("Observation : Quel animal observe la scène ?  ", 
    ["Un autre hérisson", "Un renard", "un lapin", "Une biche"], 
    "Une biche"),
	  
	  	new Question("Observation : Quel légume ne se trouve pas dans le panier ", 
    ["Poireau", "Chou-fleur", "Tomate", "Tout ces légumes sont dans le panier"], 
    "Poireau"),
	  
	  	  	new Question("Observation : Combien de pédoncules de pomme comptes-tu ? ", 
    ["3", "5", "7", "9"], 
    "3"),
	  
	  
  ];
  
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
      this.elementShown("quiz", endQuizHTML);
		
		
    },
	  
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // affichage choix + prise en compte du choix
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();





  