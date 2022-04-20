/*

*/


//ORDENAR ARRAYS PREGUNTAR


function __main__() {
    
    var martin = new heroe("Martín", 1000, 200, 2);

    var contador = 0;
    var turno = 1;
    

    do{
        var continuar = true;
        opcion = parseInt(prompt("HEROE vs ENEMIGOS - Menú\n---------------\n1 - Combatir\n2 - Héroe\n3 - Finalizar la Aventura"));

        switch(opcion){
            case 1:
                var enemigo1 = new enemigo("Inés", 1000, 200, 1);
                turno = 1;
                do{
                    contador++
            
                    if(turno == 1){
                        alert("HEROE vs ENEMIGOS\n---------------\nMartín: " + martin.getVida + " --- " + enemigo1.getNombre + ": " + enemigo1.getVida + "\nTurno " + contador + "\nAtaca " + martin.getNombre + " inflinge ¡" + martin.dañoDeAtaque() + "!\n")
            
                        var vidaRestante = parseInt(enemigo1.getVida) - parseInt(martin.dañoDeAtaque());
                        enemigo1.setVida = vidaRestante;
                        
                        turno = 0;
            
                    }else if(turno == 0){
                        alert("HEROE vs ENEMIGOS\n---------------\nMartín: " + martin.getVida + " --- " + enemigo1.getNombre + ": " + enemigo1.getVida + "\nTurno " + contador + "\nAtaca " + enemigo1.getNombre + " inflinge ¡" + enemigo1.dañoDeAtaque() + "!")
            
                        var vidaRestante = martin.getVida - enemigo1.dañoDeAtaque();
                        martin.setVida = vidaRestante;
                        
                        turno = 1;
                    }
            
                }while(enemigo1.conVida() && martin.conVida())
            
                if(martin.conVida()){
                    alert("HÉROE vs ENEMIGOS\n---------------\n¡VICTORIA!\nGanas " + enemigo1.getExperiencia + " puntos de Experiencia.\n");
                }else{
                    alert("DERROTA");
                    break;
                }

                //Comprobar Nivel
                martin.setExperiencia = martin.getExperiencia + enemigo1.getExperiencia;
                martin.experienciaObtenida(enemigo1.getExperiencia);

                break;
            case 2:
                alert("HEROE vs ENEMIGOS\n---------------\n" + martin.getNombre + "\nHP: " + martin.getVida + "\nATK: " + martin.dañoDeAtaque() + "\nNVL: " + martin.getNivel);
                break;

            case 3:
                continuar = false;
                break;
        }
        
    }while(continuar)
    

}


__main__();