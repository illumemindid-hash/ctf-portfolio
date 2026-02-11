// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Filter chips for write-ups
const chips = document.querySelectorAll(".chip");
const items = document.querySelectorAll(".writeup");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.dataset.filter;
    items.forEach((item) => {
      const tags = (item.dataset.tags || "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      item.style.display = show ? "" : "none";
    });
  });
});
