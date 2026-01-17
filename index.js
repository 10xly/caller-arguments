const just = require("basic-functions")
const $Error = require("es-error-intrinsics/Error")
const construct = require("construct-new-second")
const $Array = require("array-intrinsic-ai")

module.exports = function args(returnArray) {
  try {
    var callerArguments = args.caller.arguments
    return returnArray ? $Array.from(callerArguments) : callerArguments
  } catch {
    just.throw(
      construct(
        $Error,
        "caller-arguments cannot be used with arrow functions or in strict mode",
      ),
    )
  }
}
