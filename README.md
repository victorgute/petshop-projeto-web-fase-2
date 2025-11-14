# Projeto Petshop - Fundamentos de Sistemas Web (Fase 2)

## 1. Descrição do Projeto

Este projeto corresponde à **Fase 2** da disciplina de Fundamentos de Sistemas Web. O objetivo foi evoluir o site HTML puro desenvolvido na Fase 1, implementando uma interface moderna, dinâmica e acessível.

O projeto agora utiliza **Bootstrap** para o layout responsivo, um arquivo **CSS personalizado** (`css/style.css`) para estilização avançada, e um arquivo **JavaScript dedicado** (`js/main.js`) para criar funcionalidades dinâmicas, como um carrossel de imagens customizado e a validação do formulário de agendamento.

**Link do Site (GitHub Pages):** [COLE AQUI SEU LINK DO GITHUB PAGES]

## 2. Tecnologias Utilizadas

* **HTML5** (Estrutura semântica)
* **Bootstrap 5.3** (CDN, para layout, navbar, cards e formulários)
* **CSS3** (Arquivo `css/style.css` para estilos personalizados)
* **JavaScript (ES6+)** (Arquivo `js/main.js` para interatividade)
* **VLibras** (Widget externo para acessibilidade)

## 3. Estrutura de Arquivos

O projeto está organizado com arquivos CSS e JavaScript separados:

/ ├── index.html ├── produtos.html ├── servicos.html ├── agendamento.html ├── css/ │ └── style.css └── js/ └── main.js


## 4. Funcionalidades e Requisitos da Fase 2

Este projeto implementa todos os requisitos solicitados para a Fase 2:

### 4.1. Estilização (CSS/Bootstrap)
* **Bootstrap:** Todas as páginas (Home, Produtos, Serviços, Agendamento) utilizam o sistema de grid e componentes do Bootstrap (Navbar, Cards, Forms).
* **CSS Customizado (`style.css`):**
    * A barra de navegação (`navbar`) foi personalizada com uma nova cor (roxa).
    * Os cards de produtos e serviços possuem um efeito de "hover" (sombra e elevação).
    * As imagens do carrossel (`index.html`) e dos produtos (`produtos.html`) têm uma altura fixa e `object-fit: cover` para garantir um layout uniforme e profissional.

### 4.2. JavaScript Dinâmico
* **Carrossel de Imagens Customizado:** O `index.html` apresenta um carrossel 100% customizado, controlado pelo `js/main.js`. Ele possui navegação manual (botões) e auto-play (função temporal) de 5 segundos.
* **Interatividade do Formulário:** O `js/main.js` captura o evento de "submit" do formulário em `agendamento.html`. Ele exibe um `alert` de confirmação para o usuário e limpa o formulário automaticamente, sem recarregar a página.

### 4.3. Formulário de Cadastro e Agendamento
* A página `agendamento.html` contém um formulário completo dividido em três seções:
    1.  **Dados do Cliente** (Nome, CPF, Email, etc.)
    2.  **Dados do Pet** (Nome, Raça, Idade)
    3.  **Agendamento do Serviço** (Seleção de serviço com `radio button` e seleção de data/hora com `input type="date"` e `input type="time"`)

### 4.4. Acessibilidade
* **VLibras:** O widget do VLibras foi integrado em todas as 4 páginas do site, oferecendo tradução para a Língua Brasileira de Sinais.
* **Tags `alt`:** Todas as imagens (`<img>`), incluindo as do carrossel e dos produtos, possuem o atributo `alt` preenchido, garantindo a audiodescrição para leitores de tela.

## 5. Como Executar

1.  Clone este repositório.
2.  Por ser um site estático (HTML, CSS, JS), basta abrir qualquer um dos arquivos `.html` (como o `index.html`) diretamente no seu navegador.
3.  **Nota:** Para a correta inicialização do widget VLibras, é recomendado visualizar o site através do link do GitHub Pages ou rodando um servidor local.

## 6. Autor

* **Nome:** Victor Hugo