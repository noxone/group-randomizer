package org.olafneumann.grouprandom.model

import kotlinx.serialization.Serializable

@Serializable
data class Group(
        var name: String,
        val members: MutableList<Member> = mutableListOf()
)

