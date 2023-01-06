let panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeClassList();
        panel.classList.add("active");
    });
});

function removeClassList() {
    panels.forEach((pannel) => {
        pannel.classList.remove("active");
    })
}
