package org.olafneumann.grouprandom.model

data class Group(
        var name: String,
        val members: MutableList<Member> = mutableListOf()
)

