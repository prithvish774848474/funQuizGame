// This Array of Objects contains details regarding the specific qustion
// There are a total of 10 questions
const questions = [
  {
    questionNumber: 1,
    question: "Which planet is also called the 'Red Planet'?",
    options: ["Earth", "Mars", "Venus", "Neptune"],
    answer: "Mars",
  },
  {
    questionNumber: 2,
    question: "The largest ocean in the world is?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    questionNumber: 3,
    question: "'Netaji' is the title given to which freedom fighter?",
    options: [
      "Bhagat Singh",
      "Mangal Pandey",
      "Subhash Chandra Bose",
      "Chandra Shekhar Azad",
    ],
    answer: "Subhash Chandra Bose",
  },
  {
    questionNumber: 4,
    question: "The mother of all languages is?",
    options: ["Telugu", "Kannada", "Hindi", "Sanskrit"],
    answer: "Sanskrit",
  },
  {
    questionNumber: 5,
    question: "Name the fastest land animal?",
    options: ["Cheetah", "Kangaroo", "Horse", "Blackbuck"],
    answer: "Cheetah",
  },
  {
    questionNumber: 6,
    question: "Which cell organelles are called the 'Power House of the Cell'?",
    options: ["Mitochondria", "Nucleus", "Ribosomes", "Endoplasmic Reticulum"],
    answer: "Mitochondria",
  },
  {
    questionNumber: 7,
    question: "Which ancient civilisation is known to build pyramids?",
    options: ["Mesopotamian", "Roman", "Egyptian", "Greek"],
    answer: "Egyptian",
  },
  {
    questionNumber: 8,
    question: `Which of the following is a fundamental duty of an Indian citizen 
      as per the Indian Constitution?`,
    options: [
      "To vote in elections",
      "To follow all traffic rules",
      "To respect the National Flag and the National Anthem",
      "To pay taxes on time",
    ],
    answer: "To respect the National Flag and the National Anthem",
  },
  {
    questionNumber: 9,
    question: "Which color is often associated with 'calm' and 'relaxation'?",
    options: ["Blue", "Green", "Red", "Yellow"],
    answer: "Blue",
  },
  {
    questionNumber: 10,
    question: `What is the highest rank that can be held in the Indian Army,
    including both regular and honorary ranks?`,
    options: [
      "Field Marshal",
      "General",
      "Lieutenent General",
      "Major General",
    ],
    answer: "Field Marshal",
  },
];

// DOM Manipulation Begins Here
const questionNumberElement = document.querySelector(
  "h1"
) as HTMLHeadingElement;
const questionElement = document.querySelector("p") as HTMLParagraphElement;
const optionButtons = document.querySelectorAll(
  "button"
) as NodeListOf<HTMLButtonElement>;
const buttonContainer = document.getElementById(
  "buttonContainer"
) as HTMLDivElement;
let index = -1; // 'index' is for the indices of 'questions' array
let score = 0; // 'score' gives the marks attained by the user out of 10
let countClicks = -1; // This tracks the number of times the options are clicked

// Initial Page with no content
questionNumberElement.style.display = "none";
questionElement.style.display = "none";
optionButtons[0].textContent = "Start Quiz Now";
for (let i = 1; i < 4; i++) optionButtons[i].style.display = "none";

// Updated Page with content
for (let i = 0; i < 4; i++) {
  optionButtons[i].addEventListener("click", () => {
    countClicks++;
    countClicks === 0 &&
      setTimeout(() => {
        // Changing the class value to convert the buttons to a matrix of 2*2
        buttonContainer.classList.remove("md:grid-cols-1");
        buttonContainer.classList.add("md:grid-cols-2");
        // Making the initial invisible buttons visible
        questionNumberElement.style.display = "block";
        questionElement.style.display = "block";
      }, 1000);
    // When the button is clicked for the last time, it reloads the page
    countClicks === 11 && location.reload();
    /* If the selected answer and the actual answer is same then the score is
        increased by one. The background color changes to Green, else to Red. */
    if (index >= 0 && countClicks <= 10) {
      if (optionButtons[i].getAttribute("value") === questions[index].answer) {
        score++;
        optionButtons[i].classList.remove(
          "text-sky-700",
          "border-sky-700",
          "md:hover:text-white",
          "md:hover:bg-sky-700"
        );
        optionButtons[i].classList.add(
          "text-white",
          "border-green-700",
          "bg-green-700"
        );
        setTimeout(() => {
          optionButtons[i].classList.remove(
            "text-white",
            "border-green-700",
            "bg-green-700"
          );
          optionButtons[i].classList.add(
            "text-sky-700",
            "border-sky-700",
            "md:hover:text-white",
            "md:hover:bg-sky-700"
          );
        }, 1000);
      } else {
        optionButtons[i].classList.remove(
          "text-sky-700",
          "border-sky-700",
          "md:hover:text-white",
          "md:hover:bg-sky-700"
        );
        optionButtons[i].classList.add(
          "text-white",
          "border-red-700",
          "bg-red-700"
        );
        for (let j = 0; j < 4; j++) {
          if (
            optionButtons[j].getAttribute("value") === questions[index].answer
          ) {
            optionButtons[j].classList.remove(
              "text-sky-700",
              "border-sky-700",
              "md:hover:text-white",
              "md:hover:bg-sky-700"
            );
            optionButtons[j].classList.add(
              "text-white",
              "border-green-700",
              "bg-green-700"
            );
            break;
          }
        }
        setTimeout(() => {
          optionButtons[i].classList.remove(
            "text-white",
            "border-red-700",
            "bg-red-700"
          );
          optionButtons[i].classList.add(
            "text-sky-700",
            "border-sky-700",
            "md:hover:text-white",
            "md:hover:bg-sky-700"
          );
          for (let j = 0; j < 4; j++) {
            optionButtons[j].classList.remove(
              "text-white",
              "border-green-700",
              "bg-green-700"
            );
            optionButtons[j].classList.add(
              "text-sky-700",
              "border-sky-700",
              "md:hover:text-white",
              "md:hover:bg-sky-700"
            );
          }
        }, 1000);
      }
    }
    setTimeout(() => {
      /* If the last question is reached then clicking on the options will display
        your final score out of 10 */
      if (countClicks === 10) {
        questionNumberElement.textContent = `Congrats! \nYour score is ${score} out of 10`;
        questionElement.style.display = "none";
        for (let j = 1; j < 4; j++) optionButtons[j].style.display = "none";
        buttonContainer.classList.remove("md:grid-cols-2");
        buttonContainer.classList.add("md:grid-cols-1");
        optionButtons[0].textContent = "Click Here to Start Again!";
      } else {
        index < 9 && index++;
        questionNumberElement.textContent = `Question ${index + 1} out of 10`;
        questionElement.textContent = questions[index].question;
        for (let j = 0; j < 4; j++) {
          optionButtons[j].style.display = "inline";
          optionButtons[j].textContent = questions[index].options[j];
          optionButtons[j].setAttribute("value", questions[index].options[j]);
        }
      }
    }, 1000);
  });
}
