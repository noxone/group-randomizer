package org.olafneumann.regex.generator.js

import org.w3c.dom.Node

@JsName("$")
external fun jQuery(id: Node): JQuery

external class JQuery() {
    fun addClass(className: String = definedExternally)
    fun attr(attributeName: String = definedExternally, value: Any = definedExternally): JQuery
    fun hide(): JQuery
    fun remove(): JQuery
    fun removeClass(className: String = definedExternally)
}