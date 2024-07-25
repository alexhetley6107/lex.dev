import { ANCHOR } from '../enums';

export class ScrollService {
  static get isTop() {
    return 0 === window.scrollY;
  }

  static toAnchor(anchor: ANCHOR) {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
