---
locale: en
translationKey: awsp
pathSlug: awsp
title: "awsp: AWS CLI Profile Switcher"
description: "A Bash command-line tool for switching AWS CLI profiles, managing SSO sessions, and applying profile regions to the current shell."
technologies:
  - Bash
  - AWS CLI v2
  - AWS IAM Identity Center (SSO)
  - fzf
  - Shell Integration
github_link: "https://github.com/Bedatty-Engineering/awsp"
architecture_notes: "A Bash CLI reads existing AWS CLI configuration without creating or editing credentials. An optional shell function evaluates the command's output so profile and region changes take effect in the current shell; AWS STS checks authentication and AWS CLI v2 handles SSO sessions."
---

## Overview

`awsp` makes it easier to work across configured AWS CLI profiles from a terminal. Choose a profile interactively with `fzf` or switch by name, check its authentication status, and start or clear AWS IAM Identity Center (SSO) sessions.

## Shell integration

A child process cannot change the environment of its parent shell. `awsp` addresses this with an optional shell function that evaluates the commands returned by the CLI. This lets profile selection, `awsp use`, `awsp clear`, and logout update the current terminal's `AWS_PROFILE`, `AWS_REGION`, and `AWS_DEFAULT_REGION` values.

The profile's configured region is exported to both region variables. When a profile has no region, both are cleared so a previous profile's region is not retained.

## Profiles and authentication

The tool reads existing AWS CLI configuration and credentials. It does not create or edit credential files. Profiles can be configured with the AWS CLI or existing configuration management.

Authentication status is checked through AWS STS. When a selected profile uses SSO and its session is missing or expired, `awsp` starts `aws sso login` for that profile. Users can also start SSO login explicitly or log out of all SSO sessions.

## Requirements

`awsp` runs on Bash 3.2 or later and requires AWS CLI v2 for profile and SSO commands. The interactive picker uses [`fzf`](https://github.com/junegunn/fzf). Remote install and update scripts use `curl`.

## Installation

Install the latest version with the project's installer:

```sh
curl -fsSL https://raw.githubusercontent.com/Bedatty-Engineering/awsp/main/scripts/install.sh | bash
```

By default, the command is installed in `~/.local/bin` and the shell integration in `~/.local/share/awsp`. Make sure `~/.local/bin` is on your `PATH`, then add this line to `~/.zshrc` or `~/.bashrc`:

```sh
source "$HOME/.local/share/awsp/awsp.sh"
```

Restart the shell or source the file once to enable the integration. The installer also supports custom install and data directories through `AWSP_INSTALL_DIR` and `AWSP_DATA_DIR`. Alternatively, clone the repository and run `./scripts/install.sh` from the checkout.

## Usage

With shell integration enabled, run `awsp` to open the interactive `fzf` picker. Select a profile to set it in the current terminal. You can also use these commands directly:

```sh
awsp                    # Choose a profile with fzf
awsp use my-profile     # Switch to a profile
awsp list               # List configured profiles
awsp status             # Show profile and STS authentication status
awsp login [profile]    # Start SSO login (defaults to AWS_PROFILE)
awsp logout             # Log out of all SSO sessions
awsp clear              # Clear profile and region variables
awsp help               # Show command help
```

Without shell integration, evaluate the output so changes apply to the current shell:

```sh
eval "$(awsp use my-profile)"
eval "$(awsp)"  # Interactive selection
```

The project also includes update and uninstall scripts. The updater replaces only changed files and checks their shell syntax. If you added the `source` line to a shell startup file, remove it when uninstalling.

## Design choices

Keeping the tool in Bash makes it easy to integrate with Bash and Zsh, while the shell function handles the environment boundary that a standalone process cannot cross. `awsp` leaves AWS configuration under the user's control, and the repository contains no account names, account identifiers, credentials, or machine-specific paths.
