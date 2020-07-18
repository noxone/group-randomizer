package org.olafneumann.grouprandom.ui

import kotlinx.html.ButtonType
import kotlinx.html.dom.create
import kotlinx.html.js.button
import kotlinx.html.span
import org.olafneumann.grouprandom.Group
import org.olafneumann.grouprandom.Member
import org.olafneumann.grouprandom.browser.HtmlHelper
import org.w3c.dom.*
import kotlin.browser.document

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
        btnCreateNewGroup.addEventListener(EVENT_CLICK, { presenter.createGroup(newGroupName) })
        btnAddGroupMember.addEventListener(EVENT_CLICK, { presenter.addMemberToGroup(newMemberName) })
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

    override fun showGroups(groups: List<Group>) {
        divListExistingGroups.removeChildren { it !is HTMLFormElement }
        groups.reversed()
                .map { createGroupItem(it) }
                .forEach { divListExistingGroups.prepend(it) }
    }

    override fun showMembers(members: List<Member>) {
        divListGroupMembers.removeChildren { it !is HTMLFormElement }
        members.reversed()
                .mapNotNull { createMemberItem(it) }
                .forEach { divListGroupMembers.prepend(it) }
    }

    private fun Element.removeChildren(filter: (Element) -> Boolean) =
            childElementCount
                    .downTo(0)
                    .mapNotNull { children[it] }
                    .filter(filter)
                    .forEach { removeChild(it) }

    private fun createGroupItem(group: Group) = document.create.button(type = ButtonType.button,
            classes = "list-group-item list-group-item-action d-flex justify-content-between") {
        // TODO add listener for member counter
        +group.name
        span("badge badge-primary badge-pill ml-2") {
            +group.members.size.toString()
        }
    }

    private fun createMemberItem(member: Member) = document.create.button(type = ButtonType.button,
            classes = "list-group-item list-group-item-action d-flex justify-content-between") {
        // TODO add listener for member activation
        +member.name
        span("badge badge-pill ml-2 ${member.getBadgeClass()}") {
            +member.getIconText()
        }
    }

    private fun Member.getBadgeClass() = if (active) "badge-success" else "badge-danger"
    private fun Member.getIconText() = if (active) "&#10003;" else "&#10005;"


    companion object {
        const val CLASS_MATCH_ROW = "gr-match-row"
        const val CLASS_MATCH_ITEM = "gr-match-item"
        const val CLASS_ITEM_SELECTED = "gr-item-selected"
        const val CLASS_CHAR_SELECTED = "gr-char-selected"
        const val CLASS_ITEM_NOT_AVAILABLE = "gr-item-not-available"

        const val EVENT_CLICK = "click"
        const val EVENT_INPUT = "input"
        const val EVENT_MOUSE_ENTER = "mouseenter"
        const val EVENT_MOUSE_LEAVE = "mouseleave"

        const val ID_LIST_EXISTING_GROUPS = "gr_existing_groups"
        const val ID_INPUT_NEW_GROUP_NAME = "gr_new_group_name"
        const val ID_BUTTON_NEW_GROUP = "gr_create_new_group"
        const val ID_LIST_EXISTING_MEMBERS = "gr_existing_members"
        const val ID_INPUT_NEW_MEMBER_NAME = "gr_new_member_name"
        const val ID_BUTTON_ADD_GROUP_MEMBER = "gr_add_group_member"
        const val ID_DIV_RESULT_TEXT = "gr_result_text"
    }
}


