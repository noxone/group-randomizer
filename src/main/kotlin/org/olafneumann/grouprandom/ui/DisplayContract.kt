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
    }

    interface Controller {
        fun createGroup(name: String): Group?
        fun removeGroup(group: Group)
        var group: Group?
        fun addMemberToGroup(name: String)
        fun removeMember(member: Member)
        fun toggleMemberActivation(member: Member)
    }
}

