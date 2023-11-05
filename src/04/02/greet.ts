export function greet(name: string) {
  return `Hello! ${name}.`;
}

// 例えばネットワーク越しの関数で、クライアントコードのテストという文脈では、
// ここにリクエストを投げたくないから、テストコードではモックを使う
export function sayGoodBye(name: string) {
  throw new Error("未実装");
}
