package org.olafneumann.grouprandom.model

import kotlinx.serialization.Serializable

@Serializable
data class Member(
        var name: String,
        var active: Boolean = true
)