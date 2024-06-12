package main

import (
	"fmt"
	"syscall/js"
)

func wasmFunction(this js.Value, args []js.Value) interface{} {
    fmt.Println("Go WASM function called")
    return nil
}

func wasmFunctionWithArgs(this js.Value, args []js.Value) interface{} {
    fmt.Println(args)
    return nil
}

func main() {
    done := make(chan struct{}, 0)
    js.Global().Set("wasmFunctionFromGo", js.FuncOf(wasmFunction))
    js.Global().Set("wasmFunctionWithArgs", js.FuncOf(wasmFunctionWithArgs))
    <-done
}