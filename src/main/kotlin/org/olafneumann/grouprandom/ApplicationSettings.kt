package org.olafneumann.grouprandom

import org.olafneumann.grouprandom.browser.AbstractApplicationSettings

internal object ApplicationSettings : AbstractApplicationSettings() {
    private const val KEY_LAST_VERSION = "user.lastVersion"
    private const val KEY_GROUPS = "groups"

    private const val VAL_VERSION = 1

    // ----------------------------------
    // actual function to access settings

    fun isNewUser() = get(KEY_LAST_VERSION)?.toIntOrNull() ?: 0 < VAL_VERSION
    fun storeUserLastInfo() = set(
        KEY_LAST_VERSION,
        VAL_VERSION
    )

    fun getGroups(): List<Group> = getMutableGroups()
    private fun getMutableGroups(): MutableList<Group> {
        var groupsJson = JSON.parse<dynamic>(get("groups") ?: "[]")
        val groupCount: Int = groupsJson.length
        return (0 until groupCount).asSequence().map { groupsJson[it] }
            .map {
                val group = Group(
                    it.name as String
                )
                group.members.addAll(getMembers(it))
                group
            }.sortedBy { it.name.toLowerCase() }.toMutableList()
    }

    private fun setMutableGroups(groups: List<Group>) {
        set("groups", JSON.stringify(groups))
    }

    private fun getMembers(groupJson: dynamic) = if (groupJson.members != undefined) {
        (0 until (groupJson.members.length ?: 0)).asSequence().map { groupJson.members[it] }
            .map { Member(it.name as String, it.active as Boolean) }.toMutableList()
    } else {
        mutableListOf<Member>()
    }

    fun setGroup(group: Group) {
        val newGroups = getMutableGroups().filter { it.name != group.name }.toMutableList()
        newGroups.add(group)
        setMutableGroups(newGroups)
    }

    fun getGroup(name: String): Group? = getGroups().find { it.name == name }
}