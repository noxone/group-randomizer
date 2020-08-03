package org.olafneumann.grouprandom

import kotlin.browser.window

fun main() {
    try {
        initGroupRandomizer()
    } catch (exception: Exception) {
        console.error(exception)
        window.alert("Unable to initialize GroupRandomizer: ${exception.message}")
    }
}

private fun initGroupRandomizer() {
    // initialize presentation code
    UiController()

    // store information, that we were already here
    ApplicationSettings.storeUserLastInfo()

}
