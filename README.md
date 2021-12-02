## Criando um NPX boladão

- Faça o clone do repositório `git clone https://github.com/riccihenrique/npx-template.git`
- Escolha um audio engraçado (se for utilizar um video do YouTube, pode utilizar [esse site](https://www.y2mate.com/pt69) para fazer a conversão do video para música)
- Converta o arquivo .mp3 para ogg utilizando [esse site](https://convertio.co/pt/mp3-ogg/) (para executar no linux, é necessário que a extensão do arquivo seja .ogg)
- Salve os dois arquivo na raiz do projeto (Lembre-se de salvar os dois com o mesmo nome). Ex: musica.mp3 e musica.ogg
- Entre no arquivo `index.js` e altere a variável `FILE_NAME` (linha 6) para o nome do arquivo que você deixou na raiz no passo anterior. No caso anterior, deixe a variável com `musica`
- Entre no arquivo `package.json` e altere **todas** as ocorrências de `substituaAquiPeloNome` pelo nome que você deseja o seu npx
- Execute `node index.js` e veja se funciona. Caso a música não seja executada, verifique os passos anteriores novamente.
- Por fim, execute o comando npm publish. (Esse comando enviará o projeto para o servidor do NPM)
- Prontinho, seu npx já foi publicado!! Para testar, basta executar `npx nomeDoNpxDoPackageJson`
