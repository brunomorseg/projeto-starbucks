const clica = () => {
    const click = document.querySelector('#click')
    const position = document.querySelector('.div-menu-menu')
    const input = document.querySelector('input')

 
    if (click.getAttribute('style') == 'display:none;'){
        click.setAttribute('style','display:block;')
        position.setAttribute('style','position:absolute;')
        input.setAttribute('style','margin-left:-360px;')
    } else {
        click.setAttribute('style','display:none;')
        position.setAttribute('style','position:static;')
        input.setAttribute('style','margin-left: 0px;')
    }
}

const menu=()=>{
    console.log('Ele clicou, finalmente!')
}