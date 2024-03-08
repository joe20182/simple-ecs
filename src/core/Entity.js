class Entity {
  static nextId = 0;

  constructor() {
    this.id = Entity.nextId++;
    this.components = new Map();
  }

  addComponent(component) {
    this.components.set(component.constructor, component);
  }

  removeComponent(componentClass) {
    this.components.delete(componentClass);
  }

  getComponent(componentClass) {
    return this.components.get(componentClass);
  }
}

export default Entity;
