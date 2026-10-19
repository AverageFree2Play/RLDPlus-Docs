---
title: API
---

[Entity]: api_entity.md
[Vector3]: https://create.roblox.com/docs/en-us/reference/engine/datatypes/Vector3

# Summon
An entity that has the ability to summon other entities.

---
## Summary

### Constructors
<div class="param-box">
  <div class="param-row">
    <div class="param-header"><a href="#new">new</a>(entityModel: <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a>,summonerData: <a href="../api_summoner_data">SummonerData</a>)</div>
  </div>
</div>

### Properties
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-cube"> <a href="#isspawning">isSpawning</a> : <a href="https://create.roblox.com/docs/en-us/luau/booleans">boolean</a> </div>
  </div>
</div>

### Events
<div class="param-box">
  <div class="param-row">
    <div class="param-header icon-lightning"><a href="#summoned">Summoned</a> (entity: <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a>): <a href="https://create.roblox.com/docs/en-us/reference/engine/datatypes/RBXScriptSignal">Signal</a></div>
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

:octicons-chevron-right-12: inherited from [Entity]

---
## API Reference
### Constructor
#### new
{static}

Constructs a summoner with an <code>EntityModel</code> and a valid <code>SummonerData</code> setting.
```lua
Entity.new(entityModel: Model,summonerData: SummonerData)
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
      summonerData : <a href="../api_summoner_data/">SummonerData</a>
    </div>
    <div class="param-desc">
      The SummonerData setting the entity will use.
    </div>
  </div>
</div>
---

### Properties
#### :material-cube-outline:{.property} isSpawning
{read-only}

Determines whether the summoner is actively summoning entites or not.
```lua
Summoner.isSpawning : boolean
```
---
### Events
#### :material-lightning-bolt:{.event} Summoned

Fires when the summoner spawns in an entity.
```lua
Summoner.Summoned (entity: Model): Signal
```
**Parameters**
<div class="param-box">
  <div class="param-row">
    <div class="param-header">
      entity : <a href="https://create.roblox.com/docs/en-us/reference/engine/classes/Model">Model</a>
    </div>
    <div class="param-desc">The entity that was spawned in.</div>
  </div>
</div>

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