package com.roadtrip.mini_app

import android.app.Activity
import com.facebook.react.PackageList
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactPackage
import com.facebook.react.common.LifecycleState
import com.facebook.react.shell.MainReactPackage


object SingletonReactInstanceManager {
    private var reactInstanceManager: ReactInstanceManager? = null

    fun getReactInstanceManager(activity: Activity): ReactInstanceManager? {
        if (reactInstanceManager == null) {
            val packages: ArrayList<ReactPackage> = PackageList(activity.application).packages

            reactInstanceManager = ReactInstanceManager.builder()
                .setApplication(activity.application)
                .setCurrentActivity(activity)
                .setJSBundleFile("assets://common.android.hermes.bundle")
                .addPackages(packages)
                .setUseDeveloperSupport(true)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build()
        }
        return reactInstanceManager
    }
}