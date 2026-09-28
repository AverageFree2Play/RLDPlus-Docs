---
title: API
---

[EntityData]: ../api_entity_data.md
[Vector3]: https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3

# API Reference

## Static
### Events
#### EntityAdded
Fires when an entity is added via the [constructor](#constructor).
```lua
Entity.EntityAdded (entity: Entity) : Signal
```
---
#### EntityRemoved
Fires when an entity is removed via the [:Remove()](#constructor) method.
```lua
Entity.EntityAdded (entity: Entity) : Signal
```
## Constructor

#### new
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
      <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model" class="param-type">Vector3</a>
    </div>
    <div class="param-desc">
      The entity's position.
    </div>
  </div>
</div>
---

#### GetTarget
Returns the entity's MoveTo target.
```lua
Entity:GetTarget() : Vector3?
```
**Returns**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model" class="param-type">Vector3</a>?
    </div>
    <div class="param-desc"> The entity's MoveTo target. </div>
  </div>
</div>
!!! note
    This method can return nil if there is no specified MoveTo target.
---