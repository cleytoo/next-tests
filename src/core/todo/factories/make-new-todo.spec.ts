// import { describe, it } from "vitest";
import { makeNewTodo } from "./make-new-todo";

describe("MakeNewTodo (unit)", () => {
  describe("create", () => {
    it("should be return a valid todo", () => {
      //AAA -> Arrange, Act, Assert

      // Arrange -> Criar as coisas que preciso
      const expectedTodo = {
        // id: 'any-id',
        id: expect.any(String),
        description: "novo todo",
        // createdAt: new Date().toISOString()
        createdAt: expect.any(String),
      };

      //Act
      const newTodo = makeNewTodo("novo todo");

      // Assert
      // toBe ===
      // toEqual | toStrictEqual
      expect(newTodo.description).toBe(expectedTodo.description);
      expect(newTodo).toStrictEqual(expectedTodo);
    });
  });
});
