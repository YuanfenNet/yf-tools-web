declare module '*.md'
declare module 'jsonlint-mod'
declare module 'vue-json-viewer/ssr'
declare module 'html-entities.ts' {
  const value: {
    [key: string]: {
      codepoints: number[]
      character: string
    }
  }
  export default value
}
