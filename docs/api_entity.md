---
title: API
---

[EntityData]: ../api_entity_data.md
[Vector3]: https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3

# API Reference

## Constructor

#### new

{static}

Constructs an entity with an <code>EntityModel</code> and a valid <code>EntityData</code> setting.
```lua
Entity.new(entityModel: Model,entityData: EntityData)
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entityModel : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model" class="param-type">Model</a>
    </div>
    <div class="param-desc">
      The model that the entity will use. It must contain at least one <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/BasePart" class="param-type">BasePart</a>.
    </div>
  </div>

  <div class="param-row">
    <div class="param-header">
      entityData : <a href="#" class="param-type">EntityData</a>
    </div>
    <div class="param-desc">
      The EntityData setting the entity will use.
    </div>
  </div>
</div>
---

## Properties
#### Type
{read-only}

The specified type for the entity.
```lua
Entity.Type : string
```
This property is automatically set from the [EntityData].
!!! info
    There are 4 valid entity types: "Generic", "Checker", "Chaser", "Summoner"
---
#### Model
{read-only}

The model that the entity is using.
```lua
Entity.Model : Model
```
This property is automatically set from the [constructor](#constructor).
---
#### Root
{read-only}

The entity's root part.
```lua
Entity.Root : BasePart
```
This property is automatically set from the entity's Model.
---
#### Settings
{read-only}

The entity's [EntityData].
```lua
Entity.Settings : EntityData
```
This property is automatically set from the [constructor](#constructor).
---
#### State
Determines the entity's current state.
```lua
Entity.State : string
```
This property can be modified directly or using `Entity:ChangeState()`.
!!! warning
    Changing the entity's state may cause unwanted behavior.
---
#### Direction
{read-only}

The direction the entity is currently moving.
```lua
Entity.Direction : string
```
!!! info
    There are 2 valid directions: "Forward" and "Backward"
---
#### CurrentRoom
{read-only}

The current room the entity is in.
```lua
Entity.CurrentRoom : number
```
This is a dynamic property. Meaning it will change overtime.
---
## Methods
#### GetPosition
Returns the entity's position in [Vector3]
```lua
Entity:GetPosition() : Vector3
```
**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3" class="param-type">Vector3</a>
    </div>
    <div class="param-desc">
      The entity's position.
    </div>
  </div>
</div>
---

#### GetTarget
Returns the entity's MoveTo target. The MoveTo target can be set using [`Entity:MoveTo()`](#moveto)
```lua
Entity:GetTarget() : Vector3?
```
**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3" class="param-type">Vector3</a>?
    </div>
    <div class="param-desc"> The entity's MoveTo target. </div>
  </div>
</div>
!!! note
    This method can return nil if there is no specified MoveTo target.
---

#### CanSeeTarget
Returns true if the entity can detect a player in their hitbox radius or not.
```lua
Entity:CanSeeTarget(target: Model|Player) : boolean
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      target : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model" class="param-type">Model</a> | <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player" class="param-type">Player</a>
    </div>
    <div class="param-desc">The target player to check.</div>
  </div>
</div>

**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/luau/booleans" class="param-type">boolean</a>
    </div>
    <div class="param-desc">Describes whether the entity can detect the target player or not.</div>
  </div>
</div>
---

#### IsPlayerHiding
Returns true if the player is hiding in one of the valid hiding spots.
```lua
Entity:IsPlayerHiding(player: Player) : boolean
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      player : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player" class="param-type">Player</a>
    </div>
    <div class="param-desc">The target player to check.</div>
  </div>
</div>

**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/luau/booleans" class="param-type">boolean</a>
    </div>
    <div class="param-desc">Describes whether the player is currently hiding or not.</div>
  </div>
</div>
!!! note
    If the player is hiding in one of the blacklisted spots. The method will return false.
---

#### ChangeState

Force set the entity's current state.
```lua
Entity:ChangeState(state: string) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      state : <a href="https://create.roblox.com/docs/en-us/luau/strings" class="param-type">string</a>
    </div>
    <div class="param-desc">The state to set to the current state of entity.</div>
  </div>
</div>

!!! danger
    This method can cause some of the entity's behavior to cancel or trigger. DO NOT MESS WITH THIS UNLESS YOU KNOW WHAT YOU'RE DOING.
---
#### MoveTo
Make the entity move to a location.
```lua
Entity:MoveTo(location: Vector3) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      location : <a href="https://create.roblox.com/docs/reference/engine/datatypes/Vector3" class="param-type">Vector3</a>
    </div>
    <div class="param-desc">The location to make the entity move to.</div>
  </div>
</div>

---
#### MoveToRoom
{yields}

Make the entity move to a room number.
```lua
Entity:MoveToRoom(roomNum: number) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      roomNum : <a href="https://create.roblox.com/docs/en-us/luau/numbers" class="param-type">number</a>
    </div>
    <div class="param-desc">The room number to make the entity move to.</div>
  </div>
</div>

---
#### Destroy

Destroys the entity and disconnects all connections.
```lua
Entity:Destroy() : ()
```
---
#### SetPos

Set the entity's model to a position and an optional position for the entity to look at.
```lua
Entity:SetPos(pos: Vector3, lookAt: Vector3?) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      pos : <a href="https://create.roblox.com/docs/reference/engine/datatypes/Vector3" class="param-type">Vector3</a>
    </div>
    <div class="param-desc">The world-space position to pivot the entity's model.</div>
  </div>
  <div class="param-row">
    <div class="param-header">
      lookAt : <a href="https://create.roblox.com/docs/reference/engine/datatypes/Vector3" class="param-type">Vector3</a>
    </div>
    <div class="param-desc">The world-space point the entity should face toward.</div>
  </div>
</div>
Equivalent to [`CFrame.new(pos: Vector3,lookAt: Vector3)`](https://create.roblox.com/docs/en-us/reference/engine/datatypes/CFrame#new-pos-lookAt)

---
#### SetSetting
{recommended}

Set a setting from the `EntityData` the entity is using to a different value. This is useful If you want to change a certain entity's setting during runtime.
```lua
Entity:SetSetting(setting: string,value: any) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      setting : <a href="https://create.roblox.com/docs/en-us/luau/strings" class="param-type">string</a>
    </div>
    <div class="param-desc">The setting name to change.</div>
  </div>
  <div class="param-row">
    <div class="param-header">
      value : <a href="#" class="param-type">Variant</a>
    </div>
    <div class="param-desc">The value to change to.</div>
  </div>
</div>

---
#### Start
{recommended}

Start the entity.
```lua
Entity:Start() : ()
```
!!! note
    If the entity's `EntityData` has no `onInit` function. This method is automatically called.

---
## Events

#### OnStart
{deprecated}

Fires when the entity has started via [`:Start()`](#start)
```lua
Entity.OnStart (): Signal
```
!!! quote
    I don't know why I added this. Since you can already code your own entity behaviour without needing this event.
    **Avery 28/9/2026**
---
#### OnEnded

Fires when the entity has completed it's event sequence.
```lua
Entity.OnEnded (): Signal
```
---
#### OnHit

Fires when the entity *successfully* damages a player.
```lua
Entity.OnHit (player: Player): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      player : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player" class="param-type">Player</a>
    </div>
    <div class="param-desc">The player that was damaged.</div>
  </div>
</div>

---
#### OnKill

Fires when the entity *successfully* kills a player.
```lua
Entity.OnKill (player: Player): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      player : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player" class="param-type">Player</a>
    </div>
    <div class="param-desc">The player that was killed.</div>
  </div>
</div>
---

#### OnRoomReached
Fires when the entity enters a room.
```lua
Entity.OnRoomReached (roomNum: number): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      roomNum : <a href="https://create.roblox.com/docs/en-us/luau/numbers" class="param-type">number</a>
    </div>
    <div class="param-desc">The room number that the entity entered.</div>
  </div>
</div>
---

#### OnUpdate
Equivalent to [`RunSerivce.PostSimulation`](https://create.roblox.com/docs/en-us/reference/engine/classes/RunService#PostSimulation) but fires after all entity core actions are called.
```lua
Entity.OnUpdate (deltaTime: number): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      deltaTime : <a href="https://create.roblox.com/docs/en-us/luau/numbers" class="param-type">number</a>
    </div>
    <div class="param-desc">The time (in seconds) that the current frame has stepped the physics simulation, not accounting for physics throttling.</div>
  </div>
</div>
---

#### OnRebound
Fires whenever the entity rebounds (reached the last or starting room).
```lua
Entity.OnRebound (rebounds: number): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      rebounds : <a href="https://create.roblox.com/docs/en-us/luau/numbers" class="param-type">number</a>
    </div>
    <div class="param-desc">The amount of times the entity rebounded.</div>
  </div>
</div>
---

#### MoveToFinished
Fires whenever the entity has finished it's [`MoveTo`](#moveto) action.
```lua
Entity.MoveToFinished (reached: boolean): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      reached : <a href="https://create.roblox.com/docs/en-us/luau/booleans" class="param-type">boolean</a>
    </div>
    <div class="param-desc">Describes whether or not the entity has reached the move to location or got interrupted.</div>
  </div>
</div>
---

#### StateChanged
Fires whenever the entity's state changes.
```lua
Entity.StateChanged (state: string): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      state : <a href="https://create.roblox.com/docs/en-us/luau/strings" class="param-type">string</a>
    </div>
    <div class="param-desc">The current state of the entity.</div>
  </div>
</div>
---

#### EntityAdded
{static}

Fires when an entity is added via the [constructor](#constructor).
```lua
Entity.EntityAdded (entity: Entity) : Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entity : <a href="#api-reference" class="param-type">Entity</a>
    </div>
    <div class="param-desc">The entity that was added.</div>
  </div>
</div>

---
#### EntityRemoved
{static}

Fires when an entity is removed via the [:Destroy()](#destroy) method.
```lua
Entity.EntityAdded (entity: Entity) : Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entity : <a href="#api-reference" class="param-type">Entity</a>
    </div>
    <div class="param-desc">The entity that was removed.</div>
  </div>
</div>