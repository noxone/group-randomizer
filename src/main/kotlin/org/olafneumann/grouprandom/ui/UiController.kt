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

    private fun fillUi() {
        view.showGroups(ApplicationSettings.getGroups())
        view.showMembers(group?.members ?: emptyList())
        view.selectGroup(group)
    }

    override fun createGroup(name: String): Group? {
        if (name.isBlank()) {
            return null
        }

        val validGroupName = name.toValidName()
        val group = ApplicationSettings.getGroup(validGroupName) ?: Group(validGroupName)
        ApplicationSettings.setGroup(group)

        fillUi()
        view.newGroupName = ""
        this.group = group
        return group
    }

    override fun removeGroup(group: Group) {
        ApplicationSettings.deleteGroup(group.name)
        if (group == this.group) {
            this.group = null
        }
        fillUi()
    }

    private var selectedGroup: Group? = null
    override var group: Group?
        get() = selectedGroup
        set(value) {
            selectedGroup = value
            view.selectGroup(value)
            view.showMembers(value?.members ?: emptyList())
        }

    override fun addMemberToGroup(name: String) {
        val validName = name.toValidName()
        if (group?.members?.find { it.name == validName } == null) {
            group?.members?.add(Member(validName))
        }
        group?.let { ApplicationSettings.setGroup(it) }
        view.newMemberName = ""
        fillUi()
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

    private fun String.toValidName() = replace(Regex("\\s+"), " ").trim()
}
