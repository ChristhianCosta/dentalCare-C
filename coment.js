function comentSlide(i){
    var control = document.getElementsByClassName('undcontrole')
    var depoimentos = document.getElementsByClassName('comentario')
   
    if(i == 0){

        control[0].style.backgroundColor = '#7D82B8'
        control[1].style.backgroundColor = '#EDF2FB'
        control[2].style.backgroundColor = '#EDF2FB'
        control[3].style.backgroundColor = '#EDF2FB'
        control[4].style.backgroundColor = '#EDF2FB'
        control[5].style.backgroundColor = '#EDF2FB'

        depoimentos[0].style.display = 'block'
        depoimentos[1].style.display = 'none'   
        depoimentos[2].style.display = 'none'
        depoimentos[3].style.display = 'none'
        depoimentos[4].style.display = 'none'
        depoimentos[5].style.display = 'none'
    }
    if(i == 1){
        control[0].style.backgroundColor = '#EDF2FB'
        control[1].style.backgroundColor = '#7D82B8'
        control[2].style.backgroundColor = '#EDF2FB'
        control[3].style.backgroundColor = '#EDF2FB'
        control[4].style.backgroundColor = '#EDF2FB'
        control[5].style.backgroundColor = '#EDF2FB'


        depoimentos[0].style.display = 'none'
        depoimentos[1].style.display = 'block'   
        depoimentos[2].style.display = 'none'
        depoimentos[3].style.display = 'none'
        depoimentos[4].style.display = 'none'
        depoimentos[5].style.display = 'none'

      }if(i == 2){
        control[0].style.backgroundColor = '#EDF2FB'
        control[1].style.backgroundColor = '#EDF2FB'
        control[2].style.backgroundColor = '#7D82B8'
        control[3].style.backgroundColor = '#EDF2FB'
        control[4].style.backgroundColor = '#EDF2FB'
        control[5].style.backgroundColor = '#EDF2FB'

        depoimentos[0].style.display = 'none'
        depoimentos[1].style.display = 'none'
        depoimentos[2].style.display = 'block'
        depoimentos[3].style.display = 'none'
        depoimentos[4].style.display = 'none'
        depoimentos[5].style.display = 'none'

    }if(i == 3){
        control[0].style.backgroundColor = '#EDF2FB'
        control[1].style.backgroundColor = '#EDF2FB'
        control[2].style.backgroundColor = '#EDF2FB'
        control[3].style.backgroundColor = '#7D82B8'
        control[4].style.backgroundColor = '#EDF2FB'
        control[5].style.backgroundColor = '#EDF2FB'


        depoimentos[0].style.display = 'none'
        depoimentos[1].style.display = 'none'
        depoimentos[2].style.display = 'none'
        depoimentos[3].style.display = 'block'
        depoimentos[4].style.display = 'none'
        depoimentos[5].style.display = 'none'

    }if(i == 4){
      control[0].style.backgroundColor = '#EDF2FB'
      control[1].style.backgroundColor = '#EDF2FB'
      control[2].style.backgroundColor = '#EDF2FB'
      control[3].style.backgroundColor = '#EDF2FB'
      control[4].style.backgroundColor = '#7D82B8'
      control[5].style.backgroundColor = '#EDF2FB'


      depoimentos[0].style.display = 'none'
      depoimentos[1].style.display = 'none'
      depoimentos[2].style.display = 'none'
      depoimentos[3].style.display = 'none'
      depoimentos[4].style.display = 'block'
      depoimentos[5].style.display = 'none'

  }if(i == 5){
    control[0].style.backgroundColor = '#EDF2FB'
    control[1].style.backgroundColor = '#EDF2FB'
    control[2].style.backgroundColor = '#EDF2FB'
    control[3].style.backgroundColor = '#EDF2FB'
    control[4].style.backgroundColor = '#EDF2FB'
    control[5].style.backgroundColor = '#7D82B8'


    depoimentos[0].style.display = 'none'
    depoimentos[1].style.display = 'none'
    depoimentos[2].style.display = 'none'
    depoimentos[3].style.display = 'none'
    depoimentos[4].style.display = 'none'
    depoimentos[5].style.display = 'block'

}
}