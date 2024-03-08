import { v4 as uuidv4 } from "uuid";

class Entity {
  constructor() {
    this.id = uuidv4();
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
