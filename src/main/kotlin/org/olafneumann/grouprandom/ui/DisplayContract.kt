package org.olafneumann.grouprandom.ui

import org.olafneumann.grouprandom.Group
import org.olafneumann.grouprandom.Member

interface DisplayContract {
    interface View {
        var newGroupName: String
        var newMemberName: String
        fun showGroups(groups: List<Group>)
        fun showMembers(members: List<Member>)
        fun showPrefixes(prefixes: List<String>)
        fun showSeparators(separators: List<String>)
        fun showPostfixes(postfixes: List<String>)
        fun selectGroup(group: Group?)
        fun selectPrefix(prefix: String)
        fun selectSeparator(separator: String)
        fun selectPostfix(postfix: String)
        fun focusNewGroupEditor()
        fun focusNewMemberEditor()
        fun showGeneratedText(text: String)
    }

    interface Controller {
        fun addGroup(name: String): Group?
        fun removeGroup(group: Group)
        fun selectGroup(group: Group?)
        fun addGroupMember(name: String)
        fun removeGroupMember(member: Member)
        fun toggleGroupMemberActive(member: Member)
        fun selectPrefix(prefix: String)
        fun selectSeparator(separator: String)
        fun selectPostfix(postfix: String)
        fun generateRandomOrder()
    }
}

