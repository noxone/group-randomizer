package org.olafneumann.grouprandom.ui

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.button
import kotlinx.html.js.onClickFunction
import org.olafneumann.grouprandom.DisplayContract
import org.olafneumann.grouprandom.model.Group
import org.olafneumann.grouprandom.model.Member
import org.olafneumann.grouprandom.browser.HtmlHelper
import org.olafneumann.grouprandom.js.decodeURIComponent
import org.olafneumann.grouprandom.js.encodeURIComponent
import org.olafneumann.grouprandom.js.navigator
import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.dom.url.URL
import kotlin.browser.document
import kotlin.browser.window

class HtmlView(
    private val controller: DisplayContract.Controller
) : DisplayContract.View {

    // HTML elements we need to change
    private val divListGroups = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_EXISTING_GROUPS)
    private val inputAddGroupName = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_NEW_GROUP_NAME)
    private val divListGroupMembers = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_EXISTING_MEMBERS)
    private val inputAddGroupMember = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_NEW_MEMBER_NAME)
    private val buttonAddGroupMember = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_ADD_GROUP_MEMBER)
    private val spanSelectedMemberCounter = HtmlHelper.getElementById<HTMLSpanElement>(ID_SELECTED_MEMBER_COUNTER)
    private val divListPrefixes = HtmlHelper.getElementById<HTMLDivElement>(ID_DIV_LIST_PREFIXES)
    private val divListSeparators = HtmlHelper.getElementById<HTMLDivElement>(ID_DIV_LIST_SEPARATORS)
    private val divListPostfixes = HtmlHelper.getElementById<HTMLDivElement>(ID_DIV_LIST_POSTFIXES)
    private val inputPrefix = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_PREFIX)
    private val inputSeparator = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_SEPARATOR)
    private val inputPostfix = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_POSTFIX)
    private val divResultText = HtmlHelper.getElementById<HTMLDivElement>(ID_DIV_RESULT_TEXT)

    private var currentRandomText = ""

    init {
        val buttonAddGroup = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_NEW_GROUP)
        val buttonAddPrefix = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_NEW_PREFIX)
        val buttonAddSeparator = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_NEW_SEPARATOR)
        val buttonAddPostfix = HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_NEW_POSTFIX)

        val createGroupCallback = inputAddGroupName.createValueCallback { controller.addGroup(it) }
        val addMemberToGroupCallback = inputAddGroupMember.createValueCallback { controller.addGroupMember(it) }
        val createPrefixCallback = inputPrefix.createValueCallback { controller.addPrefix(it) }
        val createSeparatorCallback = inputSeparator.createValueCallback { controller.addSeparator(it) }
        val createPostfixCallback = inputPostfix.createValueCallback { controller.addPostfix(it) }

        buttonAddGroup.addClickListener(createGroupCallback)
        buttonAddGroup.parentForm?.addSubmitListener(createGroupCallback)
        buttonAddGroupMember.addClickListener(addMemberToGroupCallback)
        buttonAddGroupMember.parentForm?.addSubmitListener(addMemberToGroupCallback)
        buttonAddPrefix.addClickListener(createPrefixCallback)
        buttonAddPrefix.parentForm?.addSubmitListener(createPrefixCallback)
        buttonAddSeparator.addClickListener(createSeparatorCallback)
        buttonAddSeparator.parentForm?.addSubmitListener(createSeparatorCallback)
        buttonAddPostfix.addClickListener(createPostfixCallback)
        buttonAddPostfix.parentForm?.addSubmitListener(createPostfixCallback)

        HtmlHelper.getElementById<HTMLButtonElement>(ID_BUTTON_REGENERATE)
            .addEventListener(EVENT_CLICK, { controller.generateRandomOrder() })
        HtmlHelper.getElementsByClassName<HTMLButtonElement>(CLASS_COPY_BUTTON)
            .forEach { it.addEventListener(EVENT_CLICK, { navigator.clipboard.writeText(currentRandomText) }) }

        window.addEventListener(EVENT_POPSTATE, {
            if (it is PopStateEvent) {
                if (it.state != null) {
                    val dynamicGroup: dynamic = it.state
                    val groupName: String? = dynamicGroup.name as String
                    groupName?.let { controller.tryToSelectGroupByName(groupName) }
                }
            }
        })
    }

    override fun selectPreselectedGroup(): Boolean {
        val url = URL(document.URL)
        if (url.hash.length > 1) {
            val groupName = decodeURIComponent(url.hash.substring(1))
            controller.tryToSelectGroupByName(groupName)
            return true
        }
        return false
    }

    override fun focusNewGroupEditor() = inputAddGroupName.focus()
    override fun focusNewMemberEditor() = inputAddGroupMember.focus()
    override fun focusNewPrefix() = inputPrefix.focus()
    override fun focusNewSeparator() = inputSeparator.focus()
    override fun focusNewPostfix() = inputPostfix.focus()

    private val groupListMaintainer = ListMaintainer<Group>(divListGroups, { createGroupItem(it) }, { it.name })
    private val memberListMaintainer =
        ListMaintainer<Member>(divListGroupMembers, { createMemberItem(it) }, { it.name })
    private val prefixListMaintainer = ListMaintainer<String>(divListPrefixes, {
        createTextItem(it, { event ->
            controller.selectPrefix(it)
            event.stopPropagation()
        }, { event ->
            if (window.confirm("Remove prefix '$it'?")) {
                controller.removePrefix(it)
            }
            event.stopPropagation()
        })
    })
    private val separatorListMaintainer = ListMaintainer<String>(divListSeparators, {
        createTextItem(it, { event ->
            controller.selectSeparator(it)
            event.stopPropagation()
        }, { event ->
            if (window.confirm("Remove separator '$it'?")) {
                controller.removeSeparator(it)
            }
            event.stopPropagation()
        })
    })
    private val postfixListMaintainer = ListMaintainer<String>(divListPostfixes, {
        createTextItem(it, { event ->
            controller.selectPostfix(it)
            event.stopPropagation()
        }, { event ->
            if (window.confirm("Remove postfix '$it'?")) {
                controller.removePostfix(it)
            }
            event.stopPropagation()
        })
    })

    override fun showGroups(groups: List<Group>) = groupListMaintainer.showItems(groups)
    override fun showMembers(members: List<Member>) {
        divListGroupMembers.parentElement?.classList?.toggle(CLASS_HIDE_GROUP_MEMBERS, members.isEmpty())
        memberListMaintainer.showItems(members)
        spanSelectedMemberCounter.innerText = members.filter { it.active }.count().toString()
    }
    override fun showPrefixes(prefixes: List<String>) = prefixListMaintainer.showItems(prefixes)
    override fun showSeparators(separators: List<String>) = separatorListMaintainer.showItems(separators)
    override fun showPostfixes(postfixes: List<String>) = postfixListMaintainer.showItems(postfixes)

    override fun selectGroup(group: Group?) {
        groupListMaintainer.toggleActive(group)

        val hash = group?.name ?: ""
        val state: dynamic = window.history.state
        if (state == null || state.name != hash) {
            window.history.pushState(group, hash, "#${encodeURIComponent(hash)}")
        }

        // Hide add group member form in case no group is selected
        buttonAddGroupMember.disabled = group == null
        inputAddGroupMember.disabled = group == null
    }

    override fun selectPrefix(prefix: String?) = prefixListMaintainer.toggleActive(prefix)
    override fun selectSeparator(separator: String?) = separatorListMaintainer.toggleActive(separator)
    override fun selectPostfix(postfix: String?) = postfixListMaintainer.toggleActive(postfix)

    override fun showGeneratedText(text: String) {
        currentRandomText = text
        divResultText.innerText = currentRandomText.toNonBreaking()
    }

    private fun createGroupItem(group: Group) = document.create.button(
        type = ButtonType.button,
        classes = "list-group-item list-group-item-action d-flex justify-content-between gr-action-link-container"
    ) {
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

    private fun createMemberItem(member: Member) =
        document.create.div(classes = "col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1") {
            button(
                type = ButtonType.button,
                classes = "btn btn-light d-flex justify-content-between gr-action-link-container gr-full-width"
            ) {
                onClickFunction = {
                    controller.toggleGroupMemberActive(member)
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
                            controller.removeGroupMember(member)
                        }
                        event.stopPropagation()
                    }
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
        onClickFunction = onSelectFunction
        div("ml-2 gr-bg-light-grey rounded px-1 text-monospace") {
            +text.toNonBreaking()
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
        private const val CHAR_NON_BREAKING_SPACE = "\u00A0"
        private const val CHAR_ZERO_WIDTH_BREAKING_SPACE = "\uFEFF"

        private const val CLASS_COPY_BUTTON = "gr-copy-button"
        private const val CLASS_HIDE_GROUP_MEMBERS = "gr-existing-members-hide"

        private const val EVENT_CLICK = "click"
        private const val EVENT_SUBMIT = "submit"
        private const val EVENT_POPSTATE = "popstate"

        private const val ID_LIST_EXISTING_GROUPS = "gr_existing_groups"
        private const val ID_INPUT_NEW_GROUP_NAME = "gr_new_group_name"
        private const val ID_BUTTON_NEW_GROUP = "gr_create_new_group"
        private const val ID_LIST_EXISTING_MEMBERS = "gr_existing_members"
        private const val ID_INPUT_NEW_MEMBER_NAME = "gr_new_member_name"
        private const val ID_BUTTON_ADD_GROUP_MEMBER = "gr_add_group_member"
        private const val ID_SELECTED_MEMBER_COUNTER = "gr_selected_member_counter"
        private const val ID_DIV_LIST_PREFIXES = "gr_div_list_prefixes"
        private const val ID_DIV_LIST_SEPARATORS = "gr_div_list_separators"
        private const val ID_DIV_LIST_POSTFIXES = "gr_div_list_postfixes"
        private const val ID_INPUT_PREFIX = "gr_input_prefix"
        private const val ID_INPUT_SEPARATOR = "gr_input_separator"
        private const val ID_INPUT_POSTFIX = "gr_input_postfix"
        private const val ID_BUTTON_NEW_PREFIX = "gr_create_new_prefix"
        private const val ID_BUTTON_NEW_SEPARATOR = "gr_create_new_separator"
        private const val ID_BUTTON_NEW_POSTFIX = "gr_create_new_postfix"
        private const val ID_DIV_RESULT_TEXT = "gr_result_text"
        private const val ID_BUTTON_REGENERATE = "gr_btn_regenerate"
        
        private val REGEX_WHITESPACE = Regex("\\s")

        private fun HTMLInputElement.createValueCallback(consumer: (String) -> Unit): (Event) -> Unit {
            return {
                consumer(value)
                value = ""
            }
        }

        private val Element.parentForm: HTMLFormElement?
            get() {
                if (parentElement == null || parentElement == document) {
                    return null
                }
                if (parentElement is HTMLFormElement) {
                    return parentElement as HTMLFormElement
                }
                return parentElement?.parentForm
            }
        
        private fun String.toNonBreaking() = if (isEmpty()) CHAR_ZERO_WIDTH_BREAKING_SPACE else replace(REGEX_WHITESPACE, CHAR_NON_BREAKING_SPACE)

        private fun HTMLElement.addClickListener(handler: (Event) -> Unit) = this.addEventListener(EVENT_CLICK, handler)
        private fun HTMLFormElement.addSubmitListener(handler: (Event) -> Unit) =
            this.addEventListener(EVENT_SUBMIT, handler)
    }
}
