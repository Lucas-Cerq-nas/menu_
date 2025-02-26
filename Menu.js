// Animção burger 
const Men_container = document.getElementById("Menu_container")
  const div_burger = document.querySelector(".burger")
   const burger = document.getElementById('burger_span') // div<span>
    const itens_ul_ani = document.querySelector('ul')
     const List_ = document.querySelectorAll('li.list_')
   
     // fazer o sistema do search para ele criar um input do tipo pesquisa 
      // quando clicar
List_.forEach((Lista, keys_list) => {
    Lista.addEventListener("click", () => {
        if(keys_list == 1){
            console.log('key certa')
        }else{
            console.log("key errada")
        }

       console.log(keys_list)
    })
})

// Tirar o menu para Telas menores
    if(window.innerWidth <= 768){
        div_burger.style.display = "none"
    }

const obj_ani_Menu = {
    Esconder_menu(Mudar_estado){
        if(Mudar_estado){ // faz com q o Menu se esconda
            itens_ul_ani.style.width = "0px"
            itens_ul_ani.style.transition = "width 0.2s linear"
        }else{
            itens_ul_ani.style.width = "300px" // senão apareça o Menu
        }
    },
    Esconder_Itens_Memu(estado_change){
        List_.forEach(listas => {
            if(estado_change){ // se for true  o timer ativara
                setTimeout(() =>{
                    listas.style.display = "none"
                },100)
            }else{
                setTimeout(() =>{
                    listas.style.display = "block"
                },100)
            }
        })
    }
}

        // Troca de Estado para a Animação do Menu
    let click_Troca_estado = true
    burger.addEventListener('click', () => {
    
        if(click_Troca_estado){
            burger.classList.add('on_click_ani')
            obj_ani_Menu.Esconder_menu(click_Troca_estado)
            obj_ani_Menu.Esconder_Itens_Memu(click_Troca_estado)
        }else{
            burger.classList.remove('on_click_ani')
            obj_ani_Menu.Esconder_menu(click_Troca_estado)
            obj_ani_Menu.Esconder_Itens_Memu(click_Troca_estado)
        }
       /* transform: rotateZ(180deg);
       */
       burger.style.transition = "transform 0.2s ease" ;

       click_Troca_estado = !click_Troca_estado // true = false || false = true

       // console.log(click_Troca_estado)
    })

    const event_scroll_Janela = {
        Janela_down(fixar_menu){
            fixar_menu.style.position = "fixed"
            fixar_menu.style.top = 0
            fixar_menu.style.left = 0
    },
    Janela_up(remover_fixar){
        remover_fixar.style.removeProperty("position")
        remover_fixar.style.removeProperty("top")
        remover_fixar.style.removeProperty("left")
    }
}
    if(window.innerHeight > 100){
        event_scroll_Janela.Janela_down(Men_container)
    }else{
        event_scroll_Janela.Janela_up(Men_container)
    }
    



