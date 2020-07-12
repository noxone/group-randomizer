package org.olafneumann.grouprandom.ui

import org.olafneumann.grouprandom.Group
import org.olafneumann.grouprandom.Member

interface DisplayContract {
    interface View {
        var newGroupName: String
        var newMemberName: String
        fun showGroups(groups: List<Group>)
        fun showMembers(members: List<Member>)
    }

    interface Controller {
        fun createGroup(name: String): Group?
        var group: Group?
        fun addMemberToGroup(name: String)
        fun toggleMemberActivation(member: Member)
    }
}

