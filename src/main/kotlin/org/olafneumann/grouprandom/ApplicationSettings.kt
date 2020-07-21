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
    private fun getMutableGroups(): MutableList<Group> =
        readArrayToMutableList(JSON.parse<dynamic>(get("groups") ?: "[]")) {
            val group = Group(
                it.name as String
            )
            group.members.addAll(getMembers(it))
            group
        }
            .sortedBy { it.name.toLowerCase() }
            .toMutableList()

    private fun setMutableGroups(groups: List<Group>) {
        set("groups", JSON.stringify(groups))
    }

    private fun getMembers(groupJson: dynamic) = if (groupJson.members != undefined) {
        readArrayToMutableList(groupJson.members) { Member(it.name as String, it.active as Boolean) }
    } else {
        mutableListOf<Member>()
    }

    private fun <T> readArrayToMutableList(array: dynamic, handler: (dynamic) -> T): MutableList<T> =
        (0 until (array.length ?: 0)).asSequence()
            .map { array[it] }
            .map { handler(it) }
            .toMutableList()

    fun setGroup(group: Group) {
        val newGroups = getMutableGroups().filter { it.name != group.name }.toMutableList()
        newGroups.add(group)
        setMutableGroups(newGroups)
    }

    fun getGroup(name: String): Group? = getGroups().find { it.name == name }

    fun deleteGroup(name: String) {
        setMutableGroups(getMutableGroups().filter { name != it.name })
    }

    private fun readConfigFromArray(key: String): MutableList<String> = readArrayToMutableList(JSON.parse(get(key) ?: "")) { it.toString() }

    var prefixes: List<String>
        get() = readConfigFromArray("prefixes")
        set(value) { set("prefixes", JSON.stringify(value)) }

    var separators: List<String>
        get() = readConfigFromArray("separators")
        set(value) { set("separators", JSON.stringify(value)) }

    var postfixes: List<String>
        get() = readConfigFromArray("postfixes")
        set(value) { set("postfixes", JSON.stringify(value)) }
}