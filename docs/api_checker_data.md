---
title: API
---

[Entity]: api_entity.md
[EntityData]: api_entity_data.md
[Vector3]: https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3

# Checker Data
The settings dictionary for the Checker class.

---
## Summary
### Properties
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#spotstocheck">SpotsToCheck</a> : <a href="https://create.roblox.com/docs/en-us/luau/strings">string</a> | {<a href="https://create.roblox.com/docs/en-us/luau/strings">string</a>}</div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#checkerdelay">CheckerDelay</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#checkerduration">CheckerDuration</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
</div>

### Callbacks
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube-send"> <a href="#oncheck">OnCheck</a>(entity: <a href="#">Checker</a>, spot: <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Model</a>) : () </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube-send"> <a href="#onstartingcheck">OnStartingCheck</a>(entity: <a href="#">Checker</a>) : () </div>
  </div>
</div>

**Inherited Members**

:octicons-chevron-right-12: inherited from [EntityData]

---
## API Reference
### Properties
#### :material-cube-outline:{.property} SpotsToCheck
The list containg hiding spot IDs for the checker to check.
```lua
EntityData.SpotsToCheck : number
```

[:fontawesome-solid-droplet:](#spotstocheck "Default value") = `{"locker"}`

---
#### :material-cube-outline:{.property} CheckerDelay
The delay between each hiding spot checks.
```lua
EntityData.CheckerDelay : number
```

[:fontawesome-solid-droplet:](#checkerdelay "Default value") = `0`

---
#### :material-cube-outline:{.property} CheckerDuration
Determines how long until the checker reaches the hiding spot.
```lua
EntityData.CheckerDuration : number
```

[:fontawesome-solid-droplet:](#spotstocheck "Default value") = `1`

---

### Callbacks
#### :material-cube-send:{.function} OnCheck
Called when the entity is about to check a hiding spot.
```lua
Checker.OnSpawn (
  entity : Checker, spot: Model
) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entity : <a href="../api_checker/">Checker</a>
    </div>
    <div class="param-desc">The checker that is about to check.</div>
  </div>
  <div class="param-row">
    <div class="param-header">
      spot: <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Model</a>    </div>
    <div class="param-desc">The hiding spot that the checker is about to check.</div>
  </div>
</div>

Use this to perform actions before the entity checks a hiding spot.

---
#### :material-cube-send:{.function} OnStartingCheck
Called when the checker is about to check hiding spots.
```lua
Entity.OnStartingCheck (
  entity : Checker
) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      checker : <a href="../api_checker/">Checker</a>
    </div>
    <div class="param-desc">The checker that is about to check spots.</div>
  </div>
</div>

Use this to perform actions before the checker starts it's intended hiding spot logic.