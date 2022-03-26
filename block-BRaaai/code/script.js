html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

/* remember to define focus styles! */
:focus {
    outline: 0;
}

/* remember to highlight inserts somehow! */
ins {
    text-decoration: none;
}
del {
    text-decoration: line-through;
}

/* tables still need 'cellspacing="0"' in the markup */
table {
    border-collapse: collapse;
    border-spacing: 0;
}

html{
    font-size: 16px;
}
body{
    line-height: 1.5;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
img{
    width: 100%;
    z-index: 0;
}
.image-sec{
    position: relative;
}


.container{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
}

.container2{
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
}
.category{
  
    background-color: red;
    color: white;
    position: absolute;
    bottom: .4rem;
    left: 0;
    padding: 1rem;
   
}

.time{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.time strong{
    font-size: 1.4rem;
}


.date{
    position: absolute;
    top: 2rem;
    right: 2rem;
    background-color: red;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1rem;
}
h1{
    font-size: 3rem;
}

h2{
    font-size: 2.5rem;
    color: red;
}

p{
    font-size: 1.5rem;
    color: gray;
}

.comment-sec{
    margin-top: 2rem;
    width: 25rem;
    display: flex;
    justify-content: space-between;
}
span{
    font-size: 2rem;
    color: rgb(189, 184, 184);
   
}
i{
    margin-right: .5rem;
    font-size: 2rem;
    color: gray;
    
}