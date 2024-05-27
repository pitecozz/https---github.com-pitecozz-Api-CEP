const consultar = () => {
    let cep = document.querySelector('#cep').value
    if (cep.length !== 8) {
        alert("CEP inválido!")
        return
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function(response) {
        response.json().then(function(data) {
            console.log(data)
            mostrar(data)
        })
    })
}

const mostrar = (dados) => {
    let resultado = document.querySelector('#resultado')

    resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                            <p>Complemento: ${dados.complemento}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Localidade: ${dados.localidade}</p>
                            <p>UF: ${dados.uf}</p>
                            <p>IBGE: ${dados.ibge}</p>
                            <p>GIA: ${dados.gia}</p>
                            <p>DDD: ${dados.ddd}</p>
                            <p>SIAFI: ${dados.siafi}</p>`
}
