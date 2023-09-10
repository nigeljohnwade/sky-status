export const radiansToDegrees = (radians: number) =>{
    return radians * (180/Math.PI);
}

export const isRadians = (subject: string) =>{
    return (
        subject === 'azimuth'
        || subject === 'angle'
        || subject === 'altitude'
        || subject === 'parallacticAngle'
    )
}
export const isBoolean = (subject: string) => {
    return (
        subject === 'alwaysUp'
        || subject === 'alwaysDown'
    )
}