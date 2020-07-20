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
    }

    override fun createGroup(name: String): Group? {
        if (name.isBlank()) {
            return null
        }

        val validGroupName = name.trim().replace(Regex("\\s+"), " ")
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
        group?.members?.add(Member(name))
        group?.let { ApplicationSettings.setGroup(it) }
        view.newMemberName = ""
        fillUi()
    }

    override fun removeMember(member: Member) {
        TODO("Not yet implemented")
    }

    override fun toggleMemberActivation(member: Member) {
        member.active = !member.active
        // TODO fire event
    }
}
