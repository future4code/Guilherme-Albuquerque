import { setPosts } from "./index";
test("Testa se a action setPost funciona", () => {
  const textoDeTeste = "setPost action";
  const action = setPosts(textoDeTeste);
  expect(action.type).toEqual("SET_POSTS");
});