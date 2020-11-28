const header = document.getElementById('header');

const nav = document.getElementById('nav-primary');

// setTimeout(() => {
//     header.appendChild(nav);
// }, 3000);

const ul = document.createElement('ul');

const ROOT = "http://ada.com";

const items = [
    { link: "/", text: "Inicio" },
    { link: "/servicios", text: "Servicios" },
    { link: "/sucursales", text: "Sucursales" },
    { link: "/contacto", text: "Contacto" },
]

for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', `${ROOT + items[i].link}`);
    a.innerHTML = items[i].text;
    li.appendChild(a);
    ul.appendChild(li);
}

nav.appendChild(ul);

{/* 
<div id="nav">
    <ul>
        <li>
            <a href="http://ada.com">Inicio</a>
        </li>
        <li>
            <a href="http://ada.com">Servicios</a>
        </li>
        <li>
            <a href="http://ada.com">Contacto</a>
        </li>
    </ul>
</div> 
*/}

const section = document.getElementById('noticias');
const article = document.createElement('article');
const articleHeader = document.createElement('header');
const articleMain = document.createElement('div');
const articleFooter = document.createElement('footer');
const articleH3 = document.createElement('h3');
const articleAuthor = document.createElement('div');
const articleP = document.createElement('p');
const articleText = document.createTextNode('<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil atque inventore laboriosam eveniet minima veniam tenetur tempora deserunt nemo quibusdam, consectetur vero, et, neque praesentium distinctio repellat sint. Aliquam, corporis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptas quas quibusdam odio ut. Corrupti illo voluptatum, a pariatur saepe officiis nesciunt id mollitia illum eius earum quisquam atque nobis.</span>');

articleH3.innerHTML = "Título de la noticia";

articleHeader.appendChild(articleH3);

article.appendChild(articleHeader);

articleP.appendChild(articleText);

articleMain.appendChild(articleP);
articleMain.setAttribute('class', 'main');

article.appendChild(articleMain);

articleAuthor.innerHTML = "Adrian";
articleAuthor.setAttribute('class', 'author');

articleFooter.appendChild(articleAuthor);

article.appendChild(articleFooter);

section.appendChild(article);


{/* 
<article>
    <header>
        <h3>Título de la noticia</h3>
    </header>

    <div class="main">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil atque inventore laboriosam eveniet minima veniam tenetur tempora deserunt nemo quibusdam, consectetur vero, et, neque praesentium distinctio repellat sint. Aliquam, corporis?. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptas quas quibusdam odio ut. Corrupti illo voluptatum, a pariatur saepe officiis nesciunt id mollitia illum eius earum quisquam atque nobis.</p>
    </div>

    <footer>
        <div class="author">Adrián</div>
    </footer>

</article> 
*/}