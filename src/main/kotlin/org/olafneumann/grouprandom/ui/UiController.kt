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
        return group
    }

    private var selectedGroup: Group? = null
    override var group: Group?
        get() = selectedGroup
        set(value) {
            selectedGroup = value
        }

    override fun addMemberToGroup(name: String) {
        group?.members?.add(Member(name))
        view.newMemberName = ""
    }

    override fun toggleMemberActivation(member: Member) {
        member.active = !member.active
        // TODO fire event
    }
}
