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
    override fun selectGroup(group: Group?) {
        group?.let { ApplicationSettings.setGroup(it) }
        selectedGroup = group
        view.selectGroup(group)
        view.showMembers(group?.members ?: emptyList())
        fillUi()
    }

    override fun addGroup(name: String): Group? {
        if (name.isBlank()) {
            return null
        }

        val validGroupName = name.toValidName()
        val group = ApplicationSettings.getGroup(validGroupName) ?: Group(validGroupName)
        view.newGroupName = ""
        selectGroup(group)
        view.focusNewGroupEditor()
        return group
    }

    override fun removeGroup(group: Group) {
        ApplicationSettings.deleteGroup(group.name)
        if (group == selectedGroup) {
            selectGroup(group)
        }
        fillUi(regenerateText = false)
    }

    override fun addGroupMember(name: String) {
        val validName = name.toValidName()
        if (selectedGroup?.members?.find { it.name == validName } == null) {
            selectedGroup?.members?.add(Member(validName))
        }
        fireCurrentGroupChanged()
        view.newMemberName = ""
        view.focusNewMemberEditor()
    }

    override fun removeGroupMember(member: Member) {
        selectedGroup?.members?.removeAll { it.name == member.name }
        fireCurrentGroupChanged()
    }

    override fun toggleGroupMemberActive(member: Member) {
        member.active = !member.active
        fireCurrentGroupChanged()
    }

    private fun fireCurrentGroupChanged() {
        selectedGroup?.let { ApplicationSettings.setGroup(it) }
        fillUi()
    }

    override fun selectPrefix(prefix: String) {
        ApplicationSettings.currentPrefix = prefix
    }

    override fun selectSeparator(separator: String) {
        ApplicationSettings.currentSeparator = separator
    }

    override fun selectPostfix(postfix: String) {
        ApplicationSettings.currentPostfix = postfix
    }

    override fun generateRandomOrder() = view.showGeneratedText(createRandomText())

    private fun fillUi(
        refreshGroups: Boolean = true,
        refreshMembers: Boolean = true,
        refreshTextAdditions: Boolean = true,
        regenerateText: Boolean = true
    ) {
        if (refreshGroups) {
            view.showGroups(ApplicationSettings.getGroups())
        }
        if (refreshMembers) {
            view.showMembers(selectedGroup?.members ?: emptyList())
        }
        view.selectGroup(selectedGroup)
        if (refreshTextAdditions) {
            view.showPrefixes(ApplicationSettings.prefixes)
            view.showSeparators(ApplicationSettings.separators)
            view.showPostfixes(ApplicationSettings.postfixes)
        }
        if (regenerateText) {
            generateRandomOrder()
        }
    }

    private fun createRandomText(): String =
        (selectedGroup?.members
            ?.filter { it.active }
            ?.map { it.name }
            ?.shuffled()
            ?: emptyList())
            .joinToString(
                separator = ApplicationSettings.currentSeparator,
                prefix = ApplicationSettings.currentPrefix,
                postfix = ApplicationSettings.currentPostfix
            )

    private fun String.toValidName() = replace(Regex("\\s+"), " ").trim()
}
