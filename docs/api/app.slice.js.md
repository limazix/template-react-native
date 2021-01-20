## Members

<dl>
<dt><a href="#APP_STATE">APP_STATE</a></dt>
<dd><p>It has the possible app states</p>
</dd>
<dt><a href="#appSlice">appSlice</a></dt>
<dd><p>It defines the redux store data and behaviors for the app</p>
</dd>
<dt><a href="#changeAppState">changeAppState</a></dt>
<dd><p>Reducer used to handle the app loading state change</p>
</dd>
</dl>

<a name="APP_STATE"></a>

## APP\_STATE
It has the possible app states

**Kind**: global variable  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| READY | <code>string</code> | it represents the state when the app is READ to interact with the user |
| NOT_READY | <code>string</code> | it represents the state when the app is NOT READY to interact with the user |

<a name="appSlice"></a>

## appSlice
It defines the redux store data and behaviors for the app

**Kind**: global variable  
<a name="changeAppState"></a>

## changeAppState
Reducer used to handle the app loading state change

**Kind**: global variable  

| Param | Type |
| --- | --- |
| state | <code>object</code> | 
| state.appState | <code>object</code> | 
| action | <code>object</code> | 
| action.payload | <code>object</code> | 
| action.payload.appState | [<code>APP\_STATE</code>](#APP_STATE) | 

