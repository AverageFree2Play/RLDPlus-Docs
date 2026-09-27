---
title: API
---

# API Reference

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