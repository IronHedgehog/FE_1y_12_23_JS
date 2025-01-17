document.addEventListener("DOMContentLoaded", (e) => {
  const imgs = Array.from(document.querySelectorAll(".img"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entryArr) => {
        entryArr.forEach((entry) => {
          //   isIntersecting - людина бачить цей елемент
          console.log(entry);
          if (entry.isIntersecting === true) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        });
      },
      {
        //   Вказуєте елемент в якому потрібно слідкувати
        root: document.body,
        rootMargin: "40px",
      }
    );

    imgs.forEach((img) => observer.observe(img));
  } else {
    console.error(
      "У вас занадто стаирй браузер. IntersectionObserver не підтримується"
    );
  }
});
