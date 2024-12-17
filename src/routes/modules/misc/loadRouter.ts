import { Router } from 'express'

export const loadRouter = async (
  app: Router,
  routePath: string,
  basePath: string
): Promise<void> => {
  try {
    const { default: router }: { readonly default: Router } = await import(
      routePath
    )
    app.use(basePath, router)
  } catch (error) {
    log.error(`[route loader] Error loading route from ${routePath}:`, error)
  }
}
