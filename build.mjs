import * as fs from 'fs'
import * as esbuild from 'esbuild'
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

const isWatching = process.argv.includes('--watch')

const routes = fs.readdirSync('./src/routes')

await Promise.all(
  routes.map((route) => {
    const outDir = route === 'index' ? 'out' : `out/${route}`
    return esbuild[isWatching ? 'context' : 'build']({
      entryPoints: [`./src/routes/${route}/index.tsx`],
      bundle: true,
      outdir: outDir,
      plugins: [
        vanillaExtractPlugin(),
        {
          name: 'rebuild-notify',
          setup(build) {
            build.onEnd(() => {
              // Copy over the matching HTML file
              fs.cpSync(
                `./src/routes/${route}/index.html`,
                `${outDir}/index.html`,
              )
              console.log(`[${new Date().toISOString()}] built route: ${route}`)

              if (route === 'index') {
                // Copy over additonal assets
                fs.cpSync('./assets', 'out/assets', { recursive: true })
              }
            })
          },
        },
      ],
      sourcemap: 'both',
    }).then((ctx) => {
      if (isWatching) {
        return ctx.watch()
      } else {
        return ctx
      }
    })
  }),
)
