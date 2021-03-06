export function PostCard(props){
    let {date,id,title,slug,_embedded}=props
    let dateFormat=new Date(date).toLocaleString(),
    urlPoster= _embedded["wp:featuredmedia"]? _embedded["wp:featuredmedia"][0].source_url:"app/assets/favicon.png";
    document.addEventListener("click",(e)=>{
        if(!e.target.matches(".post-card a"))return false
        localStorage.setItem("wpPostId",e.target.dataset.id) //wpPostId es variable
    })
    return `
    <article class="post-card">
    <img src="${urlPoster}" alt="${title.rendered}">
    <p>
    <h2>${title.rendered}</h2>
    <p>
    <time datatime="${date}">${dateFormat}</time>
    <a href="#/${slug}" data-id="${id}">ver Publicación</a>
    </p>
    </article>
    `;
}