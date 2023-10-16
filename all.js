const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const str = document.querySelector("h2");

btn.addEventListener("click", function (e) {
  const tasks = [
    { selector: ".task1", answer: 60 },
    { selector: ".task2", answer: 240 },
    { selector: ".task3", answer: 120 },
    { selector: ".task4", answer: 20 },
    { selector: ".task5", answer: 35 },
    { selector: ".task6", answer: 70 },
    { selector: ".task7", answer: 40 },
    { selector: ".task8", answer: 20 },
    { selector: ".task9", answer: 30 },
    { selector: ".task10", answer: 200 },
    { selector: ".task11", answer: 180 },
    { selector: ".task12", answer: 4200 },
    { selector: ".task13", answer: 3800 },
    { selector: ".task14", answer: 2000 },
    { selector: ".task15", answer: 600 },
    { selector: ".task16", answer: 450 },
    { selector: ".task17", answer: 30 },
    { selector: ".task18", answer: 60 }
  ];

  let num = 0;
  let cc = 0;

  tasks.forEach(function (task) {
    const taskElement = document.querySelector(task.selector);

    if (taskElement && taskElement.value !== null && taskElement.value !== undefined && taskElement.value !== "") {

        if (Number(taskElement.value) === task.answer) {
          num++;
        }
      } else {
        cc++
      }
  });

  if(cc !== 0) {
    str.innerHTML = `請填寫完全`;
  }else {
    str.innerHTML = `全部18題，答對${num}題`;
  }
  
});

/*const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const str = document.querySelector("h2");

btn.addEventListener("click", function (e) {
  const tasks = [
    { selector: ".task1", answer: 60 },
    { selector: ".task2", answer: 240 },
    { selector: ".task3", answer: 120 },
    { selector: ".task4", answer: 20 },
    { selector: ".task5", answer: 35 },
    { selector: ".task6", answer: 10 },
    { selector: ".task7", answer: 40 },
    { selector: ".task8", answer: 20 },
    { selector: ".task9", answer: 30 },
    { selector: ".task10", answer: 200 },
    { selector: ".task11", answer: 180 },
    { selector: ".task12", answer: 4200 },
    { selector: ".task13", answer: 3800 },
    { selector: ".task14", answer: 2000 },
    { selector: ".task15", answer: 600 },
    { selector: ".task16", answer: 450 },
    { selector: ".task17", answer: 30 },
  ];

  let num = 0;

  tasks.forEach(function (task) {
    const taskElement = document.querySelector(task.selector);
    if (taskElement && Number(taskElement.value) === task.answer) {
      num++;
    }
  });

  str.innerHTML = `全部17題，答對${num}題`;
});
*/