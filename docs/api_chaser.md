---
title: API
---

[Entity]: api_entity.md
[Vector3]: https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3

# Chaser
An entity that has the ability to chase down players.

---
## Summary

### Constructors
<div class="param-box">
  <div class="param-row">
    <div class="param-header"><a href="#new">new</a>(entityModel: <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a>,chaserData: <a href="../api_chaser_data">ChaserData</a>)</div>
  </div>
</div>

### Properties
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#isaiming">isAiming</a> : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a> </div>
  </div>
</div>

### Methods
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube-send"><a href="#getnearestplayer">GetNearestPlayer</a> () : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player">Player</a> | <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3">Vector3</a></div>
  </div>
</div>

**Inherited Members**

:octicons-chevron-right-12: inherited from [Entity]

---
## API Reference
### Constructor
#### new
{static}

Constructs a chaser with an <code>EntityModel</code> and a valid <code>ChaserData</code> setting.
```lua
Entity.new(entityModel: Model,chaserData: ChaserData)
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
      chaserData : <a href="#">ChaserData</a>
    </div>
    <div class="param-desc">
      The ChaserData setting the entity will use.
    </div>
  </div>
</div>
---

### Properties
#### :material-cube-outline:{.property} isAiming
{read-only}

Determines whether the chaser is actively chasing a player or not.
```lua
Entity.isAiming : boolean
```

---

### Methods
#### :material-cube-send:{.function} GetNearestPlayer
Returns the closest player to the chaser and the player's position.
```lua
Entity:GetNearestPlayer() : Player? | Vector3?
```
**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player">Player</a>?
    </div>
    <div class="param-desc">The closest player the chaser can detect.</div>
  </div>
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3">Vector3</a>?
    </div>
    <div class="param-desc">The detected player's position.</div>
  </div>
</div>
!!! note
    This method can return nil if players are not in the chaser's radius and are hiding.