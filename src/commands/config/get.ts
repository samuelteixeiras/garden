import { Command, EnvironmentOption, ParameterValues, StringParameter } from "../base"
import { GardenContext } from "../../context"

const configGetArgs = {
  key: new StringParameter({
    help: "The key of the configuration variable. Separate with dots to get a nested key (e.g. key.nested)",
    required: true,
  }),
}

const configGetOpts = {
  env: new EnvironmentOption({
    help: "Get the environment (and optionally namespace) where the config should be stored",
  }),
}

type GetArgs = ParameterValues<typeof configGetArgs>
type GetOpts = ParameterValues<typeof configGetOpts>

// TODO: allow omitting key to return all configs

export class ConfigGetCommand extends Command<typeof configGetArgs, typeof configGetOpts> {
  name = "get"
  help = "Get a configuration variable"

  arguments = configGetArgs
  options = configGetOpts

  async action(ctx: GardenContext, args: GetArgs, opts: GetOpts) {
    opts.env && ctx.setEnvironment(opts.env)
    const res = await ctx.getConfig(args.key.split("."))

    ctx.log.info({ msg: res })

    return { [args.key]: res }
  }
}