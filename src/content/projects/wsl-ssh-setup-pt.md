---
locale: pt
translationKey: wsl-ssh-setup
pathSlug: wsl-ssh-setup
title: "wsl-ssh-setup: SSH no WSL pela rede local"
description: "Scripts em PowerShell para configurar e remover o acesso SSH a uma distribuição WSL 2 a partir de outro dispositivo na rede local."
seo_title: "WSL SSH Setup: Acesso Remoto ao WSL 2 | Lucas Bedatty"
seo_description: "Configure acesso SSH a uma distribuição Linux no WSL 2 pela rede local com scripts PowerShell para OpenSSH, Firewall do Windows e encaminhamento de portas."
technologies:
  - Windows PowerShell
  - WSL 2
  - OpenSSH Server
  - SSH
  - Firewall do Windows
  - netsh portproxy
github_link: "https://github.com/Bedatty-Engineering/wsl-ssh-setup"
architecture_notes: "Um orquestrador em PowerShell é executado na sessão do usuário do Windows, configura o OpenSSH dentro do WSL e eleva apenas as etapas de firewall e portproxy do Windows. O modo clássico encaminha a porta 22 do Windows para o WSL; o modo espelhado usa a pilha de rede compartilhada do Windows e dispensa o portproxy."
---

## Visão geral

O `wsl-ssh-setup` configura o acesso SSH a uma distribuição Linux no WSL 2 a partir de outra máquina na mesma rede local. Um comando no PowerShell instala e configura o OpenSSH dentro do WSL e cria as regras de rede necessárias no Windows.

Há dois modos disponíveis:

- **Modo clássico** é o padrão. Um `portproxy` do Windows encaminha a porta 22 para o IP atual do WSL. Se o IP mudar após reiniciar o Windows, execute o setup novamente.
- **Modo espelhado** é recomendado para Windows 11 com uma versão recente do WSL 2. O WSL compartilha a pilha de rede do Windows, dispensando o `portproxy` e evitando novo setup quando o IP do WSL muda.

## Pré-requisitos

- Windows 10 ou 11, WSL 2 e uma distribuição Linux, como Ubuntu.
- Windows 11 e WSL 2 recente para usar a rede em modo espelhado.
- A distribuição WSL precisa estar em execução durante a conexão. Mantenha um terminal WSL aberto ou configure a distribuição para continuar ativa em segundo plano.

## Instalação

Execute os comandos em uma janela **normal do Windows PowerShell, sem executá-la como Administrador**. O instalador solicita elevação apenas para alterar o firewall e o portproxy do Windows e confirma a distribuição e o usuário WSL de destino antes de continuar.

Modo clássico:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
$p = "$env:TEMP\setup.ps1"
irm https://raw.githubusercontent.com/Bedatty-Engineering/wsl-ssh-setup/main/setup.ps1 -OutFile $p
& $p
```

Para usar o modo espelhado, substitua o último comando por `& $p -Mirrored`. Também é possível passar `-WslDistro Ubuntu -WslUser alice` para escolher uma distribuição e um usuário, `-ListenPort 2222` para usar outra porta no Windows ou `-Yes` para ignorar a confirmação.

## Conexão

Encontre o endereço IPv4 da rede local do Windows com `ipconfig` e conecte-se a partir de outra máquina na mesma rede:

```bash
ssh <USUARIO_WSL>@<IP_LOCAL_DO_WINDOWS>
```

Para acessar sem senha, crie uma chave SSH se ainda não tiver uma e copie a chave pública para a conta WSL:

```bash
ssh-keygen -t ed25519
ssh-copy-id <USUARIO_WSL>@<IP_LOCAL_DO_WINDOWS>
```

Você pode salvar o host e o usuário no arquivo `~/.ssh/config` da máquina cliente e conectar usando um alias curto, como `ssh wsl-remoto`.

## Desinstalação

Execute o script de remoção em uma janela normal do PowerShell. Ele remove o servidor SSH do WSL, a regra de firewall, o portproxy e, quando existir, a configuração de rede espelhada:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
$p = "$env:TEMP\teardown.ps1"
irm https://raw.githubusercontent.com/Bedatty-Engineering/wsl-ssh-setup/main/teardown.ps1 -OutFile $p
& $p -DisableMirrored
```

## Decisões de projeto

A configuração do WSL fica em scripts Linux, enquanto as regras de firewall e roteamento ficam em scripts PowerShell. Um orquestrador do Windows executa os dois lados na sessão normal do usuário, direcionando as mudanças para a distribuição WSL correta mesmo quando a elevação usa outra conta administradora.
