function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
        // Os "..." faz uma cópia de todo o array para outro objeto, mas o preco será alterado
    })
    return livrosComDesconto
}