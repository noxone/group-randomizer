package org.olafneumann.regex.generator.js

import org.w3c.dom.Node

@JsName("$")
external fun jQuery(id: Node): JQuery

external class JQuery() {
    fun attr(attributeName: String = definedExternally, value: Any = definedExternally): JQuery
}