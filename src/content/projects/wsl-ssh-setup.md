---
locale: en
translationKey: wsl-ssh-setup
pathSlug: wsl-ssh-setup
title: "wsl-ssh-setup: SSH into WSL over your LAN"
description: "PowerShell scripts for setting up and removing SSH access to a WSL 2 distribution from another device on the local network."
seo_title: "WSL SSH Setup: Remote Access to WSL 2 | Lucas Bedatty"
seo_description: "Set up SSH access to a WSL 2 Linux distribution over your local network with PowerShell scripts for OpenSSH, Windows Firewall, and port forwarding."
technologies:
  - Windows PowerShell
  - WSL 2
  - OpenSSH Server
  - SSH
  - Windows Firewall
  - netsh portproxy
github_link: "https://github.com/Bedatty-Engineering/wsl-ssh-setup"
architecture_notes: "A PowerShell orchestrator runs under the Windows user session, configures OpenSSH inside WSL, and elevates only the Windows firewall and portproxy steps. Classic mode forwards Windows port 22 to WSL; mirrored mode uses the shared Windows network stack and removes the portproxy requirement."
---

## Overview

`wsl-ssh-setup` configures SSH access to a WSL 2 Linux distribution from another machine on the same local network. Run one PowerShell command on the Windows host to install and configure OpenSSH inside WSL and set up the Windows networking rules.

It supports two modes:

- **Classic mode** is the default. A Windows `portproxy` forwards port 22 to the current WSL IP. Re-run the setup after a Windows restart if the WSL IP changes.
- **Mirrored mode** is recommended for Windows 11 with a recent WSL 2. WSL shares the Windows network stack, so no `portproxy` is needed and WSL IP changes do not require setup again.

## Requirements

- Windows 10 or 11, WSL 2, and a Linux distribution such as Ubuntu.
- Windows 11 and a recent WSL 2 for mirrored networking.
- The WSL distribution must be running when connecting. Keep a WSL terminal open or configure it to stay active in the background.

## Installation

Run these commands in a **regular Windows PowerShell window, not as Administrator**. The installer requests elevation only for Windows firewall and portproxy changes, and confirms the target WSL distribution and user before continuing.

Classic mode:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
$p = "$env:TEMP\setup.ps1"
irm https://raw.githubusercontent.com/Bedatty-Engineering/wsl-ssh-setup/main/setup.ps1 -OutFile $p
& $p
```

For mirrored mode, use `& $p -Mirrored` as the last command. You can also pass `-WslDistro Ubuntu -WslUser alice` to choose a specific distribution and user, `-ListenPort 2222` for a custom Windows port, or `-Yes` to skip the confirmation prompt.

## Connect

Find the Windows host's LAN IPv4 address with `ipconfig`, then connect from another machine on the same network:

```bash
ssh <WSL_USER>@<WINDOWS_LAN_IP>
```

For passwordless access, create an SSH key if needed and copy its public key to the WSL account:

```bash
ssh-keygen -t ed25519
ssh-copy-id <WSL_USER>@<WINDOWS_LAN_IP>
```

You can save the host and username in the client machine's `~/.ssh/config` and connect with a short alias such as `ssh wsl-remote`.

## Uninstall

Run the teardown script from a regular PowerShell window. It removes the WSL SSH server, firewall rule, portproxy, and mirrored networking setting when present:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
$p = "$env:TEMP\teardown.ps1"
irm https://raw.githubusercontent.com/Bedatty-Engineering/wsl-ssh-setup/main/teardown.ps1 -OutFile $p
& $p -DisableMirrored
```

## Design choices

The setup keeps the WSL configuration in Linux scripts and the Windows firewall and routing work in PowerShell scripts. A Windows orchestrator invokes both sides while running under the user's normal Windows session, so it targets the intended WSL distribution even when elevation uses a separate administrator account.
