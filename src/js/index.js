let fakture = []
let brojac = 0
//Inputi
const imeKompanije = document.querySelector('#txt-company-name')
const pibKompanije = document.querySelector('#txt-company-pib')
const datum = document.querySelector('#txt-time')
const cena = document.querySelector('#txt-value')
const buttonSubmit = document.querySelector('#btn-add')
//div za dodavanje elemenata
const itemList = document.querySelector('#item-list')

const addElementToDOM = () => {
    const itemContainer = document.createElement('div')
    itemContainer.className = 'item-container'

    const itemInfo = document.createElement('div')
    itemInfo.className = 'item-info'

    const labelsDiv = document.createElement('div')
    
    const labelIme = document.createElement('label')
    labelIme.className = 'company-name'
    labelIme.textContent = imeKompanije.value + ' '
    const labelPIB = document.createElement('label')
    labelPIB.className = 'company-pib'
    labelPIB.textContent = pibKompanije.value + ' '
    const labelDatum = document.createElement('label')
    labelDatum.className = 'time-created'
    labelDatum.textContent = datum.value + ' '
    const labelCena = document.createElement('label')
    labelCena.className = 'price-value'
    labelCena.textContent = cena.value + ' RSD'

    const timestampDiv = document.createElement('div')
    const labelTimestamp = document.createElement('label')
    labelTimestamp.className = 'insert-timestamp'
    labelTimestamp.innerHTML = `<span>[${datum.value}]</span><span>@10:29</span>`

    const actionsDiv = document.createElement('div')
    actionsDiv.className = 'item-actions'
    const brisanje = document.createElement('button')
    brisanje.className = 'item-trashCan'
    brisanje.textContent = 'DELETE'
    brisanje.addEventListener('click', (e) =>{
        e.target.parentElement.parentElement.remove()
        // fakture.splice(fakture.findIndex(elem => elem.id == id),1)
        // console.log(fakture);
    })

    labelsDiv.append(labelIme, labelPIB, labelDatum, labelCena)
    timestampDiv.appendChild(labelTimestamp)
    actionsDiv.appendChild(brisanje)
    itemInfo.append(labelsDiv, timestampDiv)
    itemContainer.append(itemInfo, actionsDiv)
    itemList.appendChild(itemContainer)
}

buttonSubmit.addEventListener('click', () =>{
    if(
        imeKompanije.value.trim() == ''
        || pibKompanije.value.trim() == ''
        || datum.value == ''
        || cena.value.trim() == ''
        || pibKompanije.value.trim().length !== 8
        || isNaN(pibKompanije.value.trim())
        || isNaN(cena.value.trim())
    ){
        console.log('GRESKA PRILIKOM UNOSA');
        return
    }

    addElementToDOM(brojac)
    brojac++

    fakture.push({
        //id: brojac,
        name:imeKompanije.value,
        pib:pibKompanije.value,
        dateIssued:datum.value,
        value:cena.value,
        currency:"RSD",
        timeStamp:"10:29:21",
        dateStamp:[datum.value]
    })

    console.log(fakture);

    imeKompanije.value = ''
    pibKompanije.value = ''
    datum.value = ''
    cena.value = ''
})