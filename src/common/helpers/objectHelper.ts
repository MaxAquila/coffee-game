import { arrayCompare } from "@comm-helpers/arrayHelper";

/**
 * Compare two objects.
 * @param obj1 first object to compare.
 * @param obj2 second object to compare.
 * @returns `true` if the comparison matches.
 */
export function objectCompare(obj1: any, obj2: any): boolean {
    const propsObj1 = Object.keys(obj1);
    const propsObj2 = Object.keys(obj2);
    //1 - The properties of the two objects match.
    //2 - The value of each property matches.
    return arrayCompare(propsObj1, propsObj2) && propsObj1.every(p => obj1[p] === obj2[p]);
};