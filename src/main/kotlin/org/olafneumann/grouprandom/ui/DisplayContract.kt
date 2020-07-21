package org.olafneumann.grouprandom.ui

import org.olafneumann.grouprandom.Group
import org.olafneumann.grouprandom.Member

interface DisplayContract {
    interface View {
        var newGroupName: String
        var newMemberName: String
        fun showGroups(groups: List<Group>)
        fun showMembers(members: List<Member>)
        fun selectGroup(group: Group?)
        fun focusNewGroupEditor()
        fun focusNewMemberEditor()
        fun setGeneratedText(text: String)
        val prefix: String
        val separator: String
        val postfix: String
        fun selectPrefix(prefix: String)
        fun selectSeparator(separator: String)
        fun selectPostfix(postfix: String)
    }

    interface Controller {
        fun createGroup(name: String): Group?
        fun removeGroup(group: Group)
        var group: Group?
        fun addMemberToGroup(name: String)
        fun removeMember(member: Member)
        fun toggleMemberActivation(member: Member)
        var prefixes: List<String>
        var separators: List<String>
        var postfixes: List<String>
    }
}

