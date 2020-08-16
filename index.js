class Slide {
    constructor(id){
        this.slide = document.querySelector(`[data-slide=${id}]`);
        this.active = 0; // propriedade para saber qual slide é o ativo
        this.init();
        //console.log(this.slide);
    }

    // Método que identifica qual imagem está ativa no momento
    activeSlide(index){
        this.active = index;
        // As duas linhas abaixo => Ele remove todos os que estão com active, e adiciona somente o active em 1 específico -> útil para quando clicar em próximo ou anterior
        this.items.forEach(item => item.classList.remove('active')); // percorre cada item no array(no caso, cada slide) e remove a classe active.
        this.items[index].classList.add('active');//Adiciona a classe "active" na imagem selecionada, no caso a imagem 3 neste exemplo
    }

    prev(){
        // Ele vai conseguir voltar um slide caso o ativo seja maior que 0, se for diferente disso mostrar o último item no array
        if(this.active > 0) {
            this.activeSlide(this.active - 1);
        } else{
            this.activeSlide(this.items.length - 1);
        }
    }

    next(){
        // Verificar se chegou no último item do slide
        if(this.active < this.items.length - 1) { //-1 por que as posições dos itens no array começa em 0. Se tem 4 slides, o contador só vai até 3 = 0,1,2,3 
            this.activeSlide(this.active + 1);
        } else {
            this.activeSlide(0);
        }
    }

    navButtons(){
        const prevBtn = this.slide.querySelector('.slide-prev');
        prevBtn.addEventListener('click', this.prev);
        const nextBtn = this.slide.querySelector('.slide-next');
        nextBtn.addEventListener('click', this.next); //Quando se passa um evento dentro de uma classe direto no addEventListener, o this do método perde a referência
    }

    //O que quero carregar ao iniciar a classe
    init(){
        this.items = this.slide.querySelectorAll('.slide-items > *'); // Selecionando todos os elementos(itens) que existe no slider
        this.activeSlide(0);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this); //Isto para o this deste método sempre fazer referência ao objeto da classe
        this.navButtons();
    }

}

new Slide('slide');