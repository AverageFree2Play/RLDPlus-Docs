---
title: Features
---

# Features

## Spawning
```lua
EntityData = {
    SpawnLocation = 0;
    SpawnOffset = Vector3.new(0,25,0);
}
```
This will make the entity spawn at the starting room (a.k.a Room 0) and offsets it's spawn location 25 studs on the Y axis.

???+ tip
    To make the entity spawn at the last room, set the `SpawnLocation` to `game.ReplicatedStorage.SharedVariables._NUMBER.Value.Value`
    
    !!! warning
        We currently don't have a better implementation for spawning entities at the current room. This may be subject to change in the future or not.
---
## Movement

```lua
EntityData = {
    Speed = 50;
    Direction = "Forward";
    Rebounds = 1;
}
```
This will make the entity move forward (from the starting room to the last room) at 50 studs per second and rebounds once.
---
## Interacting with Players

### Blacklisting hiding spots
```lua
EntityData = {
    ProhibitedSpots = {}
}
```
The `ProhibitedSpots` setting will make it so that any players that are hiding in a spot that has been added to the `ProhibitedSpots` array are considered not hiding and the entity will attempt to damage/chase the player depending on the entity's type.

To add a hiding spot to be excluded from valid hiding spots, do:
```lua
EntityData = {
    ProhibitedSpots = {"Table","your_hiding_spot_id"} -- Add more excluded hiding spots here
}
```
!!! info
    List of hiding spots ids: `"Table","Locker","BlueLocker"`

---

### Damaging

```lua
EntityData = {
    DamagePerRate = 20;
	DamageDelay = 0.5; -- in seconds
	HitboxRadius = 14;
	Raycasting = true;
}
```
This will make the entity damage players by taking 20 points of their health every 0.5 seconds and has a radius of 14 studs.

The `Raycasting` setting will make it so that entities can only damage players if the entity is in line of sight of the player. However, if the player is hiding, the entity will not damage them unless they're hiding in one of the `ProhibitedSpots`

---

### Jumpscaring

```lua
EntityData = {
    Jumpscare = "entity_name"
}
```
This will jumpscare the player with the specified `Jumpscare` setting. By default, the jumpscare will trigger when the player dies.

---

### Screen Shake

```lua
EntityData = {
    Screenshake = {
		['Range'] = 10,
		['Strength'] = 0,
		['Roughness'] = 15,
		['FadeIn'] = 0.25,
		['FadeOut'] = .65,
		['V3_PosInfluence'] = Vector3.zero,
		['V3_RotInfluence'] = Vector3.new(1,1,2)
	}
}
```

Entities use [CameraShaker](https://devforum.roblox.com/t/camerashaker-another-lightweight-camera-shaking-module/3602088) module for visualizing camera shake. Check out [CameraShaker's devforum post](https://devforum.roblox.com/t/camerashaker-another-lightweight-camera-shaking-module/3602088) to learn more about how to use it.

---

## Customization
Entities are designed to be fully customizable. Aside from basic settings, you can code your own entity to do whatever you want it to do.

### Events
Entities have events that you can listen for and respond to. They fires in response to specific actions or changes.

For example, an entity has rebounded:
```lua
Entity.OnRebound:Connect(function(rebounds: number, direction: string)
    print("The entity has rebounded",rebounds,"times and is heading",direction)
end)
```
Or, an entity has finished it's sequence and about to be unloaded:
```lua
Entity.OnEnded:Connect(function()
    print("The entity has completed")
end)
```
Or, an entity damages a player:
```lua
Entity.OnHit:Connect(function(player: Player)
    print("The entity dealt damage to",player)
end)
```

## Entity Types

```lua
EntityData = {
    Type = "Generic" -- this is a required setting, put your entity type in here
}
```
Aside from general entities, there are other variety of entity types like Hiding Spot Checkers, Summoners and Chasers.
Each type has their own properties but are mostly inherited by the `Generic` type.

!!! warning
    The `Type` setting is required and must be included in every `EntityData` setting module.

Check the API Reference for more info on different Entity types.