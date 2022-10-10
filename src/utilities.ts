export const radiansToDegrees = (radians) =>{
    return radians * (180/Math.PI);
}

export const isRadians = (subject) =>{
    return (
        subject === 'azimuth'
        || subject === 'angle'
        || subject === 'altitude'
        || subject === 'parallacticAngle'
    )
}
export const isBoolean = (subject) => {
    return (
        subject === 'alwaysUp'
        || subject === 'alwaysDown'
    )
}