export function fillRefArray<T extends HTMLElement>(refArray: T[], ref: T){
   return [...refArray, ref];
}

