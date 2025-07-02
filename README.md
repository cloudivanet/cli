diva cli
=================


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/chabok.svg)](https://npmjs.org/package/chabok)
[![Downloads/week](https://img.shields.io/npm/dw/chabok.svg)](https://npmjs.org/package/chabok)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @cloudiva.net/cli
$ diva COMMAND
running command...
$ diva (--version|-v)
@cloudiva.net/cli/0.8.11 darwin-arm64 node-v20.13.1
$ diva --help [COMMAND]
USAGE
  $ diva COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`diva account list`](#diva-account-list)
* [`diva account remove`](#diva-account-remove)
* [`diva account use`](#diva-account-use)
* [`diva autocomplete [SHELL]`](#diva-autocomplete-shell)
* [`diva deploy`](#diva-deploy)
* [`diva help [COMMAND]`](#diva-help-command)
* [`diva login`](#diva-login)
* [`diva plugins`](#diva-plugins)
* [`diva plugins add PLUGIN`](#diva-plugins-add-plugin)
* [`diva plugins:inspect PLUGIN...`](#diva-pluginsinspect-plugin)
* [`diva plugins install PLUGIN`](#diva-plugins-install-plugin)
* [`diva plugins link PATH`](#diva-plugins-link-path)
* [`diva plugins remove [PLUGIN]`](#diva-plugins-remove-plugin)
* [`diva plugins reset`](#diva-plugins-reset)
* [`diva plugins uninstall [PLUGIN]`](#diva-plugins-uninstall-plugin)
* [`diva plugins unlink [PLUGIN]`](#diva-plugins-unlink-plugin)
* [`diva plugins update`](#diva-plugins-update)
* [`diva service list`](#diva-service-list)
* [`diva service logs`](#diva-service-logs)
* [`diva service resize`](#diva-service-resize)
* [`diva service restart`](#diva-service-restart)
* [`diva service start`](#diva-service-start)
* [`diva service stop`](#diva-service-stop)
* [`diva version`](#diva-version)

## `diva account list`

show accounts list

```
USAGE
  $ diva account list [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  show accounts list
```

_See code: [src/commands/account/list.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/account/list.ts)_

## `diva account remove`

remove account from list

```
USAGE
  $ diva account remove [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  remove account from list
```

_See code: [src/commands/account/remove.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/account/remove.ts)_

## `diva account use`

switch your default user between logged in users

```
USAGE
  $ diva account use [-h] [-u <value>]

FLAGS
  -h, --help          Show CLI help.
  -u, --user=<value>  default user

DESCRIPTION
  switch your default user between logged in users
```

_See code: [src/commands/account/use.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/account/use.ts)_

## `diva autocomplete [SHELL]`

Display autocomplete installation instructions.

```
USAGE
  $ diva autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ diva autocomplete

  $ diva autocomplete bash

  $ diva autocomplete zsh

  $ diva autocomplete powershell

  $ diva autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.2.31/src/commands/autocomplete/index.ts)_

## `diva deploy`

this command help you build and deploy your service to cloudiva in easy way.

```
USAGE
  $ diva deploy [-h] [-p <value>] [-s <value>]

FLAGS
  -h, --help             Show CLI help.
  -p, --path=<value>     service path in your computer
  -s, --service=<value>  service name

DESCRIPTION
  this command help you build and deploy your service to cloudiva in easy way.
```

_See code: [src/commands/deploy.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/deploy.ts)_

## `diva help [COMMAND]`

Display help for diva.

```
USAGE
  $ diva help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for diva.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.29/src/commands/help.ts)_

## `diva login`

login to account

```
USAGE
  $ diva login [-h] [-u <value>] [-p <value>] [-t <value>]

FLAGS
  -h, --help              Show CLI help.
  -p, --password=<value>  your password
  -t, --token=<value>     login with api token
  -u, --username=<value>  your username

DESCRIPTION
  login to account
```

_See code: [src/commands/login.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/login.ts)_

## `diva plugins`

List installed plugins.

```
USAGE
  $ diva plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ diva plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.43/src/commands/plugins/index.ts)_

## `diva plugins add PLUGIN`

Installs a plugin into diva.

```
USAGE
  $ diva plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into diva.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DIVA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DIVA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ diva plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ diva plugins add myplugin

  Install a plugin from a github url.

    $ diva plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ diva plugins add someuser/someplugin
```

## `diva plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ diva plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ diva plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.43/src/commands/plugins/inspect.ts)_

## `diva plugins install PLUGIN`

Installs a plugin into diva.

```
USAGE
  $ diva plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into diva.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DIVA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DIVA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ diva plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ diva plugins install myplugin

  Install a plugin from a github url.

    $ diva plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ diva plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.43/src/commands/plugins/install.ts)_

## `diva plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ diva plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ diva plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.43/src/commands/plugins/link.ts)_

## `diva plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ diva plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ diva plugins unlink
  $ diva plugins remove

EXAMPLES
  $ diva plugins remove myplugin
```

## `diva plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ diva plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.43/src/commands/plugins/reset.ts)_

## `diva plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ diva plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ diva plugins unlink
  $ diva plugins remove

EXAMPLES
  $ diva plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.43/src/commands/plugins/uninstall.ts)_

## `diva plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ diva plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ diva plugins unlink
  $ diva plugins remove

EXAMPLES
  $ diva plugins unlink myplugin
```

## `diva plugins update`

Update installed plugins.

```
USAGE
  $ diva plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.43/src/commands/plugins/update.ts)_

## `diva service list`

show account services list

```
USAGE
  $ diva service list [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  show account services list
```

_See code: [src/commands/service/list.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/service/list.ts)_

## `diva service logs`

read latest logs from service

```
USAGE
  $ diva service logs [-h] [-s <value>]

FLAGS
  -h, --help             Show CLI help.
  -s, --service=<value>  service name

DESCRIPTION
  read latest logs from service
```

_See code: [src/commands/service/logs.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/service/logs.ts)_

## `diva service resize`

resize a service

```
USAGE
  $ diva service resize [-h] [-s <value>] [-r <value>] [-c <value>] [-d <value>]

FLAGS
  -c, --cpu=<value>      CPU
  -d, --disk=<value>     DISK
  -h, --help             Show CLI help.
  -r, --ram=<value>      RAM
  -s, --service=<value>  service name

DESCRIPTION
  resize a service
```

_See code: [src/commands/service/resize.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/service/resize.ts)_

## `diva service restart`

restart a service

```
USAGE
  $ diva service restart [-h] [-s <value>]

FLAGS
  -h, --help             Show CLI help.
  -s, --service=<value>  service name

DESCRIPTION
  restart a service
```

_See code: [src/commands/service/restart.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/service/restart.ts)_

## `diva service start`

start a service

```
USAGE
  $ diva service start [-h] [-s <value>]

FLAGS
  -h, --help             Show CLI help.
  -s, --service=<value>  service name

DESCRIPTION
  start a service
```

_See code: [src/commands/service/start.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/service/start.ts)_

## `diva service stop`

stop a service

```
USAGE
  $ diva service stop [-h] [-s <value>]

FLAGS
  -h, --help             Show CLI help.
  -s, --service=<value>  service name

DESCRIPTION
  stop a service
```

_See code: [src/commands/service/stop.ts](https://github.com/cloudivanet/cli/blob/v0.8.11/src/commands/service/stop.ts)_

## `diva version`

```
USAGE
  $ diva version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v2.2.30/src/commands/version.ts)_
<!-- commandsstop -->
