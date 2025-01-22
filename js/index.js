// 1) Ми хочемо відпрацювати INTersection observer під час завантаження сторінка

document.addEventListener("DOMContentLoaded", (e) => {
  const cards = Array.from(document.querySelectorAll(".card"));
  const container = document.querySelector(".container");
  // 2)Ми перевіряєм чи є у користувача доступ до INTersection observer
  // if (!"IntersectionObserver" in window) return;
  if ("IntersectionObserver" in window) {
    //   3)Створити екземпляр класу  IntersectionObserver
    const observer = new IntersectionObserver((entryArr) => {
      entryArr.forEach((entry) => {
        // 5) Зрозуміти,що користувач бачить карточку
        //   entry.isIntersecting === true - користувач має бачити картку
        if (entry.isIntersecting === true) {
          // 6) Логіка(що ми хочемо робити коли бачимо карточки)
          // entry.target - елемент який ми бачимо

          const card = entry.target;
          if (!card.classList.contains("show")) {
            card.classList.add("show");
            observer.unobserve(card);
          }
        }
      });
    });

    //   7)Для нескінченного скролу нам необхідно слідкувати за останнім елементом
    const lastElementObserver = new IntersectionObserver((entryArr) => {
      // 9)Генерити нові карточки
      const lastElement = entryArr[0];
      if (!lastElement.isIntersecting) return;
      newCards(55);
      lastElementObserver.unobserve(lastElement.target);
      lastElementObserver.observe(document.querySelector(".card:last-child"));
    });

    //   4)Ми маємо повідомити обсерверу, що ми хочемо відслідковувати
    // 8) Даємо нашому observery інформацію що він має відслідковувати(останній елемент)

    lastElementObserver.observe(document.querySelector(".card:last-child"));

    function newCards(quantity) {
      for (let i = 0; i < quantity; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        observer.observe(card);
        container.append(card);
      }
    }

    cards.forEach((card) => {
      observer.observe(card);
    });
  } else {
    console.log("Оновіть браузер");
  }
});
