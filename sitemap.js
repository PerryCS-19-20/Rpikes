function buildMap(eleid) {
    var space = document.getElementById(eleid);
    var list = document.createElement("ul");
    var subList = document.createElement("ul");
    var classProjects = document.createElement("li");
    classProjects.textContent ="Class Projects";
    list.appendChild(item("Home","index.html"));
    list.appendChild(item("Bio","bio.html"));
    list.appendChild(classProjects);
    subList.appendChild(item("Breakout","breakout.html"));
    subList.appendChild(item("Javascript Events","htmltest.html"));
    subList.appendChild(item("Pop-up","popup.html"));
    subList.appendChild(item("To Do List","todolist.html"));
    subList.appendChild(item("Chalkboard","chalkboard.html"));
    subList.appendChild(item("Tic Tac Toe","tictactoe.html"));
    subList.appendChild(item("Multiplication","table.html"));
    subList.appendChild(item("More Multiplication","multiplicationtable.html"));
    subList.appendChild(item("Calculator","calculator.html"));
    classProjects.appendChild(subList);
    list.appendChild(classProjects);
    space.appendChild(list);
    }
    function item(name,link){
        var ele = document.createElement("a");
        var li = document.createElement("li");
        ele.href = link;
        ele.textContent = name;
        li.appendChild(ele);
        return li;
    }


