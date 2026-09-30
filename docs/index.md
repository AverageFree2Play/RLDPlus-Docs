---
title: Home
---

# Introduction

## About

This is a complete documentation for creating entities in RLD+ with the help of the Entity module/class made by Avery.

The module is still work in progress and there will be more features to come.

---

## Constructing

Creating an entity is as simple as follows:

```lua title="EntityData.lua" linenums="1"
-- Paste this code inside a ModuleScript and put it inside your entity model.
local EntityModel = script.Parent
local EntityData = {
    Type = "Generic"; -- (1)

    Speed = 25; -- (2)
    SpawnLocation = 0; -- (3)

    Direction = "Forward"; -- (4)
}

return EntityData
```

1. :material-format-list-bulleted-type: This will set the entity type to a generic entity.
2. :fontawesome-solid-person-walking-arrow-right: This will make the entity move at the speed of 25 studs per second.
3. :fontawesome-solid-person-arrow-down-to-line: This will make the entity spawn at the starting room (room 0)
4. :material-forward: This will make the entity move forward (from the starting room to the last room)

The framework will automatically construct an entity with an existing model that has a speed of 25 studs/second, spawns at the first room and goes forward to the last room.

---

## Customization

To add your own functionality to the entity, you can add a callback function directly inside your settings table to make the entity run code.

```lua title="EntityData.lua" linenums="1"
local EntityData = {
    ...
    OnSpawn = function(Entity) -- (1)
        print("The entity has spawned!")
        -- your code goes here lulz
    end,
    OnFinished = function(Entity) -- (2)
        Print("The entity has finished!")
        -- code goes here. braah
    end,
}

return EntityData
```

1. This will bind a function to the :material-cube-send: `OnSpawn` callback which will be called when the entity is about to spawn.
2. This will bind a function to the :material-cube-send: `OnFinished` callback which will be called when the entity is about to finish it's sequence.

The [`Entity`](./api_entity.md) parameter is the entity class itself. Which contain important properties, methods and events like the entity's current [`State`](./api_entity.md/#state), core methods like [`Entity:CanSeeTarget()`](./api_entity.md/#canseetarget)

