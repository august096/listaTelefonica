const form = document.getElementById('form-agenda');

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    atulaizaTabelaTelefonica();
});


function addLinha() {
    const inputNameContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-telefone');

    
        let linha = '<tr>';
        linha += `<td>${inputNameContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
    
        linha += '</tr>';
    
        linhas += linha;        
    
    inputNameContato.value = '';
    inputNumeroContato.value = '';
}

function atulaizaTabelaTelefonica() {
    const tabelaTelefonica = document.querySelector('tbody');
    tabelaTelefonica.innerHTML = linhas;
}