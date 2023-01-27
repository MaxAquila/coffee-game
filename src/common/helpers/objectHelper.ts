import { arrayCompare } from "@comm-helpers/arrayHelper";

/**
 * 
 * @param obj1 
 * @param obj2 
 * @returns 
 */
export function objectCompare(obj1: any, obj2: any): boolean {
    const propsObj1 = Object.keys(obj1);
    const propsObj2 = Object.keys(obj2);
    //1 - The properties of the two objects match.
    //2 - The value of each property matches.
    return arrayCompare(propsObj1, propsObj2) && propsObj1.every(p => obj1[p] === obj2[p]);
};