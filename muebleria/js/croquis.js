class Croquis{
    constructor(proporcionX, proporcionY, top, mid) {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.x = proporcionX; //ancho del armario
        this.y = proporcionY; // alto del armario
        this.top = top; //linea superior
        this.mid = mid; //lilnea del medio
    }

    getArmarioClassic(desplazamiento, color){
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento, this.top, this.x, this.y);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento+1, this.top+1, this.x-2, this.y-2);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento+1+this.x/9, this.top+1+this.x/9, this.x-2-this.x/9*2, this.y-2-this.x/9*2);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento+2+this.x/9, this.top+2+this.x/9, this.x-4-this.x/9*2, this.y-4-this.x/9*2);
        this.ctx.fillStyle = 'black';
        this.ctx.beginPath();
        this.ctx.arc(desplazamiento+this.x/9*2, this.top+this.y/2, this.x/9/2, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();
    }

    getArmarioModern(desplazamiento, color){
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento, this.top, this.x, this.y);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento+1, this.top+1, this.x-2, this.y-2);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento+this.x/9*1.5, this.top+this.y/2-this.x/9/2, this.x/9, this.x/9);
    }

    getEstanteriaClassic(desplazamiento, color){
        //estanteria arriba
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento, this.top+this.y/2-this.x/9, this.x, this.x/9);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento+1, this.top+this.y/2-this.x/9+1, this.x-2, this.x/9-2);
        //estanteria abajo
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento, this.top+this.y-this.x/9, this.x, this.x/9);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento+1, this.top+this.y-this.x/9+1, this.x-2, this.x/9-2);
    }

    getEstanteriaModern(desplazamiento, color){
        //estanteria arriba
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento, this.top+this.y/2-this.x/9, this.x, this.x/9/3*2);
        this.ctx.fillRect(desplazamiento, this.top+this.y/2-this.x/9, this.x/9/3, this.x/9);
        this.ctx.fillRect(desplazamiento+this.x-this.x/9/3, this.top+this.y/2-this.x/9, this.x/9/3, this.x/9);
        //borde
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(desplazamiento, this.top+this.y/2-this.x/9);
        this.ctx.lineTo(desplazamiento+this.x, this.top+this.y/2-this.x/9);
        this.ctx.lineTo(desplazamiento+this.x, this.top+this.y/2);
        this.ctx.lineTo(desplazamiento+this.x-this.x/9/3, this.top+this.y/2);
        this.ctx.lineTo(desplazamiento+this.x-this.x/9/3, this.top+this.y/2-this.x/9/3);
        this.ctx.lineTo(desplazamiento+this.x/9/3, this.top+this.y/2-this.x/9/3);
        this.ctx.lineTo(desplazamiento+this.x/9/3, this.top+this.y/2);
        this.ctx.lineTo(desplazamiento, this.top+this.y/2);
        this.ctx.closePath();
        this.ctx.stroke();

        //estanteria abajo
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento, this.top+this.y-this.x/9, this.x, this.x/9/3*2);
        this.ctx.fillRect(desplazamiento, this.top+this.y-this.x/9, this.x/9/3, this.x/9);
        this.ctx.fillRect(desplazamiento+this.x-this.x/9/3, this.top+this.y-this.x/9, this.x/9/3, this.x/9);
        //borde
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(desplazamiento, this.top+this.y-this.x/9);
        this.ctx.lineTo(desplazamiento+this.x, this.top+this.y-this.x/9);
        this.ctx.lineTo(desplazamiento+this.x, this.top+this.y);
        this.ctx.lineTo(desplazamiento+this.x-this.x/9/3, this.top+this.y);
        this.ctx.lineTo(desplazamiento+this.x-this.x/9/3, this.top+this.y-this.x/9/3);
        this.ctx.lineTo(desplazamiento+this.x/9/3, this.top+this.y-this.x/9/3);
        this.ctx.lineTo(desplazamiento+this.x/9/3, this.top+this.y);
        this.ctx.lineTo(desplazamiento, this.top+this.y);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    getCajonesClassic(desplazamiento, color){
        var encimera= this.y/12
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento, this.mid, this.x, encimera);//encimera
        this.ctx.fillRect(desplazamiento, this.mid+encimera, this.x, this.y);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento+1, this.mid+encimera+1, this.x-2, this.y-2);
        //dos lineas de medio
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(desplazamiento, this.mid+encimera+this.y/3);
        this.ctx.lineTo(desplazamiento+this.x, this.mid+encimera+this.y/3);
        this.ctx.moveTo(desplazamiento, this.mid+encimera+this.y/3*2);
        this.ctx.lineTo(desplazamiento+this.x, this.mid+encimera+this.y/3*2);
        this.ctx.closePath();
        this.ctx.stroke();
        //pomos
        this.ctx.fillStyle = 'black';
        this.ctx.beginPath();
        this.ctx.arc(desplazamiento+this.x/2, this.mid+encimera+this.y/3/2, this.x/9/2, 0, Math.PI * 2, true);
        this.ctx.arc(desplazamiento+this.x/2, this.mid+encimera+this.y/3/2*3, this.x/9/2, 0, Math.PI * 2, true);
        this.ctx.arc(desplazamiento+this.x/2, this.mid+encimera+this.y/3/2*5, this.x/9/2, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();
    }

    getCajonesModern(desplazamiento, color){
        var encimera= this.y/12
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento, this.mid, this.x, encimera);//encimera
        this.ctx.fillRect(desplazamiento, this.mid+encimera, this.x, this.y);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento+1, this.mid+encimera+1, this.x-2, this.y-2);
        //linea del medio
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(desplazamiento, this.mid+encimera+this.y/2);
        this.ctx.lineTo(desplazamiento+this.x, this.mid+encimera+this.y/2);
        this.ctx.closePath();
        this.ctx.stroke();
        //pomos
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento+this.x/2-this.x/9/2, this.mid+encimera+this.y/2/4-this.x/9, this.x/9, this.x/9);//cajon de arriba
        this.ctx.fillRect(desplazamiento+this.x/2-this.x/9/2, this.mid+encimera+this.y/2+this.y/2/4-this.x/9, this.x/9, this.x/9);//cajon de abajo
    }

    getPuertasClassic(desplazamiento, color){
        var encimera= this.y/12
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento, this.mid, this.x, encimera);//encimera
        this.ctx.fillRect(desplazamiento, this.mid+encimera, this.x, this.y);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento+1, this.mid+encimera+1, this.x-2, this.y-2);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento+1+this.x/9, this.mid+encimera+1+this.x/9, this.x-2-this.x/9*2, this.y-2-this.x/9*2);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento+2+this.x/9, this.mid+encimera+2+this.x/9, this.x-4-this.x/9*2, this.y-4-this.x/9*2);
        //pomo
        this.ctx.fillStyle = 'black';
        this.ctx.beginPath();
        this.ctx.arc(desplazamiento+this.x/9*2, this.mid+encimera+this.y/2, this.x/9/2, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();
    }

    getPuertasModern(desplazamiento, color){
        var encimera= this.y/12
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento, this.mid, this.x, encimera);//encimera
        this.ctx.fillRect(desplazamiento, this.mid+encimera, this.x, this.y);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(desplazamiento+1, this.mid+encimera+1, this.x-2, this.y-2);
        //pomo
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(desplazamiento+this.x/9*1.5, encimera+this.mid+this.y/2-this.x/9/2, this.x/9, this.x/9);
    }
}
