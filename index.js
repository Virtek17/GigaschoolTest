document.getElementById("toggleBtn").addEventListener("click", function () {
  const moreInfo = document.getElementById("moreInfo");
  const btn = this;

  if (moreInfo.classList.contains("hidden")) {
    moreInfo.classList.remove("hidden");
    btn.textContent = "Скрыть подробности";
  } else {
    moreInfo.classList.add("hidden");
    btn.textContent = "Подробнее о навыках";
  }
});
