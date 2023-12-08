import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['navmenu', 'mobilemenu']

  toggle() {    
    this.navmenuTarget.classList.toggle('visible')
    this.navmenuTarget.classList.toggle('invisible')
    this.mobilemenuTarget.classList.toggle('opacity-0')
  }
}
