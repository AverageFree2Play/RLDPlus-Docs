---
title: API
---

[Entity]: api_entity.md
[EntityData]: api_entity_data.md
[Vector3]: https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3

# Summoner Data
The settings dictionary for the Summoner class.

---
## Summary
### Properties
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#minions">Minions</a> : <a href="https://create.roblox.com/docs/en-us/luau/strings">string</a> | {<a href="https://create.roblox.com/docs/en-us/luau/strings">string</a>}</div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#minioncount">MinionCount</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#minionspawndelay">MinionSpawnDelay</a> : <a href="https://create.roblox.com/docs/en-us/luau/numbers">number</a></div>
  </div>
</div>

### Callbacks
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube-send"> <a href="#onstartingsummon">OnStartingSummon</a>(entity: <a href="#">Summoner</a>) : () </div>
  </div>
  <div class="param-row">
    <div class="param-header icon-cube-send"> <a href="#onsummon">OnSummon</a>(entity: <a href="#">Summoner</a>) : () </div>
  </div>
</div>

**Inherited Members**

:octicons-chevron-right-12: inherited from [EntityData]

---
## API Reference
### Properties
#### :material-cube-outline:{.property} Minions
{required}

The list containg entity names for the summoner to spawn.
```lua
SummonerData.Minions : number
```

!!!info
    The summoner's method for picking entities is the [Round-Robin](https://roundrobinrandomizer.com/) method.

!!!warning
    Entity names are *CASE-SENSITIVE*. Invalid entity names are considered to be `nil`.

---
#### :material-cube-outline:{.property} MinionCount
How many entities to spawn in.
```lua
SummonerData.MinionCount : number
```

[:fontawesome-solid-droplet:](#minioncount "Default value") = `1`

---
#### :material-cube-outline:{.property} MinionSpawnDelay
Determines how long until the summoner spawns in another entity.
```lua
SummonerData.MinionSpawnDelay : number
```

[:fontawesome-solid-droplet:](#minionspawndelay "Default value") = `0`

---

### Callbacks
#### :material-cube-send:{.function} OnStartingSummon
Called when the summoner is about to start it's summoning logic.
```lua
Summoner.OnStartingSummon (
  entity : Summoner
) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entity : <a href="#">Summoner</a>
    </div>
    <div class="param-desc">The summoner that is about to spawn.</div>
  </div>
</div>

Use this to perform actions before the summoner starts summoning entities.

---
#### :material-cube-send:{.function} OnSummon
Called when the summoner is about to spawn a entity.
```lua
Summoner.OnSummon (
  entity : Summoner
) : ()
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entity : <a href="#">Summoner</a>
    </div>
    <div class="param-desc">The summoner that is about to spawn entities.</div>
  </div>
  <div class="param-row">
    <div class="param-header">
      minion : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a>
    </div>
    <div class="param-desc">The spawned entity.</div>
  </div>
</div>

Use this to perform actions before the summoner spawns in an entity.