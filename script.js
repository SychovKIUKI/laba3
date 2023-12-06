function checkTds() {
    var tds = document.querySelectorAll("td");

    for (var i = 0; i < tds.length; i++) {
        tds[i].addEventListener("click", function fillElem() {
            var input = document.createElement("input");
            input.setAttribute("type", "number");
            input.min = 2;
            input.max = 5;
            input.value = this.innerHTML;
            this.innerHTML = "";
            this.appendChild(input);

            var td = this;
            input.addEventListener("blur", function () {
                td.innerHTML = this.value;
                td.addEventListener("click", fillElem);
            });
            this.removeEventListener("click", fillElem);
        });
    }
}
function checkThs() {
    var ths = document.querySelectorAll("th:not(.fixed-cell)");

    for (var i = 0; i < ths.length; i++) {
        ths[i].addEventListener("click", function fillElem() {
            var input = document.createElement("input");
            input.value = this.innerHTML;
            this.innerHTML = "";
            this.appendChild(input);

            var th = this;
            input.addEventListener("blur", function () {
                th.innerHTML = this.value;
                th.addEventListener("click", fillElem);
            });
            this.removeEventListener("click", fillElem);
        });
    }
}

function addRow(cols, rows) {
    var table = document.querySelector("table");

    for (var i = 0; i < rows; i++) {
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        tr.appendChild(th);
        for (var j = 0; j < cols - 1; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    checkTds();
    checkThs();
}

function deleteRow() {
    var rows = document.querySelector(".table").rows;
    if (rows.length > 1) {
        rows[rows.length - 1].remove();
    }
}

function getPerformance() {
    var table = document.querySelector(".table");
    var tds = table.getElementsByTagName("td");
    var displayInfo = document.getElementById("displayInfo");
    var amountOfExelents = 0;
    var amountOfGood = 0;
    var amountOfUnderachievers = 0;
    var check = 0;
    var min = tds[0];

    for (var i = 0; i < tds.length; i++) {
        if (check == 0) {
            min = tds[i].innerHTML;
        }
        if (min > tds[i].innerHTML) {
            min = tds[i].innerHTML;
        }
        if (check == 4) {
            if (min < 3) amountOfUnderachievers++;
            else if (min == 3 || min == 4) amountOfGood++;
            else if (min == 5) amountOfExelents++;
            check = 0;
        } else {
            check++;
        }
    }
    displayInfo.innerHTML =
        " Відмінників : " +
        amountOfExelents +
        " Хорошистів : " +
        amountOfGood +
        " Неуспішних : " +
        amountOfUnderachievers;
}

checkTds();
checkThs();
