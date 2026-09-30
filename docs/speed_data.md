---
title: API
---

[EntityData]: ../api_entity_data.md
[MaxSpeed]: #maxspeed
[MinSpeed]: #minspeed

# SpeedData
An alternative dictionary containing the entity's speed data. Allows for more speed customization

## Properties
#### :material-cube-outline:{.property} Speed
The speed of the entity in studs per second.
```lua
SpeedData.Speed : number
```
---
#### :material-cube-outline:{.property} Acceleration
How fast the entity will accelerate.
```lua
SpeedData.Acceleration : number
```
The entity will have it's base speed incremented by `Acceleration` every second.

If acceleration is a negative value, the entity will decelerate instead.

---
#### :material-cube-outline:{.property} MinSpeed
The minimum speed the entity can decelerate.
```lua
SpeedData.MinSpeed : number
```
---
#### :material-cube-outline:{.property} MaxSpeed
The maximum speed the entity can accelerate.
```lua
SpeedData.MaxSpeed : number
```
---
#### :material-cube-outline:{.property} PingPong
Determines whether the entity's speed will go back and forth between [MinSpeed] and [MaxSpeed] or stand still.
```lua
SpeedData.PingPong : boolean
```
When set to true, the entity's speed (if acceleration is not 0) will accelerate to [MaxSpeed] and then decelerates to [MinSpeed]. This process will repeat until the entity is inactive.