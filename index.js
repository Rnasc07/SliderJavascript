class Slide {
    constructor(id){
        this.slide = document.querySelector(`[data-slide=${id}]`);
        this.active = 0; // propriedade para saber qual slide é o ativo
        this.activeSlide(3);
        this.init();
        //console.log(this.slide);
    }

    // Método que identifica qual imagem está ativa no momento
    activeSlide(index){
        this.active = index;
        this.items = this.slide.querySelectorAll('.slide-items > *'); // todos os elementos que estão dentro da classe
        this.items[index].classList.add('active');//Adiciona a classe "active" na imagem selecionada, no caso a imagem 3 neste exemplo
    }

    prev(){

    }

    next(){
        this.activeSlide(this.active + 1);
    }

    navButtons(){
        const nextBtn = this.slide.querySelector('.slide-next');
        nextBtn.addEventListener('click', this.next); //Quando se passa um evento dentro de uma classe direto no addEventListener, o this do método perde a referência
    }

    //O que quero carregar ao iniciar a classe
    init(){
        this.next = this.next.bind(this); //Isto para o this deste método sempre fazer referência ao objeto da classe
        this.navButtons();
    }

}

new Slide('slide');