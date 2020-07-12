package org.olafneumann

import org.olafneumann.grouprandom.browser.ApplicationSettings
import kotlin.browser.window

fun main() {
    try {
        initRegexGenerator()
    } catch (exception: Exception) {
        console.error(exception)
        window.alert("Unable to initialize GroupRandomizer: ${exception.message}")
    }
}

private fun initRegexGenerator() {
    // initialize presentation code
    // val presenter = UiController()
    // presenter.initialize()

    // store information, that we were already here
    ApplicationSettings.storeUserLastInfo()

}
