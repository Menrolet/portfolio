const skills = {
  data: [
    { name: "html", level: 60, icon: "html.svg" },
    { name: "css", level: 70, icon: "css.svg" },
    { name: "python", level: 80, icon: "python.svg" },
    { name: "c++", level: 55, icon: "c++.svg" }
  ],

  generateList(parentElement) {
    parentElement.innerHTML = "";

    this.data.forEach(skill => {
      const dt = document.createElement("dt");
      dt.classList.add("skill-item");
      dt.textContent = skill.name;
      dt.style.backgroundImage = `url(img/${skill.icon})`;

      const dd = document.createElement("dd");
      dd.classList.add("skill-level");

      const div = document.createElement("div");
      div.style.width = `${skill.level}%`;
      div.textContent = `${skill.level}%`;

      dd.appendChild(div);
      parentElement.append(dt, dd);
    });
  }
};

const skillList = document.querySelector("dl.skill-list");
skills.generateList(skillList);