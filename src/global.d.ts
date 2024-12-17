import { ConfigManager } from '@marboris/coreutils/dist/types/config'
import { CustomLogger } from '@marboris/coreutils/dist/types/logger'

/* eslint-disable no-var */
declare global {
  var log: CustomLogger
  var configs: ConfigManager
}

export {}
