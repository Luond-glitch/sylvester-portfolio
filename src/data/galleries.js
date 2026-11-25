// Add a new photo: import it and append { src, alt, caption } to the list.
import group from '../assets/group.jpg'
import portrait from '../assets/portrait.jpg'
import portrait2 from '../assets/portrait2.jpg'
import event from '../assets/event.jpg'
import chima from '../assets/chima.jpg'
export const gallery = [
  { src: group, alt: 'Group photo at the Co-operative University of Kenya', caption: 'With colleagues at the Co-operative University of Kenya' },
  { src: portrait, alt: 'Professional portrait', caption: 'Professional photograph' },
  { src: portrait2, alt: 'Portrait outdoors', caption: 'Professional photograph' },
  { src: event, alt: 'Seated at an event', caption: 'At an event (caption to be added)' },
  { src: chima, alt: 'CHIMA logo', caption: 'CHIMA, Chipukizi wa Mazingira', contain: true },
]
