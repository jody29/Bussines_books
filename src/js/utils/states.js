const loading = `
<article class='loading'></article>
<article class='loading'></article>
<article class='loading'></article>
<article class='loading'></article>
<article class='loading'></article>
<article class='loading'></article>
<article class='loading'></article>
<article class='loading'></article>
`

const partial = `
<li><a class='back'>home</a></li>
<li><a>concept</a></li>
`

const error429 = `
<section class='error'>
    <h3>ERROR 429</h3>
    <p>te veel ondernemers zijn op zoek naar boeken</p>
    <a href=''>probeer het later nog eens</a>
</section>
`

const error403 = `
<section class='error'>
    <h3>ERROR 403</h3>
    <p>niet toegestaan</p>
    <a href=''>probeer opnieuw</a>
</section>
`

export {
    loading,
    partial,
    error429,
    error403
}