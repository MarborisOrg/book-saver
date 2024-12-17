import { NextFunction, Request, Response } from 'express'

export const logMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const startTime = Date.now()

  console.log({
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    timestamp: new Date().toISOString(),
  })

  res.on('finish', () => {
    const duration = Date.now() - startTime
    console.log({
      message: 'Response sent',
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      timestamp: new Date().toISOString(),
    })
  })

  next()
}
