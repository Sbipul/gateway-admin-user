const tabs = document.querySelectorAll('.tab')

const loginOption = index => {
    tabs.forEach(each=>{
        each.classList.add('d-none')
        tabs[index].classList.remove('d-none')
    })
}
