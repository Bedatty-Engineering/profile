---
locale: en
translationKey: ghp
pathSlug: ghp
title: "ghp: GitHub CLI Account Manager"
description: "A Bash command-line tool for switching authenticated GitHub CLI accounts, managing login sessions, and setting up SSH commit signing keys."
technologies:
  - Bash
  - GitHub CLI
  - fzf
  - SSH
  - Ed25519
  - GitHub Enterprise
github_link: "https://github.com/Bedatty-Engineering/ghp"
architecture_notes: "A standalone Bash executable manages accounts already authenticated with GitHub CLI. It uses the GitHub CLI for account and session operations, ssh-keygen for local Ed25519 signing keys, and GH_HOST to target GitHub Enterprise. The tool does not upload keys or store authentication data itself."
---

## Overview

`ghp` is a small account manager for [GitHub CLI](https://cli.github.com/). It switches between accounts already authenticated with `gh`, starts or ends login sessions, and can create or reuse an SSH signing key for an account.

[View the ghp repository on GitHub](https://github.com/Bedatty-Engineering/ghp).

## Requirements

`ghp` runs on Bash 3.2 or later and requires GitHub CLI. Authenticate accounts with `gh auth login` before switching between them. The interactive picker requires [`fzf`](https://github.com/junegunn/fzf); `ssh-keygen` is needed for signing-key setup, and `curl` is used by remote install, update, and uninstall scripts. Commands other than the interactive menu work without `fzf`.

## Installation

Install the latest version with the project's installer:

```sh
curl -fsSL https://raw.githubusercontent.com/Bedatty-Engineering/ghp/main/scripts/install.sh | bash
```

By default, the installer copies `ghp` to `~/.local/bin`. Make sure this directory is on your `PATH`. To use a custom directory, set `GHP_INSTALL_DIR`:

```sh
curl -fsSL https://raw.githubusercontent.com/Bedatty-Engineering/ghp/main/scripts/install.sh | GHP_INSTALL_DIR="$HOME/bin" bash
```

You can also clone the repository and run `./scripts/install.sh` from the checkout, optionally passing the destination directory. The executable can also run directly from a checkout as `./ghp`.

## Usage

Run `ghp` to open the interactive account menu, or use a command directly:

```sh
ghp                          # Open the interactive menu
ghp use my-account           # Switch to an account
ghp list                     # List authenticated accounts
ghp status                   # Show active account and auth status
ghp login                    # Authenticate another account
ghp logout [account]         # Log out (defaults to the active account)
ghp signing-key [account]    # Create or reuse an SSH signing key
ghp help                     # Show command help
```

For GitHub Enterprise, set `GH_HOST` for one command or export it for the shell session. The default host is `github.com`:

```sh
GH_HOST=github.example.com ghp status
export GH_HOST=github.example.com
```

## SSH commit signing

`ghp signing-key [account]` creates an Ed25519 key under `~/.ssh`, or updates the comment on a key previously generated for that host and account. It prints instructions for adding the public key to GitHub as a **Signing Key**; it does not upload the key. The private key stays on the local machine and should remain private.

## Updates and privacy

The repository includes scripts to update or uninstall the command from a checkout, with remote scripts available as well. The updater validates the downloaded script before replacing the installed command. GitHub CLI retains authentication; `ghp` does not contain account names or authentication data, and generated signing keys remain local.
