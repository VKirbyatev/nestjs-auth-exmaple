// Package maps user entity to payload automatically

// Fields must be initialized like this style
// Or by using empty constructor

// In other case I cant get fields metadata from class
// Or we can use @Decorator on each field

// Ts moment

export class Payload {
  id: number = null;

  role: number = null;

  dataOne: string = null;

  dataTwo: string = null;

  notExistingData: string = null;
}

// You can check tokens metadata by following link
// https://jwt.io/
