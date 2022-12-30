import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'player',
    title: 'Player Space',
   // translate: 'MENU.HOME',
    type: 'item',
    icon: 'users',
    url: 'players'
  },
  {
    id: 'pitch',
    title: 'Pitchs Space',
    //translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'slack',
    url: 'pitchs'
  }
]
