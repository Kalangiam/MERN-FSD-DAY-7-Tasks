var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    console.log("Asia continents");
    var Asia =result.filter((asi)=>asi.continents=='Asia');
    console.log(Asia);

    console.log("Countries of Asia continents")
    var name = Asia.map((nam)=>nam.name);
    console.log(name);

    console.log("countries with population less than 2lakhs");
    var population = result.filter((popu)=>popu.population<200000);
    var pop = population.map((popul)=>popul.name);
    console.log(population);

    // console.log("name, capital, flag");
    // var ncf = function(item){
    //     console.log(`${item}`);
    // }
    // result.forEach(ncf);
    console.log("Total population");
    var population1 = result.filter((popu1)=>popu1.population);
    var peo = population1.map((people)=>people.population);
    console.log(peo);
    var total=peo.reduce((acc,ele)=>acc+ele);
    console.log("Total population: "+total);

    console.log("countries that uses US dollar currency");
    var currency=result.filter((cur)=>cur.currencies);
    console.log(currency);
    var curname=currency.map((curn)=>curn.currencies);
    console.log(curname);
    var dollar=curname.filter((dol)=>dol.name=='United States dollar');
    console.log(dollar);
    var doll=dollar.map((dolcur)=>dolcur.name);
    console.log(doll);
  
    

    }

