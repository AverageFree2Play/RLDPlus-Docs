---
title: API
---

[Entity]: api_entity.md
[Vector3]: https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3

# Checker
An entity that has the ability to check hiding spots.

---
## Summary

### Constructors
<div class="param-box">
  <div class="param-row">
    <div class="param-header"><a href="#new">new</a>(entityModel: <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a>,checkerData: <a href="../api_checker_data">CheckerData</a>)</div>
  </div>
</div>

### Properties
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#ischecking">isChecking</a> : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a> </div>
  </div>
</div>

### Methods
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube-send"><a href="#check">Check</a> (roomNum: <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a>) : ()</div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube-send"><a href="#checkspot">CheckSpot</a> (spot: <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Model</a>) : ()</div>
  </div>
</div>

### Events
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#checked">Checked</a> (spot: <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Model</a>): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
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

:octicons-chevron-right-12: inherited from [Entity]

---
## API Reference
### Constructor
#### new
{static}

Constructs a checker with an <code>EntityModel</code> and a valid <code>CheckerData</code> setting.
```lua
Entity.new(entityModel: Model,checkerData: CheckerData)
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entityModel : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a>
    </div>
    <div class="param-desc">
      The model that the entity will use. It must contain at least one <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/BasePart">BasePart</a>.
    </div>
  </div>

  <div class="param-row">
    <div class="param-header">
      checkerData : <a href="../api_checker_data.md">CheckerData</a>
    </div>
    <div class="param-desc">
      The CheckerData setting the entity will use.
    </div>
  </div>
</div>
---

### Properties
#### :material-cube-outline:{.property} isChecking
{read-only}

Determines whether the checker is currently checking hiding spots in a room or not.
```lua
Entity.isChecking : boolean
```

---

### Methods
#### :material-cube-send:{.function} Check
{unstable}

Force the checker to check hiding spots from the specified `roomNum`.
```lua
Entity:Check() : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      roomNum : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a>
    </div>
    <div class="param-desc">The room number to make the checker check hiding spots.</div>
  </div>
</div>


!!! danger
    This method is unstable and should not be used in new work.

---

#### :material-cube-send:{.function} CheckSpot

Force the specified hiding spot to be checked. Usually, this will force the player whose hiding inside out of the spot.
```lua
Entity:CheckSpot(spot: Model) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      spot: <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Model</a>
    </div>
    <div class="param-desc">The hiding spot to check.</div>
  </div>
</div>

---

### Events
#### :material-lightning-bolt:{.event} Checked

Fires when an entity checks a hiding spot.
```lua
Entity.Checked (spot: Model): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      spot: <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Model</a>
    </div>
    <div class="param-desc">The hiding spot that the entity was checking.</div>
  </div>
</div>

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
      entity : <a href="#">Checker</a>
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
      checker : <a href="#">Checker</a>
    </div>
    <div class="param-desc">The checker that is about to check spots.</div>
  </div>
</div>

Use this to perform actions before the checker starts it's intended hiding spot logic.