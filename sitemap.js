function buildMap(eleid) {
    var space = document.getElementById(eleid);
    var list = document.createElement("ul");
    var subList = document.createElement("ul");
    var classProjects = document.createElement("li");
    classProjects.textContent ="Class Projects";
    list.appendChild(item("Home","index.html"));
    list.appendChild(item("Bio","bio.html"));
    list.appendChild(classProjects);

    }


