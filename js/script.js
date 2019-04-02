/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


const studentList = document.querySelector('.student-list');
  const student = document.querySelectorAll(".student-item");
  const pagebody = document.querySelector('div.page');
  const pagediv = document.createElement('div');
     pagediv.classList.add("pagination");
     pagebody.appendChild(pagediv);
  const pageUl = document.createElement('ul');
     pagediv.appendChild(pageUl);
  const pageHeader = document.querySelector(".page-header");

  //search bar
  const searchDiv = document.createElement("div");
     searchDiv.className = "student-search";
     pageHeader.appendChild(searchDiv);
  const searchInput = document.createElement("input");
     searchInput.setAttribute("placeholder", "Search for students...");
     searchDiv.appendChild(searchInput);
  const searchBtn = document.createElement("button");
     searchBtn.textContent = "Search";
     searchDiv.appendChild(searchBtn);
     // add keyup on the search input
     searchInput.onkeyup = function() {
        let filter = searchInput.value.toLowerCase();
        for (var i = 0; i < student.length; i++) {
           if (student[i].innerHTML.indexOf(filter) > -1) {
              student[i].style.display = "";
           } else {
              student[i].style.display = "none";
           }
        }
     }

  //functionality for search button
  searchBtn.addEventListener("click", function(){
     let filter = searchInput.value.toLowerCase();
     for (var i = 0; i < student.length; i++) {
        if (student[i].innerHTML.indexOf(filter) > -1) {
           student[i].style.display = "";
        } else {
           student[i].style.display = "none";
        }
     }
  })

  /***show first 10 ***/
  const showPage = function(list, page) {
        let last = page * 10;
        let first = last - 10;
        for (var i = 0; i < student.length; i++) {
          if (i >= last || i < first) {
            student[i].style.display = "none";
          } else {
            student[i].style.display = "";
          }
        }
      }

  /*** adding functionality***/
  const appendPageLinks = function (list) {
  let pageCount = Math.ceil(student.length / 10);

  for (var i = 0; i < pageCount; i++) {
     let pageLi = document.createElement('li');
     pageUl.appendChild(pageLi);
     let pageAnchor = document.createElement('a');
     pageLi.appendChild(pageAnchor);
     pageAnchor.setAttribute('href', "#");
     pageAnchor.innerHTML= i + 1;
     pageAnchor.addEventListener("click", function() {
        let aLinks = document.querySelectorAll("a");
        for (var i = 0; i < aLinks.length; i++) {
           aLinks[i].className = "";
        }
        event.target.className = "active";
        showPage(studentList, pageAnchor.innerHTML);
     });
  }
}

  showPage(studentList, 1);
  appendPageLinks(studentList);
