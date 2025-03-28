// Animção burger 
const Men_container = document.getElementById("Menu_container")
  const div_burger = document.querySelector(".burger")
   const burger = document.getElementById('burger_span') // div<span>
    const itens_ul_ani = document.querySelector('ul')
     const List_ = document.querySelectorAll('li.list_')
      const div_search = document.querySelector(".block_search")
       const inp_search = document.querySelector('.isearch')
        const div_profile = document.querySelector('.container_profile')


 // variavel para o carrossel
 let contador = 0
 let obj_funcoes = {
        // função para evento de clicar fora do conteudo 
    f_event_cli_out(event,Arg1,Arg2,Arg3,V_class,Valor){
        if(!Arg1.contains(event.target) && !Arg2.contains(event.target)){
           Arg3.style.display = Valor
           Arg3.classList.remove(V_class)
        }
    },
    f_event_carrossel(novoContador,itens_class,V_class){
        itens_class[contador].classList.remove(V_class)
        contador = (novoContador + itens_class.length) % itens_class.length
        itens_class[contador].classList.add(V_class)
        
        //Sitaxe f_event_carrossel(contador + 1, item_class, "ON")
    }
 }



document.addEventListener('click',(evento) =>{
    List_.forEach(() =>{
        let key_search = List_[1] // search
  obj_funcoes.f_event_cli_out(evento,key_search,inp_search,div_search,null,"none")

  let key_profile = List_[2]
  obj_funcoes.f_event_cli_out(evento,key_profile,div_profile,div_profile,"Ativar_profile")


    })
})

List_.forEach((Lista, keys_list) => { 
    Lista.addEventListener("click", () => {
        if(keys_list == 1){
            div_search.style.display = "flex"
            div_search.classList.add('On_Animation')
            inp_search.style.display = "block"
            inp_search.focus()
        }else{
            div_search.style.display = "none"
            inp_search.style.display = "none"
        }

        if(keys_list == 2){
            div_profile.classList.add("Ativar_profile")
        }else{
            div_profile.classList.remove("Ativar_profile")
        }

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
       /* transform: rotateZ(180deg);*/
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


    // Sistema pra animação de pixels
function Animacao_Pixel(checkStatus, Element_px, V_class, Much__px = 10){
   
    if(!checkStatus){
        return; // se for falso, n execute essa função :) aprendi a fazer isso :D
    }else{
        let Timer_for =  setTimeout(() => {
            for(let i = 0; i < Much__px; i++ ){
                let pixels = document.createElement(Element_px)
                pixels.classList.add(V_class)
                // posições,delay,direções
                pixels.style.top = Math.random() * 100 + "vh"
                pixels.style.animationDelay = Math.random() * 3 + "s"
                pixels.style.animationDuration = Math.random() * 2 + 3 + "s"
                
                document.body.appendChild(pixels)
              }
        }, 0);
    }
  
}


    if(window.innerWidth > 767){
        document.body.style.transition = "width 0.2s linear"
    }else{
        document.body.style.transition = "width 0.2s linear"
        Animacao_Pixel(true,"div","Anima")
    }

    if(window.innerHeight > 100){
        event_scroll_Janela.Janela_down(Men_container)
    }else{
        event_scroll_Janela.Janela_up(Men_container)
    }
    



