package com.roadtrip.mini_app

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactRootView
import com.facebook.react.bridge.CatalystInstanceImpl
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler


class MiniAppActivity : ReactActivity(), DefaultHardwareBackBtnHandler {
    private lateinit var reactRootView: ReactRootView
//    private lateinit var reactInstanceManager: ReactInstanceManager
    private var mMainComponentName: String? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        mInstance = this
//        val bundle = intent.extras!!
//        mMainComponentName = bundle.getString("bundleName", "")
//        val devLoad = bundle.getBoolean("devLoad")
//        val initProps = bundle.getBundle("initProps")
//        val appPath = bundle.getString("appPath", "")
//
//
//        reactRootView = ReactRootView(this)
//        val packages: ArrayList<ReactPackage> = PackageList(application).packages
//        packages.add(ModulePackage())
//        reactInstanceManager = ReactInstanceManager.builder()
//            .setApplication(application)
//            .setJavaScriptExecutorFactory(HermesExecutorFactory())
//            .setCurrentActivity(this)
//            .setBundleAssetName(appPath)
//            .setJSMainModulePath("index")
//            .addPackages(packages)
//            .setUseDeveloperSupport(devLoad)
//            .setInitialLifecycleState(LifecycleState.RESUMED)
//            .build()
//        reactRootView.startReactApplication(reactInstanceManager, mMainComponentName, initProps)
//        setContentView(reactRootView)


        ///
        // Boot business Javascript bundle
        val reactInstanceManager = SingletonReactInstanceManager.getReactInstanceManager(this)?: run {
            finish()
            return
        }
        if (reactInstanceManager.hasStartedCreatingInitialContext()) {
            val reactContext: ReactContext = reactInstanceManager.currentReactContext ?: run {
                finish()
                return
            }
            try {
                val catalyst = reactContext.catalystInstance
                (catalyst as CatalystInstanceImpl).loadScriptFromAssets(
                    reactContext.assets,
                    "assets://business.android.hermes.bundle",
                    true
                )

                reactRootView.startReactApplication(reactInstanceManager, mMainComponentName, null)
                setContentView(reactRootView)
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }

    override fun onPause() {
        super.onPause()
        reactInstanceManager.onHostPause(this)
    }

    override fun onResume() {
        super.onResume()
        reactInstanceManager.onHostResume(this, this)
    }

    override fun onDestroy() {
        super.onDestroy()
        reactInstanceManager.onHostDestroy(this)
        reactRootView.unmountReactApplication()
    }

    override fun onBackPressed() {
        reactInstanceManager.onBackPressed()
        super.onBackPressed()
    }

    override fun getMainComponentName(): String? {
        return mMainComponentName
    }

    companion object {
        private var mInstance: MiniAppActivity? = null
        fun close() {
            mInstance?.finish()
            mInstance = null
        }
    }
}

