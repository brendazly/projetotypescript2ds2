namespace empresa{

    const cad = document.getElementById("cad") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoPreco = document.getElementById("campoPreco") as HTMLInputElement;
    const campoImp = document.getElementById("campoImp") as HTMLInputElement;
    
    cad.addEventListener("click", ()=>{
        let p = new Produto();
        p.nome = campoNome.value;
        p.preco = parseInt(campoPreco.value);
        p.imp = parseInt(campoImp.value);

        document.getElementById("nome").textContent = p.nome;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("imp").textContent = p.calcularImposto().toString(); 

    });

    
}