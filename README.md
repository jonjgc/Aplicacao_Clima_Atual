# Aplicacao_Clima_Atual

# Descrição

Aplicação que tem como objetivo consumir a localização atual do usuário e exiba na interface o endereço atual os dados climáticos da região e um botão para atualizar os dados.

# Status

Aplicação concluída

# Funcionalidades

- Localiza a cidade onde o usuário está.
- Obtem a temperatura atual de onde o usuário está localizado, 
- Informações adicionais como: Velocidade do vento, umidade do ar, temperatura máxima e mínima
- Obtem o horário atual
- Modo escuro e modo claro para a tela

# Open Weather 

Foi usado a API OpenWeather https://openweathermap.org/ para saber os dados climáticos e de localização

# Pré-Requisitos para executar a aplicação 

- Node + NPM;
- Yarn;
- Expo;
- Visual Studio Code

# Node e NPM (Contextualização)

O primeiro passo é instalar o Node.js, que vem acompanhado do NPM. Para visualizar o site do Node.js e suas versões [clique aqui](https://nodejs.org/en/).

Como você já deve ter visto, na página principal do Node são apresentadas duas versões: **LTS** e **Current**. A primeira se refere à versão do Node que possui **Long Term Support (LTS)**, são as mais confiáveis e é a que recomendamos utilizar na NLW. Já a segunda se refere à versão do Node mais atual e experimental, o que não é recomendada para desenvolvimento ainda.

Escolhida a versão LTS do Node, precisamos decidir o método de instalação. É importante ressaltar que apesar de na tela inicial do Node.js eles recomendarem a forma de instalação direta (famosa janela que só clicamos no **Next**), iremos utilizar nesse guia os gerenciadores de pacote (exceto Linux). 

Não só pelo fato de facilitar possíveis desinstalações e atualizações do Node, mas também por serem muito úteis para trabalhar com diversos outros pacotes.

Pronto dev, agora que já sabemos que iremos instalar a versão LTS do Node.js utilizando um gerenciador de pacote, bora para o passo-a-passo de cada sistema operacional.

## Windows

Para o Windows utilizaremos o gerenciador de pacotes **[Chocolatey](https://chocolatey.org/)**, porém antes dos passos de instalação vamos falar brevemente sobre qual shell você deve usar.

- **CMD**: também conhecido como **Command Prompt**, ele é um dos shells mais antigos da atualidade (foi construído para ser compatível com o **MS-DOS**) e, apesar da sua fama, hoje em dia tem sido cada vez menos utilizado.
- **Powershell**: novo shell apresentado pela Microsoft por volta de 2005, ele apresenta diversas melhorias em relação ao **CMD**, tornando-o popular atualmente e consequemente a nossa escolha para a NLW#02.

Escolhido o shell, vamos começar a instalação:

- Busque no campo de busca do Windows por **Windows Powershell**, clique com o botão direito em cima do programa e escolha a opção **Executar como administrador**.
- O Powershell trabalha com um esquema de autorizações (conhecido como `Execution Policy`) para execução de scripts e, por isso, precisamos verificar se o presente no sistema está compatível com o que o Chocolatey precisa. Execute o seguinte comando:

```bash
Get-ExecutionPolicy
```

Caso ele retorne `Restricted`, execute o comando:

```bash
Set-ExecutionPolicy RemoteSigned
```

E escolha a opção `[A] Sim para Todos`

Caso o comando acima apresente erro, tente usar:

`Set-ExecutionPolicy Bypass -Scope Process`

Verifique se alteração de permissão ocorreu com sucesso executando novamente o comando:

```bash
Get-ExecutionPolicy
```

Alterada a permissão, basta instalar o **Chocolatey** com o comando:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Caso o comando acima apresente um erro, verifique se a sua máquina atende às requisições mínimas

`Windows 7+ / Windows Server 2003+
PowerShell v3+
.NET Framework 4.5+`

Caso o erro apresentado seja `Exceção ao definir "SecurityProtocol": "Não é possível converter o valor "3312"`, siga **[esse guia](https://chocolatey.org/blog/remove-support-for-old-tls-versions)**

- Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:

```bash
choco -v
```

Caso ele retorne a versão do **Chocolatey**, a instalação foi um sucesso. Para finalizar, basta instalar a versão LTS mais recente do Node com o seguinte comando:

```bash
cinst nodejs-lts
```

E escolha a opção `[A]ll - yes to all`

Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e npm, sua instalação foi um sucesso.


# Yarn

## Windows

Para instalar o Yarn 1 no Windows siga os seguintes passos, execute o comando no Powershell (como admin):

```bash
 cinst yarn
```

E escolha a opção `[A]ll - yes to all`. 

Feche e abra o terminal novamente, em seguida rode o comando:

```bash
 yarn --version
```

Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

# Expo

Para instalar o Expo é bem simples e o passo é o mesmo nos 3 sistemas operacionais. 

- Com o Node e Yarn instalados, abra o terminal (no Windows, sem ser como admin) e execute:

```bash
yarn global add expo-cli
```

Caso você prefira utilizar o npm, basta executar:

`npm install expo-cli --global`

- Para verificar se a instalação ocorreu com sucesso, execute:

```bash
expo --version
```

Caso o comando resulte no erro `expo : O arquivo C:\Users\xxxx\AppData\Roaming\npm\expo.ps1 não pode ser carregado`, verifique se o **ExecutionPolicy** está configurado como `RemoteSigned`.

Se retornar a versão da cli do Expo, a instalação ocorreu com sucesso.

Caso a instalação da expo-cli como global no Yarn apareça que ocorreu com sucesso mas ao tentar utilizar o expo diz que o comando não existe, verifique no Linux e no macOS se você adicionou a linha `export PATH="$PATH:`yarn global bin`"` ao arquivo de configuração do seu terminal.

# Visual Studio Code

Para instalar o editor de texto Visual Studio Code em qualquer um dos 3 sistemas operacionais, basta [acessar o site](https://code.visualstudio.com/), baixar e rodar o executável.

# Iniciando o projeto

Baixe o app expo na Play Store. 

No windows PowerShell, coloque o projeto numa pasta desejada, navegue até essa pasta pelo Windows PowerShell e digite expo start

abrirá uma tela no seu navegador, e aparecerá um QR code no lado esquerdo abaixo

com o aplicativo expo aberto no celular, clique no ícone de QRcode e aponte o celular para o QR code da tela do PC

PS: foi adicionado o pacote expo-location, usando o comando expo install expo-location

