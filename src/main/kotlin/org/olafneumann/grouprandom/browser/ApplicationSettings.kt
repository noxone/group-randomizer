package org.olafneumann.grouprandom.browser

import org.olafneumann.grouprandom.Group

internal object ApplicationSettings : AbstractApplicationSettings() {
    private const val KEY_LAST_VERSION = "user.lastVersion"
    private const val KEY_GROUPS = "groups"

    private const val VAL_VERSION = 1

    // ----------------------------------
    // actual function to access settings

    fun isNewUser() = get(KEY_LAST_VERSION)?.toIntOrNull() ?: 0 < VAL_VERSION
    fun storeUserLastInfo() = set(KEY_LAST_VERSION, VAL_VERSION)

    private fun toLanguageExpandedProperty(language: String) = "language.$language.expanded"
    fun isLanguageExpanded(language: String) = get(toLanguageExpandedProperty(language))?.toBoolean() ?: false
    fun setLanguageExpanded(language: String, expanded: Boolean) = set(toLanguageExpandedProperty(language), expanded)

    val groups: List<Group> get() = listKeys().filter { it.startsWith("group.") }
            .sortedWith(String.CASE_INSENSITIVE_ORDER)
            .mapNotNull { getAny<Group>(it) }
            .toList()
    private fun getGroupKey(groupName: String) = "group.$groupName"
    fun setGroup(group: Group) = set(getGroupKey(group.name), group)
    fun getGroup(name: String) = getAny<Group>(getGroupKey(name))
}