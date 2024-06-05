
const background = document.getElementById("modal-background")
const ModalContainer = document.getElementById("modal-container")

let currentMovie = {};

function backgroundClickHandler(){
    overlay.classList.remove("open")
}

function closeModal(){
    overlay.classList.remove("open")
}

function addCurrentMovieToList() { 
    if(isMovieAlredyonList(currentMovie.imdbID)){
        notie.alert({type: 'error', text: 'O filme ja esta na lista!'})
        return
    }
    addToList(currentMovie);
    updateUI(currentMovie);
    updateLocalStorage()
    closeModal()
}

async function createModal(data){

    currentMovie = data;


    
    ModalContainer.innerHTML = `
    <h2 id="movie-title">${data.Title} - ${data.Year}</h2>
    <section id="modal-body">
    <section id="modal-body"></section>
        <img src=${data.Poster}
         alt="Poster do Filme." id="movie-poster">
         <div id="movie-info">
            <h3 id="movie-plot">${data.Plot}
            </h3>
            <div id="movie-cast">
                <h4>Elenco: </h4>
                <h5>${data.Actors}</h5>

            </div>
            <div id="movie-genre">
                <h4>Genero: </h4>
                <h5>${data.Genre}</h5>
            </div>
            
         </div>
    </section>
    <section id="modal-footer">
        <button id="add-to-list" onclick='{addCurrentMovieToList()}'>adicionar a lista</button>
      </section>`;


}



background.addEventListener('click', backgroundClickHandler)