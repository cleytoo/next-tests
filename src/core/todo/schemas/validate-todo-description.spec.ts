import { validateTodoDescription } from "./validate-todo-description";

describe("ValidadeTodoDescription (unit)", () => {
  it("should fail when the description is shorter than 4 characters", () => {
    const description = "abc";
    const result = validateTodoDescription(description);
    expect(result.errors).toStrictEqual([
      "Description must have more than 3 characters",
    ]);
    expect(result.success).toBeFalsy();
  });

  it("should return success when the description is longer than 3 characters", () => {
    const description = "abcd";
    const result = validateTodoDescription(description);
    expect(result.errors).toStrictEqual([]);
    expect(result.success).toBeTruthy();
  });
});
