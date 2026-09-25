---
title: Home
---

# Introduction

## About

This is a complete documentation for creating entities in RLD+ with the help of the Entity module/class made by Avery.

The module is still work in progress and there will be more features to come.

---

## Constructing

Creating an entity is as follows:
```lua
local Entity = require(path_to_module.Entity)

local EntityModel = path_to_model
local EntityData = {
    Speed = 25;
    SpawnLocation = 0;
    Direction = "Forward";
}

local myEntity = Entity.new(EntityModel,EntityData)
```

This will construct an entity with an existing model that has a speed of 25 studs/second, spawns at the first room and goes forward to the last room.

!!! note
    When creating an entity using the `.new` constructor. The entity will not do anything because the entity isn't active.

To make an entity to start it's behaviour, do:

```lua
myEntity:Start()
```
This will make the entity to start it's actions based on your `EntityData`.
If you want your entity to do custom actions or write your own code for your entity. Look at the [coding](#coding) section below.

---

## Coding

Normally, you would just write your own code for your entity to do specific actions. But when using the Entity class it becomes limited.
To combat this, you can use the events that are created alongside your entity.

To make an entity do a certain thing when it reaches a room, do:

```lua
myEntity.OnRoomReached:Connect(function(roomNum: number)
    print("I",myEntity.Name,"has reached room number:",roomNum)
end)
```

To find out more about events, check the [API Reference](./api_reference/overview.md#Events) for events.

---