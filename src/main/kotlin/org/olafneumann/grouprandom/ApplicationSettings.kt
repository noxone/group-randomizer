package org.olafneumann.grouprandom

import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.olafneumann.grouprandom.browser.AbstractApplicationSettings
import org.olafneumann.grouprandom.model.Group

internal object ApplicationSettings : AbstractApplicationSettings() {
    private const val KEY_LAST_VERSION = "user.lastVersion"
    private const val KEY_CURRENT_GROUP_NAME = "current.group.name"
    private const val KEY_CURRENT_PREFIX = "current.prefix"
    private const val KEY_CURRENT_SEPARATOR = "current.separator"
    private const val KEY_CURRENT_POSTFIX = "current.postfix"
    private const val KEY_LIST_PREFIXES = "list.prefixes"
    private const val KEY_LIST_SEPARATORS = "list.separators"
    private const val KEY_LIST_POSTFIXES = "list.postfixes"

    private const val VAL_VERSION = 1
    private const val VAL_DEFAULT_GROUP_NAME = ""
    internal const val VAL_DEFAULT_PREFIX = ""
    internal const val VAL_DEFAULT_SEPARATOR = ", "
    internal const val VAL_DEFAULT_POSTFIX = ""
    private const val VAL_DEFAULT_LIST_PREFIXES = "[\"\",\"Today's order: \"]"
    private const val VAL_DEFAULT_LIST_SEPARATOR = "[\", \",\" : \"]"
    private const val VAL_DEFAULT_LIST_POSTFIXES = "[\"\",\".\"]"

    // ----------------------------------
    // actual function to access settings

    private inline fun <reified T> decodeJson(string: String): T =
        Json.decodeFromString<T>(string)

    private inline fun <reified T> encodeJson(`object`: T): String =
        Json.encodeToString(`object`)

    fun storeUserLastInfo() = set(
        KEY_LAST_VERSION,
        VAL_VERSION
    )

    private var mutableGroups: MutableList<Group>
        get() = get("groups")?.let { decodeJson(it) } ?: mutableListOf()
        set(value) {
            set("groups", encodeJson(value))
        }

    fun getGroups(): List<Group> = mutableGroups

    fun setGroup(group: Group) {
        val newGroups = mutableGroups.filter { it.name != group.name }.toMutableList()
        newGroups.add(group)
        mutableGroups = newGroups
    }

    fun getGroup(name: String): Group? = getGroups().find { it.name == name }

    fun deleteGroup(name: String) {
        mutableGroups = mutableGroups.filter { name != it.name }.toMutableList()
    }

    var selectedGroupName: String
        get() = get(KEY_CURRENT_GROUP_NAME) ?: VAL_DEFAULT_GROUP_NAME
        set(value) {
            set(KEY_CURRENT_GROUP_NAME, value)
        }

    var currentPrefix: String
        get() = get(KEY_CURRENT_PREFIX) ?: VAL_DEFAULT_PREFIX
        set(value) {
            set(KEY_CURRENT_PREFIX, value)
        }

    var currentSeparator: String
        get() = get(KEY_CURRENT_SEPARATOR) ?: VAL_DEFAULT_SEPARATOR
        set(value) {
            set(KEY_CURRENT_SEPARATOR, value)
        }

    var currentPostfix: String
        get() = get(KEY_CURRENT_POSTFIX) ?: VAL_DEFAULT_POSTFIX
        set(value) {
            set(KEY_CURRENT_POSTFIX, value)
        }

    var prefixes: List<String>
        get() = decodeJson(get(KEY_LIST_PREFIXES) ?: VAL_DEFAULT_LIST_PREFIXES)
        set(value) {
            set(KEY_LIST_PREFIXES, encodeJson(value))
        }

    var separators: List<String>
        get() = decodeJson(get(KEY_LIST_SEPARATORS) ?: VAL_DEFAULT_LIST_SEPARATOR)
        set(value) {
            set(KEY_LIST_SEPARATORS, encodeJson(value))
        }

    var postfixes: List<String>
        get() = decodeJson(get(KEY_LIST_POSTFIXES) ?: VAL_DEFAULT_LIST_POSTFIXES)
        set(value) {
            set(KEY_LIST_POSTFIXES, encodeJson(value))
        }
}