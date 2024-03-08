class ECSSystem {
  constructor() {
    this.entities = new Map();
    this.systems = new Set();
  }

  addEntity(entity) {
    this.entities.set(entity.id, entity);
  }

  removeEntity(entity) {
    this.entities.delete(entity.id);
  }

  addSystem(system) {
    this.systems.add(system);
  }

  removeSystem(system) {
    this.systems.delete(system);
  }

  update(deltaTime) {
    for (const system of this.systems) {
      system.update(deltaTime, this.entities);
    }
  }
}

export default ECSSystem;
