
    const names = ["zinnet" ,"yazici" ,"asd"];

    const root = document.getElementById("root");
    root.innerHTML ="DOM Manipülasyonu.";
   
 

    names.map(name => {
        let element = document.createElement("p");
        element.innerHTML = name;
        root.append(element);
        console.log(name);
    })
    console.log(names);


   

