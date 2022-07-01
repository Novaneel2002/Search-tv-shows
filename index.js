const form = document.querySelector('#searchform');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.log("SUBMITTED")
    // console.log(form.elements.query.value)
    const searchTerm = form.elements.query.value;
    const config = {params : {q : searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config )
    console.log(res.data);
    console.log(res.data.length);

    // const img = document.createElement('IMG');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img)
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        // console.log(show)
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }
}
