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