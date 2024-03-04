package com.roadtrip.bridge.miniAppModule

import android.content.Intent
import android.os.Bundle
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.roadtrip.mini_app.MiniAppActivity


class MiniAppModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val _reactContextsMap: MutableMap<String, ReactContext> = mutableMapOf()

    override fun getName(): String {
        return "MiniAppModule"
    }

    @ReactMethod
    fun openApp(
        bundleName: String?,
        appPath: String?,
        initProps: ReadableMap?,
        devLoad: Boolean,
    ) {
        bundleName ?: return
        val intent = Intent(reactContext, MiniAppActivity::class.java)
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        val bundle = Bundle()
        bundle.putString("bundleName", bundleName)
        bundle.putString("appPath", appPath)
        bundle.putBoolean("devLoad", devLoad)
        bundle.putBundle("initProps", Arguments.toBundle(initProps))
        intent.putExtras(bundle)
        reactContext.startActivity(intent)
        _reactContextsMap[bundleName] = reactContext
    }

    @ReactMethod
    fun closeApp(bundleName: String?) {
        MiniAppActivity.close()
        _reactContextsMap.remove(bundleName)
    }

    @ReactMethod
    fun sendMessage(bundleName: String, msg: ReadableMap?, callback: Callback) {
        val reactContext = _reactContextsMap[bundleName] ?: run {
            val result = Arguments.createMap()
            result.putString("msg", "Cannot find this bundle name $bundleName")
            callback.invoke(result)
            return
        }
        val result = Arguments.createMap()
        val map = Arguments.createMap()
        map.merge(msg!!)
        pushEvent(reactContext, MiniAppModuleEventName.EventName, map)
        result.putString("msg", "Send message ok!")
    }

    @ReactMethod
    fun getBundleNames(promise: Promise) {
        val bundleNames = _reactContextsMap.values
        val arrays = Arguments.fromArray(bundleNames)
        promise.resolve(arrays)
    }

    private fun pushEvent(reactContext: ReactContext, eventName: String, params: WritableMap?) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }
}