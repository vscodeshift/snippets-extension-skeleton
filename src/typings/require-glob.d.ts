/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'require-glob' {
  export function sync(path: string): Record<string, any>
}
