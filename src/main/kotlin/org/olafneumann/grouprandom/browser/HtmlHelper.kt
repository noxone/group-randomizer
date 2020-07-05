package org.olafneumann.grouprandom.browser

import org.w3c.dom.HTMLAnchorElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document

internal object HtmlHelper {
    internal inline fun <reified T : HTMLElement> getElementById(id: String): T {
        try {
            return document.getElementById(id) as T
        } catch (e: ClassCastException) {
            throw RuntimeException("Unable to find element with id '$id'.", e)
        }
    }
}
