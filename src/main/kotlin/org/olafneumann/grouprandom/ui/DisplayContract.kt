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
        fun setPrefixes(prefixes: List<String>)
        fun setSeparators(separators: List<String>)
        fun setPostfixes(postfixes: List<String>)
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
        var currentPrefix: String
        var currentSeparator: String
        var currentPostfix: String
    }
}

