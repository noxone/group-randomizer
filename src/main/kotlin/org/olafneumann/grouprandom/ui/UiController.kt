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

    override fun createGroup(name: String): Group? {
        if (name.isBlank()) {
            return null
        }

        val validGroupName = name.toValidName()
        val group = ApplicationSettings.getGroup(validGroupName) ?: Group(validGroupName)
        view.newGroupName = ""
        selectGroup( group)
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

    override fun addMemberToGroup(name: String) {
        val validName = name.toValidName()
        if (selectedGroup?.members?.find { it.name == validName } == null) {
            selectedGroup?.members?.add(Member(validName))
        }
        fireCurrentGroupChanged()
        view.newMemberName = ""
        view.focusNewMemberEditor()
    }

    override fun removeMember(member: Member) {
        selectedGroup?.members?.removeAll { it.name == member.name }
        fireCurrentGroupChanged()
    }

    override fun toggleMemberActivation(member: Member) {
        member.active = !member.active
        fireCurrentGroupChanged()
    }

    private fun fireCurrentGroupChanged() {
        selectedGroup?.let { ApplicationSettings.setGroup(it) }
        fillUi()
    }

    override var currentPrefix: String
        get() = ApplicationSettings.currentPrefix
        set(value) {
            ApplicationSettings.currentPrefix = value
            fillUi()
        }

    override var currentSeparator: String
        get() = ApplicationSettings.currentSeparator
        set(value) {
            ApplicationSettings.currentSeparator = value
            fillUi()
        }

    override var currentPostfix: String
        get() = ApplicationSettings.currentPrefix
        set(value) {
            ApplicationSettings.currentPostfix = value
            fillUi()
        }

    override fun generateRandomOrder() = view.setGeneratedText(createRandomText())

    private fun fillUi(refreshGroups: Boolean = true, refreshMembers: Boolean = true, refreshTextAdditions: Boolean = true, regenerateText: Boolean = true) {
        if (refreshGroups) {
            view.showGroups(ApplicationSettings.getGroups())
        }
        if (refreshMembers) {
            view.showMembers(selectedGroup?.members ?: emptyList())
        }
        view.selectGroup(selectedGroup)
        if (refreshTextAdditions) {
            view.setPrefixes(ApplicationSettings.prefixes)
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
                separator = currentSeparator,
                prefix = currentPrefix,
                postfix = currentPostfix
            )

    private fun String.toValidName() = replace(Regex("\\s+"), " ").trim()
}
