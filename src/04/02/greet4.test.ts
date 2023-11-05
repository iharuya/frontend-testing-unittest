import { greet, sayGoodBye } from "./greet";

// 都合の悪いモジュールの一部を代用品（モック/スタブ）に差し替える
jest.mock("./greet", () => ({
  ...jest.requireActual("./greet"),
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test("挨拶を返す（本来の実装どおり）", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
