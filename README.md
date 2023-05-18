# SPA-Universe
Para visualizar o funcionamento dessa SPA (Single Page Apllication) é recomendada a criação de um servidor local. Nesse caso, utlizaremos o NodeJs para executar essa ação.

1° Baixar o NodeJs para sua versão mais recente;
2° Acessar a pasta com os arquivos que deseja abrir no servidor local;
3° Abrir um terminal no Visual Studio Code (VS Code). Pressionar Ctrl + Shift + ' ou acessar através da barra superior "Terminal > New Terminal";
  - Caso o terminal esteja no endereço errado, utilizar os seguinte comandos para navegar por ele:
    - Para acessar uma pasta abaixo: cd..
    - Para acessar uma pasta acima: cd "Nome da pasta"
5° No terminal, digitar **node -v** para verificar a versão do node (opcional, somente quando o node for instalado pela primeira vez). Se não aparecer a versão, será necessário reinicar o VS Code;
6° Após, escrever **npm init -y**. Ele criará um arquivo chamado _package.json_;
7° Ainda no terminal, digitar **npm install lite-server** e aguardar o carregamento. Esse processo fará com que pacotes sejam criados para fazer com que o servidor rode;
8° Selecionar o arquivo _package.json_ e na parte 'scripts {}' modificar o _test_ para _start_ e o texto à frente do _start_ para _lite-server_;
9° Retorne para o terminal e digite **npm start**. Aguardar alguns segundos para que o servidor seja iniciado. Após, poderá navegar tranquilamente pela página;
10° Para encerrar o servidor local, acessar o terminal do VSCode no node, apertar _Ctrl + c_ e depois sinalizar com o **s**.

Obs.: Sempre manter somente um terminal aberto. Para verificar se há mais de um, checar na seção do terminal se há mais de um arquivo aberto com o mesmo nome.
