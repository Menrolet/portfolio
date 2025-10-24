const skills = {
  data: [
    { name: "html", level: 60, icon: "html.svg" },
    { name: "css", level: 70, icon: "css.svg" },
    { name: "python", level: 80, icon: "python.svg" },
    { name: "c++", level: 55, icon: "c++.svg" }
  ],

  sortMode: null,

  generateList(parentElement) {
    parentElement.innerHTML = "";
    this.data.forEach(skill => {
      const dt = document.createElement("dt");
      dt.classList.add("skill-item");
      dt.textContent = skill.name;
      dt.style.backgroundImage = `url(/img/${skill.icon})`;

      const dd = document.createElement("dd");
      dd.classList.add("skill-level");

      const div = document.createElement("div");
      div.style.width = `${skill.level}%`;
      div.textContent = `${skill.level}%`;

      dd.appendChild(div);
      parentElement.append(dt, dd);
    });
  },

  sortList(type) {
    const list = document.querySelector("dl.skill-list");

    if (this.sortMode === type) {
      this.data.reverse();
      console.log("инвертировали порядок сортировки");
    } else {
      this.data.sort((a, b) => {
        if (a[type] > b[type]) return 1;
        if (a[type] < b[type]) return -1;
        return 0;
      });
      this.sortMode = type;
      console.log(`отсортировали данные по ${type}`);
    }

    this.generateList(list);
  }
};

const skillList = document.querySelector("dl.skill-list");
skills.generateList(skillList);

// делегирование событий
const sortBlock = document.querySelector(".skills-sort");
sortBlock.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  const type = e.target.dataset.sort;   // "name" | "level"
  skills.sortList(type);
});

// Получаем элементы
const nav = document.querySelector(".main-nav");
const navBtn = document.querySelector(".nav-btn");

console.log(nav, navBtn);

// создаём объект menu
const menu = {
  open() {
    nav.classList.remove("main-nav_closed");
    navBtn.classList.remove("nav-btn_open");
    navBtn.classList.add("nav-btn_close");
    navBtn.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
  },

  close() {
    nav.classList.add("main-nav_closed");
    navBtn.classList.remove("nav-btn_close");
    navBtn.classList.add("nav-btn_open");
    navBtn.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
  }
};

// скрываем меню при загрузке скрипта
menu.close();

// обработчик события click на кнопке
navBtn.addEventListener("click", (e) => {
  if (nav.classList.contains("main-nav_closed")) {
    menu.open();
  } else {
    menu.close();
  }
});