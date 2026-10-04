---
title: API
---

[EntityData]: api_entity_data.md
[Vector3]: https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3

# Entity
The base class for every single entity.

---
## Summary
### Constructors
<div class="param-box">
  <div class="param-row">
    <div class="param-header"><a href="#new">new</a>(entityModel: <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a>,entityData: <a href="../api_entity_data">EntityData</a>)</div>
  </div>
</div>

### Properties
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#isactive">isActive</a> : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#isdestroyed">isDestroyed</a> : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a> </div>
  </div>
  <div class="param-row">
  <div class="param-header icon-cube"> <a href="#type">Type</a> : <a href="../enums/#entity-type">Enum.EntityType</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#model">Model</a> : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#root">Root</a> : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/BasePart">BasePart</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#settings">Settings</a> : <a href="../api_entity_data">EntityData</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#speed">Speed</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a> | <a href="./speed_data.md">SpeedData</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#state">State</a> : <a href="../enums/#entity-state">Enum.EntityState</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#direction">Direction</a> : <a href="../enums/#entity-direction">Enum.EntityDirection</a> </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#currentroom">CurrentRoom</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a> </div>
  </div>
</div>

### Methods
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube-send"><a href="#getposition">GetPosition</a> () : <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3">Vector3</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube-send"><a href="#gettarget">GetTarget</a> () : <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3">Vector3</a>?</div>
  </div>  
  <div class="param-row">
    <div class="param-header icon-cube-send"><a href="#canseetarget">CanSeeTarget</a> (target: <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a>|<a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player">Player</a>) : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a></div>
  </div>
  <div class="param-row">
      <div class="param-header icon-cube-send"><a href="#isplayerhiding">IsPlayerHiding</a> (player: <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player">Player</a>) : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a></div>
  </div>
  <div class="param-row">
      <div class="param-header icon-cube-send"><a href="#changestate">ChangeState</a> (state: <a href="../enums/#entity-state">Enum.EntityState</a>) : ()</div>
  </div>
  <div class="param-row">
      <div class="param-header icon-cube-send"><a href="#moveto">MoveTo</a> (location: <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3">Vector3</a>) : ()</div>
  </div>
  <div class="param-row">
      <div class="param-header icon-cube-send"><a href="#addtojanitor">AddToJanitor</a> (object: T,methodName?: <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a>|<a href="https://create.roblox.com/docs/en-us/luau/strings">string</a>,index?) : T</div>
  </div>
  <div class="param-row">
      <div class="param-header icon-cube-send"><a href="#movetoroom">MoveToRoom</a> (roomNum: <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a>) : ()</div>
  </div>
  <div class="param-row">
      <div class="param-header icon-cube-send"><a href="#destroy">Destroy</a> () : ()</div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube-send"><a href="#setpos">SetPos</a> (pos: <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3">Vector3</a>, lookAt: <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3">Vector3</a>?) : ()</div>
  </div>
  <div class="param-row">
      <div class="param-header icon-cube-send"><a href="#setsetting">SetSetting</a> (setting: <a href="https://create.roblox.com/docs/en-us/luau/strings">string</a>,value: any) : ()</div>
  </div>
  <div class="param-row">
      <div class="param-header icon-cube-send"><a href="#start">Start</a> () : ()</div>
  </div>
</div>

### Events
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#onstart">OnStart</a> (): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#onended">OnEnded</a> (): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#onhit">OnHit</a> (player: <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player">Player</a>): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#onkill">OnKill</a> (player: <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player">Player</a>): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#onroomreached">OnRoomReached</a> (roomNum: <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a>): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#onupdate">OnUpdate</a> (deltaTime: <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a>): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#onrebound">OnRebound</a> (rebounds: <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a>): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#movetofinished">MoveToFinished</a> (reached: <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a>): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#statechanged">StateChanged</a> (state: <a href="https://create.roblox.com/docs/en-us/luau/strings">string</a>): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#entityadded">EntityAdded</a> (entity: <a href="#">Entity</a>) : <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#entityremoved">EntityRemoved</a> (entity: <a href="#">Entity</a>) : <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
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

**Inherited By**

[Chaser](api_chaser.md)

---
## API Reference
### Constructor
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
      entityModel : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a>
    </div>
    <div class="param-desc">
      The model that the entity will use. It must contain at least one <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/BasePart">BasePart</a>.
    </div>
  </div>

  <div class="param-row">
    <div class="param-header">
      entityData : <a href="#">EntityData</a>
    </div>
    <div class="param-desc">
      The EntityData setting the entity will use.
    </div>
  </div>
</div>
---

### Properties
#### :material-cube-outline:{.property} isActive
{read-only}

Determines whether the entity is currently active or not.
```lua
Entity.isActive : boolean
```
This property will be `true` when the [`:Start`](#start) method is called.
---
#### :material-cube-outline:{.property} isDestroyed
{read-only}

Determines whether the entity is destroyed or not.
```lua
Entity.isDestroyed : boolean
```
This property will be `true` when calling [`:Destroy`](#destroy).
---
#### :material-cube-outline:{.property} Type
{read-only}

The specified [`Enum.EntityType`](enums.md/#entity-type) for the entity.
```lua
Entity.Type : string
```
This property is automatically set from the [EntityData].
---
#### :material-cube-outline:{.property} Model
{read-only}

The model that the entity is using.
```lua
Entity.Model : Model
```
This property is automatically set from the [constructor](#constructor).
---
#### :material-cube-outline:{.property} Root
{read-only}

The entity's root part.
```lua
Entity.Root : BasePart
```
This property is automatically set from the entity's Model.
---
#### :material-cube-outline:{.property} Settings
{read-only}

The entity's [EntityData].
```lua
Entity.Settings : EntityData
```
This property is automatically set from the [constructor](#constructor).
---
#### :material-cube-outline:{.property} Speed
{read-only}

The entity's speed data.
```lua
Entity.Speed : number | SpeedData
```
This property can be either a number or a special [`SpeedData`](./speed_data.md) dictionary.
---
#### :material-cube-outline:{.property} State
Determines the entity's current state.
```lua
Entity.State : Enum.EntityState
```
This property can be modified directly or using [`Entity:ChangeState()`](#changestate).
!!! warning
    Changing the entity's state may cause unwanted behavior.
---
#### :material-cube-outline:{.property} Direction
{read-only}

The direction the entity is currently moving.
```lua
Entity.Direction : Enum.EntityDirection
```
---
#### :material-cube-outline:{.property} CurrentRoom
{read-only}

The current room the entity is in.
```lua
Entity.CurrentRoom : number
```
This is a dynamic property. Meaning it will change overtime.
---

### Methods
#### :material-cube-send:{.function} GetPosition
Returns the entity's position in [Vector3]
```lua
Entity:GetPosition() : Vector3
```
**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3">Vector3</a>
    </div>
    <div class="param-desc">
      The entity's position.
    </div>
  </div>
</div>
---

#### :material-cube-send:{.function} GetTarget
Returns the entity's MoveTo target. The MoveTo target can be set using [`Entity:MoveTo()`](#moveto)
```lua
Entity:GetTarget() : Vector3?
```
**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3">Vector3</a>?
    </div>
    <div class="param-desc"> The entity's MoveTo target. </div>
  </div>
</div>
!!! note
    This method can return nil if there is no specified MoveTo target.
---

#### :material-cube-send:{.function} CanSeeTarget
Returns true if the entity can detect a player in their hitbox radius or not.
```lua
Entity:CanSeeTarget(target: Model|Player) : boolean
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      target : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a> | <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player">Player</a>
    </div>
    <div class="param-desc">The target player to check.</div>
  </div>
</div>

**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a>
    </div>
    <div class="param-desc">Describes whether the entity can detect the target player or not.</div>
  </div>
</div>
---

#### :material-cube-send:{.function} IsPlayerHiding
Returns true if the player is hiding in one of the valid hiding spots.
```lua
Entity:IsPlayerHiding(player: Player) : boolean
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      player : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player">Player</a>
    </div>
    <div class="param-desc">The target player to check.</div>
  </div>
</div>

**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a>
    </div>
    <div class="param-desc">Describes whether the player is currently hiding or not.</div>
  </div>
</div>
!!! note
    If the player is hiding in one of the blacklisted spots. The method will return false.
---

#### :material-cube-send:{.function} ChangeState

Force set the entity's current state.
```lua
Entity:ChangeState(state: Enum.EntityState) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      state : <a href="../enums/#entity-state">Enum.EntityState</a>
    </div>
    <div class="param-desc">The state to set to the current state of entity.</div>
  </div>
</div>

!!! danger
    This method can cause some of the entity's behavior to cancel or trigger. DO NOT MESS WITH THIS UNLESS YOU KNOW WHAT YOU'RE DOING.
---
#### :material-cube-send:{.function} MoveTo
Make the entity move to a location.
```lua
Entity:MoveTo(location: Vector3) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      location : <a href="https://create.roblox.com/docs/reference/engine/datatypes/Vector3">Vector3</a>
    </div>
    <div class="param-desc">The location to make the entity move to.</div>
  </div>
</div>

---
#### :material-cube-send:{.function} AddToJanitor
Passes the given object to the entity's janitor to be destroyed/disconnected on entity destruction. If a function is passed, it will be called when the entity is destroyed.
```lua
Entity:AddToJanitor(object: T,methodName?: boolean|string,index?) : T
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      object : <a href="https://create.roblox.com/docs/reference/engine/datatypes/Vector3">Variant</a>
    </div>
    <div class="param-desc">The object you want to clean up.</div>
  </div>
  <div class="param-row">
    <div class="param-header">
      methodName? : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a> | <a href="https://create.roblox.com/docs/en-us/luau/strings">string</a>
    </div>
    <div class="param-desc">The name of the method that will be used to clean up. If not passed, it will first check if the object's type exists in TypeDefaults, and if that doesn't exist, it assumes Destroy.</div>
  </div>
  <div class="param-row">
    <div class="param-header">
      index? : unknown
    </div>
    <div class="param-desc">The index that can be used to clean up the object manually.</div>
  </div>
</div>

**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/luau/booleans">Variant</a>
    </div>
    <div class="param-desc">The object that was passed as the first argument.</div>
  </div>
</div>

---
#### :material-cube-send:{.function} MoveToRoom
{yields}

Make the entity move to a room number.
```lua
Entity:MoveToRoom(roomNum: number) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      roomNum : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a>
    </div>
    <div class="param-desc">The room number to make the entity move to.</div>
  </div>
</div>

---
#### :material-cube-send:{.function} Destroy

Destroys the entity and disconnects all connections.
```lua
Entity:Destroy() : ()
```
---
#### :material-cube-send:{.function} SetPos

Set the entity's model to a position and an optional position for the entity to look at.
```lua
Entity:SetPos(pos: Vector3, lookAt: Vector3?) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      pos : <a href="https://create.roblox.com/docs/reference/engine/datatypes/Vector3">Vector3</a>
    </div>
    <div class="param-desc">The world-space position to pivot the entity's model.</div>
  </div>
  <div class="param-row">
    <div class="param-header">
      lookAt : <a href="https://create.roblox.com/docs/reference/engine/datatypes/Vector3">Vector3</a>
    </div>
    <div class="param-desc">The world-space point the entity should face toward.</div>
  </div>
</div>
Equivalent to [`CFrame.new(pos: Vector3,lookAt: Vector3)`](https://create.roblox.com/docs/en-us/reference/engine/datatypes/CFrame#new-pos-lookAt)

---
#### :material-cube-send:{.function} SetSetting
{recommended}

Set a setting from the `EntityData` the entity is using to a different value. This is useful If you want to change a certain entity's setting during runtime.
```lua
Entity:SetSetting(setting: string,value: any) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      setting : <a href="https://create.roblox.com/docs/en-us/luau/strings">string</a>
    </div>
    <div class="param-desc">The setting name to change.</div>
  </div>
  <div class="param-row">
    <div class="param-header">
      value : <a href="#">Variant</a>
    </div>
    <div class="param-desc">The value to change to.</div>
  </div>
</div>

---
#### :material-cube-send:{.function} Start
{recommended}

Start the entity.
```lua
Entity:Start() : ()
```
!!! note
    If the entity's `EntityData` has no `onInit` function. This method is automatically called.

---
### Events

#### :material-lightning-bolt:{.event} OnStart

Fires when the entity has started via [`:Start()`](#start)
```lua
Entity.OnStart (): Signal
```

---
#### :material-lightning-bolt:{.event} OnEnded

Fires when the entity has completed it's event sequence.
```lua
Entity.OnEnded (): Signal
```
---
#### :material-lightning-bolt:{.event} OnHit

Fires when the entity *successfully* damages a player.
```lua
Entity.OnHit (player: Player): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      player : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player">Player</a>
    </div>
    <div class="param-desc">The player that was damaged.</div>
  </div>
</div>

---
#### :material-lightning-bolt:{.event} OnKill

Fires when the entity *successfully* kills a player.
```lua
Entity.OnKill (player: Player): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      player : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Player">Player</a>
    </div>
    <div class="param-desc">The player that was killed.</div>
  </div>
</div>
---

#### :material-lightning-bolt:{.event} OnRoomReached
Fires when the entity enters a room.
```lua
Entity.OnRoomReached (roomNum: number): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      roomNum : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a>
    </div>
    <div class="param-desc">The room number that the entity entered.</div>
  </div>
</div>
---

#### :material-lightning-bolt:{.event} OnUpdate
Equivalent to [`RunSerivce.PostSimulation`](https://create.roblox.com/docs/en-us/reference/engine/classes/RunService#PostSimulation) but fires after all entity core actions are called.
```lua
Entity.OnUpdate (deltaTime: number): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      deltaTime : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a>
    </div>
    <div class="param-desc">The time (in seconds) that the current frame has stepped the physics simulation, not accounting for physics throttling.</div>
  </div>
</div>
---

#### :material-lightning-bolt:{.event} OnRebound
Fires whenever the entity rebounds (reached the last or starting room).
```lua
Entity.OnRebound (rebounds: number): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      rebounds : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a>
    </div>
    <div class="param-desc">The amount of times the entity rebounded.</div>
  </div>
</div>
---

#### :material-lightning-bolt:{.event} MoveToFinished
Fires whenever the entity has finished it's [`MoveTo`](#moveto) action.
```lua
Entity.MoveToFinished (reached: boolean): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      reached : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a>
    </div>
    <div class="param-desc">Describes whether or not the entity has reached the move to location or got interrupted.</div>
  </div>
</div>
---

#### :material-lightning-bolt:{.event} StateChanged
Fires whenever the entity's state changes.
```lua
Entity.StateChanged (state: Enum.EntityState): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      state : <a href="../enums/#entity-state">Enum.EntityState</a>
    </div>
    <div class="param-desc">The current state of the entity.</div>
  </div>
</div>
---

#### :material-lightning-bolt:{.event} EntityAdded
{static}

Fires when an entity is added via the [constructor](#constructor).
```lua
Entity.EntityAdded (entity: Entity) : Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entity : <a href="#api-reference">Entity</a>
    </div>
    <div class="param-desc">The entity that was added.</div>
  </div>
</div>

---
#### :material-lightning-bolt:{.event} EntityRemoved
{static}

Fires when an entity is removed via the [:Destroy()](#destroy) method.
```lua
Entity.EntityRemoved (entity: Entity) : Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entity : <a href="#api-reference">Entity</a>
    </div>
    <div class="param-desc">The entity that was removed.</div>
  </div>
</div>

---
### Callbacks
#### :material-cube-send:{.function} OnSpawn
Called when the entity is about to spawn in.
```lua
Entity.OnSpawn (
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

Use this to perform starting actions to the entity. Such as playing sounds or do a certain thing...
!!! tip
    You can add [`task.wait`](https://create.roblox.com/docs/en-us/reference/engine/libraries/task#wait) or any other script yielding methods to pause the entity before it starts it's behaviour.

---
#### :material-cube-send:{.function} OnFinished
Called when the entity is about to finish.
```lua
Entity.OnFinished (
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
