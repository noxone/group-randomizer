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

    override fun tryToSelectGroupByName(name: String?) {
        ApplicationSettings.getGroups()
            .find { it.name == name }
            ?.let { selectGroup(it) }
    }

    override fun addGroup(name: String): Group? {
        if (name.isBlank()) {
            return null
        }

        val validGroupName = name.toValidName()
        val group = ApplicationSettings.getGroup(validGroupName) ?: Group(validGroupName)
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

    override fun addPrefix(prefix: String) =
        addListEntry({ ApplicationSettings.prefixes }, { ApplicationSettings.prefixes = it }, prefix)

    override fun addSeparator(separator: String) =
        addListEntry({ ApplicationSettings.separators }, { ApplicationSettings.separators = it }, separator)

    override fun addPostfix(postfix: String) =
        addListEntry({ ApplicationSettings.postfixes }, { ApplicationSettings.postfixes = it }, postfix)

    override fun removePrefix(prefix: String) =
        removeListEntry({ ApplicationSettings.prefixes }, { ApplicationSettings.prefixes = it }, prefix)

    override fun removeSeparator(separator: String) =
        removeListEntry({ ApplicationSettings.separators }, { ApplicationSettings.separators = it }, separator)

    override fun removePostfix(postfix: String) =
        removeListEntry({ ApplicationSettings.postfixes }, { ApplicationSettings.postfixes = it }, postfix)

    private fun <T> addListEntry(provider: () -> List<T>, consumer: (List<T>) -> Unit, itemToAdd: T) =
        changeList(provider, consumer, { it.add(itemToAdd) })

    private fun <T> removeListEntry(provider: () -> List<T>, consumer: (List<T>) -> Unit, itemToDelete: T) =
        changeList(provider, consumer, { it.remove(itemToDelete) })

    private inline fun <T> changeList(
        provider: () -> List<T>,
        consumer: (List<T>) -> Unit,
        changeList: (MutableList<T>) -> Unit
    ) {
        val list = provider().toMutableList()
        changeList(list)
        consumer(list)
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
