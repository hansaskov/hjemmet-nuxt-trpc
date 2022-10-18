
export type fullname = {
    firstName: string,
    middleName?: string,
    lastName: string
}

export function nameToJson(name: string) {

    const stringArr = name.trim().split(" ")

    if (stringArr.length == 2) {
        return  {
            firstName: stringArr[0],
            lastName: stringArr[1]
        } as fullname
    } else if (stringArr.length == 3) {
        return {
            firstName: stringArr[0],
            middleName: stringArr[1],
            lastName: stringArr[2]
        } as fullname
    }
}

export function nameToString(name: fullname) {

    let stringName = name.firstName + " "
    if (name.middleName) stringName += name.middleName + " "
    stringName += name.lastName

    return stringName
}