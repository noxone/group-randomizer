package org.olafneumann.grouprandom

import org.olafneumann.grouprandom.browser.ApplicationSettings
import org.olafneumann.grouprandom.ui.UiController
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
    /*val presenter = */UiController()
    // presenter.initialize()

    // store information, that we were already here
    ApplicationSettings.storeUserLastInfo()

}
