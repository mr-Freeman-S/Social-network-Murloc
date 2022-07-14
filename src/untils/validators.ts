export const required = (value: string) => {
    if (value) return undefined
    return "Field is required"
}

export const maxLength = (length: number) => (value: string) => {
    if (value && value.length > length) return `Max length is ${length}`
    return undefined
}