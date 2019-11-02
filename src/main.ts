import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { environment } from './environments/environment'
import { hmrBootstrap } from './hmr'
import { RootModule } from './app/root/root.module'

if (environment.production) {
  enableProdMode()
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(RootModule)

if (environment.hmr) {
  // tslint:disable-next-line: no-string-literal
  if (module['hot']) {
    hmrBootstrap(module, bootstrap)
  } else {
    console.error('HMR is not enabled for webpack-dev-server!')
    console.log('Are you using the --hmr flag for ng serve?')
  }
} else {
  bootstrap().catch(err => console.log(err))
}
