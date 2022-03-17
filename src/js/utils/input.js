
// inputs for when user clicks on concept
const concept = `
<input type='radio' name='subTopic' id='startup' value='startende onderneming'></input>
<input type='radio' name='subTopic' id='innovatie' value='innovatie'></input>
<input type='radio' name='subTopic' id='doelgroepen' value='doelgroepen'></input>
<input type='radio' name='subTopic' id='ondernemerschap' value='ondernemerschap'></input>

<label for='startup'>startende onderneming</label>
<label for='innovatie'>innovatie</label>
<label for='doelgroepen'>doelgroepen</label>
<label for='ondernemerschap'>ondernemerschap</label>
`

// inputs for when user clicks on design
const design = `
<input type='radio' name='subTopic' id='prototype' value='prototyping'></input>
<input type='radio' name='subTopic' id='design' value='huisstijl'></input>
<input type='radio' name='subTopic' id='test' value='usability testing'></input>

<label for='prototype'>prototyping</label>
<label for='design'>huisstijl</label>
<label for='test'>usability testing</label>
`

// inputs for when user clicks on planning
const planning = `
<input type='radio' name='subTopic' id='financiering' value='financiëring'></input>
<input type='radio' name='subTopic' id='marketing' value='marketing'></input>
<input type='radio' name='subTopic' id='planning' value='planning'></input>

<label for='financiering'>financiëring</label>
<label for='marketing'>marketing</label>
<label for='planning'>planning</label>
`

// inputs for when user clicks on management
const management = `
<input type='radio' name='subTopic' id='juridisch' value='juridische aspecten'></input>
<input type='radio' name='subTopic' id='management' value='management'></input>

<label for='juridisch'>juridische aspecten</label>
<label for='management'>management</label>
`

export {
    concept,
    design,
    planning,
    management
}