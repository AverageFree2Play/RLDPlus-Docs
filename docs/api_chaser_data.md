---
title: API
---

[Entity]: api_entity.md
[EntityData]: api_entity_data.md
[Vector3]: https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3

# Chaser Data
The settings dictionary for the Chaser class.

---
## Summary
### Properties
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#chaserradius">ChaserRadius</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#chaserspeed">ChaserSpeed</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#chaserspeedrevert">ChaserSpeedRevert</a> : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a></div>
  </div>
</div>

**Inherited Members**

:octicons-chevron-right-12: inherited from [EntityData]

---
## API Reference
### Properties
#### :material-cube-outline:{.property} ChaserRadius
The chaser's detection radius. Players who are in this radius will be targetted by the chaser.
```lua
EntityData.ChaserRadius : number
```

[:fontawesome-solid-droplet:](#chaserradius "Default value") = `0`

---
#### :material-cube-outline:{.property} ChaserSpeed
The chaser's chasing speed. If the chaser detects a player, it will move at this speed instead and will not revert back to normal speed unless [`ChaserSpeedRevert`](#chaserspeedrevert) is set to true.
```lua
EntityData.ChaserRadius : number
```

[:fontawesome-solid-droplet:](#chaserspeed "Default value") = `0`

---
#### :material-cube-outline:{.property} ChaserSpeedRevert
Determines whether or not the chaser will revert back to it's normal speed when there are no detected players.
```lua
EntityData.ChaserSpeedRevert : number
```

[:fontawesome-solid-droplet:](#chaserspeedrevert "Default value") = `false`

