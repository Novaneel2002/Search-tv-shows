const form = document.querySelector('#searchform');
const form2 = document.querySelector('#reset');
form2.addEventListener('click' , function(e){
    // setTimeout(() => {
    //     rmImages();
    // }, 5000)
    rmImages();
})
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.log("SUBMITTED")
    // console.log(form.elements.query.value)
    const searchTerm = form.elements.query.value;
    const config = {params : {q : searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config )
    console.log(res.data);
    console.log(res.data.length);
    makeImages(res.data);
    form.elements.query.value = '';

})

const makeImages = (shows) => {
    // document.querySelector('#newdiv').createElement('div')
    const newdiv = document.querySelector('#newdiv')
    for (let result of shows) {
        // console.log(show)
        if (result.show.image && result.show.name) {
            const div = document.createElement('div')
            // div.classList.add('d-flex')
            div.style.margin = "2px";
            div.classList.add("mov-det")
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            img.classList.add("rounded")

            const name = document.createElement('h5')
            name.innerText = result.show.name;
            name.classList.add("mx-auto")
            name.style.fontFamily = "'Gentium Book Plus', serif" ;
            newdiv.append(div);
            div.appendChild(img);
            // newdiv.appendChild(img);
            div.appendChild(name);
        }

    }
}


const rmImages = () => {
    let rmim = document.querySelectorAll('.mov-det')
    rmim.forEach(img => {
        img.remove();
    });
    rmim.forEach(name => {
        name.remove();
    });
}
