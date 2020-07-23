package org.olafneumann.grouprandom.js

import kotlin.js.Promise

external val navigator: Navigator

open external class Navigator {
    val clipboard: Clipboard
}
external class Clipboard {
    fun writeText(text: String): Promise<Any>
}
