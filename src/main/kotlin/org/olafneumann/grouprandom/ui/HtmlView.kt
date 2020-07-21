package org.olafneumann.grouprandom.ui

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.button
import kotlinx.html.js.onClickFunction
import org.olafneumann.grouprandom.Group
import org.olafneumann.grouprandom.Member
import org.olafneumann.grouprandom.browser.HtmlHelper
import org.olafneumann.grouprandom.js.navigator
import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document
import kotlin.browser.window

class HtmlView(
    private val controller: DisplayContract.Controller
) : DisplayContract.View {

    // HTML elements we need to change
    private val divListExistingGroups = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_EXISTING_GROUPS)
    private val formAddGroup = HtmlHelper.getElementById<HTMLFormElement>(ID_FORM_ADD_GROUP)
    private val inputNewGroupName = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_NEW_GROUP_NAME)
    private val btnCreateNewGroup = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_NEW_GROUP)
    private val divListGroupMembers = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_EXISTING_MEMBERS)
    private val formAddMember = HtmlHelper.getElementById<HTMLFormElement>(ID_FORM_ADD_MEMBER)
    private val inputNewGroupMember = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_NEW_MEMBER_NAME)
    private val btnAddGroupMember = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_ADD_GROUP_MEMBER)
    private val divListPrefixes = HtmlHelper.getElementById<HTMLDivElement>(ID_DIV_LIST_PREFIXES)
    private val divListSeparators = HtmlHelper.getElementById<HTMLDivElement>(ID_DIV_LIST_SEPARATORS)
    private val divListPostfixes = HtmlHelper.getElementById<HTMLDivElement>(ID_DIV_LIST_POSTFIXES)
    private val inputPrefix = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_PREFIX)
    private val inputSeparator = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_SEPARATOR)
    private val inputPostfix = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_POSTFIX)
    private val divResultText = HtmlHelper.getElementById<HTMLDivElement>(ID_DIV_RESULT_TEXT)
    private val btnRegenerate = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_REGENERATE)
    private val btnCopy = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_COPY)

    init {
        val createGroupCallback: (Event) -> Unit = { controller.createGroup(newGroupName) }
        val addMemberToGroupCallback: (Event) -> Unit = { controller.addMemberToGroup(newMemberName) }
        formAddGroup.addEventListener(EVENT_SUBMIT, createGroupCallback)
        formAddMember.addEventListener(EVENT_SUBMIT, addMemberToGroupCallback)
        btnCreateNewGroup.addEventListener(EVENT_CLICK, createGroupCallback)
        btnAddGroupMember.addEventListener(EVENT_CLICK, addMemberToGroupCallback)
        btnRegenerate.addEventListener(EVENT_CLICK, { controller.generateRandomOrder() })
        btnCopy.addEventListener(EVENT_CLICK, { navigator.clipboard.writeText(divResultText.innerText) })
    }

    override var newGroupName: String
        get() = inputNewGroupName.value
        set(value) {
            inputNewGroupName.value = value
        }

    override var newMemberName: String
        get() = inputNewGroupMember.value
        set(value) {
            inputNewGroupMember.value = value
        }

    override fun focusNewGroupEditor() = inputNewGroupName.focus()
    override fun focusNewMemberEditor() = inputNewGroupMember.focus()


    private val groupListMaintainer = ListMaintainer<Group>(divListExistingGroups, { createGroupItem(it) }, { it.name })
    override fun showGroups(groups: List<Group>) = groupListMaintainer.showItems(groups)

    private val memberListMaintainer =
        ListMaintainer<Member>(divListGroupMembers, { createMemberItem(it) }, { it.name })

    override fun showMembers(members: List<Member>) = memberListMaintainer.showItems(members)

    private val prefixListMaintainer = ListMaintainer<String>(divListPrefixes, {
        createTextItem(it, { event ->
            controller.currentPrefix = it
            event.stopPropagation()
        })
    })

    override fun setPrefixes(prefixes: List<String>) = prefixListMaintainer.showItems(prefixes)

    private val separatorListMaintainer = ListMaintainer<String>(divListSeparators, { createTextItem(it) })
    override fun setSeparators(separators: List<String>) = separatorListMaintainer.showItems(separators)

    private val postfixListMaintainer = ListMaintainer<String>(divListPostfixes, { createTextItem(it) })
    override fun setPostfixes(postfixes: List<String>) = postfixListMaintainer.showItems(postfixes)


    override fun selectGroup(group: Group?) =
        groupListMaintainer.forEach { it.value.classList.toggle("active", group != null && it.key == group) }


    override fun selectPrefix(prefix: String) {
        TODO("Not yet implemented")
    }

    override fun selectSeparator(separator: String) {
        TODO("Not yet implemented")
    }

    override fun selectPostfix(postfix: String) {
        TODO("Not yet implemented")
    }

    override fun setGeneratedText(text: String) {
        divResultText.innerText = text
    }


    private fun createGroupItem(group: Group) = document.create.button(
        type = ButtonType.button,
        classes = "list-group-item list-group-item-action d-flex justify-content-between gr-action-link-container"
    ) {
        // TODO add listener for member counter
        +group.name
        onClickFunction = {
            controller.selectGroup(group)
        }
        div("ml-1") {
            a(classes = "gr-action-link ml-1") {
                title = "Delete group '${group.name}'."
                +"\uD83D\uDDD1"
                onClickFunction = { event ->
                    if (window.confirm("Do you really want to delete group '${group.name}'?")) {
                        controller.removeGroup(group)
                    }
                    event.stopPropagation()
                }
            }
            span("badge badge-primary badge-pill ml-1") {
                +group.members.size.toString()
            }
        }
    }

    private fun createMemberItem(member: Member) = document.create.button(
        type = ButtonType.button,
        classes = "list-group-item list-group-item-action d-flex justify-content-between gr-action-link-container"
    ) {
        onClickFunction = {
            controller.toggleMemberActivation(member)
        }
        div {
            span("badge badge-pill mr-1 ${member.getBadgeClass()}") {
                +member.getIconText()
            }
            +member.name
        }
        a(classes = "gr-action-link ml-1") {
            title = "Remove member '${member.name}'."
            +"\uD83D\uDDD1"
            onClickFunction = { event ->
                if (window.confirm("Do you really want to remove member '${member.name}'?")) {
                    controller.removeMember(member)
                }
                event.stopPropagation()
            }
        }
    }

    private fun createTextItem(
        text: String,
        onSelectFunction: (Event) -> Unit = { it.stopPropagation() },
        onDeleteFunction: (Event) -> Unit = { it.stopPropagation() }
    ) = document.create.button(
        type = ButtonType.button,
        classes = "list-group-item list-group-item-action d-flex justify-content-between gr-action-link-container"
    ) {
        div("ml-2") {
            +text
            onClickFunction = onSelectFunction
        }
        a(classes = "gr-action-link ml-1") {
            title = "Remove '${text}'."
            +"\uD83D\uDDD1"
            onClickFunction = onDeleteFunction
        }
    }

    private fun Member.getBadgeClass() = if (active) "badge-success" else "badge-danger"
    private fun Member.getIconText() = if (active) "\u2713" else "\u2715"


    companion object {
        const val CLASS_MATCH_ROW = "gr-match-row"
        const val CLASS_MATCH_ITEM = "gr-match-item"
        const val CLASS_ITEM_SELECTED = "gr-item-selected"
        const val CLASS_CHAR_SELECTED = "gr-char-selected"
        const val CLASS_ITEM_NOT_AVAILABLE = "gr-item-not-available"

        const val EVENT_CLICK = "click"
        const val EVENT_INPUT = "input"
        const val EVENT_KEYUP = "keyup"
        const val EVENT_MOUSE_ENTER = "mouseenter"
        const val EVENT_MOUSE_LEAVE = "mouseleave"
        const val EVENT_SUBMIT = "submit"

        const val ID_LIST_EXISTING_GROUPS = "gr_existing_groups"
        const val ID_INPUT_NEW_GROUP_NAME = "gr_new_group_name"
        const val ID_BUTTON_NEW_GROUP = "gr_create_new_group"
        const val ID_LIST_EXISTING_MEMBERS = "gr_existing_members"
        const val ID_INPUT_NEW_MEMBER_NAME = "gr_new_member_name"
        const val ID_BUTTON_ADD_GROUP_MEMBER = "gr_add_group_member"
        const val ID_FORM_ADD_GROUP = "gr_add_group_form"
        const val ID_FORM_ADD_MEMBER = "gr_add_member_form"
        const val ID_DIV_LIST_PREFIXES = "gr_div_list_prefixes"
        const val ID_DIV_LIST_SEPARATORS = "gr_div_list_separators"
        const val ID_DIV_LIST_POSTFIXES = "gr_div_list_postfixes"
        const val ID_INPUT_PREFIX = "gr_input_prefix"
        const val ID_INPUT_SEPARATOR = "gr_input_separator"
        const val ID_INPUT_POSTFIX = "gr_input_postfix"
        const val ID_DIV_RESULT_TEXT = "gr_result_text"
        const val ID_BUTTON_REGENERATE = "gr_btn_regenerate"
        const val ID_BUTTON_COPY = "gr_btn_copy"

        /*private fun toKeyUp(callback: ((Event) -> Unit)): (KeyboardEvent) -> Unit {
            return  {event ->
                if (event.keyCode == 13) {
                    callback.invoke(event)
                }
            }
        }*/
        private fun ((Event) -> Unit).toKeyUpOnEnter(): (Event) -> Unit {
            return { event: Event ->
                if (event is KeyboardEvent && event.keyCode == 13) {
                    this(event)
                }
            }
        }
    }
}

private class ListMaintainer<T>(
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

    fun forEach(action: (Map.Entry<T, HTMLElement>) -> Unit) = elements.forEach(action)

    private fun Element.shouldBeRemoved(): Boolean =
        !(this is HTMLFormElement || this.classList.contains("gr-always-there"))

    private fun HTMLElement.removeChildren(filter: (Element) -> Boolean) =
        childElementCount
            .downTo(0)
            .mapNotNull { children[it] }
            .filter(filter)
            .forEach { removeChild(it) }
}
