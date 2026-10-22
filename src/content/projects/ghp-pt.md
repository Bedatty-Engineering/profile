---
locale: pt
translationKey: ghp
pathSlug: ghp
title: "ghp: Gerenciador de Contas do GitHub CLI"
description: "Uma ferramenta de linha de comando em Bash para alternar entre contas autenticadas no GitHub CLI, gerenciar sessões e configurar chaves SSH para assinatura de commits."
seo_title: "GHP: Gerenciador de Contas GitHub CLI | Lucas Bedatty"
seo_description: "Gerencie contas do GitHub CLI, sessões de autenticação e chaves SSH para assinatura de commits com o ghp, ferramenta Bash compatível com GitHub Enterprise."
technologies:
  - Bash
  - GitHub CLI
  - fzf
  - SSH
  - Ed25519
  - GitHub Enterprise
github_link: "https://github.com/Bedatty-Engineering/ghp"
architecture_notes: "Um executável independente em Bash gerencia contas já autenticadas no GitHub CLI. Usa a CLI do GitHub para operações de conta e sessão, ssh-keygen para chaves locais de assinatura Ed25519 e GH_HOST para direcionar operações ao GitHub Enterprise. A ferramenta não envia chaves nem armazena dados de autenticação."
---

## Visão geral

`ghp` é um gerenciador simples de contas para o [GitHub CLI](https://cli.github.com/). Ele alterna entre contas já autenticadas pelo `gh`, inicia ou encerra sessões de login e pode criar ou reutilizar uma chave SSH para assinatura de commits.

## Pré-requisitos

O `ghp` funciona com Bash 3.2 ou superior e requer o GitHub CLI. Autentique as contas com `gh auth login` antes de alternar entre elas. O seletor interativo requer o [`fzf`](https://github.com/junegunn/fzf); `ssh-keygen` é necessário para configurar chaves de assinatura, e `curl` é usado pelos scripts remotos de instalação, atualização e desinstalação. Os outros comandos funcionam sem `fzf`.

## Instalação

Instale a versão mais recente usando o instalador do projeto:

```sh
curl -fsSL https://raw.githubusercontent.com/Bedatty-Engineering/ghp/main/scripts/install.sh | bash
```

Por padrão, o instalador copia `ghp` para `~/.local/bin`. Verifique se esse diretório está no `PATH`. Para usar outro diretório, defina `GHP_INSTALL_DIR`:

```sh
curl -fsSL https://raw.githubusercontent.com/Bedatty-Engineering/ghp/main/scripts/install.sh | GHP_INSTALL_DIR="$HOME/bin" bash
```

Também é possível clonar o repositório e executar `./scripts/install.sh`, passando opcionalmente o diretório de destino. O executável pode ser usado diretamente do checkout com `./ghp`.

## Uso

Execute `ghp` para abrir o menu interativo de contas ou use um comando diretamente:

```sh
ghp                          # Abrir o menu interativo
ghp use minha-conta          # Alternar para uma conta
ghp list                     # Listar contas autenticadas
ghp status                   # Mostrar conta ativa e status de autenticação
ghp login                    # Autenticar outra conta
ghp logout [conta]           # Sair (usa a conta ativa por padrão)
ghp signing-key [conta]     # Criar ou reutilizar chave de assinatura SSH
ghp help                     # Mostrar a ajuda dos comandos
```

Para usar o GitHub Enterprise, defina `GH_HOST` para um comando ou exporte a variável durante a sessão do shell. O host padrão é `github.com`:

```sh
GH_HOST=github.example.com ghp status
export GH_HOST=github.example.com
```

## Assinatura de commits com SSH

`ghp signing-key [conta]` cria uma chave Ed25519 em `~/.ssh` ou atualiza o comentário de uma chave que já tenha sido gerada para aquele host e conta. O comando mostra como adicionar a chave pública ao GitHub como **Signing Key**; ele não envia a chave. A chave privada permanece na máquina local e deve ser mantida em sigilo.

## Atualização e privacidade

O repositório inclui scripts para atualizar ou desinstalar o comando a partir do checkout, além de scripts remotos. Antes de substituir o comando instalado, o atualizador valida o script baixado. A autenticação fica no GitHub CLI; o `ghp` não contém nomes de contas nem dados de autenticação, e as chaves de assinatura geradas ficam na máquina local.
