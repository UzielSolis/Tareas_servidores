var searchButton = document.getElementById('searchButton');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchButton').addEventListener('click', getNews);
});

function logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
}

function getNews() {
    if (!localStorage.getItem("token")) {
        alert("You need to log in to search news");
        return;
    }
    const theme = document.getElementById('searchInput').value;
    window.location.href = `/news?theme=${theme}&token=${localStorage.getItem("token")}`;
}