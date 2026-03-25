# 🎬 Cine App

## 📄 Descrição do Projeto
Este projeto consiste em um aplicativo web simples de filmes e séries, desenvolvido com **HTML, CSS e JavaScript**, com o objetivo de praticar o consumo de APIs.

A aplicação permite ao usuário clicar em um botão para **sortear uma série aleatória**, exibindo na tela seu nome, imagem e descrição. Os dados são obtidos em tempo real através da API pública da TVMaze.

---

## 🌐 API utilizada

Este projeto utiliza a API pública:

- 📺 TVMaze API  
🔗 https://api.tvmaze.com/

A API foi utilizada para buscar informações sobre séries, como nome, imagem e descrição, de forma dinâmica e em tempo real.

Exemplo de requisição:
https://api.tvmaze.com/search/shows?q=star

---

## 🚀 Funcionalidades
- 🎲 Sorteio aleatório de séries  
- 🖼️ Exibição de imagem da série  
- 📖 Descrição dinâmica  
- 🎨 Interface centralizada com tema escuro  
- 📱 Layout responsivo  

---

## 🛠️ Tecnologias utilizadas
- HTML5  
- CSS3  
- JavaScript  
- API pública TVMaze  

---

## 💡 Objetivo
O principal objetivo deste projeto é aprender e praticar:
- Consumo de APIs com `fetch`
- Manipulação do DOM
- Uso de `async/await`
- Estruturação básica de um projeto web

---

## ⚠️ Observação
As informações das séries são fornecidas em inglês pela API. Em versões futuras, pode ser implementada tradução para português.

---
## ⚙️ Como funciona

Ao clicar no botão **Sortear**, a aplicação faz uma requisição para a API pública TVMaze utilizando `fetch`.

Os dados retornados são processados em formato JSON e uma série é escolhida aleatoriamente. Em seguida, o JavaScript manipula o DOM para exibir na tela:

- 📺 Nome da série  
- 🖼️ Imagem  
- 📖 Descrição  

Todo o processo acontece de forma assíncrona utilizando `async/await`, garantindo uma experiência dinâmica sem recarregar a página.

---

## Visualização Online
{https://carolline08.github.io/Cine-API/}

---

## 👩‍💻 Autora

Desenvolvido por **Carolline Barbosa Ferreira** 🚀

