import * as React from 'react'
import {ClassValue} from 'clsx'

// ERROR here:
// Return type of exported function has or is using name 'ClassDictionary'
// from external module "clsx" but cannot be named.
function rClasy<UserDefinedProps>(component: string) {
  type WrapperProps = React.ComponentPropsWithRef<any> & UserDefinedProps

  type CLSXInterpolation = (props: WrapperProps) => ClassValue

  return (...clsxArgs: Array<CLSXInterpolation | ClassValue>) => {
    return (props: WrapperProps) =>
      // in reality we do stuff with clsxArgs and props here...
      React.createElement(component, {
        children: JSON.stringify(clsxArgs, props),
      })
  }
}

export default rClasy
