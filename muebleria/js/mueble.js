class Mueble{
    constructor(tipo, modelo, color, parte) {
        if(tipo=='vacio')
            this.vacio = true;
        else{
            this.tipo = tipo;
            this.modelo = modelo;
            this.color = color;
            this.parte = parte;
            this.vacio = false;
        }
        
    }

    getPrice() {
        var price= 0;
        if(!this.vacio){
            //parte
            if(this.parte=='top'){
                price+=20;
            }
            else{//bot
                price+=30;
            }
            //tipo
            if(this.tipo=='armario'||this.tipo=='cajones'){
                price+=20;
            }
            else{//estanteria o puertas
                price+=15;
            }
            //modelos
            if(this.modelo==1){//classic madera de haya
                price+=10;
            }
            else if (this.modelo==2) {//classis madera de roble
                price+=20;
            } 
            else if (this.modelo==4) {//modern metal
                price+=5;
            }
            //color
            if(this.color>1){
                price+=5;
            }
        }
        return price;
    }

    getCroquis(croquis, desplazamiento){
        if(!this.vacio){
            //definicion del color
            var color
            if(this.modelo==1&&this.color==1){//classic madera de haya natural
                color="rgba(231,195,144,1)"
            }
            else if(this.modelo==2&&this.color==1){//classic madera de roble natural
                color="rgba(199,143,63,1)"
            }
            else if(this.modelo==3&&this.color==1){//classic madera de pino natural
                color="rgba(223,210,153,1)"
            }
            else if(this.modelo==4&&this.color==1){//modern metal natural
                color="rgba(125,125,125,1)"
            }
            else if(this.modelo==5&&this.color==1){//modern madera natural
                color="rgba(223,210,153,1)"
            }
            else if(this.color==2){//color blanco
                color="white"
            }
            else if(this.color==3){//color negro
                color="rgba(50,50,50,1)"
            }

            if(this.parte=='top'){
                if(this.tipo=='armario'){//armario
                    if((this.modelo==1||this.modelo==2||this.modelo==3)){//classics
                        croquis.getArmarioClassic(desplazamiento, color)
                    }
                    else{//moderns
                        croquis.getArmarioModern(desplazamiento, color)
                    }
                }
                else{//estanteria
                    if((this.modelo==1||this.modelo==2||this.modelo==3)){//classics
                        croquis.getEstanteriaClassic(desplazamiento, color)
                    }
                    else{//moderns
                        croquis.getEstanteriaModern(desplazamiento, color)
                    }
                }
            }
            else{
                if(this.tipo=='cajones'){//cajones
                    if((this.modelo==1||this.modelo==2||this.modelo==3)){//classics
                        croquis.getCajonesClassic(desplazamiento, color)
                    }
                    else{//moderns
                        croquis.getCajonesModern(desplazamiento, color)
                    }
                }
                else{//puertas
                    if((this.modelo==1||this.modelo==2||this.modelo==3)){//classics
                        croquis.getPuertasClassic(desplazamiento, color)
                    }
                    else{//moderns
                        croquis.getPuertasModern(desplazamiento, color)
                    }
                }
            }
        }
    }
}