package org.olafneumann.grouprandom

import org.olafneumann.grouprandom.model.Group
import org.olafneumann.grouprandom.model.Member

interface DisplayContract {
    interface View {
        fun showGroups(groups: List<Group>)
        fun showMembers(members: List<Member>)
        fun showPrefixes(prefixes: List<String>)
        fun showSeparators(separators: List<String>)
        fun showPostfixes(postfixes: List<String>)
        fun selectGroup(group: Group?)
        fun selectPrefix(prefix: String?)
        fun selectSeparator(separator: String?)
        fun selectPostfix(postfix: String?)
        fun focusNewGroupEditor()
        fun focusNewMemberEditor()
        fun focusNewPrefix()
        fun focusNewSeparator()
        fun focusNewPostfix()
        fun showGeneratedText(text: String)
        fun selectPreselectedGroup(): Boolean
    }

    interface Controller {
        fun addGroup(name: String): Group?
        fun removeGroup(group: Group)
        fun selectGroup(group: Group?)
        fun tryToSelectGroupByName(name: String)
        fun addGroupMember(name: String): String?
        fun removeGroupMember(member: Member)
        fun toggleGroupMemberActive(member: Member)
        fun setAllGroupMembers(active: Boolean)
        fun addPrefix(prefix: String)
        fun addSeparator(separator: String)
        fun addPostfix(postfix: String)
        fun selectPrefix(prefix: String)
        fun selectSeparator(separator: String)
        fun selectPostfix(postfix: String)
        fun removePrefix(prefix: String)
        fun removeSeparator(separator: String)
        fun removePostfix(postfix: String)
        fun generateRandomOrder()
    }
}

