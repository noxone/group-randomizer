package org.olafneumann.grouprandom.ui

import org.w3c.dom.*

internal class ListMaintainer<T>(
    val parent: HTMLDivElement,
    inline val elementCreator: (T) -> HTMLElement,
    inline val selector: (T) -> String = { it.toString() }
) {
    private var elements: Map<T, HTMLElement> = emptyMap()

    fun showItems(items: List<T>) {
        parent.removeChildren { it.shouldBeRemoved() }
        elements = items.sortedBy { selector(it) }
            .reversed()
            .map { it to elementCreator(it) }
            .toMap()
        elements.forEach { parent.prepend(it.value) }
    }

    private fun Element.shouldBeRemoved(): Boolean =
        !(this is HTMLFormElement || this.classList.contains("gr-always-there"))

    private fun HTMLElement.removeChildren(filter: (Element) -> Boolean) =
        childElementCount
            .downTo(0)
            .mapNotNull { children[it] }
            .filter(filter)
            .forEach { removeChild(it) }

    fun toggleActive(item: T?) =
        elements.forEach { it.value.classList.toggle("active", item != null && it.key == item) }
}