let i: number = 0

export const useId = (prefix: string = 'toast') => {
    return `${prefix}_${i++}`
}
