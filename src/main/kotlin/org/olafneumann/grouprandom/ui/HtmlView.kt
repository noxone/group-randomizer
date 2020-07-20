package org.olafneumann.grouprandom.ui

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.button
import kotlinx.html.js.onClickFunction
import org.olafneumann.grouprandom.Group
import org.olafneumann.grouprandom.Member
import org.olafneumann.grouprandom.browser.HtmlHelper
import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document
import kotlin.browser.window

class HtmlView(
    private val presenter: DisplayContract.Controller
) : DisplayContract.View {

    // HTML elements we need to change
    private val divListExistingGroups = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_EXISTING_GROUPS)
    private val inputNewGroupName = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_NEW_GROUP_NAME)
    private val btnCreateNewGroup = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_NEW_GROUP)
    private val divListGroupMembers = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_EXISTING_MEMBERS)
    private val inputNewGroupMember = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_NEW_MEMBER_NAME)
    private val btnAddGroupMember = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_ADD_GROUP_MEMBER)

    init {
        val stopPropagation: (Event) -> Unit = { it.stopPropagation() }
        val createGroupCallback: (Event) -> Unit = { presenter.createGroup(newGroupName) }
        val addMemberToGroupCallback: (Event) -> Unit = { presenter.addMemberToGroup(newMemberName) }
        btnCreateNewGroup.addEventListener(EVENT_CLICK, createGroupCallback)
        inputNewGroupName.addEventListener(EVENT_KEYUP, stopPropagation)
        btnAddGroupMember.addEventListener(EVENT_CLICK, addMemberToGroupCallback)
        inputNewGroupMember.addEventListener(EVENT_KEYUP, stopPropagation)
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

    private var groupElements = emptyMap<Group, HTMLButtonElement>()
    override fun showGroups(groups: List<Group>) {
        divListExistingGroups.removeChildren { !it.classList.contains("gr-allways-there") }
        groupElements = groups.reversed()
            .map { it to createGroupItem(it) }
            .toMap()
        groupElements.forEach { divListExistingGroups.prepend(it.value) }
    }

    override fun selectGroup(group: Group?) =
        groupElements.forEach { it.value.classList.toggle("active", group != null && it.key == group) }


    private var memberElements = emptyMap<Member, HTMLButtonElement>()
    override fun showMembers(members: List<Member>) {
        divListGroupMembers.removeChildren { !it.classList.contains("gr-allways-there") }
        memberElements = members.sortedBy { it.name }
            .reversed()
            .map { it to createMemberItem(it) }
            .toMap()
        memberElements.forEach { divListGroupMembers.prepend(it.value) }
    }

    private fun Element.removeChildren(filter: (Element) -> Boolean) =
        childElementCount
            .downTo(0)
            .mapNotNull { children[it] }
            .filter(filter)
            .forEach { removeChild(it) }

    private fun createGroupItem(group: Group) = document.create.button(
        type = ButtonType.button,
        classes = "list-group-item list-group-item-action d-flex justify-content-between gr-action-link-container"
    ) {
        // TODO add listener for member counter
        +group.name
        onClickFunction = {
            presenter.group = group
        }
        div("ml-1") {
            a(classes = "gr-action-link ml-1") {
                title = "Delete group '${group.name}'."
                +"\uD83D\uDDD1"
                onClickFunction = { event ->
                    if (window.confirm("Do you really want to delete group '${group.name}'?")) {
                        presenter.removeGroup(group)
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
            presenter.toggleMemberActivation(member)
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
                    presenter.removeMember(member)
                }
                event.stopPropagation()
            }
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

        const val ID_LIST_EXISTING_GROUPS = "gr_existing_groups"
        const val ID_INPUT_NEW_GROUP_NAME = "gr_new_group_name"
        const val ID_BUTTON_NEW_GROUP = "gr_create_new_group"
        const val ID_LIST_EXISTING_MEMBERS = "gr_existing_members"
        const val ID_INPUT_NEW_MEMBER_NAME = "gr_new_member_name"
        const val ID_BUTTON_ADD_GROUP_MEMBER = "gr_add_group_member"
        const val ID_DIV_RESULT_TEXT = "gr_result_text"

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


