
export const useColor = () => useState<string>('color', () => 'pink')
export const useCounter = () => useState<number>('counter', () => 0)
export const useIsNavOpen = () => useState<boolean>('isNavOpen', () => false)

