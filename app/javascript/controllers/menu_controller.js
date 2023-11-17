import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['mobilemenu']

  toggle() {
    this.mobilemenuTarget.classList.toggle('invisible')
    this.mobilemenuTarget.classList.toggle('opacity-0')
  }
}
