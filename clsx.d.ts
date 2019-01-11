declare module 'clsx' {
  type ClassValue =
    | ClassArray
    | ClassDictionary
    | string
    | number
    | null
    | boolean

  interface ClassDictionary {
    [id: string]: any
  }

  interface ClassArray extends Array<ClassValue> {}

  const clsx: (...classes: ClassValue[]) => string

  export default clsx
  export {ClassValue}
}
