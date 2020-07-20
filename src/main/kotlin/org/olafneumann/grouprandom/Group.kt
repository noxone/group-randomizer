package org.olafneumann.grouprandom

data class Group(
        var name: String,
        val members: MutableList<Member> = mutableListOf()
)

data class Member(
        var name: String,
        var active: Boolean = true
)