---
title: API
---

[Entity]: ../api_EntityData.md

# EntityData
The settings dictionary for the Entity class.

---
## Summary
### Properties
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#type">Type</a> : <a href="../enums/#entity-type">Enum.EntityType</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#spawnlocation">SpawnLocation</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#spawnoffset">SpawnOffset</a> : <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3">Vector3</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#speed">Speed</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a> | <a href="./speed_data.md">SpeedData</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#altpath">AltPath</a> : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#sequence">Sequence</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#direction">Direction</a> : <a href="../enums/#entity-direction">Enum.EntityDirection</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#rebounds">Rebounds</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#CanDestroyObstructions">CanDestroyObstructions</a> : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#prohibitedspots">ProhibitedSpots</a> : {<a href="../enums/#hiding-spots">Enum.HidingSpot</a>}</div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#damageperrate">DamagePerRate</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#damagedelay">DamageDelay</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#hitboxradius">HitboxRadius</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#raycasting">Raycasting</a> : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#jumpscare">Jumpscare</a> : <a href="https://create.roblox.com/docs/en-us/luau/strings">string</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#Screenshake">Screenshake</a> : {[<a href="https://create.roblox.com/docs/en-us/luau/strings">string</a>]: any}</div>
  </div>
</div>

### Callbacks
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube-send"> <a href="#onspawn">OnSpawn</a>(entity: <a href="#">Entity</a>) : () </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube-send"> <a href="#onfinished">OnFinished</a>(entity: <a href="#">Entity</a>) : () </div>
  </div>
</div>

---
## Properties
#### :material-cube-outline:{.property} Type
```lua
EntityData.Type : Enum.EntityType
```
The entity's type. 
---
#### :material-cube-outline:{.property} SpawnLocation
```lua
EntityData.SpawnLocation : string
```

---
#### :material-cube-outline:{.property} SpawnOffset
```lua
EntityData.SpawnOffset : string
```

---
#### :material-cube-outline:{.property} Speed
```lua
EntityData.Speed : string
```

---
#### :material-cube-outline:{.property} AltPath
```lua
EntityData.AltPath : string
```

---
#### :material-cube-outline:{.property} Sequence
```lua
EntityData.Sequence : string
```

---
#### :material-cube-outline:{.property} Direction
```lua
EntityData.Direction : string
```

---
#### :material-cube-outline:{.property} Rebounds
```lua
EntityData.Rebounds : string
```

---
#### :material-cube-outline:{.property} CanDestroyObstructions
```lua
EntityData.CanDestroyObstructions : string
```

---
#### :material-cube-outline:{.property} ProhibitedSpots
```lua
EntityData.ProhibitedSpots : string
```

---
#### :material-cube-outline:{.property} DamagePerRate
```lua
EntityData.DamagePerRate : string
```

---
#### :material-cube-outline:{.property} DamageDelay
```lua
EntityData.DamageDelay : string
```

---
#### :material-cube-outline:{.property} HitboxRadius
```lua
EntityData.HitboxRadius : string
```

---
#### :material-cube-outline:{.property} Raycasting
```lua
EntityData.Raycasting : string
```

---
#### :material-cube-outline:{.property} Jumpscare
```lua
EntityData.Jumpscare : string
```

---
#### :material-cube-outline:{.property} Screenshake
```lua
EntityData.Screenshake : string
```


---
## Callbacks
#### :material-cube-send:{.function} OnSpawn
Called when the entity is about to spawn in.
```lua
EntityData.OnSpawn (
  entity : Entity
) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entity : <a href="#api-reference">Entity</a>
    </div>
    <div class="param-desc">The entity that is about to spawn.</div>
  </div>
</div>

Use this to perform starting actions to the EntityData. Such as playing sounds or do a certain thing...
!!! tip
    You can add [`task.wait`](https://create.roblox.com/docs/en-us/reference/engine/libraries/task#wait) or any other script yielding methods to pause the entity before it starts it's behaviour.

---
#### :material-cube-send:{.function} OnFinished
Called when the entity is about to finish.
```lua
EntityData.OnFinished (
  entity : Entity
) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entity : <a href="#api-reference">Entity</a>
    </div>
    <div class="param-desc">The entity that is about to finish.</div>
  </div>
</div>

Use this to perform actions before the entity despawns.
