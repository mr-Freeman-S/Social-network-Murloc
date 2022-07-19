import {userType} from "../redux/userReducer/user-reducer";

export const updateObjectInArray = (items:Array<userType>,itemId:number,objPropName:keyof userType,newObjProps:object) => {
    return items.map((el) => {
        if(el[objPropName] === itemId) {
            return {...el, ...newObjProps}
        }
        return el
    })
}