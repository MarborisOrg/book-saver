import { Core } from '@marboris/coreutils'
import { Request, Response, Router } from 'express'

// Test
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
new (class extends Core {
  public Main(): void {
    void (async (): Promise<void> => {
      await this.dbManager.connect()

      await this.expressManager.start()

      const router = Router()

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
