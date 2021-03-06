# `openfaas` reference

Below is the schema reference for the `openfaas` module type. For an introduction to configuring Garden modules, please look at our [Configuration guide](../../using-garden/configuration-files.md).

The reference is divided into two sections. The [first section](#configuration-keys) lists and describes the available schema keys. The [second section](#complete-yaml-schema) contains the complete YAML schema.

## Configuration keys

### `module`

The module specification for an OpenFaaS module.

| Type | Required |
| ---- | -------- |
| `object` | No
### `module.env`
[module](#module) > env

Key/value map of environment variables. Keys must be valid POSIX environment variable names (must not start with `GARDEN`) and values must be primitives.

| Type | Required |
| ---- | -------- |
| `object` | No
### `module.tasks[]`
[module](#module) > tasks

A list of tasks that can be run in this module.

| Type | Required |
| ---- | -------- |
| `array[object]` | No
### `module.tasks[].name`
[module](#module) > [tasks](#module.tasks[]) > name

The name of the task.

| Type | Required |
| ---- | -------- |
| `string` | Yes
### `module.tasks[].description`
[module](#module) > [tasks](#module.tasks[]) > description

A description of the task.

| Type | Required |
| ---- | -------- |
| `string` | No
### `module.tasks[].dependencies[]`
[module](#module) > [tasks](#module.tasks[]) > dependencies

The names of any tasks that must be executed, and the names of any services that must be running, before this task is executed.

| Type | Required |
| ---- | -------- |
| `array[string]` | No
### `module.tasks[].timeout`
[module](#module) > [tasks](#module.tasks[]) > timeout

Maximum duration (in seconds) of the task's execution.

| Type | Required |
| ---- | -------- |
| `number` | No
### `module.tasks[].command[]`
[module](#module) > [tasks](#module.tasks[]) > command

The command to run in the module build context.

| Type | Required |
| ---- | -------- |
| `array[string]` | No
### `module.tests[]`
[module](#module) > tests

A list of tests to run in the module.

| Type | Required |
| ---- | -------- |
| `array[object]` | No
### `module.tests[].name`
[module](#module) > [tests](#module.tests[]) > name

The name of the test.

| Type | Required |
| ---- | -------- |
| `string` | Yes
### `module.tests[].dependencies[]`
[module](#module) > [tests](#module.tests[]) > dependencies

The names of any services that must be running, and the names of any tasks that must be executed, before the test is run.

| Type | Required |
| ---- | -------- |
| `array[string]` | No
### `module.tests[].timeout`
[module](#module) > [tests](#module.tests[]) > timeout

Maximum duration (in seconds) of the test run.

| Type | Required |
| ---- | -------- |
| `number` | No
### `module.tests[].command[]`
[module](#module) > [tests](#module.tests[]) > command

The command to run in the module build context in order to test it.

| Type | Required |
| ---- | -------- |
| `array[string]` | No
### `module.tests[].env`
[module](#module) > [tests](#module.tests[]) > env

Key/value map of environment variables. Keys must be valid POSIX environment variable names (must not start with `GARDEN`) and values must be primitives.

| Type | Required |
| ---- | -------- |
| `object` | No
### `module.dependencies[]`
[module](#module) > dependencies

The names of services/functions that this function depends on at runtime.

| Type | Required |
| ---- | -------- |
| `array[string]` | No
### `module.handler`
[module](#module) > handler

Specify which directory under the module contains the handler file/function.

| Type | Required |
| ---- | -------- |
| `string` | No
### `module.image`
[module](#module) > image

The image name to use for the built OpenFaaS container (defaults to the module name)

| Type | Required |
| ---- | -------- |
| `string` | No
### `module.lang`
[module](#module) > lang

The OpenFaaS language template to use to build this function.

| Type | Required |
| ---- | -------- |
| `string` | Yes


## Complete YAML schema
```yaml
module:
  env: {}
  tasks:
    - name:
      description:
      dependencies: []
      timeout: null
      command:
  tests:
    - name:
      dependencies: []
      timeout: null
      command:
      env: {}
  dependencies: []
  handler: .
  image:
  lang:
```
