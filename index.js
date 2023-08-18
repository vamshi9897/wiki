let div1= document.getElementById('root');
let input1= document.getElementById('inputel');
let div2 = document.getElementById('search');


function He(items){
    for(let va of items){
        let {title,link,description}=va
       
        let divE1 = document.createElement('div');
        div2.appendChild(divE1);
        let h5= document.createElement('h5');
        h5.textContent = title;
        h5.classList.add('heading');

        let a=document.createElement('a');
        a.textContent = link;
        a.href = link;
        a.classList.add('anchor');
        let p1 = document.createElement('p');
        p1.textContent = description;
        p1.classList.add('p1')

        divE1.appendChild(h5);
        divE1.appendChild(a);
        divE1.appendChild(p1);
        divE1.classList.add('div-element');
    }


}

input1.addEventListener('keydown',function(e){
    if (e.key=='Enter'){
        search.textContent = ""
        let input=input1.value;
        console.log(input);
        
        fetch(`https://apis.ccbp.in/wiki-search?search=${input}`).then(function(result){
            return result.json();
        }).then(function(vam){
            console.log(vam);
            He(vam.search_results);
        })
    }

})