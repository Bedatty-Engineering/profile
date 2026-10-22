---
locale: pt
translationKey: awsp
pathSlug: awsp
title: "awsp: Seletor de Perfis da AWS CLI"
description: "Uma ferramenta de linha de comando em Bash para alternar perfis da AWS CLI, gerenciar sessões SSO e aplicar regiões ao shell atual."
technologies:
  - Bash
  - AWS CLI v2
  - AWS IAM Identity Center (SSO)
  - fzf
  - Integração com Shell
github_link: "https://github.com/Bedatty-Engineering/awsp"
architecture_notes: "Uma CLI em Bash lê a configuração existente da AWS CLI sem criar ou editar credenciais. Uma função opcional de shell avalia a saída do comando para aplicar mudanças de perfil e região no shell atual; o AWS STS verifica a autenticação e a AWS CLI v2 gerencia as sessões SSO."
---

## Visão geral

`awsp` facilita o trabalho com vários perfis configurados da AWS CLI pelo terminal. É possível escolher um perfil com `fzf` ou pelo nome, verificar o status de autenticação e iniciar ou encerrar sessões do AWS IAM Identity Center (SSO).

## Integração com o shell

Um processo filho não pode alterar o ambiente do shell que o iniciou. O `awsp` resolve isso com uma função opcional de shell que avalia os comandos retornados pela CLI. Assim, a seleção de perfil, `awsp use`, `awsp clear` e o logout atualizam os valores de `AWS_PROFILE`, `AWS_REGION` e `AWS_DEFAULT_REGION` no terminal atual.

A região configurada no perfil é exportada para as duas variáveis. Se o perfil não tiver uma região, ambas são limpas para evitar que permaneça a região de um perfil anterior.

## Perfis e autenticação

A ferramenta lê as configurações e credenciais existentes da AWS CLI. Ela não cria nem edita arquivos de credenciais. Os perfis podem ser configurados pela própria AWS CLI ou por ferramentas de gerenciamento de configuração já utilizadas.

O status de autenticação é verificado pelo AWS STS. Quando um perfil selecionado usa SSO e a sessão está ausente ou expirada, o `awsp` inicia `aws sso login` para esse perfil. Também é possível iniciar o login SSO explicitamente ou encerrar todas as sessões SSO.

## Pré-requisitos

O `awsp` funciona com Bash 3.2 ou superior e requer a AWS CLI v2 para os comandos de perfil e SSO. O seletor interativo usa o [`fzf`](https://github.com/junegunn/fzf). Os scripts remotos de instalação e atualização usam `curl`.

## Instalação

Instale a versão mais recente usando o instalador do projeto:

```sh
curl -fsSL https://raw.githubusercontent.com/Bedatty-Engineering/awsp/main/scripts/install.sh | bash
```

Por padrão, o comando é instalado em `~/.local/bin` e a integração com o shell em `~/.local/share/awsp`. Verifique se `~/.local/bin` está no `PATH` e adicione esta linha ao `~/.zshrc` ou `~/.bashrc`:

```sh
source "$HOME/.local/share/awsp/awsp.sh"
```

Reinicie o shell ou carregue o arquivo uma vez para ativar a integração. O instalador também aceita diretórios personalizados pelas variáveis `AWSP_INSTALL_DIR` e `AWSP_DATA_DIR`. Como alternativa, clone o repositório e execute `./scripts/install.sh` dentro dele.

## Uso

Com a integração ativada, execute `awsp` para abrir o seletor interativo do `fzf`. Escolha um perfil para aplicá-lo ao terminal atual. Também é possível usar estes comandos diretamente:

```sh
awsp                    # Escolher um perfil com fzf
awsp use meu-perfil     # Alternar para um perfil
awsp list               # Listar perfis configurados
awsp status             # Mostrar perfil e status de autenticação STS
awsp login [perfil]     # Iniciar login SSO (usa AWS_PROFILE por padrão)
awsp logout             # Encerrar todas as sessões SSO
awsp clear              # Limpar variáveis de perfil e região
awsp help               # Mostrar a ajuda dos comandos
```

Sem a integração com o shell, avalie a saída do comando para aplicar as mudanças ao shell atual:

```sh
eval "$(awsp use meu-perfil)"
eval "$(awsp)"  # Seleção interativa
```

O projeto também inclui scripts de atualização e desinstalação. O atualizador substitui apenas arquivos alterados e verifica a sintaxe do shell. Se você adicionou a linha `source` ao arquivo de inicialização, remova-a ao desinstalar.

## Decisões de projeto

Manter a ferramenta em Bash facilita a integração com Bash e Zsh, enquanto a função de shell contorna o limite de ambiente que um processo independente não consegue atravessar. O `awsp` deixa a configuração da AWS sob controle do usuário, e o repositório não contém nomes ou identificadores de contas, credenciais nem caminhos específicos de máquinas.
