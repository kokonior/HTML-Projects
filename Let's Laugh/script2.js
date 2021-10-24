const reloadtButton = document.querySelector("#refresh");
function refresh() {
    refresh = location.refresh();
}
reloadButton.addEventListener("click", refresh, false);