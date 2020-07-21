package org.olafneumann.grouprandom.ui

import org.olafneumann.grouprandom.Group
import org.olafneumann.grouprandom.Member
import org.olafneumann.grouprandom.ApplicationSettings
import org.olafneumann.grouprandom.browser.CookieBanner

class UiController : DisplayContract.Controller {
    private val view: DisplayContract.View = HtmlView(this)

    init {
        // handle the cookie banner
        CookieBanner.initialize()

        fillUi()
    }

    private var selectedGroup: Group? = null
    override var group: Group?
        get() { return selectedGroup }
        set(value) {
            value?.let { ApplicationSettings.setGroup(it) }
            selectedGroup = value
            view.selectGroup(value)
            view.showMembers(value?.members ?: emptyList())
            fillUi()
        }

    override fun createGroup(name: String): Group? {
        if (name.isBlank()) {
            return null
        }

        val validGroupName = name.toValidName()
        val group = ApplicationSettings.getGroup(validGroupName) ?: Group(validGroupName)
        view.newGroupName = ""
        this.group = group
        view.focusNewGroupEditor()
        return group
    }

    override fun removeGroup(group: Group) {
        ApplicationSettings.deleteGroup(group.name)
        if (group == this.group) {
            this.group = null
        }
        fillUi()
    }

    override fun addMemberToGroup(name: String) {
        val validName = name.toValidName()
        if (group?.members?.find { it.name == validName } == null) {
            group?.members?.add(Member(validName))
        }
        group?.let { ApplicationSettings.setGroup(it) }
        view.newMemberName = ""
        fillUi()
        view.focusNewMemberEditor()
    }

    override fun removeMember(member: Member) {
        group?.members?.removeAll { it.name == member.name }
        group?.let { ApplicationSettings.setGroup(it) }
        fillUi()
    }

    override fun toggleMemberActivation(member: Member) {
        member.active = !member.active
        group?.let { ApplicationSettings.setGroup(it) }
        fillUi()
    }

    override var prefixes: List<String>
        get() = ApplicationSettings.prefixes
        set(value) { ApplicationSettings.prefixes = value }

    override var separators: List<String>
        get() = ApplicationSettings.separators
        set(value) { ApplicationSettings.separators = value }

    override var postfixes: List<String>
        get() = ApplicationSettings.postfixes
        set(value) { ApplicationSettings.postfixes = value }

    private fun fillUi() {
        view.showGroups(ApplicationSettings.getGroups())
        view.showMembers(group?.members ?: emptyList())
        view.selectGroup(group)
        view.setGeneratedText(createRandomText())
    }

    private fun createRandomText(): String =
        (selectedGroup?.members
            ?.filter { it.active }
            ?.map { it.name }
            ?.shuffled()
            ?: emptyList())
            .joinToString(
                separator = view.separator,
                prefix = view.prefix,
                postfix = view.postfix
            )

    private fun String.toValidName() = replace(Regex("\\s+"), " ").trim()
}
