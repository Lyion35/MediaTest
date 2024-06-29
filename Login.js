const d=document,
w=window,
n=navigator


d.addEventListener("DOMContentLoaded",e=>{
    cerrarLista(".close",".links")
    display("form","links","send","out",".settings",".desc")
    recordar("save","form","send")
})


///////////////////////////////////Interactividad de Formulario de Registro///////////////////////////////////////
function display(form,links,btn,out,stngs,h2) {
    const $form=d.getElementById(form),
    $links=d.getElementById(links),
    $btn=d.getElementById(btn),
    ls=localStorage,
    $out=d.getElementById(out),
    $h2=d.querySelector(h2)
    $settings=d.querySelector(stngs)


    const fullDisplay=()=>{
        $form.classList.add("none")
        $links.classList.remove("none")
        $settings.classList.remove("none")
        $h2.classList.add("none")
    }
    const eraseDisplay=()=>{
        $form.classList.remove("none")
        $links.classList.add("none")
        $settings.classList.add("none")
        $h2.classList.remove("none")
        ls.removeItem("form")
    }

    d.addEventListener("submit",e=>{   
        if(e.target.matches){
        e.preventDefault(true)
        $btn.classList.add("light")
      
        setTimeout(() => {
            $btn.classList.remove("light")
          
        }, 1000);
        setTimeout(() => {
         
            fullDisplay()
        }, 2000);
        }     
    })
   
        
       
    d.addEventListener("click",e=>{
        if(e.target===$out){
         eraseDisplay()   
         $form.nombre.value=""
         $form.contraseña.value=""
        }
    })
    
    if(ls.getItem("form")==="none") fullDisplay() 
    if(ls.getItem("form"===null)) eraseDisplay() 
  
}







///////////////////////////////// Cerrado de Acordeones//////////////////////////////////////
function cerrarLista(clase,dtls) {
    const $close=d.querySelectorAll(clase),
    $dtls=d.querySelectorAll(dtls)
    
    d.addEventListener("click",e=>{
        $close.forEach(el=>{
            if(e.target===el){
                $dtls.forEach(el=>{
                 el.removeAttribute("open")
                })
            }
        })
       
    })
    
}


function recordar(save,form,send) {
    const $save=d.getElementById(save),
    $form=d.getElementById(form),
    $send=d.getElementById(send)
    d.addEventListener("click",e=>{
        if(e.target===$save){
            $save.toggleAttribute("on")
        }
        if(e.target===$send&&$save.hasAttribute("on")){
            Guardar(form)
        }
    })
}
function Guardar(form) {
    const $form=d.getElementById(form),
    ls=localStorage,
    name=$form.nombre.value,
    password=$form.contraseña.value
    ls.setItem("nombre",name)
    ls.setItem("contraseña",password)
    ls.setItem("form","none")
}



