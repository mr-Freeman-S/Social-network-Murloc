export const required = (value: any) => {

    if (value) return undefined
    return "Field is required"
}

export const maxLength = (length: number) => (value: any) => {
    if (value && value.length > length) return `Max length is ${length}`
    return undefined
}