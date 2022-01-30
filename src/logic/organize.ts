import { ClassBody } from "jscodeshift"
import { ParserOptions } from "prettier"
import {
  moveConstructorToTop,
  organizeGetAndSetMethods,
  organizeMethods,
  organizePrivateMethods,
  organizeStaticMethods,
} from "./organizeMethods"
import jscodeshift = require("jscodeshift")

export const organize = (code: string, options: ParserOptions) => {
  const root = jscodeshift(code)

  const body = root.find(ClassBody)

  if (body.length === 0) {
    return root.toSource()
  }

  moveConstructorToTop(body)
  organizeGetAndSetMethods(body)
  organizeMethods(body)
  organizeStaticMethods(body)
  organizePrivateMethods(body)
  console.log(root.toSource())

  return code
}
