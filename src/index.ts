import { Core } from '@marboris/coreutils'
import { Request, Response, Router } from 'express'

import { AllApps } from '#routes/apps/a'
import { loadRoutes } from '#routes/modules/misc/apps-routes'

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
new (class extends Core {
  public Main(): void {
    globalThis.log = this.logger
    globalThis.configs = this.config

    void (async (): Promise<void> => {
      await this.dbManager.connect()

      await this.expressManager.start()

      const router = Router()

      await loadRoutes(router, AllApps)

      router.get('/test', (_req: Request, res: Response) => {
        res.status(200).send('hi')
      })

      void this.expressManager.addRoute('/', router)

      // const sampleData = {
      //   name: 'John',
      //   age: 30,
      //   address: {
      //     city: 'NYC',
      //     zip: '10001',
      //   },
      // }

      // await this.dbManager.saveData(sampleData)

      // await this.dbManager.fetchData()
    })()
  }
})()
