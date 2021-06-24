export const ModalManager = {
    closeFunction : undefined,
    openModal(id){
        if(!id) throw new Error('Id must be provided to open the modal')

        const modal = document.getElementById(id)
        if(!modal)  return

        modal.style.display = 'flex'
        modal.classList.add('animate__fadeIn')
        modal.querySelector('.modal__content').classList.add('animate__pulse')
    },
    closeModal(id){
        if(!id) throw new Error('Id must be provided to close the modal')

        const modal = document.getElementById(id)
        if(!modal)  return

        modal.style.display = 'none'
        modal.classList.remove('animate__fadeIn')
        modal.querySelector('.modal__content').classList.remove('animate__pulse')
    },
    onClose(func){
        this.closeFunction = func
    }
}

const modalList = document.querySelectorAll('body');
modalList.forEach(modal => modal.addEventListener('click', event => {
    const modalHTML = event.target
    if(!modalHTML.classList.contains('modal'))   return
    modalHTML.style.display = 'none'
    modal.classList.remove('animate__fadeIn')
    modal.querySelector('.modal__content').classList.remove('animate__pulse')
    
    ModalManager.closeFunction && ModalManager.closeFunction()
}))