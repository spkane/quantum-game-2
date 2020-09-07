import { Elem, Group } from '@/engine/interfaces'
import Element from '@/engine/Element'

/**
 * POLARIZING BEAM SPLITTER CLASS
 */
export default class PolarizingBeamSplitter extends Element {
  public name: Elem = Elem.PolarizingBeamSplitter
  public group: Group = Group.Direction
  public description = 'Reflects vertical polarization (↕), transmits horizonal polarization (↔).'

  public ascii: string[] = ['⬲', '⟴']
  public angles: number[] = [0, 90, 180, 270]

  public constructor() {
    super(Elem.PolarizingBeamSplitter, Group.Direction)
  }
}
