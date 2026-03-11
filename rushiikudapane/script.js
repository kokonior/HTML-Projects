var countBox1 = 1;
function addNewWexpField() {
  var boxName = "deleteField1" + countBox1;
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wexpField");
  newNode.classList.add("mt-3");
  newNode.classList.add("mb-3");
  newNode.setAttribute("placeholder", "Enter your work experiences");
  newNode.classList.add('"' + boxName + '"');
  countBox1 = countBox1 + 1;

  let wexpOb = document.getElementById("wexp");
  let wexpAddButtonOb = document.getElementById("wexpAddButton");

  wexpOb.insertBefore(newNode, wexpAddButtonOb);
}
function deleteexp() {
  countBox1 = countBox1 - 1;
  var boxName = "deleteField1" + countBox1;
  const elements = document.getElementsByClassName('"' + boxName + '"');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

var countBox2 = 1;
function addNewAcdqField() {
  var boxName = "deleteField" + countBox2;
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("acdqField");
  newNode.classList.add("mt-3");
  newNode.classList.add("mb-3");
  newNode.setAttribute("placeholder", "Enter your academic qualification");
  newNode.classList.add('"' + boxName + '"');
  countBox2 = countBox2 + 1;

  let acdqOb = document.getElementById("acdq");
  let acdqAddButtonOb = document.getElementById("acdqAddButton");

  acdqOb.insertBefore(newNode, acdqAddButtonOb);
}

function deleteAcdqField() {
  countBox2 = countBox2 - 1;
  var boxName = "deleteField" + countBox2;
  const elements = document.getElementsByClassName('"' + boxName + '"');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

var countBox5 = 1;
function addNewhobbiesField() {
  var boxName = "deleteField5" + countBox5;
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("hobbiesField");
  newNode.classList.add("mt-3");
  newNode.classList.add("mb-3");
  newNode.setAttribute("placeholder", "Enter your hobbies");
  newNode.classList.add('"' + boxName + '"');
  countBox5 = countBox5 + 1;

  let hobbiesOb = document.getElementById("hobbies");
  let hobbiesAddButtonOb = document.getElementById("hobbiesAddButton");

  hobbiesOb.insertBefore(newNode, hobbiesAddButtonOb);
}
function deletehobby() {
  countBox5 = countBox5 - 1;
  var boxName = "deleteField5" + countBox5;
  const elements = document.getElementsByClassName('"' + boxName + '"');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

var countBox3 = 1;
function addNewskillsField() {
  var boxName = "deleteField3" + countBox3;
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skillsField");
  newNode.classList.add("mt-3");
  newNode.classList.add("mb-3");
  newNode.setAttribute("placeholder", "Enter your skills");
  newNode.classList.add('"' + boxName + '"');
  countBox3 = countBox3 + 1;

  let skillsOb = document.getElementById("skills");
  let skillsAddButtonOb = document.getElementById("skillsAddButton");

  skillsOb.insertBefore(newNode, skillsAddButtonOb);
}
function deletskills() {
  countBox3 = countBox3 - 1;
  var boxName = "deleteField3" + countBox3;
  const elements = document.getElementsByClassName('"' + boxName + '"');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

var countBox4 = 1;
function addNewprojectsField() {
  var boxName = "deleteField4" + countBox4;
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("projectsField");
  newNode.classList.add("mt-3");
  newNode.classList.add("mb-3");
  newNode.setAttribute("placeholder", "Enter your projects");
  newNode.classList.add('"' + boxName + '"');
  countBox4 = countBox4 + 1;

  let projectsOb = document.getElementById("projects");
  let projectsAddButtonOb = document.getElementById("projectsAddButton");

  projectsOb.insertBefore(newNode, projectsAddButtonOb);
}
function deleteproject() {
  countBox4 = countBox4 - 1;
  var boxName = "deleteField4" + countBox4;
  const elements = document.getElementsByClassName('"' + boxName + '"');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

var countBox6 = 1;
function addNewachievementsField() {
  var boxName = "deleteField6" + countBox6;
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("achievementsField");
  newNode.classList.add("mt-3");
  newNode.classList.add("mb-3");
  newNode.setAttribute("placeholder", "Enter your achievements");
  newNode.classList.add('"' + boxName + '"');
  countBox6 = countBox6 + 1;

  let achievementsOb = document.getElementById("achievements");
  let achievementsAddButtonOb = document.getElementById(
    "achievementsAddButton"
  );

  achievementsOb.insertBefore(newNode, achievementsAddButtonOb);
}
function deleteAchievement() {
  countBox6 = countBox6 - 1;
  var boxName = "deleteField6" + countBox6;
  const elements = document.getElementsByClassName('"' + boxName + '"');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

//generating CV
function generateCV() {
  //for name
  let nameFieldOb = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameFieldOb;

  document.getElementById("nameT2").innerHTML = nameFieldOb;

  //for email
  let emailFieldOb = document.getElementById("emailField").value;
  let emailT = document.getElementById("emailT");

  emailT.innerHTML = emailFieldOb;

  //for contact
  let contactFieldOb = document.getElementById("contactField").value;
  let contactT = document.getElementById("contactT");

  contactT.innerHTML = contactFieldOb;

  //for address
  let addressFieldOb = document.getElementById("addressField").value;
  let addressT = document.getElementById("addressT");

  addressT.innerHTML = addressFieldOb;

  //for Linkedin
  let val1 = document.getElementById("LinkedInField").value;
  document.getElementById("LinkedInT").setAttribute("href", val1);

  //for github
  let val2 = document.getElementById("GithubField").value;
  document.getElementById("GithubT").setAttribute("href", val2);

  //for hobbies
  let hobbiess = document.getElementsByClassName("hobbiesField");

  let str2 = "";

  for (let e of hobbiess) {
    str2 = str2 + `<li> ${e.value} </li>`;
  }

  document.getElementById("hobbiesT").innerHTML = str2;

  //for skilld
  let skillss = document.getElementsByClassName("skillsField");

  let str3 = "";

  for (let e of skillss) {
    str3 = str3 + `<li> ${e.value} </li>`;
  }

  document.getElementById("skillsT").innerHTML = str3;

  //for projects
  let projectss = document.getElementsByClassName("projectsField");

  let str4 = "";

  for (let e of projectss) {
    str4 = str4 + `<li> ${e.value} </li>`;
  }

  document.getElementById("projectsT").innerHTML = str4;

  //for achievements
  let achievementss = document.getElementsByClassName("achievementsField");

  let str5 = "";

  for (let e of achievementss) {
    str5 = str5 + `<li> ${e.value} </li>`;
  }

  document.getElementById("achievementsT").innerHTML = str5;

  //for workexperience
  let wexps = document.getElementsByClassName("wexpField");

  let str = "";

  for (let e of wexps) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("wexpT").innerHTML = str;

  //for academic qualifications
  let acdqs = document.getElementsByClassName("acdqField");

  let str1 = "";

  for (let e of acdqs) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }

  document.getElementById("acdqT").innerHTML = str1;

  //   code to insert Image

  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let readerOb = new FileReader();

  readerOb.readAsDataURL(file);

  console.log(readerOb.result);

  readerOb.onloadend = function () {
    document.getElementById("imgTemplate").src = readerOb.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function back() {
  document.getElementById("cv-form").style.display = "block";
  document.getElementById("cv-template").style.display = "none";
}

function printCV() {
  document.getElementById("printButton").style.display = "none";
  setTimeout(window.print, 1000);
  // document.getElementById("printButton").style.display = "block";
}
