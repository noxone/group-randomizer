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
        get() {
            return selectedGroup
        }
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
        fillUi(regenerateText = false)
    }

    override fun addMemberToGroup(name: String) {
        val validName = name.toValidName()
        if (group?.members?.find { it.name == validName } == null) {
            group?.members?.add(Member(validName))
        }
        fireCurrentGroupChanged()
        view.newMemberName = ""
        view.focusNewMemberEditor()
    }

    override fun removeMember(member: Member) {
        group?.members?.removeAll { it.name == member.name }
        fireCurrentGroupChanged()
    }

    override fun toggleMemberActivation(member: Member) {
        member.active = !member.active
        fireCurrentGroupChanged()
    }

    private fun fireCurrentGroupChanged() {
        group?.let { ApplicationSettings.setGroup(it) }
        fillUi()
    }

    override var prefixes: List<String>
        get() = ApplicationSettings.prefixes
        set(value) {
            ApplicationSettings.prefixes = value
        }

    override var separators: List<String>
        get() = ApplicationSettings.separators
        set(value) {
            ApplicationSettings.separators = value
        }

    override var postfixes: List<String>
        get() = ApplicationSettings.postfixes
        set(value) {
            ApplicationSettings.postfixes = value
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

    private fun fillUi(refreshGroups: Boolean = true, refreshMembers: Boolean = true, refreshTextAdditions: Boolean = true, regenerateText: Boolean = true) {
        if( refreshGroups) {
            view.showGroups(ApplicationSettings.getGroups())
        }
        if(refreshMembers) {
            view.showMembers(group?.members ?: emptyList())
        }
        view.selectGroup(group)
        if (regenerateText) {
            view.setGeneratedText(createRandomText())
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
