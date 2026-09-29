---
title: Enums
---

[EntityData]: ../api_entity_data.md

# Enums
## Entity Type
Used by the entity class to identify what entity type it is.

| Name        | Description                                          |
| ----------- | -----------------------------------------------------|
| `Generic`   | The entity is a generic entity.                      |
| `Chaser`    | The entity is a chasing entity.                      |
| `Checker`   | The entity is a locker checking entity.              |
| `Summoner`  | The entity is an entity that summons other entities. |

---

## Entity Direction
Used by the entity to determine which direction the entity is moving towards.

| Name        | Description                     |
| ----------- | --------------------------------|
| `Forward`   | The entity is moving forwards.  |
| `Backward`  | The entity is moving backwards. |

---

## Entity State
Used by the entity to determine which state the entity is in.

| Name             | Description                                                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Unloaded`       | The entity is unloaded.                                                                                                                                |
| `Loaded`         | The entity has successfully loaded.                                                                                                                    |
| `Idle`           | The entity is idling.                                                                                                                                  |
| `Moving`         | The entity is moving.                                                                                                                                  |
| `Deactivated`    | The entity is is deactivated. Not to be confused with `Entity.isActive`, the entity will enter this state when the entity has ended it's event sequence|
