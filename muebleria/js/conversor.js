class Conversor{
    constructor(){
        this.url='http://api.currencylayer.com/live?access_key=fe9addbf362f1a6382d72f82db627c45&currencies=GBP,USD,SEK,NOK,EUR&format=1'
        this.currencies=['GBP','USD','SEK','NOK','EUR']
        this.currecyName=['Libre esterterlina','Dolar estadounidense','Corona sueca','Corona noruega','Euro']
        Conversor.conversion=[1,1,1,1,1]
        Conversor.call=false
    }

    convert(){
        if(!Conversor.call){
            conversor.getRates() //change to getRatesFixed() for testing
        }else{
            conversor.calculate()
        }
    }

    calculate(){
        var price = total;
        var currency = $('#currencies').val()
        var convertedPrice=price/Conversor.conversion[4] //precio en USD
        if(currency!=1){ //no es usd
            convertedPrice=convertedPrice*Conversor.conversion[currency]
        }
        conversor.showConversion(convertedPrice.toFixed(2),currency)
    }

    // fixed
    getRatesFixed(){
        Conversor.conversion[0]=0.72648;
        Conversor.conversion[1]=1;
        Conversor.conversion[2]=8.64472;
        Conversor.conversion[3]=8.68299;
        Conversor.conversion[4]=0.847788;
        Conversor.call=true;
    }

    // API
    getRates(){
        $.ajax({
            type: "GET",
            url: this.url,
            dataType: "json",
            success: function(datos) {
                Conversor.conversion[0]=datos.quotes.USDGBP;
                Conversor.conversion[1]=datos.quotes.USDUSD;
                Conversor.conversion[2]=datos.quotes.USDSEK;
                Conversor.conversion[3]=datos.quotes.USDNOK;
                Conversor.conversion[4]=datos.quotes.USDEUR;
                
                Conversor.call=true;

                conversor.calculate()
            },
            error: function() {
              console.log('Fallo en la conversión')
            }
          });
    }     

    getConversor(){
        var conversorHTML = "<p>Seleccione una divisa a la que conventir:"
                        +"<select id='currencies'>"
        for (let i = 0; i < this.currencies.length-1; i++) {
            conversorHTML+="<option value='"+i+"'>"+this.currecyName[i]+" "+this.currencies[i]+"</option>";
        }
        conversorHTML+="</select>"+
                "</p>"
        conversorHTML+="<button onClick='conversor.convert()'>Convertir</button>"
        return conversorHTML;
    }

    showConversion(convertedPrice,currency){
        $('#convertedPrice').remove()
        $('#total_area').append("<h3 id='convertedPrice'>"+convertedPrice+" "+this.currencies[currency]+"</h3>")
    }

}

var conversor = new Conversor();

/*
{
  "success":true,
  "terms":"https:\/\/currencylayer.com\/terms",
  "privacy":"https:\/\/currencylayer.com\/privacy",
  "timestamp":1630151584,
  "source":"USD",
  "quotes":{
    "USDGBP":0.72648,
    "USDUSD":1,
    "USDSEK":8.64472,
    "USDNOK":8.68299,
    "USDEUR":0.847788
  }
}

$('#total_area').append("<button onClick='conversor.convert()'>Convertir</button>"
*/