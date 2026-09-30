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
    <div class="param-header icon-cube"> <a href="#speed">Speed</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a> | <a href="../speed_data">SpeedData</a></div>
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
{required}

The entity's type that the entity will be using.
```lua
EntityData.Type : Enum.EntityType
```
---
#### :material-cube-outline:{.property} SpawnLocation
The entity's spawn location, which is a room number.
```lua
EntityData.SpawnLocation : number
```

[:fontawesome-solid-droplet:](#spawnlocation "Default value") = `1`

???+ tip
    To make the entity spawn at the last room, set the value to `game.ReplicatedStorage.SharedVariables._NUMBER.Value.Value`
    
    !!! warning
        We currently don't have a better implementation for spawning entities at the current room. This may be subject to change in the future or not.

---
#### :material-cube-outline:{.property} SpawnOffset
Determines how the entity is offset from it's [`SpawnLocation`](#spawnlocation), relative to the global axes.
```lua
EntityData.SpawnOffset : Vector3
```
[:fontawesome-solid-droplet:](#spawnoffset "Default value") = `Vector3.zero`

---
#### :material-cube-outline:{.property} Speed
The entity's movement speed. Which can be set to a number or a [`SpeedData`](speed_data.md) dictionary for more variety.
```lua
EntityData.Speed : number | SpeedData
```
[:fontawesome-solid-droplet:](#speed "Default value") = `0`

---
#### :material-cube-outline:{.property} AltPath
Determines whether or not the entity will follow an alternative path.
```lua
EntityData.AltPath : boolean
```
[:fontawesome-solid-droplet:](#altpath "Default value") = `false`

When this setting is set to true, the entity, *instead of following the main path*, will look for an alternative path to follow for each room it enters. When there are no alternative paths to find, it will follow the main path instead as a failsafe.

---
#### :material-cube-outline:{.property} Sequence
Determines which room should the entity go to.
```lua
EntityData.Sequence : number
```
[:fontawesome-solid-droplet:](#sequence "Default value") = `0`

!!! info
    Setting the value to any number higher than the last room will make the entity go to the last room ***dynamically***.

---
#### :material-cube-outline:{.property} Direction
Determines the entity's move direction.
```lua
EntityData.Direction : Enum.EntityDirection
```
[:fontawesome-solid-droplet:](#direction "Default value") = `"Forward"`

When set to `"Forward"`, the entity will move from the starting room (last room if set to `"Backwards"`) to the room number set in [`Sequence`].

---
#### :material-cube-outline:{.property} Rebounds
How many times will the entity rebound for.
```lua
EntityData.Rebounds : number
```
[:fontawesome-solid-droplet:](#rebounds "Default value") = `0`

---
#### :material-cube-outline:{.property} CanDestroyObstructions
Enables a feature where if the entity reaches the last room (assuming the entity has finished it's moving sequence), the entity will destroy the next room door and force generate a room.
```lua
EntityData.CanDestroyObstructions : boolean
```
[:fontawesome-solid-droplet:](#candestroyobstructions "Default value") = `false`

---
#### :material-cube-outline:{.property} ProhibitedSpots
An array containing blacklisted hiding spots. 
```lua
EntityData.ProhibitedSpots : {Enum.HidingSpots}
```
[:fontawesome-solid-droplet:](#prohibitedspots "Default value") = `{}`

---
#### :material-cube-outline:{.property} DamagePerRate
Determines how much damage to deal to players every [`DamageDelay`](#damagedelay)
```lua
EntityData.DamagePerRate : number
```
[:fontawesome-solid-droplet:](#damageperrate "Default value") = `0`

---
#### :material-cube-outline:{.property} DamageDelay
Determines how much time to wait before damaging.
```lua
EntityData.DamageDelay : number
```
[:fontawesome-solid-droplet:](#damagedelay "Default value") = `nil`

---
#### :material-cube-outline:{.property} HitboxRadius
How big is the entity hitbox.
```lua
EntityData.HitboxRadius : number
```
[:fontawesome-solid-droplet:](#hitboxradius "Default value") = `0`

---
#### :material-cube-outline:{.property} Raycasting
Determines whether or not the entity will check to see if it can see players first before damaging them.
```lua
EntityData.Raycasting : boolean
```
[:fontawesome-solid-droplet:](#raycasting "Default value") = `true`

---
#### :material-cube-outline:{.property} Jumpscare
The jumpscare ID to play when players get hit once.
```lua
EntityData.Jumpscare : string
```
[:fontawesome-solid-droplet:](#jumpscare "Default value") = `""`

When players get jumpscared, they are damaged by [`DamagePerRate`](#damageperrate) for every heartbeat until the jumpscare ends.

---
#### :material-cube-outline:{.property} Screenshake
A dictionary containing CameraShake's properties.
```lua
EntityData.Screenshake : {[string]: Variant}
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
