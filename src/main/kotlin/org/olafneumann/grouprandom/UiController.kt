package org.olafneumann.grouprandom

import org.olafneumann.grouprandom.browser.CookieBanner
import org.olafneumann.grouprandom.model.Group
import org.olafneumann.grouprandom.model.Member
import org.olafneumann.grouprandom.ui.HtmlView

internal class UiController : DisplayContract.Controller {
    private val view: DisplayContract.View =
        HtmlView(this)

    private var selectedGroup: Group? = null

    init {
        // handle the cookie banner
        CookieBanner.initialize()

        refreshUi()
        if (!view.selectPreselectedGroup()) {
            tryToSelectGroupByName(ApplicationSettings.selectedGroupName)
        }
    }

    override fun selectGroup(group: Group?) {
        group?.let {
            ApplicationSettings.setGroup(it)
            ApplicationSettings.selectedGroupName = group.name
        }
        selectedGroup = group
        view.selectGroup(group)
        view.showMembers(group?.members ?: emptyList())
        refreshUi()
    }

    override fun tryToSelectGroupByName(name: String) {
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
            selectGroup(ApplicationSettings.getGroups().firstOrNull())
            view.focusNewGroupEditor()
        } else {
            refreshUi(refreshTextAdditions = false, regenerateText = false)
        }
    }

    override fun addGroupMember(name: String): String? {
        if (name.isBlank()) {
            return null
        }

        val validName = name.toValidName()
        if (selectedGroup?.members?.find { it.name == validName } == null) {
            selectedGroup?.members?.add(Member(validName))
        }
        fireCurrentGroupChanged()
        view.focusNewMemberEditor()

        return validName
    }

    override fun removeGroupMember(member: Member) {
        selectedGroup?.members?.removeAll { it.name == member.name }
        fireCurrentGroupChanged()
    }

    override fun toggleGroupMemberActive(member: Member) {
        member.active = !member.active
        fireCurrentGroupChanged()
    }

    override fun setAllGroupMembers(active: Boolean) {
        selectedGroup?.members?.forEach { it.active = active }
        fireCurrentGroupChanged()
    }

    private fun fireCurrentGroupChanged() {
        selectedGroup?.let { ApplicationSettings.setGroup(it) }
        refreshUi(refreshTextAdditions = false)
    }

    override fun selectPrefix(prefix: String) {
        ApplicationSettings.currentPrefix = prefix
        refreshUi(refreshGroups = false, refreshMembers = false, refreshTextAdditions = true, regenerateText = true)
        view.selectPrefix(ApplicationSettings.currentPrefix)
    }

    override fun selectSeparator(separator: String) {
        ApplicationSettings.currentSeparator = separator
        refreshUi(refreshGroups = false, refreshMembers = false, refreshTextAdditions = true, regenerateText = true)
        view.selectSeparator(ApplicationSettings.currentSeparator)
    }

    override fun selectPostfix(postfix: String) {
        ApplicationSettings.currentPostfix = postfix
        refreshUi(refreshGroups = false, refreshMembers = false, refreshTextAdditions = true, regenerateText = true)
        view.selectPostfix(ApplicationSettings.currentPostfix)
    }

    override fun addPrefix(prefix: String) =
        addListEntry({ ApplicationSettings.prefixes }, { ApplicationSettings.prefixes = it }, prefix)

    override fun addSeparator(separator: String) =
        addListEntry(
            { ApplicationSettings.separators },
            { ApplicationSettings.separators = it },
            separator
        )

    override fun addPostfix(postfix: String) =
        addListEntry(
            { ApplicationSettings.postfixes },
            { ApplicationSettings.postfixes = it },
            postfix
        )

    override fun removePrefix(prefix: String) {
        removeListEntry(
            { ApplicationSettings.prefixes },
            { ApplicationSettings.prefixes = it },
            prefix
        )
        if (ApplicationSettings.prefixes.isEmpty()) {
            ApplicationSettings.prefixes = listOf(ApplicationSettings.VAL_DEFAULT_PREFIX)
        }
        if (ApplicationSettings.currentPrefix == prefix) {
            selectPrefix(ApplicationSettings.prefixes.first())
        }
    }

    override fun removeSeparator(separator: String) {
        removeListEntry(
            { ApplicationSettings.separators },
            { ApplicationSettings.separators = it },
            separator
        )
        if (ApplicationSettings.separators.isEmpty()) {
            ApplicationSettings.separators = listOf(ApplicationSettings.VAL_DEFAULT_SEPARATOR)
        }
        if (ApplicationSettings.currentSeparator == separator) {
            selectSeparator(ApplicationSettings.separators.first())
        }
    }

    override fun removePostfix(postfix: String) {
        removeListEntry(
            { ApplicationSettings.postfixes },
            { ApplicationSettings.postfixes = it },
            postfix
        )
        if (ApplicationSettings.postfixes.isEmpty()) {
            ApplicationSettings.postfixes = listOf(ApplicationSettings.VAL_DEFAULT_POSTFIX)
        }
        if (ApplicationSettings.currentPostfix == postfix) {
            selectPostfix(ApplicationSettings.postfixes.first())
        }
    }

    private fun <T> addListEntry(getList: () -> List<T>, setList: (List<T>) -> Unit, itemToAdd: T) {
        changeList(getList, setList) {
            if (!it.contains(itemToAdd)) {
                it.add(itemToAdd)
            }
        }
        refreshUi(refreshGroups = false, refreshMembers = false, refreshTextAdditions = true, regenerateText = false)
    }

    private fun <T> removeListEntry(getList: () -> List<T>, setList: (List<T>) -> Unit, itemToDelete: T) {
        changeList(getList, setList) { it.remove(itemToDelete) }
        refreshUi(refreshGroups = false, refreshMembers = false, refreshTextAdditions = true, regenerateText = false)
    }

    private inline fun <T> changeList(
        getList: () -> List<T>,
        setList: (List<T>) -> Unit,
        changeList: (MutableList<T>) -> Unit
    ) {
        val list = getList().toMutableList()
        changeList(list)
        setList(list)
    }

    override fun generateRandomOrder() = view.showGeneratedText(createRandomText())

    private fun refreshUi(
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
            view.selectPrefix(ApplicationSettings.currentPrefix)
            view.showSeparators(ApplicationSettings.separators)
            view.selectSeparator(ApplicationSettings.currentSeparator)
            view.showPostfixes(ApplicationSettings.postfixes)
            view.selectPostfix(ApplicationSettings.currentPostfix)
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

    private fun String.toValidName() = replace(REGEX_WHITESPACES, " ").trim()

    companion object {
        private val REGEX_WHITESPACES = Regex("\\s+")
    }
}
